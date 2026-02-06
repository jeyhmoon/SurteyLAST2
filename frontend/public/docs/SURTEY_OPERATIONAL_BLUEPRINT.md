# SURTEY OPERATIONAL BLUEPRINT
## Complete Early-Stage Marketplace Operations Manual

---

# SECTION 1 — CUSTOMER JOURNEY ARCHITECTURE

## 1.1 Full Customer Lifecycle Map

### Stage 1: Discovery → Landing
**Channels:**
- Organic search ("verify apartment before renting", "check rental scam")
- Social proof posts (Reddit r/scams, Facebook expat groups)
- Targeted ads in relocation/expat communities
- Partnership referrals (relocation agencies, real estate platforms)

**Landing Experience:**
```
Visitor arrives → Hero section creates urgency ("Don't Trust. Verify.")
                → Problem awareness (fraud statistics)
                → Solution clarity (human-powered verification)
                → Social proof (verification count, ratings)
                → Clear CTA (Request Verification)
```

### Stage 2: Trust Signals Architecture
| Trust Element | Placement | Purpose |
|---------------|-----------|----------|
| Live verification counter | Hero | Social proof |
| Agent count | Hero | Network strength |
| Rating score | Hero | Quality assurance |
| GPS/Timestamp badges | Solution section | Technical credibility |
| Pricing transparency | Form section | No hidden costs |
| Sample report preview | Post-form | Deliverable clarity |

### Stage 3: Request Submission Workflow
```
Step 1: Customer fills form
        - Email (required)
        - Location/Listing URL (required)
        - Verification type (dropdown)
        - Additional notes (optional)
        
Step 2: Form submission
        - Mailto trigger to getsurtey@gmail.com
        - Redirect to Thank You page
        - "Agent Being Assigned" status displayed
        
Step 3: Confirmation email (manual send)
        - Acknowledge receipt
        - Provide timeline expectation
        - Request any clarifications
```

### Stage 4: Payment Flow (MVP Manual Version)
```
Option A: Invoice via PayPal/Wise
          - Send invoice link after quote confirmation
          - Wait for payment confirmation
          - Then assign agent

Option B: Stripe Payment Link
          - Generate unique payment link per request
          - Auto-notification on payment
          - Manual agent assignment trigger

Option C: Crypto (for international)
          - USDT/USDC wallet address
          - Manual verification of payment
```

**Payment Script Template:**
```
Subject: Surtey Verification Quote - [Location]

Hi [Name],

Thank you for your verification request!

Details:
- Location: [Address/URL]
- Type: [Property/Vehicle/Item]
- Package: [Quick Check/Standard/Deep Verify]
- Price: $[XX]
- Turnaround: [X hours]

To proceed, please complete payment:
[Payment Link]

Once confirmed, we'll assign a verified local agent immediately.

Questions? Reply directly to this email.

Best,
Surtey Team
```

### Stage 5: Agent Assignment Logic
```
Priority Matrix:
1. Geographic proximity (closest agent to location)
2. Availability (confirmed within 30 min response window)
3. Specialization (property vs. vehicle expertise)
4. Rating score (higher rated agents for premium packages)
5. Current workload (max 3 active jobs per agent)

Assignment Flow:
1. Payment confirmed → Alert sent to top 3 matching agents
2. First agent to accept gets the job
3. If no response in 30 min → Expand to next tier
4. If no agent available → Customer notified, refund offered
```

### Stage 6: Live Verification Experience
```
Customer Touchpoints:
1. "Agent assigned" notification (email + optional WhatsApp)
2. "Agent en route" notification (with ETA)
3. "Verification started" notification (optional live link)
4. "Verification complete" notification
5. Report delivery (email with attachments/links)

Optional Live Features (Premium):
- Live video call during inspection
- Real-time photo sharing
- Direct agent communication channel
```

### Stage 7: Delivery of Proof/Report
```
Delivery Package:
1. PDF Verification Report (structured document)
2. Media folder (photos, videos)
3. GPS/Timestamp proof file
4. Surtey Certificate (if verified legitimate)
5. Summary email with key findings

Delivery Method:
- Google Drive folder link (organized by sections)
- Or: Direct email attachments (for smaller packages)
```

### Stage 8: Follow-up & Retention
```
Day 0: Report delivered
Day 1: "How was your experience?" email
Day 3: Request for review/testimonial
Day 7: "Need another verification?" with 10% return discount
Day 30: Newsletter with fraud prevention tips
```

## 1.2 Friction Points & Solutions

| Friction Point | Impact | Solution |
|----------------|--------|----------|
| Unclear pricing | Abandonment | Show starting prices upfront |
| Payment trust | Hesitation | Offer partial payment option |
| Wait anxiety | Support tickets | Proactive status updates |
| Report quality unknown | Doubt | Show sample report preview |
| International payments | Failed conversions | Multiple payment methods |

## 1.3 Customer Communication Scripts

**Initial Response (within 2 hours):**
```
Subject: Re: Your Surtey Verification Request

Hi [Name],

Thanks for reaching out! I've reviewed your request for [location].

Based on the details, I recommend our [Package Name] ($XX):
- [Feature 1]
- [Feature 2]
- Turnaround: [X hours]

Want me to proceed? Just confirm and I'll send the payment link.

If you have specific concerns about the listing, let me know and I can customize the inspection checklist.

Best,
[Name]
Surtey Team
```

**Post-Payment Confirmation:**
```
Subject: ✓ Payment Received - Agent Assignment in Progress

Hi [Name],

Payment confirmed! Here's what happens next:

1. Agent assignment: Within 1 hour
2. You'll receive agent details and ETA
3. Verification begins: [Expected time]
4. Report delivery: [Expected time]

I'll keep you updated at every step.

Best,
[Name]
```

**Verification Complete:**
```
Subject: ✓ Verification Complete - Your Surtey Report

Hi [Name],

Great news! Your verification is complete.

📋 Report: [Link]
📸 Media: [Link]
🔐 Certificate: [Attached]

Key Findings:
- [Summary point 1]
- [Summary point 2]
- [Summary point 3]

Questions about the report? Just reply.

If this helped you make a decision, we'd love a quick review: [Review Link]

Best,
[Name]
```

## 1.4 Contingency Scenarios

**Scenario 1: Agent No-Show**
```
Protocol:
1. Immediate backup agent assignment
2. Customer notification with apology
3. 20% discount on current order
4. Agent penalized (rating reduction)
```

**Scenario 2: Location Access Denied**
```
Protocol:
1. Agent documents denial (photo/video of attempt)
2. Customer notified immediately
3. Options offered:
   a. Reschedule with customer coordination
   b. Exterior-only verification (partial refund)
   c. Full refund
```

**Scenario 3: Suspicious/Fraudulent Listing**
```
Protocol:
1. Agent documents evidence
2. Verification continues as normal
3. Report clearly flags concerns
4. Customer advised to avoid transaction
5. Optional: Report to local authorities (with customer consent)
```

---

# SECTION 2 — VERIFICATION SERVICE WORKFLOW (OPERATIONAL SOP)

