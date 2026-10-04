import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import WorkRegister from "@/components/WorkRegister";
import AppTiles from "@/components/AppTiles";
import { site, experience, education, skills } from "@/lib/site";
import { featured } from "@/lib/projects";
import { apps } from "@/lib/apps";
import { articles } from "@/lib/articles";
import { personId, websiteId } from "@/lib/schema";

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
            Full-stack developer in the Philippines. Currently on the bank&apos;s supplier and contract
            management system. Before that, procurement automation used by 200+ Land Registration Authority branches.
          </p>
          <p className="actions">
            <Link className="button" href="/work">
              See the work
            </Link>
            <a className="chev" href={site.resume}>
              Download resume (PDF)
            </a>
          </p>
        </div>

        <aside className="specs-card" aria-labelledby="specs-title">
          <Image
            src="/images/kobe-brian-santos.webp"
            alt="Portrait of Kobe Brian Santos"
            width={720}
            height={720}
            sizes="(max-width: 860px) 26rem, 18rem"
            priority
          />
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

      <section className="block" aria-labelledby="apps">
        <h2 id="apps" className="block-title">
          Indie apps. <span>Products designed, built and shipped on the side.</span>
        </h2>
        <div className="block-body">
          <AppTiles items={apps} />
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
        <p className="section-note">He is in the Philippines (UTC+8).</p>
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
            operatingSystem: "macOS",
            applicationCategory: "UtilitiesApplication",
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
