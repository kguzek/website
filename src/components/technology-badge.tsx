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
    path: "M8.851 18.56s-.417.242.297.324c.864.1 1.306.086 2.258-.096 0 0 .25.157.6.293-2.134.915-4.87-.067-3.155-.52zm-.537-1.562s-.468.347.247.42c.924.094 1.654.103 2.916-.14 0 0 .174.177.448.273-2.579.754-5.44.076-3.61-.553zM12.511 14.74c.525.604-1.381 1.147-1.381 1.147s3.502-.18 1.892-1.496c-.298-.244-.668-.574-.102-.862.933-.474 1.797-.89 1.797-.89s-3.103-.798-2.206.21zM7.937 6.108s-2.336.555-1.226.765c.28.053.846.082 1.365.062-.523-.15-1.118-.36-.14-.827zM14.088 13.725s.863.16-.089.342c-.32.058-1.287.095-2.025.064-.633.04-.977.13-.977.13s.532.106 1.68.151c1.364.054 2.606-.15 2.734-.326.505-.691-1.323-.36-1.323-.36zM11.98 0C11.98 0 8.247 3.99 12.326 8.152c-2.754-2.755-3.224-5.883-2.575-7.657.783-2.137 3.21-2.533 3.21-2.533S10.2 1.34 12.57 4.22C15.31 7.614 14.244 9.95 14.244 9.95s2.203-2.69.564-6.542C13.348.98 11.98 0 11.98 0zM7.848 18.108s1.078.176 2.157.13c1.268-.054 2.167-.016 2.167-.016s-.337.226-1.546.338c-1.167.108-2.555.073-3.313-.184-.797-.27-.416-.268.535-.268z",
  },
  Microsoft_Azure: {
    hex: "0078D4",
    path: "M13.05 4.24L6.56 18.05h2.73l2.57-5.38h3.48l-4.83-5.84L6.56 2l6.49 2.24zM5.59 6.25L2.44 16.93c-.16.5.02.86.58.86h2.97l2.57-5.38-1.34-4.32-1.63-1.84z",
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