## 2.1 Request Processing Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    REQUEST RECEIVED                          │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 1: Request Triage (15 min max)                         │
│ - Verify email validity                                      │
│ - Check location serviceability                              │
│ - Identify verification category                             │
│ - Flag any special requirements                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 2: Location Verification (30 min max)                  │
│ - Google Maps verification                                   │
│ - Cross-reference listing URL (if provided)                 │
│ - Identify access requirements                               │
│ - Note any red flags                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 3: Quote & Payment                                      │
│ - Select appropriate package                                 │
│ - Generate payment link                                      │
│ - Send quote email                                           │
│ - Wait for payment confirmation                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 4: Agent Dispatch                                       │
│ - Alert matching agents                                      │
│ - Confirm agent acceptance                                   │
│ - Share job details with agent                               │
│ - Notify customer of assignment                              │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 5: Verification Execution                               │
│ - Agent travels to location                                  │
│ - Follows category-specific checklist                        │
│ - Captures required media                                    │
│ - Documents findings                                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 6: Quality Control                                      │
│ - Review submitted media                                     │
│ - Verify GPS/timestamp data                                  │
│ - Check checklist completion                                 │
│ - Request re-capture if needed                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 7: Report Assembly                                      │
│ - Compile report from template                               │
│ - Insert media and findings                                  │
│ - Generate certificate (if applicable)                       │
│ - Final review                                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ STEP 8: Delivery                                             │
│ - Upload to customer folder                                  │
│ - Send delivery email                                        │
│ - Pay agent                                                  │
│ - Log completion                                             │
└─────────────────────────────────────────────────────────────┘
```

## 2.2 Verification Category Checklists

### PROPERTY VERIFICATION CHECKLIST
```
□ EXTERIOR
  □ Building facade photo (full view)
  □ Building entrance photo
  □ Street view photo (both directions)
  □ Building name/number visible
  □ Mailbox/intercom photo
  □ Parking area (if applicable)
  □ Neighborhood context (nearby landmarks)

□ INTERIOR (if access granted)
  □ Entrance/hallway
  □ Living room (multiple angles)
  □ Kitchen (appliances, condition)
  □ Bedroom(s) (each room)
  □ Bathroom(s) (each room)
  □ Windows/natural light
  □ Storage spaces
  □ Balcony/terrace (if applicable)

□ CONDITION ASSESSMENT
  □ Walls (cracks, stains, damage)
  □ Floors (condition, cleanliness)
  □ Ceiling (water damage, mold)
  □ Windows (functioning, sealed)
  □ Doors (functioning, locks)
  □ Electrical outlets (tested)
  □ Water pressure (tested)
  □ Heating/cooling (tested if possible)

□ LISTING COMPARISON
  □ Room count matches listing
  □ Size appears accurate
  □ Amenities present as listed
  □ Furniture matches photos (if furnished)
  □ View matches listing photos

□ RED FLAGS CHECK
  □ Signs of current occupancy
  □ Signs of damage/neglect
  □ Signs of illegal modifications
  □ Signs of pest infestation
  □ Unusual odors
  □ Security concerns
```

### VEHICLE VERIFICATION CHECKLIST
```
□ EXTERIOR
  □ Full vehicle photos (all 4 sides)
  □ Front view (license plate)
  □ Rear view (license plate)
  □ VIN number photo (dashboard + door frame)
  □ Odometer reading photo
  □ Tire condition (all 4 + spare)
  □ Body condition (scratches, dents, rust)
  □ Glass condition (chips, cracks)
  □ Lights functionality test

□ INTERIOR
  □ Dashboard full view
  □ Driver seat condition
  □ All seats condition
  □ Steering wheel condition
  □ Control panel functionality
  □ Air conditioning test
  □ Audio system test
  □ Trunk/cargo area
  □ Unusual odors (smoke, mold)

□ DOCUMENTATION
  □ Registration document
  □ Insurance status (if visible)
  □ Service history (if available)
  □ Owner identification match

□ ENGINE (if hood access)
  □ Engine bay photo
  □ Fluid levels visual
  □ Battery condition
  □ Unusual sounds on start

□ TEST DRIVE (if permitted)
  □ Engine start behavior
  □ Idle smoothness
  □ Brake response
  □ Steering response
  □ Transmission smoothness
  □ Unusual noises
```

### PRODUCT/ITEM VERIFICATION CHECKLIST
```
□ ITEM IDENTIFICATION
  □ Full item photos (all angles)
  □ Serial number/model number
  □ Brand markings/logos
  □ Size measurements
  □ Weight (if scale available)

□ CONDITION ASSESSMENT
  □ Overall condition rating
  □ Visible damage documentation
  □ Functionality test (if applicable)
  □ Accessories/components present
  □ Original packaging (if claimed)

□ AUTHENTICITY INDICATORS
  □ Quality of materials
  □ Build quality
  □ Label/tag inspection
  □ Comparison to authentic reference
  □ Seller documentation review

□ SELLER VERIFICATION
  □ Meeting location type
  □ Seller ID check (optional)
  □ Reason for selling
  □ Purchase history (if available)
```

## 2.3 Media Capture Standards

```
PHOTO REQUIREMENTS:
- Minimum resolution: 1920x1080
- Format: JPEG (high quality)
- Lighting: Natural preferred, flash if needed
- Stability: No motion blur
- GPS: Embedded in EXIF data
- Timestamp: Visible in photo or EXIF

VIDEO REQUIREMENTS:
- Minimum resolution: 1080p
- Format: MP4
- Orientation: Landscape
- Duration: As specified by package
- Audio: Enabled (agent narration)
- Stability: Steady movements
- Coverage: Continuous walkthrough

GPS/TIMESTAMP PROOF:
- Screenshot of GPS coordinates
- Photo of location on maps app
- Video showing live GPS reading
- Timestamp from phone display
```

## 2.4 Escalation Protocols

**Level 1: Agent-Handled**
- Minor access delays
- Weather delays (< 2 hours)
- Minor equipment issues

**Level 2: Operations Manager**
- Access denied situations
- Customer complaints
- Agent no-show
- Quality issues with deliverables

**Level 3: Founder/Emergency**
- Safety incidents
- Legal threats
- Fraud discovered
- PR-sensitive situations

## 2.5 Fraud Suspicion Protocol

```
When agent suspects fraud:

1. DOCUMENT EVERYTHING
   - Photos of all evidence
   - Notes on suspicious elements
   - Conversation records (if any)

2. DO NOT CONFRONT
   - Complete verification professionally
   - Do not accuse seller/landlord
   - Maintain safety

3. FLAG IN REPORT
   - Mark report as "Concerns Identified"
   - List specific red flags
   - Provide evidence

4. CUSTOMER ADVISORY
   - Clear recommendation to proceed with caution
   - Suggest additional due diligence
   - Offer to connect with local authorities (optional)

5. INTERNAL LOG
   - Add to fraud database
   - Pattern recognition for future
   - Consider platform reporting (Airbnb, etc.)
```

---

# SECTION 3 — SURTEY AGENT SYSTEM

## 3.1 Agent Recruitment Model

### Target Agent Profiles:
```
Primary Targets:
1. Gig economy workers (Uber, TaskRabbit, Fiverr)
2. Real estate agents (part-time income)
3. Property managers
4. Photography/videography freelancers
5. Local tour guides
6. University students (reliable, tech-savvy)
7. Retired professionals

