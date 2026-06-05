import { useCallback, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/locale";
import { GalleryModal } from "@/components/gallery-modal";
import { TechColor, TechIcon } from "@/components/technology-badge";
import { technologyName } from "@/content/projects-data";
import { projectDescriptions } from "@/projects/descriptions";

interface ProjectDetailPageProps {
  locale: Locale;
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
  messages: Record<string, string>;
}

export function ProjectDetailPage({
  locale,
  project,
  prevProject,
  nextProject,
  messages,
}: ProjectDetailPageProps) {
  const description = projectDescriptions[project.slug]?.[locale];
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const allImages = [
    ...(project.mainImage ? [project.mainImage] : []),
    ...project.extraImages,
  ];

  const scrollCarousel = useCallback((dir: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="page stack-page project-details">
      <a
        href={`/${locale}`}
        className="back-link text-primary hover:text-primary-strong mb-2 inline-flex w-fit items-center gap-1.5 transition-colors"
      >
        <ArrowLeft size={18} className="back-arrow" /> {messages.back}
      </a>

      {project.mainImage && (
        <button
          onClick={() => setGalleryIndex(0)}
          className="block w-full cursor-zoom-in text-left"
          aria-label="Open gallery"
        >
          <img
            src={project.mainImage.url}
            alt={project.mainImage.alt}
            className="project-image"
          />
        </button>
      )}

      <section className="page-heading">
        <p className="eyebrow">
          {project.categories.map((cat) => cat.label[locale]).join(" / ")}
        </p>
        <h1 className="project-detail-title">{project.title[locale]}</h1>
        <p className="project-excerpt">{project.excerpt[locale]}</p>
      </section>

      <div className="tag-row large">
        {project.technologies.map((tech) => (
          <span
            key={tech.id}
            className="tag-badge"
            style={{ "--tag-color": TechColor(tech.name) } as React.CSSProperties}
          >
            <TechIcon name={tech.name} width={16} height={16} />
            {technologyName(tech.name)}
          </span>
        ))}
      </div>

      <div className="prose">{description || <p>{project.description[locale]}</p>}</div>

      {allImages.length > 1 && (
        <section>
          <h2 className="text-primary-strong text-2xl font-bold">{messages.gallery}</h2>
          <div className="carousel-wrapper">
            {allImages.length > 2 && (
              <button
                onClick={() => scrollCarousel("left")}
                className="carousel-arrow left"
                aria-label="Previous images"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            <div ref={carouselRef} className="project-gallery">
              {allImages.map((image, idx) => (
                <button
                  key={image.id}
                  onClick={() => setGalleryIndex(idx)}
                  className="gallery-image-wrapper"
                  aria-label={`Open ${image.alt} in gallery`}
                >
                  <img src={image.url} alt={image.alt} className="gallery-image" />
                </button>
              ))}
            </div>
            {allImages.length > 2 && (
              <button
                onClick={() => scrollCarousel("right")}
                className="carousel-arrow right"
                aria-label="Next images"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </section>
      )}

      {galleryIndex !== null && (
        <GalleryModal
          images={allImages}
          initialIndex={galleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}

      <div className="actions">
        {project.url ? (
          <a className="button primary" href={project.url} rel="noreferrer">
            {messages.visit} <ArrowUpRight size={18} />
          </a>
        ) : null}
        {project.repository ? (
          <a className="button" href={project.repository} rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            {messages.source}
          </a>
        ) : null}
      </div>

      <div className="project-navigation">
        {prevProject ? (
          <a
            href={`/${locale}/projects/${prevProject.slug}`}
            className="project-nav-link prev"
          >
            <ChevronLeft size={20} />
            <div>
              <div className="project-nav-label">{messages.previous}</div>
              <div className="project-nav-title">{prevProject.title[locale]}</div>
            </div>
          </a>
        ) : (
          <div />
        )}
        {nextProject ? (
          <a
            href={`/${locale}/projects/${nextProject.slug}`}
            className="project-nav-link next"
          >
            <div>
              <div className="project-nav-label">{messages.next}</div>
              <div className="project-nav-title">{nextProject.title[locale]}</div>
            </div>
            <ChevronRight size={20} />
          </a>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
