import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap">
      <header className="page-head" style={{ paddingBottom: "5rem" }}>
        <h1>This page doesn&apos;t exist</h1>
        <p className="lede">The address may be from the old version of this site. Everything now lives under three pages.</p>
        <ul className="inline-links">
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/writing">Writing</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
