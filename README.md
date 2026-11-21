# NOORÉ — Pakistani Luxury Fashion Storefront

A modern, fully responsive e-commerce storefront for **NOORÉ**, a Pakistani women's fashion label offering luxury pret, unstitched lawn, chiffon formals, and festive wear. Built with React, TypeScript, Vite, and Tailwind CSS.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## Overview

NOORÉ is a front-end fashion storefront that showcases a curated catalogue of 32 products across lawn, embroidered, chiffon, festive, and wedding collections. It delivers a boutique shopping experience with rich filtering, quick view, a persistent cart and wishlist, and a PKR-native checkout flow — all wrapped in a warm ivory, brown, and gold visual identity.

> **Note:** This is a front-end demo. Product data is static, and checkout simulates order placement locally. No payment gateway or backend is connected.

---

## Features

### Shopping experience
- **32-product catalogue** spanning Lawn, Luxury Formal, Festive, Summer, Winter Khaddar, Wedding, Ready to Wear, and Sale collections
- **Advanced filtering** by fabric, suit type (stitched/unstitched), piece count, collection, colour, price range, and discount
- **Sorting** by featured, newest, price (low–high / high–low), best sellers, and rating
- **Search** with a dedicated overlay and URL-synced query state
- **Quick view modal** for browsing product details without leaving the grid
- **Size guide** and per-product care instructions
- **Wishlist** with persistent storage and a dedicated page
- **Cart drawer and full cart page** with quantity controls
- **Free shipping threshold** of PKR 5,000 with live cart totals
- **PKR currency formatting** throughout the storefront

### Checkout
- Shipping details form with validation
- Order confirmation screen with a generated order reference
- Concierge follow-up messaging (WhatsApp/SMS) for delivery verification

### Marketing & UX
- Hero section, category tiles, new arrivals, best sellers, and editorial banners
- Newsletter signup with a demo voucher code
- Testimonials and trust badges
- Toast notifications for cart, wishlist, and form actions
- Responsive layouts with mobile-friendly navigation and filters
- Subtle luxury animations and custom Tailwind design tokens

### Persistence
- Cart and wishlist are saved to `localStorage` (`noore_cart`, `noore_wishlist`) and restored on reload

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 |
| Language | TypeScript 5 |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Routing | React Router 6 |
| Icons | lucide-react |
| Utilities | clsx, tailwind-merge |
| Deployment | Netlify (SPA redirects configured) |

---

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm

### Installation

```bash
git clone https://github.com/hamza9156/noore-fashion.git
cd noore-fashion
npm install
```

### Development

```bash
npm run dev
```

Vite will start a local dev server (typically at `http://localhost:5173`).

### Production build

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check with `tsc` and build for production |
| `npm run preview` | Preview the production build locally |

---

## Project Structure

```text
noore-fashion/
├── public/
│   └── _redirects            # Netlify SPA fallback
├── src/
│   ├── components/           # Navbar, cart drawer, product cards, modals, filters…
│   ├── context/
│   │   └── ShopContext.tsx   # Cart, wishlist, search, quick view, toasts
│   ├── data/
│   │   └── products.ts       # Static product catalogue (32 items)
│   ├── pages/                # Home, shop, product detail, cart, wishlist
│   ├── types/                # Shared TypeScript interfaces
│   ├── App.tsx               # Router and global layout
│   ├── index.css             # Tailwind layers and base styles
│   └── main.tsx              # Application entry point
├── index.html                # HTML shell, fonts, and SEO meta tags
├── netlify.toml              # Build command and SPA redirects
├── tailwind.config.js        # Brand colours, fonts, shadows, animations
├── tsconfig.json
└── vite.config.ts
```

---

## Design System

The brand palette and typography are defined as Tailwind tokens in `tailwind.config.js`:

- **Ivory** `#FAF7F2` — page background
- **Beige** `#E9DFD1` — surfaces and dividers
- **Brown** `#382B25` — primary text
- **Gold** `#C5A16A` — accents and calls to action
- **Display:** Cinzel · **Serif:** Cormorant Garamond · **Sans:** Plus Jakarta Sans

---

## Data Model

Products follow the `Product` interface in `src/types/index.ts`, including fabric, suit type, piece count, colour, design details, pricing, ratings, collection, imagery, sizing, and SKU. To update the catalogue, edit `src/data/products.ts`.

---

## Deployment

The repository includes a `netlify.toml` configured to:

- Build with `npm run build`
- Publish the `dist` directory
- Redirect all routes to `index.html` for client-side routing

Import the repository into Netlify, or run `netlify deploy` after installing the Netlify CLI.

---

## Roadmap

- Connect a backend/CMS for dynamic product and inventory management
- Integrate a payment gateway and real order processing
- Add user accounts and server-side wishlist/cart sync
- Add product reviews and rating submission

---

## License

No license has been specified for this project. All rights reserved by NOORÉ.