Key Characteristics:
- Smartphone with good camera
- Reliable transportation
- Flexible schedule
- Local area knowledge
- Professional demeanor
- Basic English (for international customers)
```

### Recruitment Channels:
```
1. Online job boards (Indeed, local equivalents)
2. Gig economy platforms (cross-posting)
3. University job boards
4. Local Facebook groups
5. Real estate association forums
6. Referral program (existing agents)
7. Instagram/TikTok local influencers
```

## 3.2 Agent Screening Criteria

```
MINIMUM REQUIREMENTS:
□ Age 21+
□ Valid government ID
□ Smartphone (camera quality check)
□ Transportation method
□ Clean background (self-declaration MVP)
□ Availability minimum 10 hrs/week
□ Response to test message within 1 hour

PREFERRED QUALIFICATIONS:
□ Previous gig economy experience
□ Real estate/property experience
□ Photography skills
□ Local area expertise
□ Multiple language capability
□ Vehicle ownership

SCREENING PROCESS (MVP):
1. Application form submission
2. ID verification (photo upload)
3. Phone/video interview (15 min)
4. Test verification task (paid)
5. Performance review
6. Activation or rejection
```

## 3.3 Agent Onboarding Flow

```
DAY 1: Application & Screening
- Agent submits application
- Basic info collection
- ID upload
- Availability confirmation

DAY 2-3: Interview
- 15-minute video call
- Assess communication skills
- Explain Surtey process
- Answer questions
- Decision: proceed or reject

DAY 4-5: Training
- Send training materials
- Video tutorials (checklist usage)
- Sample reports review
- Q&A session

DAY 6-7: Test Task
- Assign paid test verification
- Agent completes task
- Quality review
- Feedback provided

DAY 8: Activation
- Account activated
- Added to agent pool
- First real job eligible
- Welcome kit sent (digital)
```

## 3.4 Agent Training SOP

### Training Module Structure:
```
MODULE 1: Platform Overview (Video - 10 min)
- What is Surtey
- How the marketplace works
- Agent role and responsibilities
- Earning potential

MODULE 2: Verification Process (Video - 20 min)
- Job acceptance workflow
- Pre-verification preparation
- On-site procedures
- Media capture techniques
- Checklist completion
- Submission process

MODULE 3: Quality Standards (Document + Examples)
- Photo requirements
- Video requirements
- GPS/timestamp proof
- Report quality expectations
- Common mistakes to avoid

MODULE 4: Customer Interaction (Video - 10 min)
- Professional communication
- Handling property owners/sellers
- Dealing with difficult situations
- What NOT to do

MODULE 5: Safety & Ethics (Document)
- Personal safety guidelines
- Legal boundaries
- Privacy protection
- Fraud awareness
- Conflict avoidance

MODULE 6: Tools & Technology (Tutorial)
- GPS apps usage
- Timestamp apps
- File upload process
- Communication channels
```

## 3.5 Job Acceptance Workflow

```
1. JOB ALERT RECEIVED
   - WhatsApp/Telegram notification
   - Email backup
   - Contains: Location, Type, Package, Deadline, Payout

2. AGENT REVIEWS (5 min window)
   - Check location feasibility
   - Check schedule availability
   - Check transportation options

3. ACCEPT OR DECLINE
   - Accept: Job assigned, customer notified
   - Decline: Next agent in queue alerted
   - No response in 5 min: Auto-skip to next

4. PRE-VERIFICATION
   - Confirm ETA with operations
   - Receive full job details
   - Download relevant checklist
   - Plan route

5. EXECUTION
   - Mark "En Route" status
   - Mark "On Site" status
   - Complete verification
   - Mark "Complete" status
   - Upload deliverables

6. PAYMENT
   - Quality review (24 hrs max)
   - Approval notification
   - Payment processed (weekly batch or instant)
```

## 3.6 Agent Payment Model

```
BASE PAYOUT STRUCTURE:
┌─────────────────┬─────────────┬──────────────┐
│ Package         │ Customer $  │ Agent Payout │
├─────────────────┼─────────────┼──────────────┤
│ Quick Check     │ $15         │ $8-10        │
│ Standard        │ $35         │ $18-22       │
│ Deep Verify     │ $75         │ $40-50       │
└─────────────────┴─────────────┴──────────────┘

BONUSES:
- 5-star review: +$2
- Rush job (< 2 hrs): +25%
- Difficult access: +$5
- Long distance: +$5-10
- Referral (new agent): $20/activated agent
- Referral (new customer): 10% of first order

PAYMENT SCHEDULE:
- MVP: Weekly batch (every Friday)
- Scale: Instant payout option (for premium agents)

PAYMENT METHODS:
- PayPal
- Wise
- Local bank transfer
- Crypto (USDT)
```

## 3.7 Agent Performance Metrics

```
KEY METRICS:

1. Acceptance Rate
   Target: >80%
   Penalty: <50% = reduced job priority

2. Completion Rate
   Target: >95%
   Penalty: <90% = review required

3. On-Time Rate
   Target: >90%
   Penalty: <80% = warning

4. Quality Score (1-5)
   Target: >4.5
   Penalty: <4.0 = retraining
   Penalty: <3.5 = suspension

5. Customer Rating (1-5)
   Target: >4.5
   Penalty: <4.0 = review

6. Response Time
   Target: <5 min average
   Penalty: >15 min = reduced priority

AGENT TIERS:
- Bronze: New agents (first 5 jobs)
- Silver: 10+ jobs, >4.0 rating
- Gold: 25+ jobs, >4.5 rating, >90% metrics
- Platinum: 50+ jobs, >4.8 rating, >95% metrics

TIER BENEFITS:
- Higher job priority
- Better payout rates (+5-10%)
- Premium job access (Deep Verify)
- Featured agent status
```

## 3.8 Agent On-Site Script

```
ARRIVAL SCRIPT:
"Hi, I'm [Name] from Surtey. I'm here to conduct 
a verification inspection on behalf of a potential 
[renter/buyer]. This is a standard service to help 
people make informed decisions.

I'll take some photos and video of the [property/vehicle/item] 
for documentation purposes. This typically takes about 
[X minutes]. Is that okay?"

IF ASKED WHO HIRED THEM:
"I'm conducting this on behalf of a client who is 
considering [renting/purchasing]. They wanted an 
independent verification before making a decision. 
All information is kept confidential."

IF ACCESS DENIED:
"I understand. No problem at all. I'll document what's 
visible from the exterior and note in my report that 
interior access was not available. Thank you for your time."

IF SUSPICIOUS QUESTIONS:
"I'm simply documenting the current state of the 
[property/item] for verification purposes. I don't 
make any decisions or recommendations - I just 
provide factual documentation."

COMPLETION SCRIPT:
"Thank you for your time. I've completed my 
inspection. The report will be prepared and sent 
to the client. Have a great day."
```

## 3.9 Agent Safety Guidelines

```
BEFORE VERIFICATION:
□ Share job location with emergency contact
□ Check area safety (Google, local news)
□ Verify meeting is in public/safe area
□ Fully charge phone
□ Have emergency numbers saved

DURING VERIFICATION:
□ Trust your instincts
□ Never enter unsafe situations
□ Keep phone accessible
□ Don't carry large amounts of cash
□ Park in safe, lit areas
□ Be aware of exits

RED FLAGS (EXIT IMMEDIATELY):
□ Aggressive or threatening behavior
□ Requests to go to secondary location
□ Intoxicated individuals
□ Requests for personal information
□ Pressure to stay longer
□ Gut feeling of danger

