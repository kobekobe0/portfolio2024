// Every project on the site. Add an entry here and it gets a case-study page,
// a row in the work register, a sitemap entry and a line in llms.txt.
//
// Set `published: false` to keep an entry out of the site until its details are checked.

export type Status = "In production" | "Shipped" | "Archived";

export type Project = {
  slug: string;
  title: string;
  /** One sentence, used in lists, meta descriptions and llms.txt. */
  summary: string;
  /** Opening paragraph of the case study. */
  description: string;
  org: string;
  role: string;
  kind: "Employment" | "Contract" | "Own product" | "Freelance" | "Project" | "School";
  period: string;
  /** Used for ordering, newest first. */
  sort: number;
  status: Status;
  stack: string[];
  built: string[];
  outcome?: string;
  images?: { src: string; alt: string; width: number; height: number }[];
  links?: { label: string; href: string }[];
  featured?: boolean;
  published?: boolean;
};

const all: Project[] = [
  {
    slug: "psbank-supplier-e-portal",
    title: "Supplier E-Portal",
    summary:
      "Supplier and contract management system for Philippine Savings Bank, covering contract computation and invoice syncing.",
    description:
      "The Supplier E-Portal (SEP) is the system Philippine Savings Bank uses to manage supplier contracts. Kobe develops and maintains it as a Software Engineer, owning the contract computation logic and the invoice syncing that connects it to other internal banking tools.",
    org: "Philippine Savings Bank (PSBank)",
    role: "Software Engineer",
    kind: "Employment",
    period: "Jun 2026 to present",
    sort: 202606,
    status: "In production",
    stack: ["C# .NET Core", "Oracle 19c", "PL/SQL", "React", "TypeScript", "Node.js", "PM2"],
    built: [
      "Backdated daily-rate support across the Oracle PL/SQL packages. The maker-checker approval flow now archives a superseded rate before updating it, so the full rate history stays auditable.",
      "A TypeScript validator for contract CSV uploads. It checks required columns, parses dates, rejects backdated entries and detects duplicates against records already staged, so bad data is caught before it reaches the database.",
      "A fix for a token-refresh race condition in the Node.js API proxy. A server-side token cache with single-flight deduplication means concurrent requests share one refresh instead of each starting their own.",
    ],
    outcome:
      "Sessions are stable under PM2 cluster mode, and contract uploads fail early with a readable list of errors instead of failing inside the database.",
    featured: true,
  },
  {
    slug: "prms-procurement-automation",
    title: "PRMS procurement and inventory automation",
    summary:
      "Automation module for the Property Records Management System, used by 200+ Land Registration Authority branches in the Philippines.",
    description:
      "The Property Records Management System (PRMS) is an enterprise application deployed across more than 200 Land Registration Authority branches nationwide. At Land Registration Systems Inc., Kobe built the module that automates how branches monitor stock and raise procurements.",
    org: "Land Registration Systems Inc.",
    role: "Junior Full-Stack Developer",
    kind: "Employment",
    period: "Feb 2025 to Jun 2026",
    sort: 202502,
    status: "In production",
    stack: ["C# .NET Core", "Dapper", "Angular 20", "AngularJS", "Next.js", "MSSQL", "Sybase", "Sequelize", "GitLab CI/CD"],
    built: [
      "Auto-generated procurements and consumption-based stock monitoring, with configurable real-time alerts when stock runs low.",
      "An item loss tagging system that stops lost assets from moving through procurement workflows and leaves an audit trail for central office officers.",
      "A centralized API response decoder for a third-party payment gateway, plus a cron server that finds and reprocesses missed transactions.",
      "The migration of legacy AngularJS screens to Angular 20, using reusable Angular Material components (data tables, dropdowns, file inputs, breadcrumbs, sidenav) backed by Sybase stored procedures for server-side pagination, sorting and search.",
      "GitLab CI/CD pipelines for automated build, test and deploy to staging.",
    ],
    outcome:
      "Manual procurement work dropped by about 50%. The cron server recovers up to 10 missed payment transactions per day with no manual intervention.",
    featured: true,
  },
  {
    slug: "resume-tailoring-saas",
    title: "Resume Tailoring SaaS",
    summary:
      "AI product that rewrites a resume against a job description using Claude, scores the ATS match and renders the PDF.",
    description:
      "A solo product, designed, built and shipped by Kobe. A user supplies a resume and a job description; the app rewrites the resume bullets to fit the role, scores how well the result matches, and produces a finished PDF.",
    org: "Solo project",
    role: "Designer and developer",
    kind: "Own product",
    period: "", // add the dates, e.g. "Mar 2026 to present"
    sort: 202601,
    status: "Shipped",
    published: false,
    stack: ["Next.js", "Node.js", "Express.js", "Prisma", "BullMQ", "Claude API", "Puppeteer", "Handlebars"],
    built: [
      "A BullMQ job pipeline that calls Claude Haiku for diff-based bullet rewriting, so only the bullets that need to change are rewritten.",
      "ATS match scoring for the tailored resume.",
      "PDF generation with Puppeteer and Handlebars templates.",
      "Credit-based usage deduction, and a lean prompt pipeline architecture documented in a system design write-up.",
    ],
    featured: true,
  },
  {
    slug: "truesight",
    title: "Truesight",
    summary:
      "Real-time image transaction platform for theme parks, where photographers upload from mobile and customers buy photos digitally.",
    description:
      "Truesight lets a theme park run its photo sales in one place, from the photographer's upload to the customer's purchase. Kobe architected and delivered it as a contract full-stack developer at Raksquad Tech.",
    org: "Raksquad Tech",
    role: "Full-Stack Developer (Contract)",
    kind: "Contract",
    period: "Jul 2023 to Jan 2024",
    sort: 202307,
    status: "Shipped",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "MUI", "DigitalOcean"],
    built: [
      "Real-time photo delivery and transaction state sync over Socket.IO.",
      "A mobile upload API for photographers and an in-app editing interface.",
      "Frontend and backend deployment on DigitalOcean.",
    ],
    outcome:
      "Stress-tested to handle 10 concurrent processors uploading 200+ photos at once from mobile. Several customers can buy digital photos at the same time, which reduces dependency on physical booths.",
    featured: true,
  },
  {
    slug: "navqms",
    title: "NAVQMS admin portal and client app",
    summary:
      "Multi-tenant admin portal and client application for NAVQMS, a quality management and compliance system for a US-based client.",
    description:
      "NAVQMS is a quality management system sold to companies on subscription. Kobe built the admin portal that manages those subscriptions and worked on the client application the subscribed companies use every day.",
    org: "NAVQMS",
    role: "Full-stack developer",
    kind: "Freelance",
    period: "Apr 2024 to Oct 2024",
    sort: 202404,
    status: "Shipped",
    stack: ["Node.js", "React", "Next.js", "PostgreSQL", "Sequelize", "shadcn/ui", "MUI", "Zustand", "TanStack Query"],
    featured: true,
    built: [
      "A multi-tenant admin portal for licenses and access control across subscribed companies, with per-company database credentials and real-time license tracking.",
      "The main client-facing application, delivering the core QMS workflows to end users across multiple organizations.",
      "Reusable UI components and API integrations for the client app.",
    ],
    images: [
      { src: "/images/work/navqms-admin-portal-1.webp", alt: "NAVQMS admin portal: regions table with search and status toggles", width: 1600, height: 803 },
      { src: "/images/work/navqms-admin-portal-2.webp", alt: "NAVQMS admin portal: license information dialog for a subscribed company", width: 1600, height: 801 },
      { src: "/images/work/navqms-client-app-1.webp", alt: "NAVQMS client app: dashboard with open, overdue and pending items", width: 1600, height: 804 },
      { src: "/images/work/navqms-client-app-2.webp", alt: "NAVQMS client app: deviation edit form", width: 1600, height: 804 },
    ],
  },
  {
    slug: "barangay-management-system",
    title: "Barangay Management System",
    summary:
      "Digitized record-keeping for a barangay of 2,000+ residents: resident records, document generation and census analytics.",
    description:
      "A barangay is the smallest unit of local government in the Philippines, and most of its paperwork is still manual. This system replaces that with resident records, generated documents and forms, and census analytics.",
    org: "Barangay local government",
    role: "Full-stack developer",
    kind: "Project",
    period: "Nov 2024 to Dec 2024",
    sort: 202411,
    status: "Shipped",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "NGINX", "PM2"],
    built: [
      "Resident records and search for 2,000+ residents.",
      "Document and form generation.",
      "Census analytics.",
      "Deployment on NGINX with PM2 for process management.",
    ],
    outcome: "Paperwork reduced by about 70%.",
    links: [
      { label: "Client source on GitHub", href: "https://github.com/kobekobe0/barangayManagementSystemClient" },
      { label: "Server source on GitHub", href: "https://github.com/kobekobe0/barangayManagementSystemServer" },
    ],
  },
  {
    slug: "scholarpass",
    title: "ScholarPass",
    summary:
      "QR code gate pass system for student and visitor entry, built as a university capstone and planned for 4,000+ students.",
    description:
      "ScholarPass was Kobe's capstone project at Bulacan State University: a QR code based gate pass that manages the entry of students and visitors. It was architected to support many concurrent users and scheduled for university-wide rollout to improve campus security.",
    org: "Bulacan State University",
    role: "Capstone developer",
    kind: "School",
    period: "Sep 2024 to Dec 2024",
    sort: 202409,
    status: "Shipped",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    built: [
      "QR code generation and scanning for student and visitor entry.",
      "An architecture sized for concurrent use across a campus of more than 4,000 students.",
    ],
    links: [
      { label: "Client source on GitHub", href: "https://github.com/kobekobe0/scholarpass" },
      { label: "Server source on GitHub", href: "https://github.com/kobekobe0/scholarpass_server" },
    ],
  },

  // ---- Drafts. Not shown on the site. Check the details, then set published: true. ----
  {
    slug: "standardiq",
    title: "StandardIQ",
    summary: "Maritime compliance platform built for a freelance client.",
    description: "StandardIQ is a maritime compliance platform. Kobe worked on it as a freelance developer, including its design system and chart theming.",
    org: "Freelance client",
    role: "Full-stack developer",
    kind: "Freelance",
    period: "",
    sort: 202501,
    status: "Shipped",
    stack: ["React", "Node.js", "PostgreSQL", "Neon"],
    built: [],
    published: false,
  },
  {
    slug: "vessel-service-log",
    title: "Vessel service log",
    summary: "MVP for logging vessel service records, built for a freelance client.",
    description: "An MVP for recording and tracking vessel service logs.",
    org: "Freelance client",
    role: "Full-stack developer",
    kind: "Freelance",
    period: "",
    sort: 202602,
    status: "Shipped",
    stack: ["Next.js", "Supabase"],
    built: [],
    published: false,
  },
  {
    slug: "food-scanning-app",
    title: "AI food scanning app",
    summary: "Mobile app that uses AI to scan and identify food, built for a freelance client.",
    description: "A mobile app that scans food with AI.",
    org: "Freelance client",
    role: "Mobile developer",
    kind: "Freelance",
    period: "",
    sort: 202603,
    status: "Shipped",
    stack: ["React Native", "Flutter", "Supabase"],
    built: [],
    published: false,
  },
];

