# Farrari Laundries Website - Product Requirements Document

## Project Overview
A pixel-perfect clone of champion-cleaners.com for Farrari Laundries, Kuwait's premier dry cleaning and laundry service.

## Original Requirements
- Create a multi-page website clone with pages: Home, About, Services, Branches, FAQ, Franchising, Contact, Terms, Privacy
- Color scheme: Red and White
- Replace branding with Farrari Laundries info
- Implement all animations and interactive features from the original site

## Business Information
- **Business Name:** Farrari Laundries
- **Phone:** +965 9758 8886
- **Email:** info@farrarilaundries.com
- **Address:** Industrial Area 3, Block D, Street 58/59, Reef Square Building, Shuwaikh, Kuwait
- **Play Store:** https://play.google.com/store/apps/details?id=com.cleancloudapp.farrarilaundries
- **App Store:** https://apps.apple.com/ms/app/farrari-laundries/id6753220148

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, shadcn/ui
- **Backend:** FastAPI (Python)
- **Database:** MongoDB
- **Email Service:** Resend.com
- **Maps:** OpenStreetMap with Leaflet

## Implemented Features (Completed)

### ✅ Pages
- [x] Home Page with hero slider, trust section, app section, how it works, testimonials, services preview, branches preview, FAQ preview
- [x] About Page with real business content (Since 2010, 15+ branches, 400+ staff, B2C/B2B services)
- [x] Services Page with 4 categories, additional services section, pricing tables
- [x] Branches Page with search and OpenStreetMap integration
- [x] FAQ Page with 15 real FAQs from business documentation
- [x] Franchising Page with tabs and registration form
- [x] Contact Page with form and map
- [x] Terms and Conditions Page
- [x] Privacy Policy Page

### ✅ Animations & Effects (All Implemented)
- [x] **Scroll-triggered slide-in effects** - Text slides from left/right with opacity 0→100
- [x] **Image pop-up effects** - Images scale up and fade in on scroll
- [x] **Number counting animation** - Stats count up when section comes into view
- [x] **Section title animations** - Titles fade in with scale effect
- [x] **Staggered card animations** - Service/branch cards animate in sequence
- [x] **Hover effects** - Cards lift on hover, buttons scale

### ✅ UI Updates (Latest)
- [x] **App Benefits section** - Taller mobile frame (680px) showing full image content
- [x] **How It Works Step 1** - Portrait mobile phone frame with new scheduling image
- [x] **Step 3 Deliver** - New delivery van image
- [x] **Free Pickup & Delivery** - New delivery van image
- [x] **Services page** - Removed CTA section, added Additional Services section
- [x] **Real content** - Updated About, FAQ, Services with actual business info from PDF

### ✅ Functionality
- [x] Hero slider with 4 slides, navigation arrows, indicators
- [x] OS-specific app store redirection (iOS → App Store, Android → Play Store)
- [x] All "Order Now" and "Download App" buttons use device detection
- [x] App Benefits section with **wider mobile interface mockup** showing full images
- [x] How It Works section with **portrait image for Step 1** (Place an Order)
- [x] Step 3 (Deliver) uses new delivery van image
- [x] Free Pickup & Delivery service uses delivery van image
- [x] Contact form sends email via Resend API
- [x] Franchise registration form sends email via Resend API

### ✅ Design Updates
- [x] Red and white color scheme
- [x] Responsive design for mobile and desktop
- [x] Footer with both Play Store and App Store download badges
- [x] Removed image from Order Now button in footer
- [x] Mobile-friendly hero slider indicators
- [x] Services page CTA section removed

### ✅ Backend
- [x] FastAPI server
- [x] POST /api/contact - Contact form endpoint
- [x] POST /api/franchise-register - Franchise registration endpoint
- [x] Resend.com email integration

### ✅ Documentation
- [x] how-to-manage.md - Guide for managing content
- [x] how-to-deploy.md - Vercel deployment guide

## File Structure
```
/app
├── backend/
│   ├── server.py          # FastAPI backend
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/      # Homepage sections (all with animations)
│   │   │   ├── layout/    # Header, Footer
│   │   │   └── ui/        # shadcn components
│   │   ├── data/
│   │   │   └── mockData.js # All site data
│   │   ├── pages/         # Page components
│   │   └── utils/
│   │       └── deviceDetection.js
│   └── package.json
├── how-to-manage.md       # Content management guide
└── how-to-deploy.md       # Deployment guide
```

## Credentials
- **Resend API Key:** re_JWrMnQeS_FQc7i7tbDBCtrnFNfygankGd
- **Recipient Email:** ekramhosain0091@gmail.com

## Testing Status
- ✅ All features tested and working
- Test report: /app/test_reports/iteration_1.json

## Last Updated
December 2025
