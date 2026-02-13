"use client"
import { skills } from "@/app/data"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/SectionHeading"

export function SkillsList() {
    return (
        <section id="skills" className="mb-20 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
            <SectionHeading title="Habilidades" />
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
                {skills.map((skill, idx) => {
                    const Icon = skill.icon
                    return (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03, duration: 0.3 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="group flex flex-col items-center justify-center gap-2.5 rounded-xl border border-border/50 bg-card p-4 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                        >
                            <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }} />
                            <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors">{skill.name}</span>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
