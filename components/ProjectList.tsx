"use client"

import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeading } from "@/components/SectionHeading"
import type { Project } from "@/app/data"

interface ProjectListProps {
  title: string
  items: Project[]
}

export function ProjectList({ title, items }: ProjectListProps) {
  return (
    <section id="projects" className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <SectionHeading title={title} />
      <div className="flex flex-col gap-5">
        {items.map((project, index) => (
          <ProjectCard
            key={project.title}
            index={index}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}
