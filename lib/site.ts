// Single source of truth for everything the site says about you.
// Edit here; pages, metadata, structured data, sitemap and llms.txt all read from this file.

export const site = {
  // Change this if you move to a custom domain. Everything canonical derives from it.
  url: "https://kobebriansantos.vercel.app",
  name: "Kobe Brian Santos",
  shortName: "Kobe Santos",
  role: "Full-stack developer",
  jobTitle: "Software Engineer",
  employer: "Philippine Savings Bank (PSBank)",
  location: { locality: "Bulacan", country: "Philippines", countryCode: "PH" },
  email: "kobebrian.santos.e@gmail.com",
  resume: "/Kobe_Brian_Santos_Resume.pdf",
  lastUpdated: "2026-10-04",
  description:
    "Kobe Brian Santos is a full-stack developer in the Philippines. He builds back-office systems for banks and government offices with C# .NET, Node.js, React, Next.js, Angular and Oracle.",
  socials: [
    { label: "GitHub", href: "https://github.com/kobekobe0" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kobesantos/" },
    { label: "GitLab", href: "https://gitlab.com/kobekoblanca" },
  ],
} as const;

export type Job = {
  company: string;
  title: string;
  location: string;
  start: string; // ISO month
  end: string | null;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
  caseStudy?: string; // slug in lib/projects.ts
};

export const experience: Job[] = [
  {
    company: "Philippine Savings Bank (PSBank)",
    title: "Software Engineer",
    location: "Makati City, Philippines",
    start: "2026-06",
    end: null,
    period: "Jun 2026 to present",
    summary:
      "Develops and maintains the Supplier E-Portal, the bank's supplier and contract management system.",
    points: [
      "Owns contract computation logic and invoice syncing with other internal banking tools.",
      "Implemented backdated daily-rate support across Oracle PL/SQL packages, reworking the maker-checker approval flow to archive superseded rates and keep a complete audit history.",
      "Built a TypeScript validator for contract CSV uploads that catches missing columns, bad dates, backdated entries and duplicates before they reach the database.",
      "Resolved a token-refresh race condition in the Node.js API proxy with a server-side token cache and single-flight deduplication, stabilizing sessions under PM2 cluster mode.",
    ],
    stack: ["C# .NET Core", "Oracle 19c", "PL/SQL", "React", "TypeScript", "Node.js", "PM2"],
    caseStudy: "psbank-supplier-e-portal",
  },
  {
    company: "Land Registration Systems Inc.",
    title: "Junior Full-Stack Developer",
    location: "Quezon City, Philippines",
    start: "2025-02",
    end: "2026-06",
    period: "Feb 2025 to Jun 2026",
    summary:
      "Built procurement and inventory automation for the Property Records Management System (PRMS), used by 200+ Land Registration Authority branches nationwide.",
    points: [
      "Shipped a PRMS automation module with auto-generated procurements, consumption-based stock monitoring and configurable real-time stock alerts, cutting manual procurement work by about 50%.",
      "Built a centralized API response decoder for a third-party payment gateway and a cron server that recovers up to 10 missed transactions per day without manual intervention.",
      "Engineered an item loss tagging system that blocks lost assets from moving through procurement workflows and leaves an audit trail for central office officers.",
      "Migrated legacy AngularJS screens to Angular 20 with reusable Angular Material components, backed by Sybase stored procedures for server-side pagination, sorting and search.",
      "Scripted GitLab CI/CD pipelines for automated build, test and deploy to staging.",
    ],
    stack: ["C# .NET Core", "Dapper", "Angular 20", "AngularJS", "Next.js", "MSSQL", "Sybase", "GitLab CI/CD"],
    caseStudy: "prms-procurement-automation",
  },
  {
    company: "Raksquad Tech",
    title: "Full-Stack Developer (Contract)",
    location: "Remote",
    start: "2023-07",
    end: "2024-01",
    period: "Jul 2023 to Jan 2024",
    summary:
      "Architected and delivered Truesight, a real-time image transaction platform for theme parks.",
    points: [
      "Stress-tested the platform to handle 10 concurrent processors uploading 200+ photos at once from mobile, with an in-app editing interface.",
      "Implemented real-time photo delivery and transaction state sync over Socket.IO, so several customers can buy digital photos at once, reducing dependency on physical booths.",
      "Built the mobile upload API for photographers and deployed the frontend and backend on DigitalOcean.",
    ],
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "MUI", "DigitalOcean"],
    caseStudy: "truesight",
  },
  {
    company: "Iona Innovations Labs",
    title: "Full-Stack Developer (Contract)",
    location: "Remote",
    start: "2022-10",
    end: "2023-04",
    period: "Oct 2022 to Apr 2023",
    summary:
      "Owned backend API development for a live job-matching platform for medical professionals.",
    points: [
      "Built REST and GraphQL APIs with role-based access control and Auth0 integration.",
      "Shipped the platform to production within 2 months.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "GraphQL", "Auth0", "React Native"],
  },
];

export const education = {
  school: "Bulacan State University",
  degree: "Bachelor of Science in Information Technology",
  honors: "Cum Laude, GWA 1.6",
  graduated: "July 2025",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "C#", "SQL", "PL/SQL", "PHP"] },
  { group: "Frontend", items: ["React", "Next.js", "Angular 20", "AngularJS", "Angular Material", "React Native", "Tailwind CSS", "MUI", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "Express.js", "C# .NET Core", "Dapper", "Laravel", "REST APIs", "GraphQL", "Socket.IO", "BullMQ"] },
  { group: "Databases", items: ["Oracle 19c", "PostgreSQL", "MSSQL", "Sybase", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize", "Drizzle"] },
  { group: "AI", items: ["Claude API", "OpenAI API", "Claude Code", "Model Context Protocol (MCP)", "LLM prompt pipelines"] },
  { group: "DevOps and auth", items: ["GitLab CI/CD", "DigitalOcean", "PM2", "NGINX", "JWT", "Auth0", "RBAC"] },
];

// Plain questions and answers. Rendered on /about and exposed as FAQ structured data,
// so search engines and AI assistants can quote them directly.
export const quickAnswers: { q: string; a: string }[] = [
  {
    q: "Who is Kobe Brian Santos?",
    a: "Kobe Brian Santos is a full-stack developer based in Bulacan, Philippines. He works as a Software Engineer at Philippine Savings Bank (PSBank) and has shipped production systems for government and enterprise clients since 2022.",
  },
  {
    q: "What does Kobe Brian Santos build?",
    a: "Back-office systems: contract and supplier management for a bank, procurement and inventory automation used by 200+ Land Registration Authority branches, a real-time photo transaction platform for theme parks, and a quality management system for a US-based client.",
  },
  {
    q: "What is his tech stack?",
    a: "C# .NET Core, Node.js and Express on the backend; React, Next.js and Angular on the frontend; and Oracle, PostgreSQL, MSSQL, Sybase and MongoDB for data.",
  },
  {
    q: "Where did he study?",
    a: "Bulacan State University, Bachelor of Science in Information Technology, graduating cum laude in July 2025.",
  },
  {
    q: "How can I contact him?",
    a: "By email at kobebrian.santos.e@gmail.com, or through LinkedIn at linkedin.com/in/kobesantos.",
  },
];
