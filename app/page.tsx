"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/Hero"
import { ExperienceList } from "@/components/ExperienceList"
import { ProjectList } from "@/components/ProjectList"
import { SkillsList } from "@/components/SkillsList"
import { Contact } from "@/components/Contact"
import { EducationList } from "@/components/EducationList"
import { IntroOverlay } from "@/components/IntroOverlay"
import { detectBrowserLocale, getSiteContent, type Locale } from "@/app/data"

const LOCALE_STORAGE_KEY = "portfolio-locale"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)
  const [locale, setLocale] = useState<Locale>("pt")

  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)
    if (savedLocale === "pt" || savedLocale === "en") {
      setLocale(savedLocale)
      return
    }

    setLocale(detectBrowserLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }, [locale])

  const siteContent = getSiteContent(locale)

  return (
    <>
      <IntroOverlay text={siteContent.introText} />
      <div
        className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 transition-all duration-700 ${introComplete ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}
      >
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Hero
            siteConfig={siteContent.siteConfig}
            hero={siteContent.hero}
            locale={locale}
            onLocaleChange={setLocale}
          />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <ExperienceList
              title={siteContent.sectionTitles.experience}
              items={siteContent.experience}
              technologiesLabel={siteContent.technologiesLabel}
            />
            <EducationList
              title={siteContent.sectionTitles.education}
              items={siteContent.education}
            />
            <ProjectList
              title={siteContent.sectionTitles.projects}
              items={siteContent.projects}
            />
            <SkillsList
              title={siteContent.sectionTitles.skills}
              items={siteContent.skills}
            />
            <Contact content={siteContent.contact} />
          </main>
        </div>
      </div>
    </>
  )
}
