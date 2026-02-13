"use client"

import { motion } from "framer-motion"
import { education } from "@/app/data"
import { SectionHeading } from "@/components/SectionHeading"

export function EducationList() {
    return (
        <section id="education" className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
            <SectionHeading title="Formação" />
            <div className="relative">
                {/* Continuous vertical timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-[calc(25%-1rem)]" />

                <ul className="space-y-10">
                    {education.map((edu, index) => (
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
                                <header className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground md:col-span-1 md:text-right md:pr-8" aria-label={edu.period}>
                                    {edu.period}
                                </header>
                                <div className="md:col-span-3 rounded-lg p-4 -m-4 transition-all duration-300 group-hover:bg-card group-hover:shadow-sm group-hover:border group-hover:border-border/60">
                                    <h3 className="text-base font-semibold text-foreground leading-tight">
                                        {edu.degree}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {edu.institution}
                                    </p>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
