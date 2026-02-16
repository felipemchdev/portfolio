"use client"

import type { Locale } from "@/app/data"

interface LanguageToggleProps {
  locale: Locale
  onChange: (locale: Locale) => void
  label: string
}

const languageOptions: Array<{ locale: Locale; code: string; name: string; flag: string }> = [
  { locale: "pt", code: "PT", name: "Portugues", flag: "🇧🇷" },
  { locale: "en", code: "EN", name: "English", flag: "🇺🇸" },
]

export function LanguageToggle({ locale, onChange, label }: LanguageToggleProps) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-border bg-card p-1"
    >
      {languageOptions.map((option) => {
        const isActive = option.locale === locale
        return (
          <button
            key={option.locale}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={option.name}
            onClick={() => onChange(option.locale)}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${isActive
              ? "bg-foreground text-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
              }`}
          >
            <span aria-hidden>{option.flag}</span>
            <span>{option.code}</span>
          </button>
        )
      })}
    </div>
  )
}
