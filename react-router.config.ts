import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import type { Config } from "@react-router/dev/config";

export default {
  appDirectory: "src",
  ssr: false,
  buildDirectory: "dist",
  async prerender({ getStaticPaths }) {
    const { getProjects } = await import("./src/content/projects-data.ts");
    const projects = getProjects();
    const locales = ["en", "pl"];

    const staticPaths = getStaticPaths();
    const paths = [
      ...staticPaths,
      ...locales.flatMap((l) => [
        `/${l}`,
        ...projects.map((p) => `/${l}/projects/${p.slug}`),
      ]),
    ];

    const sitemap = generateSitemap("https://www.guzek.uk", paths);
    writeFileSync(resolve("dist/client/sitemap.xml"), sitemap);
    console.log(`Generated sitemap with ${paths.length} URLs`);

    return paths;
  },
} satisfies Config;

function generateSitemap(domain: string, paths: string[]): string {
  const entries = paths.map((p) => {
    let priority = "0.5";
    if (p === "/") priority = "1.0";
    else if (p.split("/").length === 2) priority = "0.9";
    else if (p.includes("/projects/")) priority = "0.7";
    return `  <url>\n    <loc>${domain}${p}</loc>\n    <priority>${priority}</priority>\n  </url>`;
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries,
    `</urlset>`,
    "",
  ].join("\n");
}
