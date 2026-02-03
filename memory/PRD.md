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
- [x] About Page (removed 'Our Facility' section as requested)
- [x] Services Page with 4 categories and pricing tables
- [x] Branches Page with search and OpenStreetMap integration
- [x] FAQ Page with accordion
- [x] Franchising Page with tabs and registration form
- [x] Contact Page with form and map
- [x] Terms and Conditions Page
- [x] Privacy Policy Page

### ✅ Functionality
- [x] Hero slider with 4 slides, navigation arrows, indicators
- [x] OS-specific app store redirection (iOS → App Store, Android → Play Store)
- [x] All "Order Now" and "Download App" buttons use device detection
- [x] App Benefits section with mobile interface mockup and image switching
- [x] How It Works section with scroll-triggered animations
- [x] Branches search functionality
- [x] Branch click opens modal with OpenStreetMap
- [x] Contact form sends email via Resend API
- [x] Franchise registration form sends email via Resend API
- [x] Phone number required in contact form
- [x] Additional fields in franchise form (Yearly Income, Tell Us About Yourself)

### ✅ Design
- [x] Red and white color scheme
- [x] Responsive design for mobile and desktop
- [x] Footer with both Play Store and App Store download badges
- [x] Removed image from Order Now button in footer
- [x] Mobile-friendly hero slider indicators (positioned to avoid text overlap)

### ✅ Backend
- [x] FastAPI server
- [x] POST /api/contact - Contact form endpoint
- [x] POST /api/franchise-register - Franchise registration endpoint
- [x] Resend.com email integration

### ✅ Documentation
- [x] how-to-manage.md - Guide for managing content
- [x] how-to-deploy.md - Vercel deployment guide

## API Endpoints

### POST /api/contact
Sends contact form email
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}
```

### POST /api/franchise-register
Sends franchise registration email
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "country": "string (optional)",
  "city": "string (optional)",
  "investment": "string",
  "yearlyIncome": "string",
  "experience": "string",
  "aboutYourself": "string",
  "message": "string (optional)"
}
```

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
│   │   │   ├── home/      # Homepage sections
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
- ✅ Backend: 100% (14/14 tests passed)
- ✅ Frontend: 100% (all features working)
- Test report: /app/test_reports/iteration_1.json

## Last Updated
December 2025