EMERGENCY PROTOCOL:
1. Leave immediately if unsafe
2. Call local emergency services
3. Contact Surtey operations
4. Document incident when safe
5. File report
```

---

# SECTION 4 — MVP OPERATIONS INFRASTRUCTURE

## 4.1 Zero-Code Tech Stack

```
┌─────────────────────────────────────────────────────────────┐
│                    SURTEY MVP STACK                          │
├─────────────────────────────────────────────────────────────┤
│ INTAKE & CRM                                                 │
│ ├── Website: Custom (React) → getsurtey@gmail.com           │
│ ├── Form management: Google Forms (backup)                   │
│ └── CRM: Notion database or Google Sheets                    │
├─────────────────────────────────────────────────────────────┤
│ TASK MANAGEMENT                                              │
│ ├── Job tracking: Trello or Notion                           │
│ ├── Agent assignment: Manual + WhatsApp group                │
│ └── Status updates: Kanban board                             │
├─────────────────────────────────────────────────────────────┤
│ COMMUNICATION                                                │
│ ├── Customer: Email + WhatsApp Business                      │
│ ├── Agents: WhatsApp/Telegram group + individual             │
│ └── Internal: Slack (free tier)                              │
├─────────────────────────────────────────────────────────────┤
│ PAYMENTS                                                     │
│ ├── Customer payments: Stripe Payment Links / PayPal         │
│ ├── Agent payouts: PayPal / Wise batch                       │
│ └── Tracking: Google Sheets                                  │
├─────────────────────────────────────────────────────────────┤
│ FILE MANAGEMENT                                              │
│ ├── Media storage: Google Drive (organized folders)          │
│ ├── Report generation: Google Docs templates                 │
│ └── Delivery: Drive folder links                             │
├─────────────────────────────────────────────────────────────┤
│ AUTOMATION (Optional)                                        │
│ ├── Zapier: Email → Sheet → Notification                     │
│ ├── IFTTT: Payment → Slack alert                             │
│ └── Make: Form → Trello card                                 │
└─────────────────────────────────────────────────────────────┘
```

## 4.2 Notion Database Structure

```
DATABASE 1: VERIFICATION REQUESTS
- Request ID (auto)
- Customer Name
- Customer Email
- Customer Phone
- Location/URL
- Verification Type (select)
- Package (select)
- Price
- Payment Status (select)
- Agent Assigned (relation)
- Status (select): New → Quoted → Paid → Assigned → In Progress → Complete → Delivered
- Created Date
- Due Date
- Completion Date
- Notes

DATABASE 2: AGENTS
- Agent ID (auto)
- Name
- Email
- Phone
- City/Region
- Status (select): Applicant → Training → Active → Suspended → Inactive
- Tier (select): Bronze → Silver → Gold → Platinum
- Jobs Completed (rollup)
- Average Rating (rollup)
- Payment Method
- Payment Details
- Notes

DATABASE 3: PAYMENTS
- Payment ID
- Type (select): Customer Payment / Agent Payout
- Related Request (relation)
- Amount
- Status (select): Pending → Completed → Failed → Refunded
- Method
- Date
- Notes
```

## 4.3 Manual Workflow Procedures

### New Request Handling:
```
1. Email arrives at getsurtey@gmail.com
2. Open Notion "Verification Requests" database
3. Create new entry with customer details
4. Set status: "New"
5. Review request details
6. Determine package recommendation
7. Draft quote email (use template)
8. Generate Stripe payment link
9. Send email with quote + link
10. Set status: "Quoted"
11. Wait for payment
```

### Payment Received:
```
1. Stripe notification received
2. Update Notion status: "Paid"
3. Create payment record in Payments database
4. Identify matching agents (check location)
5. Send job alert to agent WhatsApp group
6. Wait for acceptance
7. Update status: "Assigned"
8. Add agent relation to request
9. Send confirmation email to customer
10. Share job details with agent
```

### Verification Complete:
```
1. Agent uploads media to designated Drive folder
2. Agent sends "Complete" message
3. QC review of deliverables
4. If issues: request re-capture
5. If approved: proceed to report
6. Open report template (Google Doc)
7. Duplicate template for this job
8. Fill in all sections
9. Insert media links/embeds
10. Generate PDF
11. Create customer delivery folder
12. Upload all files
13. Send delivery email with links
14. Update Notion status: "Delivered"
15. Schedule agent payment
16. Send follow-up email (Day 1)
```

## 4.4 Automation Suggestions (Zapier/Make)

```
AUTOMATION 1: New Request Alert
Trigger: New email to getsurtey@gmail.com
Action: Create Notion database entry + Slack notification

AUTOMATION 2: Payment Received
Trigger: Stripe payment successful
Action: Update Notion status + Send customer email + Slack alert

AUTOMATION 3: Agent Job Alert
Trigger: Notion status → "Paid"
Action: Send WhatsApp message to agent group

AUTOMATION 4: Status Updates
Trigger: Notion status change
Action: Send customer email with status update

AUTOMATION 5: Follow-up Sequence
Trigger: Notion status → "Delivered"
Action: Schedule email sequence (Day 1, 3, 7)
```

## 4.5 Scaling Path

```
PHASE 1: MANUAL (0-50 jobs/month)
- Founder handles all operations
- Manual everything
- Focus on quality and learning

PHASE 2: ASSISTED (50-200 jobs/month)
- Hire VA for intake/support
- Automate repetitive tasks (Zapier)
- Standardize all processes
- Build agent self-serve tools

PHASE 3: SYSTEMATIZED (200-500 jobs/month)
- Custom dashboard (no-code: Softr/Bubble)
- Agent mobile app (Glide)
- Automated assignment algorithm
- Customer portal

PHASE 4: PLATFORM (500+ jobs/month)
- Custom-built platform
- Full automation
- API integrations
- Self-serve for all users
```

---

# SECTION 5 — VERIFICATION REPORT FRAMEWORK

## 5.1 Report Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    SURTEY VERIFICATION REPORT                │
│                         [Property/Vehicle/Item]              │
├─────────────────────────────────────────────────────────────┤
│ HEADER                                                       │
│ • Surtey logo                                                │
│ • Report ID                                                  │
│ • Verification date & time                                   │
│ • Location verified                                          │
│ • Agent name & ID                                            │
├─────────────────────────────────────────────────────────────┤
│ EXECUTIVE SUMMARY                                            │
│ • Overall assessment (1-2 sentences)                         │
│ • Key findings (bullet points)                               │
│ • Recommendation                                             │
├─────────────────────────────────────────────────────────────┤
│ VERIFICATION DETAILS                                         │
│ • GPS coordinates + map screenshot                           │
│ • Timestamp proof                                            │
│ • Weather conditions                                         │
│ • Access level achieved                                      │
├─────────────────────────────────────────────────────────────┤
│ INSPECTION FINDINGS                                          │
│ • Category-specific sections                                 │
│ • Photos with captions                                       │
│ • Condition ratings                                          │
│ • Notes and observations                                     │
├─────────────────────────────────────────────────────────────┤
│ LISTING COMPARISON                                           │
│ • Matches (✓)                                                │
│ • Discrepancies (✗)                                          │
│ • Unable to verify (?)                                       │
├─────────────────────────────────────────────────────────────┤
│ RED FLAGS (if any)                                           │
│ • Concerns identified                                        │
│ • Evidence                                                   │
│ • Recommendations                                            │
├─────────────────────────────────────────────────────────────┤
│ MEDIA APPENDIX                                               │
│ • Photo gallery (with labels)                                │
│ • Video link(s)                                              │
├─────────────────────────────────────────────────────────────┤
│ CERTIFICATE                                                  │
│ • Surtey Verification Certificate                            │
│ • Unique certificate ID                                      │
│ • QR code for verification                                   │
├─────────────────────────────────────────────────────────────┤
│ DISCLAIMER                                                   │
│ • Standard legal disclaimer                                  │
│ • Limitation of liability                                    │
│ • Validity period                                            │
└─────────────────────────────────────────────────────────────┘
```

