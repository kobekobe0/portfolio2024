import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WorkRegister from "@/components/WorkRegister";
import AppTiles from "@/components/AppTiles";
import { site, experience, education, skills } from "@/lib/site";
import { featured } from "@/lib/projects";
import { apps, workshop } from "@/lib/apps";
import { articles } from "@/lib/articles";
import { personId, websiteId } from "@/lib/schema";
import AppLogos from "@/components/AppLogos";

const updated = new Date(site.lastUpdated).toLocaleDateString("en-US", { month: "short", year: "numeric" });

export default function Home() {
  const current = experience[0];
  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <p className="eyebrow">
            {current.title} at {site.employer}
          </p>
          <h1>Kobe Brian Santos builds the back-office systems that banks and government offices run on.</h1>
          <p className="lede">
            Full-stack developer based in Makati City, Philippines. Currently on the bank&apos;s supplier and contract
            management system. Before that, procurement automation used by 200+ Land Registration Authority branches.
            On the side, he ships his own products, built with AI agents that he directs and checks.
          </p>
          <p className="actions">
            <Link className="button" href="/work">
              See the work
            </Link>
            <Link className="chev" href="/#products">
              See the products
            </Link>
            <a className="chev" href={site.resume}>
              Download resume (PDF)
            </a>
          </p>
        </div>

        <aside className="specs-card" aria-labelledby="specs-title">
          <Link className="card-art" href="/#products">
            <AppLogos />
          </Link>
          <h2 id="specs-title">Tech specs · Updated {updated}</h2>
          <dl className="specs">
            <div>
              <dt>Role</dt>
              <dd>
                {current.title}, PSBank
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>
                {site.location.locality}, {site.location.country}
              </dd>
            </div>
            <div>
              <dt>Shipping since</dt>
              <dd>2022</dd>
            </div>
            <div>
              <dt>Products</dt>
              <dd>2 Mac apps on sale, 1 web app live</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>BS IT, cum laude, {education.school}</dd>
            </div>
            <div>
              <dt>Core stack</dt>
              <dd>C# .NET, Node.js, React, Next.js, Angular, Oracle, PostgreSQL</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="block" aria-labelledby="work">
        <h2 id="work" className="block-title">
          Systems shipped. <span>Software that offices depend on every day.</span>
        </h2>
        <div className="block-body">
          <WorkRegister items={featured} />
          <p className="more">
            <Link className="chev" href="/work">
              All projects and case studies
            </Link>
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="products">
        <h2 id="products" className="block-title">
          Products. <span>Designed, built and shipped on his own, from idea to checkout.</span>
        </h2>
        <div className="block-body">
          <AppTiles items={apps} />
          <ul className="group workshop" aria-label="In progress">
            {workshop.map((w) => (
              <li key={w.name}>
                <span className="when">In progress</span>
                <div>
                  <strong>{w.name}</strong>, {w.platform}
                  <div className="sub">{w.summary}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="block" aria-labelledby="ai">
        <h2 id="ai" className="block-title">
          Building with AI. <span>AI-assisted development, with engineering judgment at every step.</span>
        </h2>
        <div className="block-body">
          <ul className="ai-points">
            <li>
              <h3>A new stack, shipped and sold</h3>
              <p>
                Director and LidLogic are native Swift apps, a stack outside his day job. Both went from idea to signed,
                notarized and on sale with Claude Code as the main pair programmer.
              </p>
              <p className="proof">
                <Link className="chev" href="/apps/director">
                  Director
                </Link>
              </p>
            </li>
            <li>
              <h3>His own multi-agent tooling</h3>
              <p>
                Ensemble runs Claude Code, Codex and Gemini as one team in isolated git worktrees, and never lets a
                model review its own diff.
              </p>
              <p className="proof">
                <Link className="chev" href="/apps/ensemble">
                  Ensemble
                </Link>
              </p>
            </li>
            <li>
              <h3>Guardrails over trust</h3>
              <p>
                For Architecture Trainer he ran 20 role-specific subagents under written rules, with hooks that hid the
                acceptance tests from the agents writing the code, and mutation testing to catch weak tests.
              </p>
              <p className="proof">
                <Link className="chev" href="/apps/architecture-trainer">
                  Architecture Trainer
                </Link>
              </p>
            </li>
            <li>
              <h3>AI inside products, with a budget</h3>
              <p>
                Mochi calls a model on the server behind rate limits, a hard daily spend cap and automatic refunds when a
                call fails. Clipper transcribes on-device and sends only the transcript.
              </p>
              <p className="proof">
                <Link className="chev" href="/apps/mochi-mascot-studio">
                  Mochi
                </Link>
              </p>
            </li>
          </ul>
          <p className="callout">
            <strong>How the work is divided:</strong> AI agents handle much of the implementation in these products. Kobe
            owns the product direction, system architecture, code review and testing strategy, and is accountable for
            everything that ships.
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="experience">
        <h2 id="experience" className="block-title">
          Experience. <span>Four roles since 2022, from startups to a bank.</span>
        </h2>
        <div className="block-body">
          <ul className="group">
            {experience.map((job) => (
              <li key={job.company}>
                <span className="when">{job.period}</span>
                <div>
                  <strong>{job.title}</strong>, {job.company}
                  <div className="sub">{job.summary}</div>
                </div>
              </li>
            ))}
          </ul>
          <p className="more">
            <Link className="chev" href="/about#experience">
              Full work history
            </Link>
          </p>
        </div>
      </section>

      <section className="block" aria-labelledby="stack">
        <h2 id="stack" className="block-title">
          Stack. <span>Enterprise backends, modern frontends.</span>
        </h2>
        <dl className="block-body group">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block" aria-labelledby="writing">
        <h2 id="writing" className="block-title">
          Writing. <span>On learning to code and working while studying.</span>
        </h2>
        <ul className="block-body group">
          {articles.map((a) => (
            <li key={a.slug}>
              <span className="when">{a.dateLabel}</span>
              <div>
                <Link href={`/writing/${a.slug}`}>{a.title}</Link>
                <div className="sub">{a.description}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="block contact" aria-labelledby="contact">
        <h2 id="contact" className="block-title">
          Contact. <span>Email is the fastest way to reach Kobe.</span>
        </h2>
        <p className="contact-line">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="section-note">He is in Makati City, Philippines (UTC+8).</p>
        <ul className="inline-links">
          {site.socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} rel="me noopener">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <JsonLd
        data={apps
          .filter((a) => a.url)
          .map((a) => ({
            "@type": "SoftwareApplication",
            name: a.name,
            description: a.summary,
            url: a.url,
            operatingSystem: a.os,
            applicationCategory: a.category,
            author: { "@id": personId },
          }))}
      />

      <JsonLd
        data={{
          "@type": "ProfilePage",
          "@id": `${site.url}/#profilepage`,
          url: site.url,
          name: `${site.name} | Full-Stack Developer in the Philippines`,
          isPartOf: { "@id": websiteId },
          mainEntity: { "@id": personId },
          dateModified: site.lastUpdated,
          inLanguage: "en",
        }}
      />
    </div>
  );
}
