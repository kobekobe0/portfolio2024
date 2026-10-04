import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { site, experience, education, skills, quickAnswers } from "@/lib/site";
import { breadcrumbSchema, personId } from "@/lib/schema";

const description =
  "About Kobe Brian Santos: Software Engineer at PSBank, cum laude IT graduate of Bulacan State University, and full-stack developer for government and enterprise systems since 2022.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { type: "profile", title: `About ${site.name}`, description, url: "/about" },
};

export default function About() {
  return (
    <div className="wrap">
      <header className="page-head">
        <h1>About Kobe Brian Santos</h1>
      </header>

      <div className="about-top">
        <div className="prose">
          <p>
            I&apos;m a full-stack developer based in Bulacan, Philippines. I work as a Software Engineer at Philippine
            Savings Bank (PSBank), where I build and maintain the bank&apos;s supplier and contract management system.
          </p>
          <p>
            Most of what I&apos;ve shipped is the unglamorous kind of software that an office depends on: procurement
            and inventory automation for more than 200 Land Registration Authority branches, a contract portal for a
            bank, a real-time photo sales platform for theme parks. I like that work because the result is concrete.
            Someone&apos;s manual process gets shorter, or stops being manual.
          </p>
          <p>
            I started with a high school web project in 2019, took my first paid developer job in 2022 while still in
            college, and graduated cum laude from Bulacan State University in 2025.
          </p>
          <p className="actions">
            <a className="button" href={site.resume}>
              Download resume (PDF)
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <Image
          src="/images/kobe-brian-santos.webp"
          alt="Portrait of Kobe Brian Santos"
          width={720}
          height={720}
          sizes="(max-width: 860px) 12rem, 17rem"
          priority
        />
      </div>

      <section className="section" aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <div>
          {experience.map((job) => (
            <div className="job" key={job.company}>
              <h3>
                {job.title}, {job.company}
              </h3>
              <p className="meta">
                {job.period}. {job.location}.
              </p>
              <ul className="bullets">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <ul className="tags" aria-label="Technologies used">
                {job.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {job.caseStudy ? (
                <p className="more">
                  <Link className="chev" href={`/work/${job.caseStudy}`}>
                    Read the case study
                  </Link>
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="education">
        <h2 id="education">Education</h2>
        <div>
          <p>
            <strong>{education.school}</strong>
          </p>
          <p>
            {education.degree}. {education.honors}. Graduated {education.graduated}.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="skills">
        <h2 id="skills">Skills</h2>
        <dl className="group">
          {skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section" aria-labelledby="answers">
        <h2 id="answers">Quick answers</h2>
        <div className="qa">
          {quickAnswers.map((qa) => (
            <div key={qa.q}>
              <h3>{qa.q}</h3>
              <p>{qa.a}</p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={[
          {
            "@type": "AboutPage",
            url: `${site.url}/about`,
            name: `About ${site.name}`,
            description,
            mainEntity: { "@id": personId },
            dateModified: site.lastUpdated,
          },
          {
            "@type": "FAQPage",
            mainEntity: quickAnswers.map((qa) => ({
              "@type": "Question",
              name: qa.q,
              acceptedAnswer: { "@type": "Answer", text: qa.a },
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
    </div>
  );
}
