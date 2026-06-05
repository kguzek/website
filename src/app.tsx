import type { Locale } from "@/lib/locale";
import { isValidLocale } from "@/lib/locale";

import { Footer } from "./components/footer";
import { NavigationBar } from "./components/navigation";
import { SchemaOrgScript } from "./components/schema-org";
import { messages as allMessages } from "./content/i18n";
import { getPrerenderProjects } from "./content/prerender-data";
import { getAdjacentProject, getProject } from "./content/projects-data";
import { GITHUB_URL, PRODUCTION_URL } from "./lib/constants";
import { HomePage } from "./pages/home";
import { ProjectDetailPage } from "./pages/project-detail";

function parseLocale(pathname: string): Locale {
  const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
  const candidate = match?.[1];
  return candidate && isValidLocale(candidate) ? (candidate as Locale) : "en";
}

function getPage(pathname: string): "home" | "project" | "not-found" {
  const parts = pathname.replace(/^\/+/g, "").split("/").filter(Boolean);
  if (parts.length === 0) return "home";
  if (parts.length === 1) return "home";
  if (parts[1] === "projects" && parts.length === 3) return "project";
  return "not-found";
}

function getMessages(locale: Locale) {
  const msgs = allMessages[locale as keyof typeof allMessages] || allMessages.en;
  return {
    eyebrow: msgs.home.eyebrow,
    title: msgs.home.title,
    intro: msgs.home.intro,
    projects: msgs.home.projects,
    visit: msgs.projects.visit,
    source: msgs.projects.source,
    back: msgs.projects.back,
    previous: msgs.projects.previous,
    next: msgs.projects.next,
    gallery: msgs.project.gallery,
    notFoundTitle: msgs.notFound.title,
    notFoundHome: msgs.notFound.home,
  };
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Konrad Guzek",
  email: "mailto:konrad@guzek.uk",
  url: PRODUCTION_URL,
  sameAs: ["https://www.linkedin.com/in/konrad-guzek/", GITHUB_URL],
  jobTitle: "Software Developer",
};

export function App({ path }: { path: string }) {
  const locale = parseLocale(path);
  const page = getPage(path);
  const messages = getMessages(locale) as unknown as Record<string, string>;
  const projects = getPrerenderProjects() ?? [];

  const parts = path.replace(/^\/+/g, "").split("/").filter(Boolean);

  let content = null;

  if (page === "home") {
    content = <HomePage locale={locale} projects={projects} messages={messages} />;
  } else if (page === "project") {
    const slug = parts[2];
    const project = getProject(slug);
    if (project) {
      const prevProject = getAdjacentProject(slug, "prev");
      const nextProject = getAdjacentProject(slug, "next");
      content = (
        <ProjectDetailPage
          locale={locale}
          project={project}
          prevProject={prevProject}
          nextProject={nextProject}
          messages={messages}
        />
      );
    } else {
      content = (
        <main className="page stack-page">
          <h1 className="hero-title">{messages.notFoundTitle}</h1>
          <a className="text-link" href={`/${locale}`}>
            {messages.notFoundHome}
          </a>
        </main>
      );
    }
  } else {
    content = (
      <main className="page stack-page">
        <h1 className="hero-title">404</h1>
        <a className="text-link" href={`/${locale}`}>
          {messages.notFoundHome}
        </a>
      </main>
    );
  }

  return (
    <>
      <SchemaOrgScript schema={personSchema} />
      <NavigationBar pathname={path} locale={locale} />
      {content}
      <Footer />
    </>
  );
}
