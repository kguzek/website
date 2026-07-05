import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/locale";
import { SocialLinks } from "@/components/social-links";
import { TechColor, TechIcon } from "@/components/technology-badge";
import { technologyName } from "@/content/projects-data";

interface HomePageProps {
  locale: Locale;
  projects: Project[];
  messages: Record<string, string>;
}

export function HomePage({ locale, projects, messages }: HomePageProps) {
  return (
    <main className="page stack-page">
      <section className="page-heading hero-section">
        <p className="eyebrow">{messages.eyebrow}</p>
        <h1 className="hero-title">{messages.title}</h1>
        <p className="intro">{messages.intro}</p>
        <SocialLinks className="mt-6 flex items-center gap-4" />
      </section>
      <section>
        <h2 className="projects-heading">{messages.projects}</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/${locale}/projects/${project.slug}`}
              className="project-card"
            >
              {project.mainImage && (
                <img
                  src={project.mainImage.url}
                  alt={project.mainImage.alt}
                  width={96}
                  height={96}
                  className="project-card-image"
                />
              )}
              <div className="project-card-content">
                <h2>{project.title[locale]}</h2>
                <p>{project.excerpt[locale]}</p>
                <div className="tag-row">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech.id}
                      className="tag-badge"
                      style={
                        { "--tag-color": TechColor(tech.name) } as React.CSSProperties
                      }
                    >
                      <TechIcon name={tech.name} width={14} height={14} />
                      {technologyName(tech.name)}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowUpRight className="card-arrow" aria-hidden />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
