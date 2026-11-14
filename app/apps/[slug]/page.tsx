import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { apps, getApp } from "@/lib/apps";
import { breadcrumbSchema, personId } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

// Every product page is rendered to static HTML at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return apps.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getApp(slug);
  if (!a) return {};
  const title = `${a.name}: ${a.tagline}`;
  return {
    title,
    description: a.summary,
    alternates: { canonical: `/apps/${a.slug}` },
    openGraph: {
      type: "article",
      title,
      description: a.summary,
      url: `/apps/${a.slug}`,
      ...(a.images[0] ? { images: [{ url: a.images[0].src, width: a.images[0].width, height: a.images[0].height, alt: a.images[0].alt }] } : {}),
    },
  };
}

export default async function AppPage({ params }: Props) {
  const { slug } = await params;
  const a = getApp(slug);
  if (!a) notFound();

  const i = apps.findIndex((x) => x.slug === a.slug);
  const prev = apps[i - 1];
  const next = apps[i + 1];

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
                <Link href="/work#products">Products</Link>
              </li>
              <li aria-current="page">{a.name}</li>
            </ol>
          </nav>
          <h1>{a.name}</h1>
          <p className="lede">{a.description}</p>
          {a.url ? (
            <p className="actions">
              <a className="button" href={a.url} rel="noopener">
                {a.urlLabel ?? `Visit ${a.name}`}
              </a>
            </p>
          ) : null}
        </header>

        {a.images[0] ? (
          <figure className="hero-shot">
            <Image
              src={a.images[0].src}
              alt={a.images[0].alt}
              width={a.images[0].width}
              height={a.images[0].height}
              sizes="(max-width: 1080px) 100vw, 1080px"
              priority
            />
          </figure>
        ) : null}

        <dl className="facts">
          <div>
            <dt>Status</dt>
            <dd>
              <span className="status" data-status={a.status}>
                {a.status}
              </span>
            </dd>
          </div>
          <div>
            <dt>Platform</dt>
            <dd>{a.platform}</dd>
          </div>
          {a.price ? (
            <div>
              <dt>Price</dt>
              <dd>{a.price}, one-time</dd>
            </div>
          ) : null}
          <div>
            <dt>Role</dt>
            <dd>Solo: design, code, website, release</dd>
          </div>
        </dl>

        <section className="section" aria-labelledby="built">
          <h2 id="built">What Kobe built</h2>
          <ul className="bullets">
            {a.built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        {a.ai ? (
          <section className="section" aria-labelledby="ai">
            <h2 id="ai">Where AI fits</h2>
            <p className="prose">{a.ai}</p>
          </section>
        ) : null}

        <section className="section" aria-labelledby="stack">
          <h2 id="stack">Stack</h2>
          <ul className="tags">
            {a.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        {a.images.length > 1 ? (
          <section className="section" aria-labelledby="screens">
            <h2 id="screens">Screens</h2>
            <div className="shots">
              {a.images.slice(1).map((img) => (
                <figure key={img.src}>
                  <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="(max-width: 860px) 100vw, 860px" />
                  <figcaption>{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}
      </article>

      <nav className="pager" aria-label="More products">
        {prev ? (
          <Link href={`/apps/${prev.slug}`}>
            <span>Previous</span>
            {prev.name}
          </Link>
        ) : null}
        {next ? (
          <Link className="next" href={`/apps/${next.slug}`}>
            <span>Next</span>
            {next.name}
          </Link>
        ) : null}
      </nav>

      <JsonLd
        data={[
          {
            "@type": "SoftwareApplication",
            "@id": `${site.url}/apps/${a.slug}#app`,
            name: a.name,
            description: a.summary,
            url: a.url ?? `${site.url}/apps/${a.slug}`,
            operatingSystem: a.os,
            applicationCategory: a.category,
            author: { "@id": personId },
            image: a.images.map((img) => `${site.url}${img.src}`),
            ...(a.price
              ? { offers: { "@type": "Offer", price: a.price.replace("$", ""), priceCurrency: "USD" } }
              : {}),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/work#products" },
            { name: a.name, path: `/apps/${a.slug}` },
          ]),
        ]}
      />
    </div>
  );
}
