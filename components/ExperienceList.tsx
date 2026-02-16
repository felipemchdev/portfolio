"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"
import type { ExperienceItem } from "@/app/data"

interface ExperienceListProps {
  title: string
  items: ExperienceItem[]
  technologiesLabel: string
}

export function ExperienceList({ title, items, technologiesLabel }: ExperienceListProps) {
  return (
    <section id="experience" className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <SectionHeading title={title} />
      <div className="relative">
        <div className="absolute bottom-0 left-0 top-0 w-px bg-border md:left-[calc(25%-1rem)]" />

        <ol className="space-y-10">
          {items.map((job, index) => (
            <motion.li
              key={`${job.company}-${job.period}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute left-[-4.5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-primary bg-background md:left-[calc(25%-1rem-4.5px)]" />

              <div className="group relative grid transition-all md:grid-cols-4 md:gap-6">
                <header className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:col-span-1 md:pr-8 md:text-right" aria-label={job.period}>
                  {job.period}
                </header>
                <div className="-m-4 rounded-lg p-4 transition-all duration-300 group-hover:border group-hover:border-border/60 group-hover:bg-card group-hover:shadow-sm md:col-span-3">
                  <h3 className="text-base leading-tight text-foreground">
                    <span className="font-semibold">{job.role}</span>
                    <br />
                    <span className="font-normal text-muted-foreground"> - {job.company}</span>
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">{job.location}</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                    {job.description.map((description, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        {description}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={technologiesLabel}>
                    {job.skills.map((skill, skillIndex) => (
                      <li key={`${skill}-${skillIndex}`}>
                        <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary transition-colors hover:bg-primary/10">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
