import Image from "next/image";
import Link from "next/link";
import type { App } from "@/lib/apps";

// Products as screenshot cards. The first card spans the full width; each links to /apps/<slug>.
export default function AppTiles({ items }: { items: App[] }) {
  return (
    <ul className="apps">
      {items.map((a, i) => {
        const cover = a.images[0];
        return (
          <li key={a.slug} className={i === 0 ? "app wide" : "app"}>
            <Link className="app-card" href={`/apps/${a.slug}`}>
              <div className="app-copy">
                <span className="status" data-status={a.status}>
                  {a.status}
                  {a.price ? ` · ${a.price}` : null}
                </span>
                <h3>{a.name}</h3>
                <p>{a.tagline}</p>
                <span className="where">{a.platform}</span>
                <span className="go chev" aria-hidden="true">
                  See screens and details
                </span>
              </div>
              {cover ? (
                <div className="app-shot">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    width={cover.width}
                    height={cover.height}
                    sizes={i === 0 ? "(max-width: 860px) 100vw, 640px" : "(max-width: 860px) 100vw, 520px"}
                  />
                </div>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
