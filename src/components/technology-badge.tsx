import type { SVGProps } from "react";
import {
  siAngular,
  siDirectus,
  siFirebase,
  siGooglecloud,
  siJavascript,
  siLucide,
  siNextdotjs,
  siPostgresql,
  siPython,
  siReact,
  siSpring,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

interface IconData {
  path: string;
  hex: string;
}

const fromPackage: Record<string, IconData> = {
  TypeScript: siTypescript,
  Next_JS: siNextdotjs,
  React: siReact,
  Tailwind_CSS: siTailwindcss,
  Python: siPython,
  JavaScript: siJavascript,
  PostgreSQL: siPostgresql,
  Google_Cloud: siGooglecloud,
  Angular: siAngular,
  Firebase: siFirebase,
  Directus: siDirectus,
  Spring: siSpring,
  Lucide: siLucide,
};

const manualIcons: Record<string, { path: string; hex: string }> = {
  Java: {
    hex: "ED8B00",
    path: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639",
  },
  Microsoft_Azure: {
    hex: "0078D4",
    path: "M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32m-3.084-12.531 3.624 10.739a.54.54 0 0 1-.51.713v-.001h-.03a.54.54 0 0 1-.322-.106l-9.287-6.9h4.853m6.313 7.006c.116-.326.13-.694.007-1.058L9.79 1.76a1.722 1.722 0 0 0-.007-.02h6.034a.54.54 0 0 1 .512.366l6.562 19.445a.54.54 0 0 1-.338.684",
  },
};

const iconMap: Record<string, IconData> = { ...fromPackage, ...manualIcons };

const paths: Record<string, string> = {};
const colors: Record<string, string> = {};

for (const [name, data] of Object.entries(iconMap)) {
  paths[name] = data.path;
  colors[name] = `#${data.hex}`;
}

// Color overrides for visibility on dark backgrounds
colors["TypeScript"] = "#5BA3E6";
colors["Next_JS"] = "#1a8cff";
colors["React"] = "#FF6B35";
colors["Angular"] = "#f4104c";
colors["Directus"] = "#8B5CF6";
colors["Lucide"] = "#FF6F61";

export function TechIcon({ name, ...props }: { name: string } & SVGProps<SVGSVGElement>) {
  const path = paths[name];
  if (!path) return null;
  return (
    <svg viewBox="0 0 24 24" fill={colors[name] || "currentColor"} {...props}>
      <path d={path} />
    </svg>
  );
}

export function TechColor(name: string): string {
  return colors[name] || "var(--color-accent)";
}
