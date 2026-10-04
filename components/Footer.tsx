import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.location.locality}, {site.location.country}.
        </p>
        <ul className="inline-links">
          {site.socials.map((s) => (
            <li key={s.href}>
              <a href={s.href} rel="me noopener">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/llms.txt">llms.txt</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
