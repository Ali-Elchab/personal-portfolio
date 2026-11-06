export const STATUS = {
  live: { label: "Live product", group: "My products" },
  inuse: { label: "In use at VisionRise", group: "My products" },
  development: { label: "In development", group: "My products" },
  built: { label: "Built, not launched", group: "My products" },
  published: { label: "Live on stores", group: "Client apps at Brain" },
  internal: { label: "Private system", group: "Client apps at Brain" },
  opensource: { label: "Open source", group: "Open source" },
};

export const GROUP_ORDER = ["My products", "Client apps at Brain", "Open source"];

const brainRole =
  "Built end to end at Brain Solutions: client conversations, Laravel backend, Flutter app and store release";
const brainPrivateRole =
  "Built end to end at Brain Solutions: client conversations, Laravel backend, Flutter app and delivery";

export const projects = [
  {
    slug: "appointly",
    title: "Appointly",
    tagline: "Appointment SaaS for clinics, by VisionRise",
    status: "live",
    featured: true,
    platform: "wide",
    summary:
      "Multi-tenant booking SaaS for clinics: a staff app, a booking website and patient portal for each clinic, and an AI assistant. Live in production.",
    overview:
      "Appointly is the first product of my startup, VisionRise. Many clinics run on one platform, each with its own isolated data. Staff manage the calendar, patients and payments in a Flutter app. Each clinic gets a public website with online booking, and patients get an account to follow their visits. Staff can also ask an AI assistant to book appointments in plain language. It is live in production and onboarding its first clinics.",
    role: "Solo: product, Flutter, React, Laravel, deployment and operations",
    highlights: [
      "Staff app in Flutter (web and installable PWA): calendar, appointments, patients, payments, packages, reports, two-factor login and app lock",
      "Clinic website and patient portal in React and TypeScript: a public site per clinic with online booking, patient accounts and a visit dashboard",
      "AI assistant on OpenAI: staff type or speak a request such as booking a cleaning next Thursday at 4 pm, and the appointment is created",
      "Multi-tenant by design: isolated data per clinic, with modules switched on or off per clinic from a Laravel and Filament super-admin panel",
      "Arabic, English and French with RTL",
      "Docker on a VPS, CI and deploy on every push, Cloudflare, nightly encrypted backups with a tested restore",
      "About 560 backend, 300 Flutter and 37 React automated tests",
    ],
    stack: [
      "Flutter Web",
      "Cubit",
      "GetIt",
      "GoRouter",
      "Dio",
      "React",
      "TypeScript",
      "Laravel 11",
      "Filament",
      "MySQL",
      "OpenAI",
      "Cloudflare",
      "Docker",
    ],
    links: { liveUrl: "https://appointlyapp.org" },
  },
  {
    slug: "dsr",
    title: "DSR",
    tagline: "Small-business app for shops (Daily Sales Record, working name)",
    status: "development",
    featured: true,
    platform: "phone",
    summary:
      "Multi-tenant app for small shops: sales, POS, stock, customers and dues, each module switched on per company. In development, not released.",
    overview:
      "DSR, short for Daily Sales Record, is a working name that may change. It is a simple, affordable app for small shops. Each company is an isolated tenant and turns on only the modules it needs. It is a Flutter phone and tablet app in English, Arabic and French, with a Laravel and Filament backend. I am building it with a marketing partner. It is not released yet.",
    role: "Product, Flutter app and Laravel backend",
    highlights: [
      "Built so far: tenancy and module switching, products and stock per branch, customers with dues and store credit, sales, payments, POS and a dashboard",
      "Still to build: returns, quotations, expenses and reports, then CRM, to-dos and appointments",
      "Phone and tablet layouts, English, Arabic with RTL and French, light and dark themes",
      "Filament super-admin panel on the web, Sanctum auth and role permissions",
      "900+ automated tests",
    ],
    stack: ["Flutter", "Laravel 12", "Filament", "Sanctum", "MySQL"],
    links: {},
  },
  {
    slug: "visionrise-portal",
    title: "VisionRise Portal",
    tagline: "Multi-tenant management portal for small businesses",
    status: "inuse",
    featured: true,
    platform: "wide",
    summary:
      "Work portal for running a small business: income and expenses, clients, quotations, CRM pipeline, to-dos, team, reports and subscriptions.",
    overview:
      "The portal I built to run VisionRise. Every company is a team with its own isolated data, so it can also be offered to other small businesses. It is in use at VisionRise today.",
    role: "Designed and built end to end",
    highlights: [
      "Income and expenses, one-off and recurring, with monthly profit reports",
      "Quotations with a public accept or decline link, PDF output and a full history",
      "CRM pipeline with deals, stages, forecasts and a sales report",
      "To-do lists with reminders, repeats and shared lists",
      "Teams, roles and invitations, with every query scoped to the team and covered by isolation tests",
      "Subscriptions and billing states: trials, read-only and suspended",
      "Daily database and per-team backups",
    ],
    stack: ["Laravel 13", "Filament 5", "MySQL", "Pest"],
    links: {},
  },
  {
    slug: "brain-wms",
    title: "Brain WMS",
    tagline: "Multi-tenant warehouse management",
    status: "published",
    featured: true,
    platform: "phone",
    summary:
      "Warehouse management app for stock, purchasing and material requests, with a local cache that syncs at startup. Resold to multiple companies. Live on Google Play.",
    overview:
      "A generic warehouse management system that companies use to run stock operations from a phone, resold to multiple companies. Each company is an isolated tenant on a Laravel backend with a Filament admin panel, and the Flutter app talks to it over a versioned REST API. The app keeps a local SQLite copy of the master data so it stays usable on unreliable warehouse Wi-Fi.",
    role: brainRole,
    highlights: [
      "Stock counts, transfers and transfer requests, adjustments and item movement across warehouses and locations",
      "Purchasing, suppliers, sites and material-request flows with role-based access",
      "Local SQLite (Drift) cache with a startup sync screen and a dedicated sync feature",
      "Multi-tenant backend: every query is scoped to the company, with API-key routes for integrations",
      "Push notifications through Firebase Cloud Messaging",
      "Arabic, English and French with RTL support",
      "Published on Google Play",
    ],
    caseStudy: {
      challenge:
        "Warehouse staff work on weak Wi-Fi, several companies share one system, and every stock movement has to be right.",
      approach:
        "The app keeps a local SQLite copy of master data and syncs it at startup, so counting and issuing don't wait on the network. On the backend every query is scoped to the active company and permissions are checked per role, so tenants never see each other's data.",
    },
    stack: ["Flutter", "Cubit", "GoRouter", "Drift / SQLite", "Firebase FCM", "Laravel 11", "Filament", "MySQL"],
    links: { playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.wms" },
  },
  {
    slug: "brain-gold",
    title: "Brain Gold",
    tagline: "RFID-first inventory for gold retailers",
    status: "internal",
    featured: true,
    platform: "phone",
    summary:
      "Warehouse app for gold retailers built around RFID handhelds, barcode scanning, live metal prices and offline sync.",
    overview:
      "Inventory management for gold retail, where every piece is tagged and counted. The app reads RFID tags from Chainway and Zebra handheld readers, scans barcodes with the camera, and prices stock against live metal rates by type and purity.",
    role: brainPrivateRole,
    highlights: [
      "RFID integration for Chainway and Zebra handhelds through native Flutter plugins",
      "Barcode scanning with the camera as a fallback",
      "Metal types, purities and live metal prices in the data model",
      "Stock counts, purchasing and suppliers with local SQLite (Drift) storage and sync",
      "Multi-tenant Laravel backend with a Filament admin panel",
    ],
    caseStudy: {
      challenge:
        "Gold pieces are tagged and counted one by one, and the shop's handheld readers come from different vendors with different SDKs.",
      approach:
        "The app talks to both Chainway and Zebra readers through native plugins and has its own RFID settings screen. A stock count compares the scanned tags with expected stock and lets staff review anything missing, with barcode scanning as a fallback.",
    },
    stack: ["Flutter", "Cubit", "Chainway RFID", "Zebra RFID", "mobile_scanner", "Drift / SQLite", "Laravel 11", "Filament"],
    links: {},
  },
  {
    slug: "civissol",
    title: "Civissol",
    tagline: "Inventory, equipment and fuel for site operations",
    status: "internal",
    featured: true,
    platform: "phone",
    summary:
      "Inventory, equipment, diesel and purchasing app for site-based operations, connected to a Laravel backend.",
    overview:
      "An operations app for a company running work across multiple sites. Storekeepers and site staff request and issue materials, log diesel and fuel, track equipment, and raise purchase requests, while managers approve everything from their own view.",
    role: brainPrivateRole,
    highlights: [
      "Material requests, item issuing and multi-warehouse stock",
      "Equipment tracking with site assignment and diesel requests",
      "Purchasing with request orders and supplier quotations",
      "Local SQLite (Drift) storage with sync, voice notes and camera attachments",
      "Five user types with role-based access, push notifications, Arabic / English / French",
    ],
    stack: ["Flutter", "Cubit", "GoRouter", "Drift / SQLite", "Firebase FCM", "Laravel 11", "Filament"],
    links: {},
  },
  {
    slug: "excellence",
    title: "Excellence Quality",
    tagline: "CRM and audit management for ISO certification companies",
    status: "published",
    featured: true,
    platform: "phone",
    summary:
      "CRM for ISO certification companies: lead pipeline with admin approvals, auditor scheduling, client portal and dashboards. Live on the App Store and Google Play.",
    overview:
      "A mobile CRM that takes a client from the first lead to the final certification. Sales staff move leads through structured stages, admins approve at key milestones, auditors schedule and run on-site appointments, and clients follow their own progress in a portal.",
    role: brainRole,
    highlights: [
      "Lead pipeline with structured stages and statuses, from first contact to offer approval and signature",
      "Admin approval flows at critical pipeline milestones",
      "Auditor role for scheduling appointments and on-site assessments",
      "Client portal with progress tracking, audit reports and certificates",
      "Activity and interaction logging across the lead lifecycle",
      "Dashboards with charts, conversion rates and team activity",
      "Multi-role access and push notifications",
      "Published on the App Store and Google Play",
    ],
    stack: ["Flutter", "Cubit", "GoRouter", "fl_chart", "Firebase FCM", "Laravel"],
    links: {
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.excellence",
      appStoreUrl: "https://apps.apple.com/us/app/excellence-qualit%C3%A9/id6768603501",
    },
  },
  {
    slug: "dar-alrafidain",
    title: "Dar Alrafidain",
    tagline: "Arabic e-book and audiobook platform",
    status: "published",
    featured: true,
    platform: "phone",
    summary:
      "Arabic digital library with in-app purchases, encrypted offline reading and audio playback. Live on the App Store and Play Store.",
    overview:
      "A digital library for an Arabic publisher. Readers buy books in the app, download them for offline reading, and follow the publisher's posts and announcements. Content is encrypted on the device so downloaded books can't simply be copied out.",
    role: "Built part of the app at Brain Solutions",
    highlights: [
      "In-app purchases and online card payments (Stripe)",
      "EPUB reader plus background audio playback",
      "Encrypted offline downloads",
      "Sign in with Apple and Google",
      "Posts, announcements and push notifications",
      "Published on both stores",
    ],
    stack: ["Flutter", "Bloc", "Stripe", "In-app purchase", "just_audio", "epub_view", "Firebase FCM"],
    links: {
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.daralrafidain2",
      appStoreUrl:
        "https://apps.apple.com/us/app/dar-al-rafidayn-%D8%AF%D8%A7%D8%B1-%D8%A7%D9%84%D8%B1%D8%A7%D9%81%D8%AF%D9%8A%D9%86/id6479602448",
    },
  },
  {
    slug: "pos",
    title: "Retail POS",
    tagline: "Multi-tenant point of sale on Flutter Web",
    status: "built",
    featured: true,
    platform: "wide",
    summary:
      "Feature-complete web POS for retail: cash sessions, held sales, refunds, promotions, stock counts and receipt printing.",
    overview:
      "A point-of-sale system that runs in the browser and is built to be sold to several shops from one backend. It covers the daily till workflow as well as back-office stock. It is feature-complete and not publicly launched yet.",
    role: "Solo: Flutter Web app and Laravel API",
    highlights: [
      "Cash sessions and cash movements, held sales, refunds",
      "Promotions, price tiers and barcode-based product lookup",
      "Stock counts, purchases and product import batches",
      "PDF receipt printing",
      "Three languages and Sentry monitoring",
    ],
    stack: ["Flutter Web", "Cubit", "GoRouter", "Laravel", "MySQL", "Sentry"],
    links: {},
  },
  {
    slug: "ecom",
    title: "Ecom",
    tagline: "Multi-store eCommerce app and backend",
    status: "built",
    featured: false,
    platform: "phone",
    summary:
      "Full eCommerce app with multi-store support, variants, coupons, wishlist, addresses and orders, on a Laravel backend. Built, not published.",
    overview:
      "An eCommerce app I built on my own, taking what I learned from client shops and rebuilding the flows with a cleaner architecture. The Laravel backend handles multiple stores and branches, so one system can serve several shops. It is complete and not published yet.",
    role: "Solo: Flutter app and Laravel API",
    highlights: [
      "Category browsing, product search, variants and product media",
      "Cart, coupons, checkout and order status history",
      "Wishlist, saved addresses and account settings",
      "Multiple stores and branches with per-branch inventory",
      "Admin-managed home sections, banners and pages",
      "Arabic, English and French",
    ],
    stack: ["Flutter", "Cubit", "GoRouter", "get_it", "Laravel", "MySQL"],
    links: {},
  },
  {
    slug: "servio",
    title: "Servio",
    tagline: "Service-provider directory",
    status: "development",
    featured: false,
    platform: "phone",
    summary:
      "Directory app where people find service providers by category and location. Flutter app and Laravel API with an admin panel, in development.",
    overview:
      "A directory app that connects people with local service providers. The Laravel API is the more complete half: categories, provider profiles with media, ratings, favorites, city and area data, a radius search by coordinates and a Filament admin panel. The Flutter app has onboarding, language choice, customer and provider registration, guest mode, a home screen with categories and providers, and a profile. Screens for provider details, ratings, favorites and search are still to build. Both repositories are public. It is not launched.",
    role: "Solo: Flutter app and Laravel API",
    highlights: [
      "API: categories, providers with media, ratings, favorites, cities and areas, and a radius search by latitude and longitude",
      "Sanctum token auth with registration, login and account deletion, plus an API-key guard and Arabic and English responses",
      "Filament admin panel for categories, locations, providers and provider payments",
      "App: onboarding, language selection, customer and provider sign-up, guest mode, home and profile",
      "Local Drift cache, Cubit state management and GoRouter navigation",
    ],
    stack: ["Flutter", "Cubit", "Drift / SQLite", "GoRouter", "Laravel 12", "Filament", "Sanctum", "MySQL"],
    links: { gitUrl: "https://github.com/Ali-Elchab/servio" },
  },
  {
    slug: "visionrise-website",
    title: "VisionRise website",
    tagline: "Company website for VisionRise",
    status: "live",
    featured: false,
    platform: "wide",
    summary:
      "The VisionRise website: what the company builds, the Appointly product, how setup and support work, and a free-demo call to action. Built in React.",
    overview:
      "The public website for VisionRise. It explains the offer, ready-to-use software for small businesses that is set up for the customer, with team training and support, presents Appointly with interactive previews, and invites visitors to book a free demo.",
    role: "Designed and built by me",
    highlights: [
      "Product section with interactive previews of Appointly",
      "Four-step explanation of demo, setup, training and support",
      "Mobile-friendly layout",
    ],
    stack: ["React"],
    links: { liveUrl: "https://vision-rise.co" },
  },
  {
    slug: "flutter-skeleton",
    title: "Flutter Starter Skeleton",
    tagline: "Production-ready Flutter starter kit",
    status: "opensource",
    featured: false,
    platform: "phone",
    summary:
      "Starter kit with clean architecture, Cubit, GoRouter, auth flow, API handler, theming and localization. Used at Brain Solutions; cut new project setup time by about 60%.",
    overview:
      "The template I start new apps from, and the base I used at Brain Solutions. It ships the parts every business app needs so a new project begins at features instead of plumbing.",
    role: "My own project, used at Brain Solutions",
    highlights: [
      "Clean architecture with Cubit state management",
      "GoRouter navigation and a reusable auth flow",
      "API handler, theming, localization and environment config",
    ],
    stack: ["Flutter", "Cubit", "GoRouter", "Dio"],
    links: { gitUrl: "https://github.com/Ali-Elchab/flutter_skeleton" },
  },
  {
    slug: "freshzone",
    title: "FreshZone",
    tagline: "Supermarket eCommerce app",
    status: "internal",
    featured: false,
    platform: "phone",
    summary:
      "Supermarket app with category browsing, search, cart, promo codes and checkout, built on clean architecture.",
    overview:
      "A grocery shopping app for a supermarket chain, from browsing to checkout.",
    role: brainPrivateRole,
    highlights: [
      "Category browsing and product search",
      "Cart, promo handling and checkout",
      "Clean architecture with a Laravel backend",
    ],
    stack: ["Flutter", "Laravel"],
    links: {},
  },
  {
    slug: "brain-stores",
    title: "Brain Stores",
    tagline: "Online store for electronics and POS hardware",
    status: "published",
    featured: false,
    platform: "phone",
    summary:
      "Shopping app for electronics, computers, POS systems, printers and scanners, with category browsing, product specs and cart. Live on the App Store and Google Play.",
    overview:
      "An online store app for a retail hardware catalogue. Customers browse categories such as POS systems, printers, scanners, scales and laptops, open a product to read its specification, and add it to their cart.",
    role: brainRole,
    highlights: [
      "Category browsing across POS systems, printers, scanners, scales, price checkers and laptops",
      "Product pages with price, specification table and add to cart",
      "Home screen with promotional banners, featured products and search",
      "Published on the App Store and Google Play",
    ],
    stack: ["Flutter", "Laravel"],
    links: {
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.brain_stores",
      appStoreUrl: "https://apps.apple.com/us/app/brain-stores/id6477773355",
    },
  },
  {
    slug: "sweet-deals",
    title: "Sweet Deals",
    tagline: "Bulk-buying app for a sweets shop in Lebanon",
    status: "published",
    featured: false,
    platform: "phone",
    summary:
      "eCommerce app for a sweets and chocolates shop in Lebanon, with bulk buying and category browsing. Live on both stores.",
    overview:
      "An ordering app for a Lebanese sweets and chocolate shop. Customers browse categories, buy in bulk and check out from their phone.",
    role: brainRole,
    highlights: [
      "Category browsing across chocolates, candies and drinks",
      "Bulk-buying flows and a smooth checkout",
      "Published on the App Store and Google Play",
    ],
    stack: ["Flutter", "Laravel"],
    links: {
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.brainsolutions.sweetdeals&pli=1",
      appStoreUrl: "https://apps.apple.com/us/app/sweet-deals-lebanon/id6578441396",
    },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
