import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

import type { ProjectImage } from "@/content/projects";

interface GalleryModalProps {
  images: ProjectImage[];
  initialIndex: number;
  onClose: () => void;
}

export function GalleryModal({ images, initialIndex, onClose }: GalleryModalProps) {
  const slides = images.map((img) => ({
    src: img.url,
    alt: img.alt,
  }));

  return (
    <Lightbox
      open
      close={onClose}
      slides={slides}
      index={initialIndex}
      styles={{ container: { backgroundColor: "rgba(0,0,0,0.9)" } }}
      animation={{ fade: 300, swipe: 300 }}
    />
  );
}
