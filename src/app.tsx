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
  if (!isValidLocale(parts[0])) return "not-found";
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
    notFoundDescription: msgs.notFound.description,
    notFoundHome: msgs.notFound.home,
  };
}

function NotFoundPage({
  locale,
  messages,
}: {
  locale: Locale;
  messages: Record<string, string>;
}) {
  return (
    <main className="page not-found-page">
      <div className="not-found-card">
        <div className="not-found-icon" aria-hidden="true">
          <svg viewBox="0 0 48 48" role="img">
            <circle cx="21" cy="21" r="13" />
            <path d="m31 31 9 9" />
            <path d="M21 13v10" />
            <path d="M21 29h.01" />
          </svg>
        </div>
        <p className="not-found-code">404</p>
        <h1 className="not-found-title">{messages.notFoundTitle}</h1>
        <p className="not-found-description">{messages.notFoundDescription}</p>
        <a className="button not-found-home" href={`/${locale}`}>
          <span aria-hidden="true">←</span>
          {messages.notFoundHome}
        </a>
      </div>
    </main>
  );
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
      content = <NotFoundPage locale={locale} messages={messages} />;
    }
  } else {
    content = <NotFoundPage locale={locale} messages={messages} />;
  }

  return (
    <div className="app-shell">
      <SchemaOrgScript schema={personSchema} />
      <NavigationBar pathname={path} locale={locale} />
      <div className="app-content">{content}</div>
      <Footer />
    </div>
  );
}
