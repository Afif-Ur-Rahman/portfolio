export const PROJECTS = [
  {
    id: "the-conqueror-developers",
    title: "The Conqueror Developers",
    description:
      "A full-stack real estate management platform with a super-admin dashboard covering leads, payments, receipts, and customer management — built with Next.js, TypeScript, Node.js, Express, and MongoDB.",
    image: "/images/zaitoon-height/cover.png",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Zustand",
      "Radix UI",
      "Tailwind CSS",
    ],
    liveUrl: "https://theconquerordevelopers.com/",
  },
  {
    id: "secure-vault",
    title: "Secure Vault - Data",
    description:
      "A secure file-vault mobile app with 3-step authentication (PIN, secret word, pattern) and progressive lockout. Includes file upload, preview, download, deletion, category filtering, and admin tools for user/file management.",
    image: "/images/secure-vault/logo.png",
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Styled Components",
      "Zustand",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.securevault.hasbi",
    appStoreUrl:
      "https://apps.apple.com/us/app/vault-top-security/id6761527136",
    isMobile: true,
  },
  {
    id: "yallahnshoof",
    title: "YallahNshoof",
    description:
      "An all-in-one marketplace app for buying, selling, and renting houses, apartments, cars, and more — connecting buyers, sellers, and renters in a simple and secure way.",
    image: "/images/yallahnshoof/logo.png",
    tags: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Styled Components",
      "Zustand",
    ],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.yallahnshoof",
    appStoreUrl: "https://apps.apple.com/us/app/yallahnshoof/id6749572975",
    isMobile: true,
  },
  {
    id: "restros",
    title: "Restros",
    description:
      "A role-based restaurant management system with panels for Owners, Chefs, Waiters, Accountants, and Admins. Features order management, menu & employee tools, table assignments, real-time kitchen workflows, and analytics dashboards.",
    image: "/images/restaurant/cover.jpg",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "ApexCharts",
      "Zustand",
      "Tailwind CSS",
    ],
    liveUrl: "https://ui.restros.app/",
  },
];

