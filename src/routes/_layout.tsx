import { Outlet, useLocation } from "react-router";

import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/locale";
import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation";
import { SchemaOrgScript } from "@/components/schema-org";
import { messages as allMessages } from "@/content/i18n";
import { getProjects } from "@/content/projects-data";
import { GITHUB_URL, PRODUCTION_URL } from "@/lib/constants";
import { defaultLocale, isValidLocale, redirectToLocalizedUrl } from "@/lib/locale";

import type { Route } from "./+types/_layout";

export interface LayoutContext {
  locale: Locale;
  messages: Record<string, string>;
  projects: Project[];
}

export function clientLoader({ params, serverLoader }: Route.ClientLoaderArgs) {
  if (!params.locale) return redirectToLocalizedUrl();

  return serverLoader();
}

export function loader({ params }: Route.LoaderArgs) {
  const locale =
    params.locale && isValidLocale(params.locale) ? params.locale : defaultLocale;

  if (params.locale && !isValidLocale(params.locale)) {
    throw new Response("Not Found", { status: 404 });
  }

  const msgs = allMessages[locale as keyof typeof allMessages] || allMessages.en;

  return {
    locale,
    messages: {
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
    },
    projects: getProjects(),
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

export default function Layout({ loaderData }: Route.ComponentProps) {
  const pathname = useLocation().pathname;

  return (
    <div className="app-shell">
      <SchemaOrgScript schema={personSchema} />
      <NavigationBar pathname={pathname} locale={loaderData.locale} />
      <div className="app-content">
        <Outlet context={loaderData satisfies LayoutContext} />
      </div>
      <Footer />
    </div>
  );
}
