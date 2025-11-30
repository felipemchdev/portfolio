"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import DotGridShader from "@/components/DotGridShader"

import ProjectCard from "@/components/project-card"
import AnimatedHeading from "@/components/animated-heading"
import RevealOnView from "@/components/reveal-on-view"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import ChatbotLoading from "@/components/chatbot-loading"

export default function Page() {
  const projects = [
    {
      title: "Portfólio",
      subtitle: "Este site que você está vendo agora 😄",
      imageSrc: "/images/portfolio-image.png",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/felipemchdev/portfolio",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#2563eb",
    },
    {
      title: "API Site de Eventos",
      subtitle: "API para se inscrever em eventos, com sistema de contabilização de inscritos",
      imageSrc: "/images/api-eventos.png",
      tags: ["Python", "Flask", "SQLAlchemy"],
      href: "https://github.com/felipemchdev/Event_API_Flask",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#10b981",
    },
    {
      title: "DataLake Simples",
      subtitle: "Carga e manipulação de dados em formato Parquet",
      imageSrc: "/images/datalake.png",
      tags: ["Python", "DuckDB", "Parquet"],
      href: "https://github.com/felipemchdev/datalake_py_parquet",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#f59e0b",
    },
    {
      title: "Análise de Vendas com Streamlit",
      subtitle: "Dashboard em Python para análise de vendas",
      imageSrc: "/images/analise-financeira.png",
      tags: ["Jupyter", "Python", "Pandas", "Streamlit"],
      href: "https://github.com/felipemchdev/fin_analysis_py",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#ec4899",
    },
    {
      title: "LLM Chatbot",
      subtitle: "Em desenvolvimento...",
      customContent: <ChatbotLoading />,
      tags: ["Em Breve", "Python", "LangChain", "Claude Sonnet", "API"],
      href: "#",
      priority: false,
      gradientFrom: "#1f2937",
      gradientTo: "#8b5cf6",
    },
    {
      title: "Site de Eventos",
      subtitle: "Página para eventos, com sistema de inscritos e contador de convites",
      imageSrc: "/images/site-eventos.png",
      tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      href: "https://github.com/felipemchdev/webevent_react-node",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#0ea5e9",
    },
    {
      title: "Calculadora KivyMD com Matplotlib",
      subtitle: "Calculadora em KivyMD com Matplotlib, para gerar gráficos das funções",
      imageSrc: "/images/calculadora-kivy.png",
      tags: ["KivyMD", "Matplotlib", "Python"],
      href: "https://github.com/felipemchdev/CalculadoraKivyMD/releases/tag/KIVY!",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#14b8a6",
    },
  ]

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>

              <div>
                {/* Profile Image */}
                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500/50 shadow-2xl shadow-blue-500/20">
                    <Image src="/images/profile.png" alt="Felipe Machado" fill className="object-cover" priority />
                  </div>
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl"
                  lines={["Olá, me chamo", "Felipe Machado"]}
                />

                <p className="mt-4 max-w-[42ch] text-lg text-white/70">
                  Sou um engenheiro de software com 2 anos de experiência. Atualmente atuando na função de Arquiteto de
                  dados.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="https://cal.com/felipemch" target="_blank" rel="noopener noreferrer">
                      Entre em Contato
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-white/20 bg-white/5 hover:bg-white/10"
                    onClick={() => {
                      console.log("[v0] Scroll button clicked")
                      const experienceElement = document.getElementById("experience")
                      console.log("[v0] Experience element found:", experienceElement)
                      if (experienceElement) {
                        experienceElement.scrollIntoView({ behavior: "smooth", block: "start" })
                      } else {
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    }}
                  >
                    Ver Experiência
                  </Button>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex gap-3">
                  <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                    <Link href="https://github.com/felipemchdev" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                    <Link href="https://linkedin.com/in/felipemch" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                    <Link href="mailto:felipe.mch.alt@gmail.com">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </Button>
                  <Button asChild size="icon" variant="ghost" className="rounded-full hover:bg-white/10">
                    <Link href="https://cal.com/felipemch" target="_blank" rel="noopener noreferrer">
                      <Calendar className="h-5 w-5" />
                      <span className="sr-only">Agendar reunião</span>
                    </Link>
                  </Button>
                </div>

                {/* Education Section */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">EDUCAÇÃO</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-white/90">Engenharia de Computação</p>
                      <p className="text-sm text-white/60">UNICEP - Centro Universitário Central Paulista</p>
                      <p className="text-xs text-white/50">Jan 2024 - Dez 2027 (Previsão)</p>
                    </div>
                  </div>
                </div>

                {/* Interests Section */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">INTERESSES</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Neural Engineering - EEG, EMG, EKG
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Virtual Reality
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Data Engineering
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Motorsport Data - MATLAB
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      AI Engineering
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Software Development
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Media Creation
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Media Editing
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/80">
                      Photography
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: scrollable content */}
          <div className="space-y-4">
            {/* Experience Section */}
            <ExperienceSection />

            {/* Projects Section */}
            <div id="projects" className="scroll-mt-4">
              {projects.map((p, idx) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  subtitle={p.subtitle}
                  imageSrc={p.imageSrc}
                  tags={p.tags}
                  href={p.href}
                  priority={p.priority}
                  gradientFrom={p.gradientFrom}
                  gradientTo={p.gradientTo}
                  customContent={p.customContent}
                  imageContainerClassName="lg:h-full"
                  containerClassName={idx === 0 ? "lg:h-auto mb-4" : "lg:h-[calc(50svh-1rem)] mb-4"}
                  revealDelay={idx * 0.06}
                />
              ))}
            </div>

            {/* Skills Section */}
            <SkillsSection />

            {/* Contact Section */}
            <ContactSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-neutral-900/40 px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Felipe Machado. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/felipemchdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/felipemch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
