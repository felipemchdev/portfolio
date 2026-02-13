"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/Hero"
import { ExperienceList } from "@/components/ExperienceList"
import { ProjectList } from "@/components/ProjectList"
import { SkillsList } from "@/components/SkillsList"
import { Contact } from "@/components/Contact"
import { EducationList } from "@/components/EducationList"
import { IntroOverlay } from "@/components/IntroOverlay"

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <IntroOverlay />
      <div
        className={`mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 transition-all duration-700 ${introComplete ? "blur-0 opacity-100" : "blur-md opacity-0"
          }`}
      >
        <div className="lg:flex lg:justify-between lg:gap-16">
          <Hero />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <ExperienceList />
            <EducationList />
            <ProjectList />
            <SkillsList />
            <Contact />
          </main>
        </div>
      </div>
    </>
  )
}
