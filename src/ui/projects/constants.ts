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
    details: true,
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
];
