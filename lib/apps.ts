// Indie apps built and shipped on the side. Shown on the home page and /work,
// listed in llms.txt, and described as SoftwareApplication structured data when they have a site.

export type App = {
  name: string;
  summary: string;
  status: "On sale" | "In development";
  platform: string;
  url?: string;
};

export const apps: App[] = [
  {
    name: "Director",
    summary:
      "A screen recorder for Mac that edits itself: smooth auto-zooms, a steady cursor and a studio finish, done while you record.",
    status: "On sale",
    platform: "macOS · Swift, SwiftUI",
    url: "https://director-app.pages.dev",
  },
  {
    name: "LidLogic",
    summary: "A menu-bar app that leans your Mac's screen back as you close the lid, like a fold transition.",
    status: "On sale",
    platform: "macOS · Swift",
    url: "https://lidlogic.pages.dev",
  },
  {
    name: "Clipper",
    summary:
      "Turns long videos into captioned vertical clips. Transcription runs on-device; Claude picks the highlights and writes the hooks.",
    status: "In development",
    platform: "macOS · Swift, WhisperKit, Claude",
  },
  {
    name: "Architecture Trainer",
    summary:
      "System-design practice: build an architecture on a canvas, then test it in a deterministic simulator that scores it.",
    status: "In development",
    platform: "Web · TypeScript",
  },
];
