import Link from "next/link";
import type { Project } from "@/lib/projects";

// The shipped systems as product tiles. Each tile links to its case study.
export default function WorkRegister({ items }: { items: Project[] }) {
  return (
    <ul className="tiles">
      {items.map((p) => (
        <li key={p.slug}>
          <Link className="tile" href={`/work/${p.slug}`}>
            <span className="status" data-status={p.status}>
              {p.status}
            </span>
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <span className="where">
              {p.org}
              {p.period ? ` · ${p.period}` : null}
            </span>
            <span className="go chev" aria-hidden="true">
              Read the case study
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
