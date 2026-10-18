# The Bees Bake House — Official Website (Phase 1 Launch)

> Homemade with Love in Coimbatore, Tamil Nadu, India.

A production-ready, responsive website for **The Bees Bake House**, an artisan homemade bakery known for rich fudgy brownies, customized celebration cakes, and golden blondies.

---

## 1. Project Overview & Brand Identity

- **Brand Name**: The Bees Bake House
- **Tagline**: Homemade with Love in Coimbatore
- **Brand Personality**: Warm, handcrafted, charming, premium, friendly, and trustworthy — inspired by vintage parchment menus, delicate floral accents, washi-tape scrapbook cards, and the signature bee mascot.
- **Palette**:
  - Warm Cream: `#FFF4E5` (Primary background)
  - Parchment: `#EAD7B5` (Secondary background / accents)
  - Chocolate Brown: `#422414` (Headings and primary text)
  - Deep Burgundy: `#761C35` (Brand accent / primary CTA)
  - Honey Gold: `#D6A54A` (Flourish dividers and badges)
  - Soft Blush: `#F5D6D8` (Washi-tape accents)
  - Muted Sage: `#A9B79A` (Botanical touches)
- **Typography**:
  - Headings: Playfair Display / Cormorant Garamond
  - Body: Inter
  - Script Accents: Alex Brush (“Baked with Love”)

---

## 2. Tech Stack

- **React 19**
- **Vite 8**
- **JavaScript (JSX)**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router 7** (`react-router-dom`)
- **Lucide React** (Artisan icons)
- **Netlify Ready** (`_redirects` and `netlify.toml` configured for SPA routing)

---

## 3. Project Structure

```
├── public/
│   ├── _redirects              # Netlify SPA redirect rules (/* /index.html 200)
│   ├── favicon.svg             # Handcrafted bee mascot vector favicon
│   ├── logo.png                # Original brand mascot logo
│   ├── robots.txt              # Search engine directives
│   ├── sitemap.xml             # XML sitemap covering all routes
│   └── the-bees-bakehouse-logo.png
├── src/
│   ├── assets/
│   │   ├── images/             # Bakery product & category assets
│   │   └── logo/
│   │       └── logo.png        # Official supplied logo
│   ├── components/
│   │   ├── BeeDecoration.jsx   # SVG bee mascot, flourishes, and icons
│   │   ├── Button.jsx          # Reusable button with WhatsApp & routing variants
│   │   ├── Footer.jsx          # Brand footer with location & social links
│   │   ├── Navbar.jsx          # Sticky header with mobile drawer & WhatsApp CTA
│   │   ├── ProductCard.jsx     # Veg indicator, details, & WhatsApp order button
│   │   └── SectionHeading.jsx  # Vintage serif section titles with flourishes
│   ├── config/
│   │   └── site.js             # Central contact, WhatsApp, and brand configuration
│   ├── data/
│   │   └── menu.js             # 19 authentic bakery items (10 brownies, 1 blondie, 8 cakes)
│   ├── pages/
│   │   ├── Home.jsx            # Complete Phase 1 landing page with all 9 sections
│   │   ├── Menu.jsx            # Full menu with category filter and custom order CTA
│   │   ├── OurStory.jsx        # Bakery story, small-batch values, and Coimbatore roots
│   │   ├── Gallery.jsx         # Polaroid scrapbook grid with washi-tape styling
│   │   ├── Contact.jsx         # Contact cards & interactive WhatsApp order builder
│   │   └── NotFound.jsx        # 404 page with curious bee mascot
│   ├── App.jsx                 # Multi-page router & floating WhatsApp button
│   ├── index.css               # Tailwind v4 styles, patterns, and animations
│   └── main.jsx                # React DOM root mounting
├── netlify.toml                # Netlify deployment and header configuration
├── package.json
└── vite.config.js
```

---

## 4. Local Installation & Development

### Prerequisites
- Node.js `v18.0.0` or later (tested on Node `v22.17.0`)
- npm `v9.0.0` or later

### Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

3. **Verify all routes**:
   - Home: `http://localhost:5173/`
   - Menu: `http://localhost:5173/menu`
   - Our Story: `http://localhost:5173/our-story`
   - Gallery: `http://localhost:5173/gallery`
   - Contact: `http://localhost:5173/contact`

4. **Run the production build**:
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

5. **Preview the production build locally**:
   ```bash
   npm run preview
   ```

---

## 5. Deployment to Netlify

