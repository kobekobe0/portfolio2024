import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import WorkRegister from "@/components/WorkRegister";
import { site } from "@/lib/site";
import { projects, earlier } from "@/lib/projects";
import { breadcrumbSchema, personId } from "@/lib/schema";

const description =
  "Case studies of systems Kobe Brian Santos has built: a bank's supplier and contract portal, procurement automation for 200+ government branches, a real-time photo platform and an AI resume product.";

export const metadata: Metadata = {
  title: "Work and case studies",
  description,
  alternates: { canonical: "/work" },
  openGraph: { title: "Work and case studies", description, url: "/work" },
};

export default function Work() {
  return (
    <div className="wrap">
      <header className="page-head">
        <h1>Work</h1>
        <p className="lede">
          Systems Kobe has built for a bank, a government agency, startups and his own products. Each one has a short
          case study: what it is, what he built, and what changed.
        </p>
      </header>

      <section className="section" aria-labelledby="case-studies">
        <h2 id="case-studies">Case studies</h2>
        <WorkRegister items={projects} />
      </section>

      <section className="section" aria-labelledby="earlier">
        <div>
          <h2 id="earlier">Earlier projects</h2>
          <p className="section-note">Built in 2022 while learning full-stack development.</p>
        </div>
        <ul className="group">
          {earlier.map((e) => (
            <li key={e.title}>
              <span className="when">{e.stack}</span>
              <div>
                {e.href ? (
                  <a href={e.href} rel="noopener">
                    {e.title}
                  </a>
                ) : (
                  <strong>{e.title}</strong>
                )}
                <div className="sub">{e.summary}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <JsonLd
        data={[
          {
            "@type": "CollectionPage",
            url: `${site.url}/work`,
            name: "Work and case studies",
            description,
            about: { "@id": personId },
            hasPart: projects.map((p) => ({
              "@type": "CreativeWork",
              name: p.title,
              url: `${site.url}/work/${p.slug}`,
              description: p.summary,
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
          ]),
        ]}
      />
    </div>
  );
}
