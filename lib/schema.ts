import { site, experience, education, skills } from "./site";

// Structured data (schema.org). The Person node has a stable @id so every page can point at it.

export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;

export function personSchema() {
  const current = experience.find((j) => j.end === null);
  return {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    image: `${site.url}/images/kobe-brian-santos.webp`,
    email: `mailto:${site.email}`,
    description: site.description,
    jobTitle: current?.title ?? site.jobTitle,
    worksFor: current ? { "@type": "Organization", name: current.company } : undefined,
    alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
    address: {
      "@type": "PostalAddress",
      addressRegion: site.location.locality,
      addressCountry: site.location.countryCode,
    },
    knowsAbout: skills.flatMap((s) => s.items),
    sameAs: site.socials.map((s) => s.href),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": personId },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