## 5.2 Sample Report Template

```markdown
# SURTEY VERIFICATION REPORT

**Report ID:** SUR-2024-001234
**Date:** January 15, 2024 | 14:32 CET
**Location:** Hlavní 123, Prague 1, Czech Republic
**Agent:** Jan N. (Agent #047)

---

## EXECUTIVE SUMMARY

This 2-bedroom apartment at Hlavní 123 was verified on-site. 
The property **exists as listed** with minor discrepancies noted. 
Overall condition is **good** with normal wear.

### Key Findings:
- ✓ Address and building confirmed
- ✓ Apartment layout matches listing
- ✓ Furniture present as shown
- ⚠ Living room appears smaller than photos suggest
- ⚠ Minor wall damage in bedroom 2

### Recommendation:
**PROCEED WITH CAUTION** - Property is legitimate, but negotiate 
on minor issues noted.

---

## VERIFICATION PROOF

| Element | Verification |
|---------|-------------|
| GPS | 50.0755°N, 14.4378°E |
| Timestamp | 2024-01-15 14:32:17 CET |
| Weather | Clear, 8°C |
| Access | Full interior access granted |

[Map Screenshot]
[GPS App Screenshot]

---

## EXTERIOR INSPECTION

### Building Facade
[Photo 1: Full building view]
- Building matches Google Street View
- Well-maintained exterior
- Secure entrance with intercom

### Building Entrance
[Photo 2: Entrance door]
- Code-locked entry
- Mailboxes visible
- Building name plate confirmed

---

## INTERIOR INSPECTION

### Living Room
[Photo 3-5: Living room from multiple angles]

| Aspect | Rating | Notes |
|--------|--------|-------|
| Size | 3/5 | Appears ~15% smaller than listing photos |
| Condition | 4/5 | Good condition, minor scuffs |
| Furniture | 5/5 | Matches listing exactly |
| Light | 4/5 | Good natural light from windows |

### Kitchen
[Photo 6-8: Kitchen details]

| Aspect | Rating | Notes |
|--------|--------|-------|
| Appliances | 5/5 | All present and functional |
| Cleanliness | 4/5 | Clean with minor wear |
| Storage | 4/5 | Adequate cabinet space |

### Bedroom 1
[Photo 9-10]
- Matches listing
- Queen bed as shown
- Wardrobe present

### Bedroom 2
[Photo 11-12]
- ⚠ **Note:** Wall damage observed (see photo 12)
- Repair needed or discount justified

### Bathroom
[Photo 13-14]
- Clean condition
- Water pressure tested: Good
- No visible mold or damage

---

## LISTING COMPARISON

| Listed Feature | Verified | Notes |
|---------------|----------|-------|
| 2 bedrooms | ✓ | Confirmed |
| 1 bathroom | ✓ | Confirmed |
| 65 sqm | ? | Appears accurate, not measured |
| Furnished | ✓ | All items present |
| Balcony | ✓ | Small balcony present |
| Washing machine | ✓ | In bathroom |
| Dishwasher | ✓ | In kitchen |
| City view | ✗ | Courtyard view, not city |

---

## CONCERNS IDENTIFIED

### Issue 1: Room Size Discrepancy
- **Evidence:** Wide-angle photos in listing make living room appear larger
- **Impact:** Minor - common practice
- **Recommendation:** Visit in person if size is critical

### Issue 2: Bedroom Wall Damage
- **Evidence:** Photo 12 shows paint peeling and crack
- **Impact:** Cosmetic - may indicate moisture issue
- **Recommendation:** Request repair before move-in or rent reduction

### Issue 3: View Description
- **Evidence:** Listing says "city view" but faces courtyard
- **Impact:** Minor misrepresentation
- **Recommendation:** Clarify with landlord

---

## MEDIA APPENDIX

**Photos:** [Google Drive Link]
**Video Walkthrough:** [Google Drive Link] (8:32 duration)

---

## SURTEY VERIFICATION CERTIFICATE

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              SURTEY VERIFICATION CERTIFICATE                │
│                                                             │
│  This certifies that the property at:                       │
│  Hlavní 123, Prague 1, Czech Republic                       │
│                                                             │
│  Was physically verified by a Surtey agent on:              │
│  January 15, 2024 at 14:32 CET                              │
│                                                             │
│  Certificate ID: SUR-CERT-2024-001234                       │
│                                                             │
│  [QR CODE]                                                  │
│                                                             │
│  Verify at: surtey.com/verify/SUR-CERT-2024-001234          │
│                                                             │
└─────────────────────────────────────────────────────────────┘

---

## DISCLAIMER

This report reflects observations made during a single site visit 
on the date indicated. Surtey and its agents:

- Do not guarantee the accuracy of third-party listings
- Do not provide legal, financial, or real estate advice
- Are not responsible for conditions that change after verification
- Cannot access or verify hidden defects, legal status, or ownership
- Recommend professional inspection for high-value transactions

This report is valid for 30 days from the verification date.
For questions: support@surtey.com

---

*Generated by Surtey | Human-Powered Verification*
*© 2024 Surtey. All rights reserved.*
```

## 5.3 Tone & Style Guidelines

```
TONE:
- Professional but accessible
- Factual, not emotional
- Balanced (report issues AND positives)
- Helpful, not alarmist
- Clear recommendations

STYLE:
- Short sentences
- Bullet points for scannability
- Tables for comparisons
- Photos with clear captions
- Bold for key findings
- Icons/symbols for quick reference (✓ ✗ ⚠)

AVOID:
- Subjective language ("beautiful", "terrible")
- Legal conclusions ("fraud", "illegal")
- Personal opinions
- Speculation
- Emotional language
```

---

# SECTION 6 — PRICING & UNIT ECONOMICS MODEL

## 6.1 Tiered Package Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    SURTEY PRICING TIERS                      │
├─────────────────────────────────────────────────────────────┤
│ QUICK CHECK - $15                                            │
│ ├── Turnaround: 1-2 hours                                    │
│ ├── Duration: 5 min on-site                                  │
│ ├── Coverage: Exterior + basic interior (if access)          │
│ ├── Deliverables:                                            │
│ │   • 10-15 photos                                           │
│ │   • GPS proof                                              │
│ │   • Brief summary (no formal report)                       │
│ └── Use case: "Does this place actually exist?"              │
├─────────────────────────────────────────────────────────────┤
│ STANDARD - $35 ⭐ RECOMMENDED                                 │
│ ├── Turnaround: 2-4 hours                                    │
│ ├── Duration: 15-20 min on-site                              │
│ ├── Coverage: Full interior + exterior                       │
│ ├── Deliverables:                                            │
│ │   • 25-40 photos                                           │
│ │   • 5-10 min video walkthrough                             │
│ │   • GPS/timestamp proof                                    │
│ │   • Full structured report                                 │
│ │   • Listing comparison                                     │
│ │   • Surtey certificate                                     │
│ └── Use case: "Full verification before I commit"            │
├─────────────────────────────────────────────────────────────┤
│ DEEP VERIFY - $75                                            │
│ ├── Turnaround: Same day                                     │
│ ├── Duration: 30-45 min on-site                              │
│ ├── Coverage: Comprehensive inspection                       │
│ ├── Deliverables:                                            │
│ │   • 50+ photos                                             │
│ │   • 15-20 min video                                        │
│ │   • Live video call option                                 │
│ │   • Detailed condition report                              │
│ │   • Functionality testing                                  │
│ │   • Neighborhood assessment                                │
│ │   • Premium certificate                                    │
│ └── Use case: "High-value decision, need everything"         │
└─────────────────────────────────────────────────────────────┘

