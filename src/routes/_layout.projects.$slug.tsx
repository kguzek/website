import { useOutletContext } from "react-router";

import { getAdjacentProject, getProject } from "@/content/projects-data";
import { ProjectDetailPage } from "@/pages/project-detail";

import type { LayoutContext } from "./_layout";
import type { Route } from "./+types/_layout.projects.$slug";

export function loader({ params }: Route.LoaderArgs) {
  const slug = params.slug!;
  const project = getProject(slug);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  const prevProject = getAdjacentProject(slug, "prev");
  const nextProject = getAdjacentProject(slug, "next");
  return { project, prevProject, nextProject };
}

export default function ProjectDetail({ loaderData }: Route.ComponentProps) {
  const { locale, messages } = useOutletContext<LayoutContext>();
  const { project, prevProject, nextProject } = loaderData;

  return (
    <ProjectDetailPage
      locale={locale}
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      messages={messages}
    />
  );
}
