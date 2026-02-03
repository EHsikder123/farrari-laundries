# How to Manage Farrari Laundries Website Content

This guide explains how to add, edit, or remove content from your Farrari Laundries website.

---

## Table of Contents
1. [Managing Branches](#1-managing-branches)
2. [Managing Services](#2-managing-services)
3. [Managing Reviews/Testimonials](#3-managing-reviewstestimonials)
4. [Managing FAQs](#4-managing-faqs)
5. [Editing Franchising Page Content](#5-editing-franchising-page-content)
6. [Updating Contact Information](#6-updating-contact-information)

---

## 1. Managing Branches

**File Location:** `/app/frontend/src/data/mockData.js`

### Adding a New Branch

Find the `branches` array in the file and add a new object:

```javascript
{ 
  id: 16, // Use next available ID
  name: "New Branch Name", 
  address: "Street address, Block X", 
  phone: "+965 XXXX XXXX", 
  location: "Area Name", 
  lat: 29.XXXX, // Latitude coordinate
  lng: 48.XXXX  // Longitude coordinate
}
```

### Editing a Branch

1. Open the file
2. Find the branch by its `id` or `name`
3. Update the fields you need to change
4. Save the file

### Removing a Branch

1. Find the branch object in the `branches` array
2. Delete the entire object (including the curly braces and comma)
3. Save the file

---

## 2. Managing Services

**File Location:** `/app/frontend/src/pages/ServicesPage.jsx`

### Adding/Editing Services

Find the `serviceCategories` array at the top of the file:

```javascript
const serviceCategories = [
  { 
    id: 1, 
    name: "Free Pickup & Delivery", 
    slug: "free-pickup-delivery", 
    description: "Your description here...", 
    image: "https://...", 
    hasPricing: false 
  },
  // ... more services
];
```

### Adding Pricing

Find the pricing section in the same file and add new rows to the tables:

```html
<tr className="border-t">
  <td className="p-3">Item Name</td>
  <td className="p-3 text-center">0.XXX</td>
  <td className="p-3 text-center">0.XXX</td>
  <td className="p-3 text-center">0.XXX</td>
</tr>
```

---

## 3. Managing Reviews/Testimonials

**File Location:** `/app/frontend/src/components/home/TestimonialsSection.jsx`

### Adding a Review

Find the `testimonials` array and add a new object:

```javascript
{ 
  id: 5, // Use next available ID
  name: "Customer Name", 
  text: "Their review text here..." 
}
```

### Editing a Review

1. Find the review by `id` or `name`
2. Update the `text` field
3. Save the file

### Removing a Review

Delete the entire review object from the array.

---

## 4. Managing FAQs

**File Location:** `/app/frontend/src/pages/FAQPage.jsx`

### Adding a FAQ

Find the `faqs` array and add a new object:

```javascript
{ 
  id: 13, // Use next available ID
  q: "Your question here?", 
  a: "Your answer here." 
}
```

### Editing a FAQ

1. Find the FAQ by `id` or question text
2. Update the `q` (question) or `a` (answer) field
3. Save the file

### Removing a FAQ

Delete the entire FAQ object from the array.

---

## 5. Editing Franchising Page Content

**File Location:** `/app/frontend/src/data/mockData.js`

Find the `franchiseData` object:

```javascript
export const franchiseData = {
  conceptBrief: {
    title: "Concept Brief",
    content: "Your content here..."
  },
  ownerProfile: {
    title: "Owner Profile",
    content: "Your content here..."
  },
  // ... more sections
};
```

### Editing Content

Update the `content` field for any section you want to change.

---

## 6. Updating Contact Information

**File Location:** `/app/frontend/src/data/mockData.js`

Find the `businessInfo` object:

```javascript
export const businessInfo = {
  name: "Farrari Laundries",
  phone: "+965 9758 8886",
  whatsapp: "+965 9758 8886",
  email: "info@farrarilaundries.com",
  address: "Your address...",
  playStoreLink: "https://play.google.com/...",
  appStoreLink: "https://apps.apple.com/...",
  logo: "https://...",
  socialMedia: {
    facebook: "https://...",
    youtube: "https://...",
    instagram: "https://...",
    snapchat: "https://...",
    tiktok: "https://...",
    whatsapp: "https://wa.me/..."
  }
};
```

### What Each Field Does

- `phone`: Main contact number (appears in header and footer)
- `whatsapp`: WhatsApp number
- `email`: Contact email address
- `address`: Physical address (appears in contact page and footer)
- `playStoreLink`: Google Play Store app link
- `appStoreLink`: Apple App Store app link
- `logo`: URL to your logo image
- `socialMedia`: Links to all social media profiles

---

## Important Notes

1. **Always backup** the file before making changes
2. **Be careful with commas** - JSON/JavaScript objects require commas between items
3. **Keep IDs unique** - Don't use the same ID for multiple items
4. **Test changes** - After saving, refresh the website to see your changes
5. **Image URLs** - Use high-quality images hosted on reliable services

---

## Need Help?

If you encounter any issues:
1. Check for missing commas or brackets
2. Ensure quotes are properly closed
3. Verify image URLs are accessible
4. Contact your developer for complex changes
