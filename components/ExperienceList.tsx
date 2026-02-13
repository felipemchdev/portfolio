"use client"
import { experience } from "@/app/data"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"

export function ExperienceList() {
    return (
        <section id="experience" className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
            <SectionHeading title="Experiência" />
            <div className="relative">
                {/* Continuous vertical timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[calc(25%-1rem)]" />

                <ol className="space-y-10">
                    {experience.map((job, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-[-4.5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-primary bg-background md:left-[calc(25%-1rem-4.5px)]" />

                            <div className="group relative grid transition-all md:grid-cols-4 md:gap-6">
                                <header className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:col-span-1 md:text-right md:pr-8" aria-label={job.period}>
                                    {job.period}
                                </header>
                                <div className="md:col-span-3 rounded-lg p-4 -m-4 transition-all duration-300 group-hover:bg-card group-hover:shadow-sm group-hover:border group-hover:border-border/60">
                                    <h3 className="text-base font-semibold text-foreground leading-tight">
                                        {job.role}<br />
                                        <span className="text-muted-foreground font-normal"> · {job.company}</span>
                                    </h3>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {job.location}
                                    </p>
                                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                                        {job.description.map((desc, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
                                        {job.skills.map((skill, i) => (
                                            <li key={i}>
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
