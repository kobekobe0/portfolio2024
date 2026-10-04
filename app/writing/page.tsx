import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { articles } from "@/lib/articles";
import { breadcrumbSchema } from "@/lib/schema";

const description = "Essays by Kobe Brian Santos on learning to code, working while studying, and life as a developer.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/writing" },
  openGraph: { title: "Writing", description, url: "/writing" },
};

export default function Writing() {
  return (
    <div className="wrap">
      <header className="page-head">
        <h1>Writing</h1>
        <p className="lede">Long-form thoughts on programming, college and work, newest first.</p>
      </header>
      <section className="section" aria-labelledby="essays">
        <h2 id="essays">Essays</h2>
        <ul className="group">
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
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Writing", path: "/writing" },
        ])}
      />
    </div>
  );
}
