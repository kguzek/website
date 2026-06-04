import { Logo } from "@/components/image/logo";
import { GITHUB_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-4">
      <hr className="border-background" />
      <div className="mt-4 flex flex-col items-center justify-center gap-x-3 gap-y-6 text-xs sm:flex-row sm:flex-wrap">
        <div className="flex items-center gap-3">
          <Logo size={24} />
          <a
            className="hover-underline flex min-h-6 items-center"
            href={`${GITHUB_URL}/website`}
          >
            2021–2026 &copy; Konrad Guzek
          </a>
        </div>
      </div>
    </footer>
  );
}