export const PROJECTS_DETAILS = [
  {
    id: "the-conqueror-developers",
    description:
      "Built a full-stack real estate management platform for The Conqueror Developers to streamline customer, property, payment, receipt, employee, and lead management through a secure role-based dashboard.",
    features: [
      {
        label: "Customer Management",
        detail:
          "Add, search, filter, and manage customers with instant UI updates, separate loading/submission states, and route-based customer profiles.",
      },
      {
        label: "Property & Unit Management",
        detail:
          "Book units, edit customer information, and manage property details with real-time financial calculations (received, outstanding, hold, and overdue amounts).",
      },
      {
        label: "Payments & Receipts",
        detail:
          "Support custom and installment payment plans, auto-generate installment schedules, record/edit receipts, and automatically synchronize payment and unit balances. Generate printable A4 receipts and customer statements.",
      },
      {
        label: "Lead Management",
        detail:
          "Track incoming sales leads with pending/contacted statuses, live counters, persisted global state, and notification badges for pending follow-ups.",
      },
      {
        label: "Employee Management",
        detail:
          "Add, search, filter, and soft-delete employees with access restricted to authorized roles.",
      },
      {
        label: "Profile Management",
        detail: "Secure password update flow with validation.",
      },
    ],
    security: {
      label: "Security & Access Control",
      detail:
        "Implemented role-based authorization for Super Admin, Admin, and Accountant using Next.js middleware and layout-level guards, ensuring only authorized users can access sensitive operations.",
    },
    automation: {
      label: "Automation",
      detail:
        "Integrated automated email notifications for new leads, payment receipts, and OTP verification while keeping the application responsive through non-blocking background email processing.",
    },
    technicalHighlights: [
      "Responsive dashboard with optimized loading and submission states",
      "Real-time financial calculations synchronized with the backend",
      "Route-based data fetching with automatic state cleanup",
      "Instant UI updates without unnecessary refetching",
      "Printable PDF-friendly receipts and customer statements",
      "Scalable architecture with clean separation of concerns",
    ],
    gallery: [
      {
        title: "Login",
        description: "",
        image: "/images/zaitoon-height/login.png",
      },
      {
        title: "Customers",
        description:
          "Add, search, filter, and manage customers with instant UI updates, separate loading/submission states, and route-based customer profiles",
        image: "/images/zaitoon-height/Customer-page.png",
      },
      {
        title: "Units Information",
        description:
          "Book units, edit customer information, and manage property details with real-time financial calculations (received, outstanding, hold, and overdue amounts).",
        image: "/images/zaitoon-height/unit-information.png",
      },
      {
        title: "Payments",
        description:
          "Support custom and installment payment plans, auto-generate installment schedules, record/edit receipts, and automatically synchronize payment and unit balances. Generate printable A4 receipts and customer statements.",
        image: "/images/zaitoon-height/payments.png",
      },
      {
        title: "Receipts",
        description: "Generate printable receipts.",
        image: "/images/zaitoon-height/all-receipts.png",
      },
      {
        title: "Leads",
        description:
          "Track incoming sales leads with pending/contacted statuses, live counters, and notification badges for pending follow-ups.",
        image: "/images/zaitoon-height/leads.png",
      },
      {
        title: "Employees",
        description:
          "Add, search, filter, and soft-delete employees with access restricted to authorized roles.",
        image: "/images/zaitoon-height/employee.png",
      },
      {
        title: "Profile",
        description: "Secure password update flow with validation.",
        image: "/images/zaitoon-height/profile.png",
      },
      {
        title: "Calculator",
        description: "Integrated custom Calculator to enhance calculations.",
        image: "/images/zaitoon-height/calculator.png",
      },
    ],
  },
  {
    id: "secure-vault",
    description:
      "Built a secure file-vault mobile application using React Native, Expo, and TypeScript with three-layer authentication (PIN, secret word, and pattern lock), progressive lockout, and cross-device access via secure server storage. Supports in-app media playback, category filtering, soft-delete with recovery, and automatic permanent deletion of unrestored files.",
    features: [
      {
        label: "Three-Layer Authentication",
        detail:
          "Enforces sequential PIN → Password (secret word) → Pattern lock on every app reopen. Includes progressive lockout after repeated failed attempts and smooth visual feedback at each step.",
      },
      {
        label: "Secure Cross-Device Storage",
        detail:
          "Stores all user files and credentials on a secure backend so data can be fetched and managed from any device after successful authentication.",
      },
      {
        label: "Media Management & Preview",
        detail:
          "Upload, download, delete, and restore files with full in-app support for image previews, audio playback, and video playback without leaving the vault.",
      },
      {
        label: "Category Filtering",
        detail:
          "Filter vault contents instantly using tabs: All, Audio, Video, and Other for quick navigation and organization.",
      },
      {
        label: "Soft-Delete & Recovery",
        detail:
          "Tracks deleted files so users can restore them. Unrestored files are automatically purged after the retention period to keep the vault clean and secure.",
      },
      {
        label: "Admin & Credential Tools",
        detail:
          "Includes admin capabilities for user/file management and secure credential update flows.",
      },
    ],
    security: {
      label: "Security & Access Control",
      detail:
        "Implements strict three-step authentication with progressive lockout, secure server-side storage, and forced re-authentication on every app reopen to protect sensitive files across devices.",
    },
    automation: {
      label: "Automation",
      detail:
        "Automatically permanently deletes unrestored soft-deleted files after the retention window and maintains synchronized vault state across devices without manual intervention.",
    },
    technicalHighlights: [
      "React Native + Expo + TypeScript mobile architecture",
      "Three sequential authentication screens with progressive lockout",
      "Secure backend storage enabling cross-device access",
      "In-app image preview, audio playback, and video playback",
      "Tab-based category filtering (All / Audio / Video / Other)",
      "Soft-delete tracking with restore capability and auto-purge",
      "Clean separation of authentication flow and media vault UI",
    ],
    gallery: [
      {
        title: "Landing",
        description:
          "Entry screen with branding and a clear call-to-action to unlock the vault.",
        image: "/images/secure-vault/landing.jpg",
      },
      {
        title: "PIN",
        description:
          "First authentication layer with numeric PIN entry, visual feedback, and progressive lockout on failed attempts.",
        image: "/images/secure-vault/pin.jpg",
      },
      {
        title: "Password",
        description:
          "Second authentication layer for the secret word/password with secure input and continued lockout enforcement.",
        image: "/images/secure-vault/password.jpg",
      },
      {
        title: "Pattern",
        description:
          "Final authentication layer using a pattern lock grid with visual trail and error handling before granting vault access.",
        image: "/images/secure-vault/pattern.jpg",
      },
      {
        title: "Media",
        description:
          "Main vault screen with category tabs (All, Audio, Video, Other), in-app media playback/previews, upload/download, and soft-delete/restore management.",
        image: "/images/secure-vault/media.jpg",
      },
    ],
  },
  {
    id: "yallahnshoof",
    description:
      "Built an all-in-one marketplace mobile app that enables users to buy, sell, and rent houses, apartments, cars, and other items — connecting buyers, sellers, and renters through a simple, secure, and efficient platform.",
    features: [
      {
        label: "Buy & Sell Properties",
        detail:
          "List and browse houses, apartments, plots, and other real estate with detailed information, photos, and pricing for seamless property transactions.",
      },
      {
        label: "Cars & Vehicles",
        detail:
          "Buy, sell, or rent cars and other vehicles with dedicated listings, clear pricing, and easy discovery.",
      },
      {
        label: "Rent Anything",
        detail:
          "Support rental listings for properties, vehicles, and other items so users can lease or rent with confidence.",
      },
      {
        label: "Quick Listing Creation",
        detail:
          "Post new listings in minutes by adding photos, prices, and key details with a streamlined upload flow.",
      },
      {
        label: "Smart Search & Filters",
        detail:
          "Find exactly what you need using powerful search and filter options across categories, locations, and price ranges.",
      },
      {
        label: "Live Location on Google Maps",
        detail:
          "View the exact live location of each listing on an integrated Google Map for accurate navigation and better decision-making.",
      },
      {
        label: "Direct Communication",
        detail:
          "Chat instantly with buyers and sellers to ask questions, negotiate, and close deals without leaving the app.",
      },
      {
        label: "Favorites & Profile",
        detail:
          "Save preferred listings and manage personal profile settings for a personalized browsing experience.",
      },
    ],
    security: {
      label: "Security & User Experience",
      detail:
        "Designed with a secure and user-friendly interface that prioritizes smooth navigation, data protection, and a reliable experience for both casual and power users.",
    },
    automation: {
      label: "Marketplace Efficiency",
      detail:
        "Streamlined listing creation, real-time search results, and instant messaging reduce friction so users can list, discover, and communicate without unnecessary steps.",
    },
    technicalHighlights: [
      "Cross-platform React Native app for iOS and Android",
      "Category-based marketplace covering properties, vehicles, and general items",
      "Fast listing creation with photo upload and rich details",
      "Smart search and filtering for precise discovery",
      "Integrated Google Maps showing live item locations",
      "In-app chat for direct buyer–seller communication",
      "Favorites system and profile management for personalization",
      "Clean, secure, and responsive mobile-first experience",
    ],
    gallery: [
      {
        title: "Landing",
        description:
          "Welcome screen introducing the all-in-one marketplace experience.",
        image: "/images/yallahnshoof/landing.png",
      },
      {
        title: "Login",
        description: "Secure authentication screen for existing users.",
        image: "/images/yallahnshoof/login.png",
      },
      {
        title: "Signup",
        description: "Simple registration flow for new users.",
        image: "/images/yallahnshoof/signup.png",
      },
      {
        title: "Home",
        description:
          "Main feed showcasing featured listings and quick access to categories.",
        image: "/images/yallahnshoof/home.png",
      },
      {
        title: "Property Listings",
        description:
          "Browse houses, apartments, and plots with clear pricing and details.",
        image: "/images/yallahnshoof/property.png",
      },
      {
        title: "Listing Detail",
        description:
          "Full property or item details with photos, price, and contact options.",
        image: "/images/yallahnshoof/detail.png",
      },
      {
        title: "Marketplace",
        description:
          "Explore a wide range of items available for sale or rent.",
        image: "/images/yallahnshoof/marketplace.png",
      },
      {
        title: "Market Details",
        description:
          "Detailed view of marketplace listings with key information and actions.",
        image: "/images/yallahnshoof/market-details.png",
      },
      {
        title: "Favorites",
        description:
          "Saved listings for quick access to preferred properties and items.",
        image: "/images/yallahnshoof/favorite.png",
      },
      {
        title: "Profile",
        description: "User profile management and account settings.",
        image: "/images/yallahnshoof/profile.png",
      },
      {
        title: "Poll",
        description: "Interactive poll feature for community engagement.",
        image: "/images/yallahnshoof/poll.png",
      },
    ],
  },
  {
    id: "restros",
    description:
      "Built a role-based restaurant management system with dedicated panels for Owners, Chefs, Waiters, Accountants, and Admins. It covers order management, table assignments with QR ordering, menu & stock control, real-time kitchen workflows, employee tools, tips, and analytics dashboards.",
    features: [
      {
        label: "Dashboard & Analytics",
        detail:
          "View total revenue, pending revenue, and recent orders at a glance, along with interactive graphs for orders and payments to track performance in real time.",
      },
      {
        label: "Order Management",
        detail:
          "Monitor all orders with live statuses (pending, ready, served, etc.) and filter them by date, week, or month for efficient kitchen and service workflows.",
      },
      {
        label: "Table Management & QR Ordering",
        detail:
          "Add tables with seating types (indoor, outdoor, rooftop, etc.), assign or unassign waiters, and display QR codes. Customers scan the QR to open the menu and place orders directly.",
      },
      {
        label: "AI-Assisted Ordering",
        detail:
          "Integrated AI helps customers order from the menu based on medical conditions, diet preferences, or meal type (lunch, dinner, etc.) for a personalized experience.",
      },
      {
        label: "Menu Management",
        detail:
          "Add menu items and freely rearrange the order of items and categories so the digital menu always reflects the restaurant’s preferred layout.",
      },
      {
        label: "Stock & Inventory",
        detail:
          "Add stock items (oil, sugar, salt, etc.) that are automatically deducted when an order is completed. Track and manage wastage for accurate inventory control.",
      },
      {
        label: "Employee Management",
        detail:
          "Add or remove employees and control access according to their roles within the restaurant.",
      },
      {
        label: "Tips Configuration",
        detail:
          "Define preset tip values (e.g., 5, 10, 20) so customers can quickly select a tip amount during checkout.",
      },
      {
        label: "System Configuration",
        detail:
          "Update language and currency displayed on the menu, and set the AI API key used for intelligent food suggestions while ordering.",
      },
      {
        label: "Profile Management",
        detail:
          "Change the account password and update the restaurant logo or cover image.",
      },
    ],
    security: {
      label: "Role-Based Access Control",
      detail:
        "Separate panels and permissions for Owners, Chefs, Waiters, Accountants, and Admins ensure each user only accesses the features relevant to their role.",
    },
    automation: {
      label: "Automated Workflows",
      detail:
        "Stock is automatically deducted when orders are completed, QR codes enable self-service ordering, and AI provides real-time menu suggestions based on customer preferences or dietary needs.",
    },
    technicalHighlights: [
      "Role-based dashboards for Owners, Chefs, Waiters, Accountants, and Admins",
      "Real-time order status tracking with date/week/month filters",
      "QR-code table ordering with AI-powered dietary and preference suggestions",
      "Flexible menu builder with drag-and-drop item & category ordering",
      "Automatic stock deduction and wastage tracking on order completion",
      "Configurable tip presets, language, currency, and AI API key",
      "Analytics dashboard with revenue metrics and interactive charts",
      "Responsive Next.js frontend with clean separation of concerns",
    ],
    gallery: [
      {
        title: "Login",
        description:
          "Secure authentication screen for restaurant staff and admins.",
        image: "/images/restaurant/login.png",
      },
      {
        title: "Dashboard",
        description:
          "Overview of total revenue, pending revenue, recent orders, and graphs for orders and payments.",
        image: "/images/restaurant/dashboard.png",
      },
      {
        title: "Orders",
        description:
          "List of all orders with status (pending, ready, served, etc.) and filters by date, week, or month.",
        image: "/images/restaurant/orders.png",
      },
      {
        title: "Tables",
        description:
          "Manage tables by seating type, assign/unassign waiters, and generate QR codes for customer ordering.",
        image: "/images/restaurant/tables.png",
      },
      {
        title: "Menu",
        description:
          "Add menu items and rearrange the order of items and categories.",
        image: "/images/restaurant/menu.png",
      },
      {
        title: "Stocks",
        description:
          "Add stock items that auto-deduct on order completion and manage wastage.",
        image: "/images/restaurant/stocks.png",
      },
      {
        title: "Employees",
        description: "Add or delete restaurant employees.",
        image: "/images/restaurant/employee.png",
      },
      {
        title: "Tips",
        description: "Define preset tip values such as 5, 10, and 20.",
        image: "/images/restaurant/tips.png",
      },
      {
        title: "Configuration",
        description:
          "Update language, currency, and the AI API key used for menu suggestions.",
        image: "/images/restaurant/configuration.png",
      },
      {
        title: "Profile",
        description:
          "Change password and update restaurant logo or cover image.",
        image: "/images/restaurant/profile.png",
      },
    ],
  },
];
