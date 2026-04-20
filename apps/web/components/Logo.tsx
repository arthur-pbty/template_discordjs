import { getT } from "../i18n/server";
import { Link } from "../i18n/navigation";

import { cn } from "./ui/cn";

export default async function Logo({ className = "" }: { className?: string }) {
  const t = await getT();

  return (
    <Link
      className={cn("inline-flex items-center gap-3", className)}
      href="/"
    >
      <svg
        aria-hidden
        className="h-9 w-9"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="shadow-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#4f8cff" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="10" fill="url(#shadow-gradient)" />
        <path
          d="M13 31c5.5-5.5 10-9.5 21-12"
          stroke="rgba(255,255,255,0.95)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>

      <span className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
        {t("common.brand")}
      </span>
    </Link>
  );
}
