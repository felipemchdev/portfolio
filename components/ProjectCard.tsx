"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    title: string
    subtitle: string
    imageSrc?: string
    tags: string[]
    href: string
    priority?: boolean
    index: number
}

export function ProjectCard({ title, subtitle, imageSrc, tags, href, priority, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
        >
            <Link
                href={href}
                target="_blank"
                className="group flex flex-col gap-5 rounded-xl border border-border/60 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 sm:flex-row"
            >
                {imageSrc && (
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:w-44">
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={priority}
                        />
                    </div>
                )}

                <div className="flex flex-col gap-2">
                    <h3 className="flex items-center gap-2 text-base font-semibold text-foreground leading-tight">
                        {title}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{subtitle}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-full border border-primary/40 bg-primary/5 px-2.5 py-0.5 text-[11px] font-medium text-primary"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}
