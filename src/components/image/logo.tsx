import { Link } from "react-router";

export function Logo({ size = 80 }: { size?: number }) {
  return (
    <Link to="/" className="max-w-16 min-w-5 sm:max-w-none">
      <img src="/logo128.png" width={size} height={size} alt="Guzek UK Logo" />
    </Link>
  );
}
