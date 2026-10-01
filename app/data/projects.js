export const STATUS = {
  published: { label: "Live on stores", group: "Published apps" },
  internal: { label: "Private system", group: "Published apps" },
  product: { label: "My own product", group: "Owned products" },
  opensource: { label: "Open source", group: "Open source & experiments" },
  prototype: { label: "Prototype", group: "Open source & experiments" },
};

export const GROUP_ORDER = ["Published apps", "Owned products", "Open source & experiments"];

export const projects = [
  {
    slug: "brain-wms",
    title: "Brain WMS",
    tagline: "Multi-tenant warehouse management",
    status: "published",
    featured: true,
    platform: "phone",
    summary:
      "Warehouse management app for stock, purchasing and material requests, with a local cache that syncs at startup. Live on Google Play.",
    overview:
      "A generic warehouse management system that companies use to run stock operations from a phone. Each company is an isolated tenant on a Laravel backend with a Filament admin panel, and the Flutter app talks to it over a versioned REST API. The app keeps a local SQLite copy of the master data so it stays usable on unreliable warehouse Wi-Fi.",
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
    highlights: [
      "Material requests, item issuing and multi-warehouse stock",
      "Equipment tracking with site assignment and diesel requests",
      "Purchasing with request orders and supplier quotations",
      "Local SQLite (Drift) storage with sync, voice notes and camera attachments",
      "Role-based access, push notifications, Arabic / English / French",
    ],
    stack: ["Flutter", "Cubit", "GoRouter", "Drift / SQLite", "Firebase FCM", "Laravel 11", "Filament"],
    links: {},
  },
  {
    slug: "appointly",
    title: "Appointly",
    tagline: "Appointment management SaaS for clinics and salons",
    status: "product",
    featured: true,
    platform: "wide",
    summary:
      "Live appointment booking SaaS: calendar, public booking page, customer portal, packages and reports.",
    overview:
      "A multi-tenant SaaS I built end to end, now in production. Businesses manage their calendar, services and resources, and customers book through a public page unique to each business. The web app is Flutter Web with a Laravel API and Filament admin panels for the platform and for each tenant.",
    role: "Solo: product, Flutter Web, Laravel API and admin panels",
    highlights: [
      "Multi-tenant by design, with a tenant isolation test suite",
      "Calendar with working-hours-based availability and conflict checks",
      "Public booking page per business and a customer self-service portal",
      "Session packages, payments and revenue reports",
      "Automated reminder emails",
      "Sentry monitoring and three languages",
    ],
    stack: ["Flutter Web", "Cubit", "GoRouter", "Laravel 11", "Filament", "MySQL", "Sentry"],
    links: { liveUrl: "https://appointlyapp.org" },
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
    slug: "freshzone",
    title: "FreshZone",
    tagline: "Supermarket eCommerce app",
    status: "internal",
    featured: true,
    platform: "phone",
    summary:
      "Supermarket app with category browsing, search, cart, promo codes and checkout, built on clean architecture.",
    overview:
      "A grocery shopping app for a supermarket chain, from browsing to checkout.",
    highlights: [
      "Category browsing and product search",
      "Cart, promo handling and checkout",
      "Clean architecture with a Laravel backend",
    ],
    stack: ["Flutter", "Laravel"],
    links: {},
  },
  {
    slug: "dar-alrafidain",
    title: "Dar Alrafidain",
    tagline: "Arabic e-book and audiobook platform",
    status: "published",
    featured: false,
    platform: "phone",
    summary:
      "Arabic digital library with in-app purchases, encrypted offline reading and audio playback. Live on the App Store and Play Store.",
    overview:
      "A digital library for an Arabic publisher. Readers buy books in the app, download them for offline reading, and follow the publisher's posts and announcements. Content is encrypted on the device so downloaded books can't simply be copied out.",
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
  {
    slug: "pos",
    title: "Retail POS",
    tagline: "Multi-tenant point of sale on Flutter Web",
    status: "product",
    featured: false,
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
    status: "product",
    featured: false,
    platform: "phone",
    summary:
      "Full eCommerce app with multi-store support, variants, coupons, wishlist, addresses and orders, on a Laravel backend.",
    overview:
      "An eCommerce app I built on my own, taking what I learned from client shops and rebuilding the flows with a cleaner architecture. The Laravel backend handles multiple stores and branches, so one system can serve several shops.",
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
    tagline: "Service provider marketplace",
    status: "opensource",
    featured: false,
    platform: "phone",
    summary:
      "Marketplace where providers subscribe monthly to list services in categorized directories. Flutter and Laravel.",
    overview:
      "A multi-role marketplace connecting service providers with customers. Providers pay a monthly subscription to appear in categorized directories with a profile and media.",
    highlights: [
      "Multi-role accounts for providers and customers",
      "Provider profiles with media uploads",
      "Deep linking and category-based discovery",
    ],
    stack: ["Flutter", "Laravel"],
    links: { gitUrl: "https://github.com/Ali-Elchab/servio" },
  },
  {
    slug: "flutter-skeleton",
    title: "Flutter Starter Skeleton",
    tagline: "Production-ready Flutter starter kit",
    status: "opensource",
    featured: false,
    platform: "phone",
    summary:
      "Starter kit with clean architecture, Cubit, GoRouter, auth flow, API handler, theming and localization. Cut new project setup time by 60%.",
    overview:
      "The template I start new apps from. It ships the parts every business app needs so a new project begins at features instead of plumbing.",
    highlights: [
      "Clean architecture with Cubit state management",
      "GoRouter navigation and a reusable auth flow",
      "API handler, theming, localization and environment config",
    ],
    stack: ["Flutter", "Cubit", "GoRouter", "Dio"],
    links: { gitUrl: "https://github.com/Ali-Elchab/flutter_skeleton" },
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