ADD-ONS:
• Rush (< 2 hrs): +$15
• Live video call: +$10
• Repeat visit: $20
• Neighborhood tour: +$15
• Document verification: +$10
```

## 6.2 Unit Economics Breakdown

```
STANDARD PACKAGE ECONOMICS ($35):

 Revenue:                        $35.00 (100%)
 ├── Stripe fees (2.9% + $0.30): -$1.31 (3.7%)
 ├── Agent payout:               -$20.00 (57%)
 ├── Report generation:          -$2.00 (5.7%) [time cost]
 └── Gross margin:               $11.69 (33.4%)

QUICK CHECK ECONOMICS ($15):

 Revenue:                        $15.00 (100%)
 ├── Stripe fees:                -$0.74 (4.9%)
 ├── Agent payout:               -$8.00 (53%)
 ├── Report generation:          -$1.00 (6.7%)
 └── Gross margin:               $5.26 (35%)

DEEP VERIFY ECONOMICS ($75):

 Revenue:                        $75.00 (100%)
 ├── Stripe fees:                -$2.48 (3.3%)
 ├── Agent payout:               -$45.00 (60%)
 ├── Report generation:          -$5.00 (6.7%)
 └── Gross margin:               $22.52 (30%)

BLENDED AVERAGE (40% Quick, 45% Standard, 15% Deep):
 Average order value: $30.50
 Average gross margin: $10.37 (34%)
```

## 6.3 CAC vs LTV Analysis

```
CUSTOMER ACQUISITION COST (CAC):

Channel               Est. CAC    Conversion
─────────────────────────────────────────────
Organic/SEO           $0-5        2-3%
Content marketing     $5-10       1-2%
Paid social           $15-25      0.5-1%
Paid search           $20-40      1-2%
Partner referral      $10-15      3-5%
Word of mouth         $0          5-10%

Blended CAC target: $15-20

CUSTOMER LIFETIME VALUE (LTV):

Scenario             Orders    AOV     LTV      LTV:CAC
────────────────────────────────────────────────────────
One-time user        1.0       $30     $30      1.5-2x
Repeat user (20%)    2.5       $35     $87      4-6x
Power user (5%)      5.0       $40     $200     10-13x

Blended LTV: ~$45-50
Target LTV:CAC ratio: 3:1 minimum

BREAKEVEN ANALYSIS:

Monthly fixed costs (MVP):
├── Founder time:        $0 (sweat equity)
├── Tools/software:      $100
├── Marketing:           $200
└── Total:               $300/month

Breakeven: 300 / 10.37 = ~29 orders/month
Target: 50+ orders/month for sustainability
```

## 6.4 Pricing Psychology

```
STRATEGIES APPLIED:

1. ANCHOR PRICING
   - Show Deep Verify ($75) first in some contexts
   - Makes Standard ($35) feel reasonable

2. DECOY EFFECT
   - Quick Check exists partly to make Standard look valuable
   - $15 → $35 jump seems worth it for "full report"

3. CHARM PRICING
   - $15, $35, $75 (not $14.99)
   - Professional service = round numbers feel premium

4. VALUE FRAMING
   - "Protect your $X,000 decision for just $35"
   - Compare to cost of bad decision, not cost of service

5. URGENCY PRICING
   - Rush fee creates urgency AND revenue
   - "Get it now" buyers pay premium

6. BUNDLE PSYCHOLOGY
   - Standard includes "everything you need"
   - Deep Verify for "peace of mind"
```

## 6.5 Upsell Opportunities

```
PRE-PURCHASE UPSELLS:
• "Add rush delivery" (+$15)
• "Include live video call" (+$10)
• "Add neighborhood assessment" (+$15)

POST-PURCHASE UPSELLS:
• "Need another property verified?" (10% discount)
• "Verify the contract/documents too" (+$25)
• "Schedule a follow-up before move-in" ($20)

CROSS-SELLS:
• Partner services (moving, insurance, etc.)
• Premium reports for investors
• Subscription for serial renters/buyers

FUTURE PRODUCTS:
• Monthly subscription for real estate agents
• API access for platforms
• White-label verification service
```

---

# SECTION 7 — TRUST & LEGAL FOUNDATIONS

## 7.1 Terms of Service Structure

```
SURTEY TERMS OF SERVICE - KEY SECTIONS:

1. SERVICE DESCRIPTION
   - What Surtey does (physical verification)
   - What Surtey does NOT do (legal advice, appraisal, guarantee)
   - Service limitations

2. USER RESPONSIBILITIES
   - Accurate information provided
   - Legal right to request verification
   - Intended use of reports

3. AGENT RELATIONSHIP
   - Independent contractor status
   - No employment relationship
   - Agent conduct standards

4. PAYMENT TERMS
   - Pricing and fees
   - Refund policy
   - Payment methods

5. INTELLECTUAL PROPERTY
   - Report ownership
   - Usage rights
   - Confidentiality

6. LIABILITY LIMITATIONS
   - Service provided "as is"
   - No guarantee of accuracy
   - Maximum liability = service fee paid

7. DISPUTE RESOLUTION
   - Complaint process
   - Mediation first
   - Jurisdiction

8. PRIVACY
   - Data collection
   - Data usage
   - Data sharing
```

## 7.2 Key Disclaimers

```
MAIN DISCLAIMER (appears on all reports):

"This verification report documents observations made during 
a single physical visit on the date indicated. Surtey and its 
agents provide factual documentation only and do not:

• Guarantee the accuracy of any third-party listing or claims
• Provide legal, financial, real estate, or investment advice
• Warrant the condition of any property, vehicle, or item
• Accept liability for decisions made based on this report
• Guarantee access to or verification of all areas/aspects
• Verify ownership, legal status, or title of any property

This report is not a substitute for professional inspection, 
legal review, or personal due diligence. Users should conduct 
their own independent verification for significant decisions.

Surtey's maximum liability is limited to the fee paid for 
this verification service."

FRAUD DISCLAIMER:

"If this report identifies potential fraud indicators, these 
are observations only and not legal conclusions. Surtey does 
not investigate or confirm fraud. Users suspecting fraud 
should contact local law enforcement and seek legal advice."

VALIDITY DISCLAIMER:

"This report reflects conditions observed on [DATE] only. 
Conditions may change after verification. This report is 
valid for 30 days from verification date for reference 
purposes only."
```

## 7.3 Privacy Policy Essentials

```
DATA COLLECTED:
• Customer: Name, email, phone, payment info, request details
• Agent: Name, ID, contact info, location data, payment info
• Verification: Photos, videos, GPS data, timestamps

