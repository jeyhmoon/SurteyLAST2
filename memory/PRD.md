# Surtey - Property Verification Platform PRD

## Product Overview
**Product Name:** Surtey  
**Tagline:** "Don't Trust. Verify."  
**Target Market:** Prague, Czech Republic (Pilot)  
**Primary Users:** Remote renters, expats, property buyers

## Core Value Proposition
Human-powered verification service for remote transactions. Local agents physically verify apartments, cars, and listings before customers commit.

---

## Implemented Features

### 1. Multi-Language Support (EN/TR/CZ) ✅
- **Completion Date:** 2025-02-08
- Full i18n architecture with translations.js
- Language selector in header with flags
- Languages: English (default), Turkish, Czech
- User preference stored in localStorage
- Instant language switching (no page reload)

### 2. Modern Landing Page ✅
- **Completion Date:** 2025-02-08
- Clean, professional design
- Trust-focused color palette (green/blue accents)
- Soft backgrounds, rounded elements
- Mobile-first responsive design
- Sections: Hero, How It Works, Pricing, Trust, Become Agent, Footer

### 3. Payment System (Stripe Only) ✅
- **Completion Date:** 2025-02-08
- PayPal completely removed
- Stripe checkout integration
- Three pricing tiers: €9, €19, €39
- Order creation in MongoDB
- Confirmation modal after payment

### 4. Become an Agent Section ✅
- **Completion Date:** 2025-02-08
- Dedicated section on landing page
- Navigation link "Become an Agent"
- Professional benefits presentation
- Agent application form with:
  - Name, Email, Phone (with country code dropdown)
  - Location, Experience/notes
  - Consent checkbox
- Inline submission confirmation
- Backend record creation

### 5. Backend API ✅
- Order management: POST/GET /api/orders
- Agent registration: POST/GET /api/agents
- Package info: GET /api/packages
- Email notifications (configured but requires SMTP)

---

## Technical Architecture

### Frontend
- **Framework:** React 18
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI, Lucide Icons
- **HTTP Client:** Axios
- **Routing:** React Router DOM

### Backend
- **Framework:** FastAPI (Python)
- **Database:** MongoDB (motor async driver)
- **Email:** aiosmtplib (configured)

### Key Files
```
/app/frontend/src/
├── components/landing/
│   ├── LandingPage.jsx (main page)
│   ├── Header.jsx (nav + language selector)
│   ├── HeroSection.jsx
│   ├── ServiceFlow.jsx
│   ├── PricingSection.jsx
│   ├── TrustSection.jsx
│   ├── BecomeAgentSection.jsx
│   ├── PaymentModal.jsx (Stripe)
│   ├── ConfirmationModal.jsx
│   └── LandingFooter.jsx
├── context/
│   └── LanguageContext.jsx
├── i18n/
│   └── translations.js (EN/TR/CZ)
└── App.js

/app/backend/
└── server.py (FastAPI with all endpoints)
```

---

## Pricing Packages

| Package | Price | Turnaround | Features |
|---------|-------|------------|----------|
| Quick Check | €9 | 2-3 hours | 10-15 exterior photos, GPS verification |
| Live Walkthrough | €19 | 3-5 hours | 25-40 photos, 5-10 min video, full inspection |
| Deep Verify | €39 | Same day | 50+ photos, 15-20 min video, live call option |

---

## API Endpoints

### Orders
- `POST /api/orders` - Create verification order
- `GET /api/orders` - List all orders
- `GET /api/orders/{id}` - Get order by ID
- `PUT /api/orders/{id}` - Update order

### Agents
- `POST /api/agents` - Register new agent
- `GET /api/agents` - List agents
- `GET /api/agents/{id}` - Get agent details

### Packages
- `GET /api/packages` - Get pricing packages

---

## Completed Tasks Log

| Date | Task | Status |
|------|------|--------|
| 2025-02-08 | Remove PayPal, keep Stripe only | ✅ |
| 2025-02-08 | Implement i18n (EN/TR/CZ) | ✅ |
| 2025-02-08 | Add language selector in header | ✅ |
| 2025-02-08 | Create Become Agent section | ✅ |
| 2025-02-08 | Improve trust visuals (green/blue palette) | ✅ |
| 2025-02-08 | Mobile responsive optimization | ✅ |
| 2025-02-08 | Backend order creation | ✅ |

---

## Future Roadmap

### P0 - Critical
- [ ] Real Stripe Checkout integration (requires Stripe API keys)
- [ ] Email notifications setup (requires SMTP credentials)

### P1 - High Priority
- [ ] Admin dashboard for order management
- [ ] Agent dashboard
- [ ] Third-party workflow integration (Airtable/Trello/Google Sheets)
- [ ] Real-time order tracking

### P2 - Nice to Have
- [ ] Customer account/login
- [ ] Order history
- [ ] Referral system
- [ ] Additional cities expansion

---

## SEO & Technical Assets

- **Sitemap:** /sitemap.xml
- **Google Verification:** /google1cb7112d1ab881a8.html
- **Logo:** /logo.png
- **JSON-LD:** Organization + Service schema
- **Meta Tags:** Open Graph + Twitter Cards

---

## Contact
- **Email:** getsurtey@gmail.com
- **Location:** Prague, Czech Republic