export const projects = all
  .filter((p) => p.published !== false)
  .sort((a, b) => b.sort - a.sort);

export const featured = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

// Student-era projects. Listed on /work without their own pages.
export const earlier: { title: string; year: string; summary: string; stack: string; href?: string }[] = [
  {
    title: "Tabibito",
    year: "2022",
    summary: "Travel log app for sharing trips. Kobe's first full-stack MERN app and the first backend he built alone.",
    stack: "MongoDB, Express, React, Node.js, Socket.IO",
    href: "https://github.com/kobekobe0/tabibito",
  },
  {
    title: "WordleRush",
    year: "2022",
    summary: "Survival-mode Wordle: each solved word scores a point and deals a new one, with a leaderboard of top scorers.",
    stack: "React, Firebase",
    href: "https://github.com/kobekobe0/Wordle-Clone",
  },
  {
    title: "Twitter, but useless",
    year: "2022",
    summary: "Small posting app built to learn GraphQL APIs and Tailwind CSS.",
    stack: "MongoDB, Express, React, Node.js, GraphQL, Tailwind CSS",
    href: "https://github.com/kobekobe0/MERNG",
  },
  {
    title: "Dumps",
    year: "2022",
    summary: "Bare-bones image sharing app with customizable profiles.",
    stack: "React, Firebase",
  },
  {
    title: "AnimeStorage",
    year: "2022",
    summary: "Anime watchlist that searches the Jikan API and saves to local storage.",
    stack: "React",
  },
];
