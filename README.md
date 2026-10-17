# Ember & Basil — Premium Restaurant Website v1.1 (Header Layout Fix)

**What's new:** refined responsive header at narrow screen widths and desktop zoom, compact logo/controls, decorative top-bar icons that don't depend on font glyphs, and versioned CSS URLs to avoid stale Vercel styling. All menu, cart, checkout, order tracking, reservation, and staff-demo logic is unchanged.

**Vercel deployment:** upload the **contents of this ZIP** to the root of a GitHub repository, import it into Vercel, select Framework Preset **Other**, leave build command empty, and deploy. The root `index.html` and `vercel.json` must be at the repository root, not inside another folder. The About Us page is `/about/`.

**Important:** browser-local demo only, no real payment processing or cross-device reservations.

---

# Ember & Basil — Premium Restaurant Website

A responsive, premium-styled restaurant website with a **standalone About Us page**, menu browsing, customizable online ordering, checkout, simulated reservations, order tracking and a demo staff dashboard.

**This is a working, frontend-only demo**, not a live restaurant commerce platform. The fictional location and contact details are examples. No real order is submitted, no payment is collected, no live restaurant availability is checked, and no customer email or SMS is sent.

## Pages / URLs

| Page | Local file | Vercel URL |
| --- | --- | --- |
| Homepage | `index.html` | `/` |
| **About Us (standalone)** | `about/index.html` | `/about/` |
| Menu & online ordering | `index.html#menu` | `/#menu` |
| Table reservations | `index.html#reservations` | `/#reservations` |
| Order / booking tracking | `index.html#track` | `/#track` |
| Demo staff dashboard | `index.html#admin` | `/#admin` |

The About page is a separate HTML document with its own title, metadata, content and navigation — **not** a hidden SPA section. Menu, reservation, tracking and staff demos remain sections of the original customer app to preserve their working logic.

## Deploy to Vercel (GitHub → Vercel)

1. Extract the ZIP. Upload **the extracted ZIP contents** into the root of a new GitHub repository (or push the extracted directory as the repository root).
2. On [vercel.com](https://vercel.com), choose **Add New → Project**, select your GitHub repository, then import it.
3. **Framework Preset:** `Other`. **Root Directory:** repository root. **Build Command:** none / override OFF. **Output Directory:** leave empty / default. There is no Node or framework build step.
4. Deploy. Vercel's `vercel.json` serves the static site with clean URLs and trailing slashes. Visit your Vercel project URL and `/about/`.
5. Every GitHub update can be deployed automatically through Vercel's Git integration.

`vercel.json` configures clean URLs and two low-risk security headers. No environment variables, packages, API keys, or database are needed for the demo.

### Preview locally

Run a small local web server from this folder:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` and `http://localhost:8000/about/`. A local server is preferred to opening HTML via `file://`, as browsers may not resolve directory pages or assets consistently from a file URL.

## Features preserved

- Home landing page with featured dishes and two conversion paths (order online or book a table).
- Interactive menu with categories, search, veg-friendly filters, prices, descriptions and sold-out statuses.
- Customization, extras, quantity controls, special instructions and cart management.
- Delivery or pickup checkout, immediate or scheduled fulfillment, demo cash-on-delivery / pay-on-pickup, confirmation ID, promo code `WELCOME10` (10%, maximum ₱150).
- Simulated reservations: 1–12 guests, available time slots with demo capacity limits, seating, occasion, contact details, booking confirmation and cancellation.
- Order/booking lookup by reference and matching email; status timelines and printable demo confirmations.
- Demo staff dashboard: order and reservation statuses, product availability, pause reservations, reset demo data.
- Newsletter demo signup and responsive mobile menu.

Example seeded records (fresh browser): order `EB-1204`, booking `RSV-2048`, email `demo@example.com`.

## What's new in the premium redesign

- **Dedicated, deep-linkable `/about/` page**: story, philosophy, atmosphere, values, kitchen approach, and book/order calls to action.
- Sophisticated dark-emerald / warm-ivory / soft-gold palette, elegant large serif typography, framed editorial panels and more considered whitespace.
- Refined navigation, premium hero sections, footer, and custom favicon.
- Responsive desktop and mobile layouts.
- Remote restaurant imagery with a bundled SVG illustration fallback when photo CDNs can't load. Replace illustrative photography with photos you have rights to before publishing a real restaurant website.

## Project structure

```text
/ (repository root)
├── index.html               # Customer website / SPA flows
├── about/
│   └── index.html           # Dedicated About Us page
├── styles.css               # Shared design + original interactive app styles
├── about.css                # About page editorial layout
├── app.js                   # Customer ordering/reservation demo logic
├── about.js                 # About page mobile navigation
├── assets/
│   ├── favicon.svg
│   └── restaurant-interior.svg
├── vercel.json              # Vercel static hosting configuration
└── README.md
```

## Important: production limitations

All demo data is held in the current browser's `localStorage`. It does **not** sync across devices or users; bookings and capacity checks are simulated locally. The staff demo intentionally has **no authentication**, so do **not** put real customer personal data in this demo or operate it as a production ordering system.

To accept real orders or reservations, build a secure backend, database, server-enforced inventory/reservation locks, compliant payment checkout and webhooks, staff authentication/roles, order notifications, privacy/compliance practices, and real operational fulfillment. Client-side validation and local totals are not security controls.

## Customization

- **Restaurant name, fictional address, navigation, story, contact:** `index.html` and `about/index.html`.
- **Brand, layout, typography, colors:** `styles.css` and `about.css`.
- **Menu, prices, add-ons, promos, availability simulation:** top of `app.js` and its `totals` / `slotAvailability` functions.
- **Photos:** `--photo:url(...)` in the HTML and photo URLs in `app.js`.
- **Demo storage key:** `ember_basil_demo_v1` in `app.js`; change when making breaking data changes.
