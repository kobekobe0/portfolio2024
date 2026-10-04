import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { projects, getProject } from "@/lib/projects";
import { breadcrumbSchema, personId } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

// Every case study is rendered to static HTML at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title}: case study`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}` },
    openGraph: { type: "article", title, description: p.summary, url: `/work/${p.slug}` },
  };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const i = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[i - 1];
  const next = projects[i + 1];

  return (
    <div className="wrap">
      <article>
        <header className="page-head">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/work">Work</Link>
              </li>
              <li aria-current="page">{p.title}</li>
            </ol>
          </nav>
          <h1>{p.title}</h1>
          <p className="lede">{p.description}</p>
        </header>

        <dl className="facts">
          <div>
            <dt>Organization</dt>
            <dd>{p.org}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{p.role}</dd>
          </div>
          {p.period ? (
            <div>
              <dt>Period</dt>
              <dd>{p.period}</dd>
            </div>
          ) : null}
          <div>
            <dt>Type</dt>
            <dd>{p.kind}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="status" data-status={p.status}>
                {p.status}
              </span>
            </dd>
          </div>
        </dl>

        {p.built.length ? (
          <section className="section" aria-labelledby="built">
            <h2 id="built">What Kobe built</h2>
            <ul className="bullets">
              {p.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {p.outcome ? (
          <section className="section" aria-labelledby="result">
            <h2 id="result">Result</h2>
            <p className="prose">{p.outcome}</p>
          </section>
        ) : null}

        <section className="section" aria-labelledby="stack">
          <h2 id="stack">Stack</h2>
          <ul className="tags">
            {p.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {p.images?.length ? (
          <section className="section" aria-labelledby="screens">
            <h2 id="screens">Screens</h2>
            <div className="shots">
              {p.images.map((img) => (
                <figure key={img.src}>
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 860px) 100vw, 860px" />
                  <figcaption>{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {p.links?.length ? (
          <section className="section" aria-labelledby="links">
            <h2 id="links">Links</h2>
            <ul className="inline-links">
              {p.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} rel="noopener">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>

      <nav className="pager" aria-label="More case studies">
        {prev ? (
          <Link href={`/work/${prev.slug}`}>
            <span>Newer</span>
            {prev.title}
          </Link>
        ) : null}
        {next ? (
          <Link className="next" href={`/work/${next.slug}`}>
            <span>Older</span>
            {next.title}
          </Link>
        ) : null}
      </nav>

      <JsonLd
        data={[
          {
            "@type": "CreativeWork",
            "@id": `${site.url}/work/${p.slug}#work`,
            name: p.title,
            headline: `${p.title}: case study`,
            description: p.summary,
            abstract: p.description,
            url: `${site.url}/work/${p.slug}`,
            author: { "@id": personId },
            creator: { "@id": personId },
            sourceOrganization: { "@type": "Organization", name: p.org },
            keywords: p.stack.join(", "),
            inLanguage: "en",
            ...(p.images?.length ? { image: p.images.map((img) => `${site.url}${img.src}`) } : {}),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: p.title, path: `/work/${p.slug}` },
          ]),
        ]}
      />
    </div>
  );
}
