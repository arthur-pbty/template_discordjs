"use client";

import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { useT } from "../i18n/client";
import { usePathname, useRouter } from "../i18n/navigation";
import { routing, type AppLocale } from "../i18n/routing";
import { Switch } from "./ui/Switch";
import { cn } from "./ui/cn";

export default function LanguageSwitcher() {
  const t = useT();
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const localeLabels: Record<AppLocale, string> = {
    en: t("localeSwitcher.locales.en"),
    fr: t("localeSwitcher.locales.fr"),
  };

  const handleLocaleChange = (nextLocale: AppLocale) => {
    if (nextLocale === locale) {
      return;
    }

    const query = Object.fromEntries(searchParams.entries());

    startTransition(() => {
      router.replace({ pathname, query }, { locale: nextLocale });
    });
  };

  if (routing.locales.length !== 2) {
    return (
      <label className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] px-2.5 py-1.5">
        <span className="sr-only">{t("localeSwitcher.label")}</span>
        <select
          aria-label={t("localeSwitcher.label")}
          className="bg-transparent text-xs font-semibold text-[var(--foreground)] focus:outline-none"
          disabled={isPending}
          onChange={(event) => handleLocaleChange(event.target.value as AppLocale)}
          value={locale}
        >
          {routing.locales.map((availableLocale) => (
            <option key={availableLocale} value={availableLocale}>
              {localeLabels[availableLocale]}
            </option>
          ))}
        </select>
      </label>
    );
  }

  const [leftLocale, rightLocale] = routing.locales;
  const checked = locale === rightLocale;

  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-subtle)] px-2 py-1.5">
      <span
        className={cn(
          "text-[11px] font-semibold",
          checked ? "text-[var(--foreground-muted)]" : "text-[var(--foreground)]",
        )}
      >
        {localeLabels[leftLocale]}
      </span>
      <Switch
        aria-label={t("localeSwitcher.label")}
        checked={checked}
        disabled={isPending}
        onCheckedChange={(nextChecked) =>
          handleLocaleChange(nextChecked ? rightLocale : leftLocale)
        }
        size="sm"
      />
      <span
        className={cn(
          "text-[11px] font-semibold",
          checked ? "text-[var(--foreground)]" : "text-[var(--foreground-muted)]",
        )}
      >
        {localeLabels[rightLocale]}
      </span>
    </div>
  );
}
