import { Link } from "react-router";

import type { Locale } from "@/lib/locale";

export function Logo({ size = 80, locale }: { size?: number; locale: Locale }) {
  return (
    <Link to={`/${locale}`} className="max-w-16 min-w-5 sm:max-w-none">
      <img src="/logo128.png" width={size} height={size} alt="Guzek UK Logo" />
    </Link>
  );
}
