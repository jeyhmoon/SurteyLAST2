from fastapi import FastAPI, APIRouter, HTTPException, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Surtey Prague Pilot API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ==================== MODELS ====================

class Package(BaseModel):
    id: str
    name: str
    name_tr: str
    price: float
    currency: str = "EUR"
    turnaround_hours: int
    features: List[str]

PACKAGES = {
    "quick_check": Package(
        id="quick_check",
        name="Quick Check",
        name_tr="Hızlı Kontrol",
        price=9.0,
        turnaround_hours=3,
        features=["10-15 photos", "Exterior + building", "GPS proof", "Brief summary"]
    ),
    "live_walkthrough": Package(
        id="live_walkthrough",
        name="Live Walkthrough",
        name_tr="Canlı Tur",
        price=19.0,
        turnaround_hours=5,
        features=["25-40 photos", "5-10 min video", "Full interior", "Condition report"]
    ),
    "deep_verify": Package(
        id="deep_verify",
        name="Deep Verify",
        name_tr="Derin Doğrulama",
        price=39.0,
        turnaround_hours=24,
        features=["50+ photos", "15-20 min video", "Live call option", "Premium report"]
    )
}

class OrderStatus:
    NEW = "new"
    QUOTED = "quoted"
    PAID = "paid"
    AGENT_ASSIGNED = "agent_assigned"
    IN_PROGRESS = "in_progress"
    QC_REVIEW = "qc_review"
    DELIVERED = "delivered"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

class OrderCreate(BaseModel):
    customer_email: EmailStr
    customer_name: Optional[str] = None
    location: str
    district: str
    verification_type: str
    package_id: str
    notes: Optional[str] = None
    rush: bool = False

class Order(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: f"SUR-{datetime.now().strftime('%Y%m%d')}-{str(uuid.uuid4())[:8].upper()}")
    customer_email: str
    customer_name: Optional[str] = None
    location: str
    district: str
    verification_type: str
    package_id: str
    package_name: str
    price: float
    currency: str = "EUR"
    notes: Optional[str] = None
    rush: bool = False
    status: str = OrderStatus.NEW
    agent_id: Optional[str] = None
    agent_name: Optional[str] = None
    payment_status: str = "pending"
    payment_method: Optional[str] = None
    payment_id: Optional[str] = None
    report_url: Optional[str] = None
    media_url: Optional[str] = None
    scheduled_time: Optional[str] = None
    completed_time: Optional[str] = None
    due_time: str = ""
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    timeline: List[dict] = []

class OrderUpdate(BaseModel):
    status: Optional[str] = None
    agent_id: Optional[str] = None
    agent_name: Optional[str] = None
    payment_status: Optional[str] = None
    payment_method: Optional[str] = None
    payment_id: Optional[str] = None
    report_url: Optional[str] = None
    media_url: Optional[str] = None
    scheduled_time: Optional[str] = None
    completed_time: Optional[str] = None
    notes: Optional[str] = None

class Agent(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4())[:8].upper())
    name: str
    email: str
    phone: str
    districts: List[str]
    status: str = "active"  # active, inactive, busy
    rating: float = 5.0
    completed_jobs: int = 0
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class AgentCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    districts: List[str]
    experience: Optional[str] = None

class WebhookPayload(BaseModel):
    event: str
    order_id: str
    data: dict

# ==================== HELPER FUNCTIONS ====================

