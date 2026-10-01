import { projects } from "./data/projects";

const baseUrl = "https://alielchab.vercel.app";

const sitemap = () => [
  { url: baseUrl, lastModified: new Date() },
  { url: `${baseUrl}/projects`, lastModified: new Date() },
  ...projects.map((p) => ({ url: `${baseUrl}/projects/${p.slug}`, lastModified: new Date() })),
];

export default sitemap;
