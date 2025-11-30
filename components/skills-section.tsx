"use client"

import RevealOnView from "@/components/reveal-on-view"
import {
  SiPython,
  SiDjango,
  SiGit,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiApachespark,
  SiApachehadoop,
  SiDatabricks,
  SiFigma,
  SiAdobeaftereffects,
} from "react-icons/si"
import { Cloud, Table, Coffee, Brain, MessageSquare, Database } from "lucide-react"

export function SkillsSection() {
  const skills = [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Java", icon: Coffee, color: "#007396" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
    { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: Cloud, color: "#FF9900" },
    { name: "Pandas", icon: Table, color: "#150458" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "LLMs", icon: Brain, color: "#8B5CF6" },
    { name: "AI Prompts", icon: MessageSquare, color: "#10B981" },
    { name: "RAG", icon: Database, color: "#F59E0B" },
    { name: "Databricks", icon: SiDatabricks, color: "#FF3621" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "After Effects", icon: SiAdobeaftereffects, color: "#9999FF" },
  ]

  return (
    <RevealOnView
      as="section"
      id="skills"
      className="scroll-mt-4 rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Minhas Habilidades</h2>
        <p className="mt-2 text-white/70">Tecnologias e ferramentas que utilizo no meu dia a dia.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {skills.map((skill, idx) => {
          const Icon = skill.icon
          return (
            <RevealOnView
              key={skill.name}
              as="div"
              delay={idx * 0.03}
              className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Icon className="h-10 w-10 transition-transform group-hover:scale-110" style={{ color: skill.color }} />
              <span className="text-center text-xs font-medium text-white/80">{skill.name}</span>
            </RevealOnView>
          )
        })}
      </div>
    </RevealOnView>
  )
}
