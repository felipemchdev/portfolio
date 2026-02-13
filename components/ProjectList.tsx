"use client"
import { projects } from "@/app/data"
import { ProjectCard } from "@/components/ProjectCard"
import { SectionHeading } from "@/components/SectionHeading"

export function ProjectList() {
    return (
        <section id="projects" className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
            <SectionHeading title="Projetos" />
            <div className="flex flex-col gap-5">
                {projects.map((project, index) => (
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
