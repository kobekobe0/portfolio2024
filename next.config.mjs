/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  // Old URLs from the previous single-page app, so existing links and search results keep working.
  async redirects() {
    return [
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/projects/:id", destination: "/work", permanent: true },
      { source: "/experience", destination: "/about#experience", permanent: true },
      { source: "/articles", destination: "/writing", permanent: true },
      { source: "/article/1", destination: "/writing/isekai-story", permanent: true },
      { source: "/article/2", destination: "/writing/work-life-balance", permanent: true },
      { source: "/article/:slug", destination: "/writing", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