def calculate_due_time(package_id: str, rush: bool = False) -> str:
    """Calculate due time based on package turnaround"""
    package = PACKAGES.get(package_id)
    if not package:
        return ""
    
    hours = package.turnaround_hours
    if rush:
        hours = max(2, hours // 2)  # Rush cuts time in half, minimum 2 hours
    
    due = datetime.now(timezone.utc) + timedelta(hours=hours)
    return due.isoformat()

def add_timeline_event(order: dict, event: str, details: str = "") -> dict:
    """Add event to order timeline"""
    if "timeline" not in order:
        order["timeline"] = []
    
    order["timeline"].append({
        "event": event,
        "details": details,
        "timestamp": datetime.now(timezone.utc).isoformat()
    })
    return order

async def send_notification_email(to_email: str, subject: str, body: str):
    """Send notification email (placeholder - configure SMTP in production)"""
    logger.info(f"📧 Email notification to {to_email}: {subject}")
    # In production, configure SMTP settings
    # For MVP, we log the notification
    return True

async def notify_agents(order: dict):
    """Notify available agents about new order"""
    logger.info(f"🔔 Notifying agents about order {order['id']}")
    
    # Find agents in the district
    agents = await db.agents.find({
        "status": "active",
        "districts": order["district"]
    }).to_list(100)
    
    for agent in agents:
        await send_notification_email(
            agent["email"],
            f"🔔 New Verification Job - {order['district']}",
            f"New {order['package_name']} job in {order['district']}. Price: €{order['price']}"
        )
    
    return len(agents)

# ==================== ORDER ENDPOINTS ====================

@api_router.get("/")
async def root():
    return {"message": "Surtey Prague Pilot API", "version": "1.0"}

@api_router.get("/packages")
async def get_packages():
    """Get all available packages"""
    return list(PACKAGES.values())

@api_router.post("/orders", response_model=Order)
async def create_order(order_input: OrderCreate, background_tasks: BackgroundTasks):
    """Create a new verification order"""
    
    # Validate package
    package = PACKAGES.get(order_input.package_id)
    if not package:
        raise HTTPException(status_code=400, detail="Invalid package ID")
    
    # Calculate price
    price = package.price
    if order_input.rush:
        price += 5  # Rush fee
    
    # Create order
    order = Order(
        customer_email=order_input.customer_email,
        customer_name=order_input.customer_name,
        location=order_input.location,
        district=order_input.district,
        verification_type=order_input.verification_type,
        package_id=order_input.package_id,
        package_name=package.name,
        price=price,
        notes=order_input.notes,
        rush=order_input.rush,
        due_time=calculate_due_time(order_input.package_id, order_input.rush)
    )
    
    # Convert to dict for MongoDB
    order_dict = order.model_dump()
    order_dict["created_at"] = order_dict["created_at"].isoformat()
    order_dict["updated_at"] = order_dict["updated_at"].isoformat()
    
    # Add initial timeline event
    order_dict = add_timeline_event(order_dict, "order_created", "Order submitted via website")
    
    # Save to MongoDB
    await db.orders.insert_one(order_dict)
    
    # Background tasks
    background_tasks.add_task(
        send_notification_email,
        order.customer_email,
        f"Surtey Order Received - {order.id}",
        f"Thank you! Your {package.name} verification request has been received. We'll respond within 2 hours."
    )
    
    # Notify admin
    background_tasks.add_task(
        send_notification_email,
        "getsurtey@gmail.com",
        f"🆕 New Order - {order.id} - {package.name}",
        f"New order from {order.customer_email}\nLocation: {order.location}\nDistrict: {order.district}\nPackage: {package.name} (€{price})"
    )
    
    logger.info(f"✅ New order created: {order.id}")
    return order

@api_router.get("/orders", response_model=List[Order])
async def get_orders(status: Optional[str] = None, limit: int = 100):
    """Get all orders, optionally filtered by status"""
    query = {}
    if status:
        query["status"] = status
    
    orders = await db.orders.find(query, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return orders

@api_router.get("/orders/{order_id}", response_model=Order)
async def get_order(order_id: str):
    """Get a specific order by ID"""
    order = await db.orders.find_one({"id": order_id}, {"_id": 0})
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@api_router.patch("/orders/{order_id}")
async def update_order(order_id: str, update: OrderUpdate, background_tasks: BackgroundTasks):
    """Update an order"""
    order = await db.orders.find_one({"id": order_id})
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    update_dict = {k: v for k, v in update.model_dump().items() if v is not None}
    update_dict["updated_at"] = datetime.now(timezone.utc).isoformat()
    
    # Add timeline events based on status changes
    old_status = order.get("status")
    new_status = update_dict.get("status")
    
    if new_status and new_status != old_status:
        timeline_events = {
            OrderStatus.QUOTED: "quote_sent",
            OrderStatus.PAID: "payment_received",
            OrderStatus.AGENT_ASSIGNED: "agent_assigned",
            OrderStatus.IN_PROGRESS: "verification_started",
            OrderStatus.QC_REVIEW: "verification_completed",
            OrderStatus.DELIVERED: "report_delivered",
            OrderStatus.COMPLETED: "order_completed"
        }
        
        if new_status in timeline_events:
            order = add_timeline_event(order, timeline_events[new_status], f"Status changed to {new_status}")
            update_dict["timeline"] = order["timeline"]
        
        # Send notifications based on status
        if new_status == OrderStatus.PAID:
            background_tasks.add_task(notify_agents, order)
            background_tasks.add_task(
                send_notification_email,
                order["customer_email"],
                f"✅ Payment Confirmed - {order_id}",
                "Payment received! We're assigning an agent now."
            )
        
        elif new_status == OrderStatus.AGENT_ASSIGNED:
            background_tasks.add_task(
                send_notification_email,
                order["customer_email"],
                f"👤 Agent Assigned - {order_id}",
                f"Agent {update_dict.get('agent_name', 'assigned')} will visit the location."
            )
        
        elif new_status == OrderStatus.DELIVERED:
            background_tasks.add_task(
                send_notification_email,
                order["customer_email"],
                f"📋 Report Ready - {order_id}",
                f"Your verification report is ready! View: {update_dict.get('report_url', 'Check email')}"
            )
    
    await db.orders.update_one({"id": order_id}, {"$set": update_dict})
    
    updated_order = await db.orders.find_one({"id": order_id}, {"_id": 0})
    return updated_order

@api_router.delete("/orders/{order_id}")
async def cancel_order(order_id: str):
    """Cancel an order"""
    result = await db.orders.update_one(
        {"id": order_id},
        {"$set": {"status": OrderStatus.CANCELLED, "updated_at": datetime.now(timezone.utc).isoformat()}}
    )
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Order not found")
    return {"message": "Order cancelled"}

# ==================== AGENT ENDPOINTS ====================

@api_router.post("/agents", response_model=Agent)
async def create_agent(agent_input: AgentCreate, background_tasks: BackgroundTasks):
    """Register a new agent"""
    agent = Agent(
        name=agent_input.name,
        email=agent_input.email,
        phone=agent_input.phone,
        districts=agent_input.districts
    )
    
    agent_dict = agent.model_dump()
    agent_dict["created_at"] = agent_dict["created_at"].isoformat()
    agent_dict["experience"] = agent_input.experience
    
    await db.agents.insert_one(agent_dict)
    
    # Notify admin
    background_tasks.add_task(
        send_notification_email,
        "getsurtey@gmail.com",
        f"🆕 New Agent Application - {agent.name}",
        f"Name: {agent.name}\nEmail: {agent.email}\nPhone: {agent.phone}\nDistricts: {', '.join(agent.districts)}"
    )
    
    logger.info(f"✅ New agent registered: {agent.id}")
    return agent

@api_router.get("/agents", response_model=List[Agent])
async def get_agents(status: Optional[str] = None):
    """Get all agents"""
    query = {}
    if status:
        query["status"] = status
    
    agents = await db.agents.find(query, {"_id": 0}).to_list(100)
    return agents

@api_router.get("/agents/{agent_id}", response_model=Agent)
async def get_agent(agent_id: str):
    """Get a specific agent"""
    agent = await db.agents.find_one({"id": agent_id}, {"_id": 0})
    if not agent:
        raise HTTPException(status_code=404, detail="Agent not found")
    return agent

@api_router.patch("/agents/{agent_id}")
async def update_agent(agent_id: str, status: Optional[str] = None, rating: Optional[float] = None):
    """Update agent status or rating"""
    update_dict = {}
    if status:
        update_dict["status"] = status
    if rating:
        update_dict["rating"] = rating
    
    if not update_dict:
        raise HTTPException(status_code=400, detail="No updates provided")
    
    result = await db.agents.update_one({"id": agent_id}, {"$set": update_dict})
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Agent not found")
    
    return await db.agents.find_one({"id": agent_id}, {"_id": 0})

# ==================== DASHBOARD / STATS ENDPOINTS ====================

@api_router.get("/dashboard/stats")
async def get_dashboard_stats():
    """Get dashboard statistics"""
    total_orders = await db.orders.count_documents({})
    pending_orders = await db.orders.count_documents({"status": {"$in": [OrderStatus.NEW, OrderStatus.QUOTED, OrderStatus.PAID]}})
    in_progress = await db.orders.count_documents({"status": {"$in": [OrderStatus.AGENT_ASSIGNED, OrderStatus.IN_PROGRESS]}})
    completed_orders = await db.orders.count_documents({"status": OrderStatus.COMPLETED})
    total_agents = await db.agents.count_documents({"status": "active"})
    
    # Revenue calculation
    pipeline = [
        {"$match": {"payment_status": "paid"}},
        {"$group": {"_id": None, "total": {"$sum": "$price"}}}
    ]
    revenue_result = await db.orders.aggregate(pipeline).to_list(1)
    total_revenue = revenue_result[0]["total"] if revenue_result else 0
    
    return {
        "total_orders": total_orders,
        "pending_orders": pending_orders,
        "in_progress": in_progress,
        "completed_orders": completed_orders,
        "total_agents": total_agents,
        "total_revenue": total_revenue
    }

@api_router.get("/dashboard/recent")
async def get_recent_orders(limit: int = 10):
    """Get recent orders for dashboard"""
    orders = await db.orders.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    return orders

# ==================== WEBHOOK ENDPOINTS ====================

@api_router.post("/webhooks/stripe")
async def stripe_webhook(payload: dict, background_tasks: BackgroundTasks):
    """Handle Stripe payment webhooks"""
    event_type = payload.get("type")
    
    if event_type == "checkout.session.completed":
        session = payload.get("data", {}).get("object", {})
        order_id = session.get("metadata", {}).get("order_id")
        
        if order_id:
            await db.orders.update_one(
                {"id": order_id},
                {
                    "$set": {
                        "payment_status": "paid",
                        "payment_method": "stripe",
                        "payment_id": session.get("payment_intent"),
                        "status": OrderStatus.PAID,
                        "updated_at": datetime.now(timezone.utc).isoformat()
                    }
                }
            )
            
            order = await db.orders.find_one({"id": order_id})
            if order:
                background_tasks.add_task(notify_agents, order)
            
            logger.info(f"✅ Payment received for order: {order_id}")
    
    return {"received": True}

@api_router.post("/webhooks/zapier")
async def zapier_webhook(payload: dict):
    """Generic webhook endpoint for Zapier/Make.com integrations"""
    logger.info(f"📥 Zapier webhook received: {payload}")
    
    # Process based on action
    action = payload.get("action")
    
    if action == "update_order":
        order_id = payload.get("order_id")
        status = payload.get("status")
        if order_id and status:
            await db.orders.update_one(
                {"id": order_id},
                {"$set": {"status": status, "updated_at": datetime.now(timezone.utc).isoformat()}}
            )
    
    return {"received": True, "action": action}

# ==================== EXPORT ENDPOINTS (for Google Sheets/Airtable) ====================

@api_router.get("/export/orders")
async def export_orders(format: str = "json", status: Optional[str] = None):
    """Export orders for external integrations"""
    query = {}
    if status:
        query["status"] = status
    
    orders = await db.orders.find(query, {"_id": 0}).to_list(1000)
    
    if format == "csv":
        # Return CSV format for Google Sheets
        if not orders:
            return "No orders"
        
        headers = list(orders[0].keys())
        csv_lines = [",".join(headers)]
        for order in orders:
            row = ["\""+str(order.get(h, "")).replace('"', '""')+"\"" for h in headers]
            csv_lines.append(",".join(row))
        
        return "\n".join(csv_lines)
    
    return orders

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
