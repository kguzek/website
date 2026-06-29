import { useOutletContext } from "react-router";

import { HomePage } from "@/pages/home";

import type { LayoutContext } from "./_layout";

export default function Home() {
  const { locale, messages, projects } = useOutletContext<LayoutContext>();
  return <HomePage locale={locale} projects={projects} messages={messages} />;
}