DATA USAGE:
• Provide verification services
• Communicate with users
• Process payments
• Improve services
• Legal compliance

DATA SHARING:
• Customer receives: Report, media, certificate
• Agent receives: Job details (limited customer info)
• Third parties: Payment processors only
• No selling of data

DATA RETENTION:
• Reports: 2 years
• Media: 1 year (then deleted)
• Customer data: Until account deletion
• Agent data: Until relationship ends + 1 year

USER RIGHTS:
• Access their data
• Request deletion
• Opt-out of marketing
• Data portability
```

## 7.4 Agent Conduct Rules

```
AGENT CODE OF CONDUCT:

1. PROFESSIONALISM
   □ Dress appropriately
   □ Arrive on time
   □ Communicate respectfully
   □ Represent Surtey positively

2. HONESTY
   □ Report findings accurately
   □ Do not fabricate or alter evidence
   □ Disclose any conflicts of interest
   □ Do not accept bribes or incentives

3. PRIVACY
   □ Do not share customer information
   □ Do not share property details publicly
   □ Delete local copies after upload
   □ Do not contact parties outside verification

4. SAFETY
   □ Never enter unsafe situations
   □ Do not trespass
   □ Do not confront suspicious individuals
   □ Report safety concerns immediately

5. BOUNDARIES
   □ Do not provide advice to sellers/landlords
   □ Do not negotiate on customer's behalf
   □ Do not make promises about outcomes
   □ Do not accept side jobs from parties

VIOLATIONS:
- First offense: Warning + retraining
- Second offense: Suspension (7 days)
- Serious violation: Immediate termination
- Fraud/illegal activity: Termination + legal action
```

---

# SECTION 8 — FIRST 30-DAY EXECUTION PLAN

## Week 1: Foundation (Days 1-7)

```
DAY 1:
□ Set up getsurtey@gmail.com with professional signature
□ Create Stripe account + payment links
□ Set up Notion workspace with databases
□ Create WhatsApp Business account
□ Draft email templates (all scenarios)

DAY 2:
□ Finalize website copy and test all forms
□ Create Google Drive folder structure
□ Build report template in Google Docs
□ Set up basic Zapier automations
□ Test full customer flow (self-test)

DAY 3:
□ Write agent recruitment post
□ Identify 5 recruitment channels
□ Create agent application form
□ Draft agent training materials (v1)
□ Set up agent communication group

DAY 4:
□ Post agent recruitment (3 cities minimum)
□ Begin agent application review
□ Create agent screening checklist
□ Prepare interview questions
□ Set up agent payment workflow

DAY 5:
□ Conduct first agent interviews (aim for 5)
□ Send training materials to qualified candidates
□ Begin social media presence setup
□ Join relevant online communities
□ Identify first 10 potential customers to reach out

DAY 6:
□ Complete agent onboarding (aim for 3 agents)
□ Assign first test verifications (paid)
□ Review test verification quality
□ Provide feedback to agents
□ Refine training based on learnings

DAY 7:
□ Activate first agents
□ Announce soft launch in 2-3 communities
□ Monitor for first real requests
□ Document all learnings from week 1
□ Adjust processes as needed
```

## Week 2: First Customers (Days 8-14)

```
DAY 8-9:
□ Active community engagement (Reddit, Facebook groups)
□ Respond to all inquiries within 2 hours
□ Process first real verifications
□ Document customer feedback
□ Continue agent recruitment

DAY 10-11:
□ Analyze first verification quality
□ Gather customer testimonials
□ Refine pricing if needed
□ Improve report template based on feedback
□ Add 2-3 more agents

DAY 12-14:
□ First week metrics review
□ Customer follow-up for reviews
□ Begin content creation (blog posts, guides)
□ Explore partnership opportunities
□ Plan week 3 growth activities

WEEK 2 TARGETS:
• 5-10 verification requests
• 3-5 completed verifications
• 5+ activated agents
• 2+ customer testimonials
• <4 hour average response time
```

## Week 3: Optimization (Days 15-21)

```
DAY 15-17:
□ Implement feedback from first customers
□ Optimize high-friction points
□ Add automation where manual is slow
□ Expand to 2 more cities/regions
□ Test paid advertising (small budget: $50-100)

DAY 18-21:
□ Build partnerships with 1-2 relocation services
□ Create referral program for customers
□ Agent performance review (first ratings)
□ Expand agent training materials
□ Document SOPs for all processes

WEEK 3 TARGETS:
• 15-20 total requests
• 10+ completed verifications
• 10+ activated agents (3+ cities)
• First paid customer acquisition
• Identify top performing channel
```

## Week 4: Scale Preparation (Days 22-30)

```
DAY 22-25:
□ Analyze all data from first 3 weeks
□ Calculate actual unit economics
□ Identify bottlenecks for scaling
□ Plan tool/system upgrades
□ Build waitlist for new cities

DAY 26-28:
□ Create investor/partner pitch deck
□ Document case studies from best verifications
□ Plan month 2 growth strategy
□ Hire/contract help if needed (VA, etc.)
□ Set up proper accounting/tracking

DAY 29-30:
□ Month 1 full review
□ Celebrate wins
□ Document all learnings
□ Set month 2 goals
□ Plan expansion priorities

MONTH 1 SUCCESS METRICS:
• 30+ verification requests
• 20+ completed verifications
• 80%+ customer satisfaction
• 15+ activated agents
• 3+ cities covered
• $500+ gross revenue
• Clear product-market fit signal
```

---

# SECTION 9 — RISK & FAILURE PREVENTION

## 9.1 Operational Risks

```
RISK: Agent No-Show/Unreliability
Impact: High | Probability: Medium
Mitigation:
• Maintain 2x agent coverage per area
• Implement strict response time requirements
• Build agent rating system quickly
• Have backup agent protocol ready
• Financial penalties for no-shows

RISK: Quality Inconsistency
Impact: High | Probability: High (early stage)
Mitigation:
• Detailed checklists for every verification type
• QC review of every report (initially)
• Agent retraining for quality issues
• Customer feedback loop
• Sample reports as quality benchmark

RISK: Payment/Fraud Issues
Impact: Medium | Probability: Low
Mitigation:
• Payment before service (no exceptions MVP)
• Use established payment processors
• Clear refund policy
• Document everything
• Monitor for patterns

RISK: Access Denial
Impact: Medium | Probability: Medium
Mitigation:
• Clear customer communication about access needs
• Partial verification option (exterior only)
• Flexible rescheduling
• Partial refund protocol
• Agent scripts for common objections
```

## 9.2 Trust Breakdown Scenarios

```
SCENARIO: Fake/Inaccurate Report
Prevention:
• GPS verification mandatory
• Timestamp requirements
• Video evidence (hard to fake)
• Random QC audits
• Agent identity verification

SCENARIO: Agent Collusion with Seller
Prevention:
• Random agent assignment
• No repeat agent-location pairing
• Customer feedback focus
• Undercover test purchases
• Clear termination policy

SCENARIO: Customer Uses Report Maliciously
Prevention:
• Terms of service coverage
• Report intended use statement
• No personally identifying info of sellers
• Watermarked documents
• Legal disclaimer

SCENARIO: Data Breach
Prevention:
• Minimal data collection
• Secure cloud storage
• Access controls
• Regular password updates
• Agent device requirements
```

## 9.3 Scaling Bottlenecks

```
BOTTLENECK: Manual Report Generation
Solution Path:
1. Templated reports (current)
2. Form-based agent submission
3. Auto-generated reports from form data
4. AI-assisted report writing

