export const projects = [
  {
    slug: "neverending",
    title: "NEVERENDING",
    type: "Fullstack E-Commerce",
    subtitle: "Online shopping website with admin panel.",
    description:
      "An online shopping website where users can browse products, manage their cart, and go through a structured shopping flow. It also includes an admin panel for managing products, orders, and store content.",
    details:
      "NEVERENDING is a fullstack e-commerce project focused on building a simple online store experience with product browsing, cart flow, checkout process, and admin-side content management.",
    features: [
      "Product catalog with category-based browsing",
      "Product detail page with variant and stock information",
      "Cart and checkout flow for customers",
      "Admin panel for managing products, banners, and orders",
    ],
    stack: [
      "Laravel",
      "Inertia.js",
      "Vue.js",
      "Tailwind CSS",
      "MySQL",
      "Filament",
    ],
    image: "/projects/neverending.png",
    repo: "https://github.com/radiityy/online-shop",
    live: "https://online-shop-production-b2b5.up.railway.app/",
  },
  {
    slug: "memoir",
    title: "Memoir",
    type: "Fullstack Web App",
    subtitle: "Personal memory journal with photos and moods.",
    description:
      "A personal memory journal app where users can save moments with photos, captions, moods, locations, and revisit them through recap and on-this-day pages.",
    details:
      "Memoir is a fullstack web app built to store personal memories in a clean and nostalgic way. Users can upload photos, write captions, add moods and locations, and revisit past moments through recap and on-this-day features.",
    features: [
      "Upload and save photo memories",
      "Add captions, moods, locations, and tape colors",
      "Browse memories through feed and detail pages",
      "Revisit past moments with recap and on-this-day pages",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript", "Vercel"],
    image: "/projects/memoir.png",
    repo: "https://github.com/radiityy/memoir-app",
    live: "https://memoir.vercel.app/",
  },
  {
    slug: "7kaih-journal",
    title: "7KAIH Journal",
    type: "Laravel REST API",
    subtitle: "Student habit journal and validation system.",
    description:
      "A student habit journal system that helps students record daily activities, while teachers and parents can review, validate, and monitor their progress.",
    details:
      "7KAIH Journal is a backend API project for managing student daily habit journals. The system supports student check-ins, teacher and parent validation, and recap reports based on user roles.",
    features: [
      "Authentication and role-based access with Sanctum",
      "Daily habit check-in API for students",
      "Validation flow for teachers and parents",
      "Recap reports for students, classes, and children",
    ],
    stack: ["Laravel", "Sanctum", "MySQL", "Swagger"],
    image: "/projects/7kaih.png",
    repo: "https://github.com/radiityy/jurnal-7kaih",
    live: null,
  },
  {
    slug: "lynk",
    title: "Lynk",
    type: "Fullstack URL Shortener",
    subtitle: "Short link platform with tracking.",
    description:
      "A URL shortener platform that helps users turn long links into cleaner short links, manage links, and track redirect activity.",
    details:
      "Lynk is a fullstack URL shortener project designed to make long links easier to manage and share. It includes authentication, link management, redirect handling, and tracking features.",
    features: [
      "Create and manage short links",
      "Redirect short links to original URLs",
      "Track link activity and usage",
      "Authentication with JWT-based access",
    ],
    stack: ["React", "Tailwind CSS", "Go", "Gin", "GORM", "MySQL", "JWT"],
    image: "/projects/lynk.png",
    repo: "https://github.com/radiityy/url-shortener",
    live: null,
  },
];