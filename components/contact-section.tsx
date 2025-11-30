import { Mail, Linkedin, Github, Calendar } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import RevealOnView from "@/components/reveal-on-view"

export function ContactSection() {
  return (
    <RevealOnView
      as="section"
      id="contact"
      className="scroll-mt-4 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-6 sm:p-8"
    >
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Entre em Contato</h2>
        <p className="mt-2 text-white/70">Deseja falar comigo pessoalmente? Agende uma reunião comigo.</p>
      </div>

      <div className="mb-6 flex justify-center">
        <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700">
          <Link href="https://cal.com/felipemch" target="_blank" rel="noopener noreferrer">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Reunião
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <Link
          href="mailto:felipe.mch.alt@gmail.com"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <Mail className="h-5 w-5 text-blue-400" />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-white/50">Email</p>
            <p className="truncate text-sm font-medium">felipe.mch.alt@gmail.com</p>
          </div>
        </Link>

        <Link
          href="https://linkedin.com/in/felipemch"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <Linkedin className="h-5 w-5 text-blue-400" />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-white/50">LinkedIn</p>
            <p className="truncate text-sm font-medium">linkedin.com/in/felipemch</p>
          </div>
        </Link>

        <Link
          href="https://github.com/felipemchdev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
        >
          <Github className="h-5 w-5 text-blue-400" />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-white/50">GitHub</p>
            <p className="truncate text-sm font-medium">github.com/felipemchdev</p>
          </div>
        </Link>
      </div>
    </RevealOnView>
  )
}
