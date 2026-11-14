// Products Kobe designed, built and shipped on his own. Featured ones get a page at /apps/<slug>
// with screenshots; "workshop" ones are listed without a page. Shown on the home page and /work,
// listed in llms.txt and the sitemap, and described as SoftwareApplication structured data.
//
// Only list what can be shown honestly: real screenshots of the running app, real status, real price.

export type AppStatus = "On sale" | "Live" | "Pre-launch" | "In development";

export type Shot = { src: string; alt: string; width: number; height: number };

export type App = {
  slug: string;
  name: string;
  tagline: string; // one line, shown on the card
  summary: string; // one or two sentences, used for metadata and llms.txt
  status: AppStatus;
  platform: string;
  os: string; // schema.org operatingSystem
  category: string; // schema.org applicationCategory
  price?: string;
  url?: string;
  urlLabel?: string;
  description: string; // the page lede
  built: string[];
  stack: string[];
  ai?: string; // how AI was used, stated plainly
  images: Shot[];
};

const shot = (src: string, alt: string): Shot => ({ src: `/images/apps/${src}.webp`, alt, width: 1600, height: 1000 });

export const apps: App[] = [
  {
    slug: "director",
    name: "Director",
    tagline: "The screen recorder that edits itself.",
    summary:
      "A native Mac screen recorder that adds smooth auto-zooms, a steady cursor and a studio background while you record, then exports up to 4K.",
    status: "On sale",
    platform: "macOS · Swift, SwiftUI",
    os: "macOS 15",
    category: "MultimediaApplication",
    price: "$29",
    url: "https://director-app.pages.dev",
    urlLabel: "Visit the Director website",
    description:
      "Director records your screen and does the editing a polished demo video needs while you record: it zooms in where you click, follows your cursor, smooths out shaky mouse moves and puts the recording on a studio background. Every zoom lands on a timeline you can adjust before exporting.",
    built: [
      "Screen capture with ScreenCaptureKit and a compositor that renders zoom, cursor and background in real time, then exports MP4 at 1080p, 1440p or 4K.",
      "A camera model that holds still while you work in one area and glides only when the cursor heads for the edge, plus cursor smoothing that keeps clicks exactly where they landed.",
      "Click-triggered and shortcut-triggered zooms (⌃⌥Z), with each zoom editable as a block on a timeline.",
      "Recording on any display, including vertical monitors, with 16:9, 9:16 and 1:1 exports.",
      "Signing, notarization, a product website with a 35-second film, and direct sales.",
    ],
    stack: ["Swift", "SwiftUI", "AppKit", "ScreenCaptureKit", "AVFoundation", "Core Image", "VideoToolbox"],
    images: [
      shot("director-editor", "Director: the editor with recordings, a zoom timeline and look settings"),
      shot("director-zoom", "Director: an automatic zoom following the cursor to a button"),
      shot("director-looks", "Director: studio backgrounds, padding and rounded corners"),
      shot("director-shapes", "Director: exports for 16:9, 9:16 and 1:1"),
    ],
  },
  {
    slug: "mochi-mascot-studio",
    name: "Mochi · Mascot Studio",
    tagline: "Describe your brand and get a 3D mascot, a logo and a brand kit.",
    summary:
      "A web app that turns a short brand description into a 3D mascot you can pose, animate and export as a logo, a full brand kit and sticker packs.",
    status: "Pre-launch",
    platform: "Web · Next.js, three.js",
    os: "Web",
    category: "DesignApplication",
    url: "https://mochi-mascot-demo.vercel.app",
    urlLabel: "Try the demo",
    description:
      "Mochi is a mascot maker for small brands. Type what your brand is, get a 3D character, then build on it: change its style, outfit and expressions, make it wave or dance, turn it into a logo, and download a brand kit and sticker packs for WhatsApp, Telegram, iMessage and Discord. Accounts, credits and paid plans are built and waiting on its domain and payment setup. Until then, a public demo runs with accounts and payments switched off.",
    built: [
      "A procedural 3D character system in React Three Fiber: 9 render styles, 27 mascot types including objects and creatures, outfits that bend with the limbs, and an arm collision solver that keeps hands out of the body in every animation.",
      "Text-to-mascot: a server-side model call turns a brand description into a character spec, protected by per-visitor rate limits and a hard daily spend cap.",
      "A layered logo editor (select, recolor, reorder, undo) with 12 layouts and SVG/PNG export.",
      "A brand kit generator: logo variations, character sheet, expressions, poses, color system, patterns and mockups, exported as a ZIP and an 8-page PDF.",
      "Sticker packs sized to each platform's rules, including animated Telegram stickers.",
      "Accounts with magic links, a credit ledger in Postgres that refunds failed AI calls and is safe under concurrent spends, plans and a payment adapter.",
    ],
    stack: ["Next.js 16", "React Three Fiber", "three.js", "TypeScript", "PostgreSQL", "Drizzle", "Better Auth", "OpenAI API"],
    ai: "Uses a small OpenAI model on the server to turn a brand description into a mascot spec. The 3D modeling, rigging and rendering are procedural code, not generated images.",
    images: [
      shot("mochi-build", "Mochi: the 3D mascot builder with style options"),
      shot("mochi-brand-kit", "Mochi: generated brand kit with logo variations, character sheet and expressions"),
      shot("mochi-stickers", "Mochi: sticker pack builder with per-platform downloads"),
      shot("mochi-logo", "Mochi: logo editor with layout templates"),
      shot("mochi-home", "Mochi: landing page with the describe-your-brand prompt"),
    ],
  },
  {
    slug: "architecture-trainer",
    name: "Architecture Trainer",
    tagline: "System design practice you can actually run.",
    summary:
      "A system-design trainer: build an architecture on a canvas, run it through a deterministic traffic simulation, and get scored on availability, latency and cost.",
    status: "Live",
    platform: "Web · JavaScript, Canvas",
    os: "Web",
    category: "EducationalApplication",
    url: "https://architecture-trainer.vercel.app",
    urlLabel: "Try Architecture Trainer",
    description:
      "System design is usually practiced on a whiteboard, where nothing fails. Architecture Trainer gives you a scenario, a budget and targets, lets you wire up CDNs, load balancers, services, caches, queues, workers and databases, then runs 30 seconds of simulated traffic through your design. You watch requests flow, see where they fail, and get findings that point at the cause.",
    built: [
      "A canvas editor for adding, connecting and configuring components.",
      "A deterministic simulator, so the same design always gets the same score, with a replay scrubber and live availability, p99 latency, failed requests and cost.",
      "Five problems from a first deployment to a multi-region checkout that loses a whole region mid-run.",
      "Scoring with Pass and Par, and findings with a \"Show me\" that highlights the part of the design at fault.",
      "Sanity checks that every starter design fails for the intended reason and degenerate fixes (max replicas everywhere) still fail.",
    ],
    stack: ["JavaScript", "HTML Canvas", "SVG", "Node.js (simulation checks)"],
    ai: "Started as an experiment in running a fleet of 20 role-specific Claude Code subagents (architect, test author, reviewer, verifier) under written rules, with hooks that kept held-out tests hidden from the agents writing the code. The fleet built the foundations; the playable version was then built in a single Claude Code session to cut token cost.",
    images: [
      shot("architecture-trainer-global-checkout", "Architecture Trainer: a multi-region design replaying while Europe is down"),
      shot("architecture-trainer-failing", "Architecture Trainer: a failing design overloading its database"),
    ],
  },
  {
    slug: "ensemble",
    name: "Ensemble",
    tagline: "Claude Code, Codex and Gemini working as one team.",
    summary:
      "A local orchestrator that runs Claude Code, OpenAI Codex and Gemini as one team on a git repository: one plans, each subtask runs in its own worktree, a different model reviews every diff, and you approve each merge.",
    status: "In development",
    platform: "macOS, Linux · Node.js, React",
    os: "macOS, Linux",
    category: "DeveloperApplication",
    url: "https://github.com/kobekobe0/ensemble",
    urlLabel: "View source on GitHub",
    description:
      "Ensemble takes a goal, has a lead model split it into subtasks, and runs each subtask in parallel in its own git worktree. Your tests run on each result, a model from a different provider reviews each diff, and nothing merges until you approve it. Everything streams to a dashboard that also works from a phone.",
    built: [
      "Adapters for the Claude Code, Codex and Gemini command-line tools that use existing subscription logins, with no API keys.",
      "A scheduler that tracks each provider's usage limits and hands work to another provider when one runs out.",
      "Isolated worktrees per subtask, test runs per diff, cross-provider review and per-task approve, reject, retry or reassign.",
      "A live web dashboard with push notifications, reachable from a phone over Tailscale.",
      "A simulated demo mode that exercises the whole pipeline without spending any quota.",
      "A benchmark harness: one prompt, a seed repository and 34 hidden acceptance tests to compare Ensemble with a single agent.",
    ],
    stack: ["TypeScript", "Node.js", "Fastify", "SQLite", "React", "Vite", "git worktrees"],
    ai: "This is a tool for building with AI agents. It treats models as interchangeable workers and never trusts one model to review its own work.",
    images: [
      shot("ensemble-run", "Ensemble (demo mode): a run with subtasks reviewed by a different provider, awaiting approval"),
      shot("ensemble-home", "Ensemble (demo mode): provider usage and project picker"),
    ],
  },
  {
    slug: "lidlogic",
    name: "LidLogic",
    tagline: "Your Mac's screen leans back when the lid does.",
    summary:
      "A menu-bar app that reads the MacBook's lid-angle sensor and blurs, dims and tilts the screen as you close the lid, like a fold transition.",
    status: "On sale",
    platform: "macOS · Swift",
    os: "macOS 14",
    category: "UtilitiesApplication",
    price: "$2",
    url: "https://lidlogic.pages.dev",
    urlLabel: "Visit the LidLogic website",
    description:
      "LidLogic follows your MacBook's hinge. As you lower the lid past your usual angle, the screen softens, dims and fades toward black, then eases back the moment you open it again. It is a small app, made carefully: about half a percent of CPU when idle.",
    built: [
      "Reading the lid angle from the MacBook's HID sensor, with smoothing that learns your resting angle.",
      "A click-through overlay above the built-in display that blurs, dims and vignettes, and is removed entirely when not in use.",
      "Adaptive polling: 60 Hz while the lid moves, 15 Hz when idle.",
      "In-app updates with Sparkle, signing and notarization, and a website with an interactive lid demo.",
    ],
    stack: ["Swift", "AppKit", "IOKit HID", "Core Animation", "Sparkle"],
    images: [
      shot("lidlogic-demo", "LidLogic website: interactive lid-angle demo"),
      shot("lidlogic-site", "LidLogic website: product page"),
    ],
  },
];

// Things in progress, shown as a short list without screenshots.
export const workshop: { name: string; summary: string; platform: string }[] = [
  {
    name: "Clipper",
    summary:
      "Turns long videos into captioned vertical clips. Transcription runs on-device with WhisperKit; Claude picks the highlights and writes the hooks; the app frames whoever is speaking.",
    platform: "macOS · Swift, WhisperKit, Claude",
  },
  {
    name: "Watchdog",
    summary:
      "A local-only focus tracker that notices when you drift from what you said a work block was for and nudges you, gently at first.",
    platform: "macOS · Swift",
  },
];

export function getApp(slug: string) {
  return apps.find((a) => a.slug === slug);
}
