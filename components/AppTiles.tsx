import type { App } from "@/lib/apps";

// Indie apps as compact tiles. Apps with a website link out; the rest show their status only.
export default function AppTiles({ items }: { items: App[] }) {
  return (
    <ul className="apps">
      {items.map((a) => (
        <li key={a.name} className="app">
          <span className="status" data-status={a.status}>
            {a.status}
          </span>
          <h3>{a.name}</h3>
          <p>{a.summary}</p>
          <span className="where">{a.platform}</span>
          {a.url ? (
            <a className="chev" href={a.url} rel="noopener" aria-label={`Visit the ${a.name} website`}>
              Visit site
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