### Option A: Deploy via GitHub / GitLab (Recommended for Continuous Deployment)

1. Push this project to your GitHub repository (e.g. `your-username/the-bees-bake-house`).
2. Log into your [Netlify Dashboard](https://app.netlify.com/).
3. Click **"Add new site"** > **"Import an existing project"**.
4. Choose **GitHub** and select your repository.
5. In the Build settings, Netlify will automatically detect:
   - **Base directory**: (leave empty or `./`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**.
7. Netlify will build and deploy the site in ~30 seconds and provide a temporary URL (e.g., `the-bees-bake-house.netlify.app`).

### Option B: Direct Manual Drag-and-Drop Deploy

1. Run `npm run build` locally.
2. In your [Netlify Dashboard](https://app.netlify.com/), go to **"Sites"**.
3. Drag and drop the generated `dist` folder directly into the Netlify Drop zone.
4. Your site is live immediately!

---

## 6. Connecting Your Custom Domain on Netlify

Follow these exact steps to connect your custom domain (e.g., `thebeesbakehouse.com`):

### Step 1: Add the Domain in Netlify Dashboard
1. Go to your site in the Netlify Dashboard.
2. Navigate to **Site configuration** > **Domain management**.
3. Click **"Add custom domain"** (or **"Add a domain"**).
4. Enter your root domain: `thebeesbakehouse.com` (or your registered domain).
5. Click **"Verify"** and then **"Add domain"**.
6. Netlify will prompt you that `thebeesbakehouse.com` and `www.thebeesbakehouse.com` will be linked to the site.

### Step 2: Configure DNS at Your Domain Registrar
Log in to your domain registrar (e.g., GoDaddy, Namecheap, Google Domains / Squarespace, Cloudflare) and open the **DNS Management / DNS Zone Editor**:

#### If using Netlify DNS (Recommended):
- Change your domain's Name Servers (NS) at your registrar to the Netlify nameservers shown in the Netlify dashboard (e.g., `dns1.p01.nsone.net`, `dns2.p01.nsone.net`, etc.).

#### If keeping your Registrar's DNS:
Add the following DNS records in your registrar's DNS settings:

| Record Type | Host / Name | Value / Points to | TTL |
|-------------|-------------|-------------------|-----|
| **A** | `@` (or leave blank for root) | `75.2.60.5` (Netlify's load balancer IP) | Automatic / 3600 |
| **CNAME** | `www` | `<your-site-name>.netlify.app` | Automatic / 3600 |

> **Note**: Do not modify DNS without access to your registrar control panel. DNS propagation usually takes 5 minutes to a few hours.

### Step 3: Enable Free SSL / HTTPS
1. In Netlify under **Domain management** > **HTTPS**, Netlify will automatically issue a free Let's Encrypt SSL certificate once DNS records have propagated.
2. Ensure **"Force HTTPS"** is toggled ON.

---

## 7. Configurable Placeholders & Customization Guide

All site configuration is centralized in **`src/config/site.js`**. You can update any information without touching page components:

```javascript
// src/config/site.js
export const siteConfig = {
  name: "The Bees Bake House",
  location: "Coimbatore, Tamil Nadu, India",
  instagramUrl: "https://www.instagram.com/thebeesbakehouse/",
  instagramHandle: "@thebeesbakehouse",

  // Update with bakery owner's confirmed phone/WhatsApp details:
  phoneDisplay: "+91 98765 43210 (Orders & Inquiries)",
  phoneNumber: "+919876543210",
  whatsappNumber: "919876543210", // Digits with country code, no symbols
  email: "hello@thebeesbakehouse.com",
  ...
}
```

---

## 8. Verified Menu Items Included

The menu and bestsellers sections strictly feature the actual items provided:

### Brownies (10 varieties)
1. Classic Fudge Brownie (Signature)
2. Dark Chocolate Brownie
3. Milk Chocolate Brownie
4. White Chocolate Brownie
5. Lotus Biscoff Brownie
6. Nutella Brownie
7. Triple Chocolate Brownie
8. Nuts Loaded Brownie
9. Red Velvet Classic Brownie
10. Red Velvet with Cream Cheese

### Blondies (1 variety)
1. Classic Blondie

### Cakes (8 varieties)
1. Vanilla Cake
2. Chocolate Truffle Cake
3. Red Velvet Cake
4. Blueberry Cake
5. Lotus Biscoff Cake
6. Nutella Cake
7. Gulab Jamun Cake
8. Rasamalai Cake
