import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import { articles, getArticle } from "@/lib/articles";
import { breadcrumbSchema, personId } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/writing/${a.slug}` },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url: `/writing/${a.slug}`,
      publishedTime: a.date,
      authors: [site.name],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();

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
                <Link href="/writing">Writing</Link>
              </li>
            </ol>
          </nav>
          <h1 style={{ maxWidth: "24ch" }}>{a.title}</h1>
          <p className="lede">
            By {site.name}, <time dateTime={a.date}>{a.dateLabel}</time>
          </p>
        </header>
        <div className="article">{a.body}</div>
      </article>
      <JsonLd
        data={[
          {
            "@type": "BlogPosting",
            headline: a.title,
            description: a.description,
            datePublished: a.date,
            url: `${site.url}/writing/${a.slug}`,
            mainEntityOfPage: `${site.url}/writing/${a.slug}`,
            author: { "@id": personId },
            publisher: { "@id": personId },
            image: `${site.url}/images/writing/${a.slug}.webp`,
            inLanguage: "en",
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/writing" },
            { name: a.title, path: `/writing/${a.slug}` },
          ]),
        ]}
      />
    </div>
  );
}