BOTTLENECK: Agent Recruitment Speed
Solution Path:
1. Manual recruitment (current)
2. Referral program with bonuses
3. Partnership with gig platforms
4. Self-serve agent onboarding

BOTTLENECK: Customer Support Volume
Solution Path:
1. Founder handles all (current)
2. FAQ and self-serve status
3. VA for tier 1 support
4. Automated updates and chatbot

BOTTLENECK: Payment Processing
Solution Path:
1. Manual invoicing (current)
2. Stripe payment links
3. Integrated checkout
4. Subscription/credits system

BOTTLENECK: Quality Control
Solution Path:
1. Review every report (current)
2. Sample-based QC (20%)
3. AI-assisted QC flagging
4. Community-based rating system
```

## 9.4 Fraud Vectors

```
FRAUD: Fake Verification Requests (competitor intelligence)
Detection: Unusual patterns, no payment completion
Prevention: Payment required, watermarked samples

FRAUD: Agent Creates Fake Verifications
Detection: GPS mismatch, timestamp issues, repeat media
Prevention: GPS/timestamp verification, random audits, video requirements

FRAUD: Customer Disputes Legitimate Charge
Detection: Post-delivery disputes, pattern of disputes
Prevention: Clear terms, delivery confirmation, good documentation

FRAUD: Agent Sells Customer Data
Detection: Customer reports unsolicited contact
Prevention: Minimal data sharing, strict terms, legal consequences

FRAUD: Fake Agents
Detection: ID mismatch, unable to complete verifications
Prevention: ID verification, test task requirement, video interview
```

---

# SECTION 10 — GROWTH PATH BLUEPRINT

## 10.1 Early Traction Channels

```
TIER 1: HIGH PRIORITY (Free/Low Cost)

1. Reddit
   • r/scams, r/realestate, r/expats, r/digitalnomad
   • Helpful comments, not promotional
   • Build karma before posting
   • Target: 5-10 engaged posts/week

2. Facebook Groups
   • Expat groups by city
   • Relocation groups
   • Digital nomad groups
   • Real estate investment groups
   • Target: Join 20 groups, engage daily

3. Content/SEO
   • "How to spot rental scams"
   • "Apartment verification checklist"
   • "Remote car buying tips"
   • Target: 2 blog posts/week

4. Quora/Forums
   • Answer scam-related questions
   • Provide genuine help
   • Soft mention of service
   • Target: 5 answers/week

TIER 2: MEDIUM PRIORITY (Paid/Partnership)

5. Google Ads
   • "verify apartment remotely"
   • "check rental before signing"
   • Start with $10-20/day
   • Target: Test after 50 organic conversions

6. Partnerships
   • Relocation agencies
   • International HR departments
   • Real estate platforms
   • Travel insurance companies
   • Target: 2-3 partnerships month 2

7. Influencer/Affiliate
   • Expat YouTubers
   • Travel bloggers
   • Real estate content creators
   • Target: 5 outreach/week
```

## 10.2 Marketplace Seeding Strategy

```
SUPPLY SIDE (AGENTS):

Phase 1: Founder Network
• Personal connections in target cities
• Friends of friends
• LinkedIn outreach
• Target: 3-5 agents/city

Phase 2: Gig Platform Poaching
• Post on TaskRabbit, Fiverr, Upwork
• Target gig workers directly
• Offer better rates for specialized work
• Target: 10+ agents/city

Phase 3: Local Recruitment
• University job boards
• Local classifieds
• Real estate association postings
• Referral bonuses
• Target: 20+ agents/city

DEMAND SIDE (CUSTOMERS):

Phase 1: Community Building
• Be the "scam prevention expert"
• Provide free value first
• Build trust before selling
• Target: 100+ community interactions before launch

Phase 2: Early Adopter Incentives
• First 50 customers: 20% discount
• Money-back guarantee
• Extra detailed reports
• Target: 50 paying customers month 1

Phase 3: Word of Mouth Engine
• Referral program: Give $5, Get $5
• Review incentives
• Case study features
• Target: 30% referral rate by month 3
```

## 10.3 Network Effects Strategy

```
LOCAL NETWORK EFFECTS:

More agents in city → Faster turnaround → More customers
More customers → More jobs → More agents attracted
More verifications → More data → Better fraud detection
More reviews → More trust → Higher conversion

ACCELERATORS:

1. City-by-City Launch
   • Focus on one city until strong
   • 20+ agents, <2hr turnaround
   • Then expand to next city
   • Creates local dominance

2. Platform Integration
   • API for real estate platforms
   • "Verified by Surtey" badge
   • Embedded verification button
   • Creates ecosystem lock-in

3. Data Network Effects
   • Database of verified properties
   • Scam pattern detection
   • Trusted seller ratings
   • Historical verification data

4. Agent Loyalty
   • Best agents → Most jobs
   • Tier benefits
   • Community building
   • Hard to leave for competitor
```

## 10.4 Automation Evolution

```
PHASE 1: HUMAN-POWERED (Current)
• Manual everything
• High touch, high quality
• Learn from every interaction
• Document all processes

PHASE 2: ASSISTED AUTOMATION (Month 3-6)
• Automated intake (forms → database)
• Automated status updates
• Template-based report generation
• Automated payment reminders
• Agent self-scheduling

PHASE 3: SMART AUTOMATION (Month 6-12)
• AI-assisted report writing
• Intelligent agent matching
• Automated QC flagging
• Predictive pricing
• Customer self-serve portal

PHASE 4: PLATFORM (Year 2+)
• Full marketplace platform
• API for partners
• Agent mobile app
• Real-time tracking
• AI verification assistance
```

## 10.5 SaaS Transition Path

```
B2C MARKETPLACE (Current):
Surtey → Customers (direct verification service)

B2B MARKETPLACE (Year 1-2):
Surtey → Real Estate Agents → Their Customers
Surtey → Property Managers → Their Clients
Surtey → Relocation Companies → Their Employees

SaaS PRODUCTS (Year 2-3):

1. Surtey for Agents (Subscription)
   • $99/month for real estate agents
   • Unlimited verifications for their clients
   • White-label reports
   • Priority turnaround

2. Surtey for Platforms (API)
   • Per-verification API pricing
   • Integration with Airbnb, Zillow, etc.
   • "Verified" badge system
   • Revenue share model

3. Surtey Enterprise
   • Custom solutions for large companies
   • Relocation departments
   • Insurance companies
   • Annual contracts

4. Surtey Data
   • Verified property database
   • Scam intelligence feeds
   • Market insights
   • Subscription access
```

---

## EXECUTION CHECKLIST

```
□ Day 1: Email, Stripe, Notion, WhatsApp ready
□ Day 3: First agent recruited
□ Day 7: First test verification complete
□ Day 14: First paying customer
□ Day 21: 10+ verifications complete
□ Day 30: Product-market fit signal confirmed

SUCCESS INDICATORS:
✓ Customers say "this is exactly what I needed"
✓ Repeat customers without prompting
✓ Word-of-mouth referrals happening
✓ Agents asking for more jobs
✓ Profitable unit economics confirmed
```

---

*This operational blueprint is a living document. Update weekly based on real-world learnings.*

**Document Version:** 1.0
**Last Updated:** January 2024
**Author:** Surtey Operations
