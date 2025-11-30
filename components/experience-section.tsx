import { Briefcase, MapPin } from "lucide-react"
import RevealOnView from "@/components/reveal-on-view"
import Image from "next/image"

export function ExperienceSection() {
  return (
    <RevealOnView
      as="section"
      id="experience"
      className="scroll-mt-4 rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Experiência</h2>
      </div>

      <div className="space-y-8">
        {/* Work Experience */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-400" />
            <h3 className="text-xl font-bold">Experiência Profissional</h3>
          </div>

          <div className="relative border-l-2 border-white/10 pl-6 space-y-8">
            <div className="relative">
              <div className="absolute -left-[20px] top-1 h-4 w-4 rounded-full border-2 border-blue-400 bg-neutral-900" />

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-white">Estagiário em Arquitetura de dados</h4>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-400">Atual</span>
                </div>
                <div className="mb-1 flex items-center gap-2">
                  <div className="relative h-6 w-6 flex-shrink-0">
                    <Image src="/images/image.png" alt="Serasa Experian" fill className="object-contain" />
                  </div>
                  <p className="text-white/80 font-medium">Serasa Experian</p>
                </div>
                <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                  <span>Mai 2025 - Atualmente</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Brasil</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-white/70">
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>
                      Análise e monitoramento de novas tecnologias para identificar riscos de segurança, não
                      conformidades e custos desnecessários
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Avaliação e elaboração de nomenclaturas e contratos de dados</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Desenvolvimento de automações funcionais em larga escala</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Python</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Javascript</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">AWS</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">ETL</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">DataLake</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Databricks</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Figma</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[20px] top-1 h-4 w-4 rounded-full border-2 border-white/20 bg-neutral-900" />

              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-semibold text-white">Aprendiz em Engenharia de Dados</h4>
                </div>
                <div className="mb-1 flex items-center gap-2">
                  <div className="relative h-6 w-6 flex-shrink-0">
                    <Image src="/images/image.png" alt="Serasa Experian" fill className="object-contain" />
                  </div>
                  <p className="text-white/80 font-medium">Serasa Experian</p>
                </div>
                <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
                  <span>Jan 2024 - Mai 2025</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>Brasil</span>
                  </div>
                </div>
                <ul className="mt-3 space-y-2 text-white/70">
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Desenvolvimento e manutenção de pipelines de dados usando Python, SQL e Apache Airflow</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Implementação de soluções em AWS para processamento e armazenamento de dados</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Resolução de bugs e otimização de processos de ETL</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Colaboração em projetos de análise e modelagem de dados</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Python</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">SQL</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">AWS</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Apache Airflow</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">Git</span>
                  <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70">ETL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealOnView>
  )
}
