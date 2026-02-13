"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Calendar } from "lucide-react"
import { siteConfig } from "@/app/data"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
    { label: "Experiência", href: "#experience" },
    { label: "Formação", href: "#education" },
    { label: "Projetos", href: "#projects" },
    { label: "Habilidades", href: "#skills" },
    { label: "Contato", href: "#contact" },
]

const socialLinks = [
    { icon: Github, href: siteConfig.links.github, label: "GitHub" },
    { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
    { icon: Mail, href: siteConfig.links.email, label: "Email" },
    { icon: Calendar, href: siteConfig.links.calendar, label: "Agendar" },
]

export function Hero() {
    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="flex flex-col gap-6">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/20 shadow-lg"
                >
                    <Image
                        src="/images/profile.png"
                        alt={siteConfig.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Name & Role */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl font-serif font-bold tracking-tight text-foreground sm:text-5xl"
                    >
                        {siteConfig.name}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-2 text-base font-medium tracking-wide text-muted-foreground sm:text-lg"
                    >
                        {siteConfig.role}
                    </motion.h2>
                    {siteConfig.bio && (
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                            className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground"
                        >
                            {siteConfig.bio}
                        </motion.p>
                    )}
                </div>

                {/* Navigation */}
                <motion.nav
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="hidden lg:block"
                >
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className="group flex items-center py-2 transition-all"
                                >
                                    <span className="mr-4 h-px w-6 bg-muted-foreground/40 transition-all duration-300 group-hover:w-12 group-hover:bg-foreground" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            </div>

            {/* Social Links & Theme Toggle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex items-center gap-3 lg:mt-0"
            >
                {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                        <Link
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                            aria-label={link.label}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground hover:shadow-md hover:-translate-y-0.5"
                        >
                            <Icon className="h-4 w-4" />
                        </Link>
                    )
                })}
                <div className="ml-1">
                    <ThemeToggle />
                </div>
            </motion.div>
        </header>
    )
}
