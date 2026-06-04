import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "..", "dist");

const vite = await createServer({
  root: path.resolve(__dirname, ".."),
  server: { middlewareMode: true },
  appType: "custom",
});

const entryServer = await vite.ssrLoadModule("/src/entry-server.tsx");

const template = await readFile(path.join(dist, "index.html"), "utf8");

function documentFor(route) {
  const html = entryServer.render(route);
  const localeMatch = route.match(/^\/([a-z]{2})(\/|$)/);
  const locale = localeMatch ? localeMatch[1] : entryServer.defaultLocale;
  return template
    .replace('<html lang="en"', `<html lang="${locale}"`)
    .replace("<!--app-html-->", html);
}

async function writeRoute(route) {
  const target = path.join(dist, route, "index.html");
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, documentFor(route));
}

const projects = await vite.ssrLoadModule("/src/content/projects-data.ts");
const allProjects = projects.getProjects();

const routes = entryServer.locales.flatMap((locale) => [
  `/${locale}`,
  ...allProjects.map((project) => `/${locale}/projects/${project.slug}`),
]);

await Promise.all(routes.map(writeRoute));
await writeFile(
  path.join(dist, "index.html"),
  documentFor(`/${entryServer.defaultLocale}`),
);
console.log(`Prerendered ${routes.length + 1} routes`);

await vite.close();
