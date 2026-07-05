import { useLocation } from "react-router";

import { Footer } from "@/components/footer";
import { NavigationBar } from "@/components/navigation";
import { SchemaOrgScript } from "@/components/schema-org";
import { messages as allMessages } from "@/content/i18n";
import { GITHUB_URL, PRODUCTION_URL } from "@/lib/constants";
import { defaultLocale, isValidLocale } from "@/lib/locale";
import { NotFoundPage } from "@/pages/not-found";

export default function NotFoundCatchAll() {
  const pathname = useLocation().pathname;
  const localeSegment = pathname.split("/")[1];
  const locale =
    localeSegment && isValidLocale(localeSegment) ? localeSegment : defaultLocale;
  const msgs = allMessages[locale] || allMessages.en;

  const messages = {
    notFoundTitle: msgs.notFound.title,
    notFoundDescription: msgs.notFound.description,
    notFoundHome: msgs.notFound.home,
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Konrad Guzek",
    email: "mailto:konrad@guzek.uk",
    url: PRODUCTION_URL,
    sameAs: ["https://www.linkedin.com/in/konrad-guzek/", GITHUB_URL],
    jobTitle: "Software Developer",
  };

  return (
    <div className="app-shell">
      <SchemaOrgScript schema={personSchema} />
      <NavigationBar pathname={pathname} locale={locale} />
      <div className="app-content">
        <NotFoundPage locale={locale} messages={messages} />
      </div>
      <Footer />
    </div>
  );
}
