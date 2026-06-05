import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const links: SocialLink[] = [
  {
    href: "https://github.com/kguzek",
    label: "GitHub",
    icon: <Github size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/konrad-guzek/",
    label: "LinkedIn",
    icon: <Linkedin size={20} />,
  },
  {
    href: "mailto:konrad@guzek.uk",
    label: "Email",
    icon: <Mail size={20} />,
  },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-white/20 hover:bg-white/10"
          rel="me noreferrer"
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  );
}
