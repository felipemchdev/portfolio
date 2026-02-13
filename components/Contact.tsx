"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { SectionHeading } from "@/components/SectionHeading"

export function Contact() {
    return (
        <section id="contact" className="mb-16 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
            <SectionHeading title="Contato" />
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <p className="mb-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Estou sempre aberto a novas oportunidades e conversas. Se você tem um projeto em mente ou apenas quer dizer oi, sinta-se à vontade para entrar em contato.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                    <Link
                        href="mailto:felipe.mch.alt@gmail.com"
                        className="group inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                    >
                        <Mail className="h-4 w-4" />
                        Enviar Email
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="https://cal.com/felipemch"
                        target="_blank"
                        className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                    >
                        Agendar Reunião
                    </Link>
                </div>
            </motion.div>

            <footer className="mt-24 border-t border-border/40 pt-8">
                <p className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Felipe Machado. Todos os direitos reservados.
                </p>
            </footer>
        </section>
    )
}
