"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
    title: string
    subtitle?: string
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
        >
            <div className="flex items-center gap-4 mb-3">
                <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground sm:text-3xl">
                    {title}
                </h2>
                <div className="h-px flex-1 bg-border" />
            </div>
            {subtitle && (
                <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                    {subtitle}
                </p>
            )}
        </motion.div>
    )
}
