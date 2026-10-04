"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="site-name">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Main">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} aria-current={pathname.startsWith(l.href) ? "page" : undefined}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.resume}>Resume</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
