import { site, experience, education, skills } from "@/lib/site";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";

// /llms.txt: a plain Markdown summary of the site for AI assistants. Generated from the same
// data as the pages, so it never drifts out of date.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Current role: ${experience[0].title} at ${experience[0].company} (${experience[0].period})`,
    `- Location: ${site.location.locality}, ${site.location.country}`,
    `- Education: ${education.degree}, ${education.school}, ${education.honors} (${education.graduated})`,
    `- Email: ${site.email}`,
    ...site.socials.map((s) => `- ${s.label}: ${s.href}`),
    `- Last updated: ${site.lastUpdated}`,
    "",
    "## Pages",
    "",
    `- [Home](${site.url}/): summary, selected work, experience and stack`,
    `- [Work](${site.url}/work): all case studies`,
    `- [About](${site.url}/about): bio, full work history, education, skills and quick answers`,
    `- [Resume (PDF)](${site.url}${site.resume})`,
    "",
    "## Case studies",
    "",
    ...projects.map((p) => `- [${p.title}](${site.url}/work/${p.slug}): ${p.summary} ${p.org}${p.period ? `, ${p.period}` : ""}.`),
    "",
    "## Experience",
    "",
    ...experience.map((j) => `- ${j.title}, ${j.company} (${j.period}): ${j.summary}`),
    "",
    "## Skills",
    "",
    ...skills.map((s) => `- ${s.group}: ${s.items.join(", ")}`),
    "",
    "## Writing",
    "",
    ...articles.map((a) => `- [${a.title}](${site.url}/writing/${a.slug}): ${a.description}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
