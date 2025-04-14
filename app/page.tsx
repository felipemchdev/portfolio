import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Portfólio de Felipe Machado</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium transition-colors hover:text-primary">
              Início
            </Link>
            <Link href="#projetos" className="text-sm font-medium transition-colors hover:text-primary">
              Projetos
            </Link>
            <Link href="#habilidades" className="text-sm font-medium transition-colors hover:text-primary">
              Habilidades
            </Link>
            <Link href="#contato" className="text-sm font-medium transition-colors hover:text-primary">
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/felipemchdev" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/felipemch" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="inicio" className="container py-24 sm:py-32">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 md:w-1/2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Olá, me chamo <br/> <span className="text-primary">Felipe Machado</span>
              </h1>
              <p className="text-muted-foreground md:text-xl">
              Sou um desenvolvedor back-end com 1 ano de experiência,
              <br/> Atualmente estou atuando na área de Engenharia de Dados.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#projetos">Ver Projetos</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#contato">Contato</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-primary">
                <Image
                  src="/perfil.jpeg"
                  alt="Foto de perfil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16">
            <Link href="#projetos" className="animate-bounce">
              <Button variant="ghost" size="icon" aria-label="Rolar para baixo">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </section>

        <section id="projetos" className="container py-24 sm:py-32 bg-muted/50">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meus Projetos</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Confira alguns dos meus trabalhos mais recentes e relevantes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Portfólio"
              description="Esse site que você está vendo agora 😀"
              image="/die.png?height=300&width=500"
              tags={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
              link="#inicio"
            />
            <ProjectCard
              title="API Site de Eventos"
              description="API para se inscrever em eventos, com sistema de contabilização de inscritos e convites."
              image="/cover.png?height=300&width=500"
              tags={["Python", "Flask", "SQLAlchemy"]}
              link="https://github.com/felipemchdev/Event_API_Flask"
            />
            <ProjectCard
              title="DataLake Simples"
              description="Carga e manipulação de dados em formato Parquet."
              image="/placeholder.svg?height=300&width=500"
              tags={["Em Breve","Python", "DuckDB", "Parquet"]}
              link="#"
            />
            <ProjectCard
              title="Análise de Vendas com Streamlit"
              description="Dashboard Em Python pra análise de Vendas."
              image="/placeholder.svg?height=300&width=500"
              tags={["Em Breve","Python", "Pandas", "Streamlit"]}
              link="https://github.com/felipemchdev/fin_analysis_py"
            />
            <ProjectCard
              title="LLM Chatbot"
              description="Em desenvolvimento..."
              image="/placeholder.svg?height=300&width=500"
              tags={["Em Breve", "Python", "LangChain", "Claude Sonnet", "API"]}
              link="#"
            />
            <ProjectCard
              title="Site de Eventos"
              description="Página para eventos, com sistema de inscritos e gcontador de convites."
              image="/placeholder.svg?height=300&width=500"
              tags={["React.js", "Next.js", "TypeScript", "Tailwind CSS"]}
              link="https://github.com/felipemchdev/webevent_react-node"
            />
          </div>
        </section>

        <section id="habilidades" className="container py-24 sm:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Minhas Habilidades</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Tecnologias e ferramentas que utilizo no meu dia a dia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillBadge name="Python" level={90} />
            <SkillBadge name="Django" level={65} />
            <SkillBadge name="Git" level={90} />
            <SkillBadge name="CI/CD" level={90} />
            <SkillBadge name="Docker" level={65} />
            <SkillBadge name="AWS" level={65} />
            <SkillBadge name="Excel" level={80} />
          </div>

        <section id="subhabilidades" className="container py-24 sm:py-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Outras ferramentas que também uso/conheço:
            </p>
          </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillBadge name="React" level={40} />
              <SkillBadge name="Next.js" level={40} />
              <SkillBadge name="Node.js" level={40} />
              <SkillBadge name="MongoDB" level={70} />
              <SkillBadge name="MongoDB" level={70} />
              <SkillBadge name="PostgreSQL" level={70} />
              <SkillBadge name="HTML" level={95} />
              <SkillBadge name="CSS" level={90} />
              <SkillBadge name="JavaScript" level={60} />
              <SkillBadge name="Tailwind CSS" level={70} />
            </div>
          </section>


          <div className="mt-16">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Educação</h3>
                    <p className="text">
                      <b>Bacharelado em Engenharia de Computação</b> 
                      <br/>Centro Universitário Central Paulista (UNICEP).
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <br/><i>Janeiro 2024 - Atualmente.</i>
                      <br/> Previsão de conclusão - Dezembro 2027
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Experiência</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Aprendiz em Engenharia de Dados</h4>
                        <p className="text-sm ">Jan 2024 - Atualmente</p>
                        <p className="text-muted-foreground">
                          <br/>Implementação de códigos e resolução de bugs. 
                          <br/>Uso de Python, SQL, AWS, Airflow, Git.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contato" className="container py-24 sm:py-32 bg-muted/50">
  <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entre em Contato</h2>
    <p className="max-w-[700px] text-muted-foreground md:text-xl">
      Deseja falar comigo pessoalmente? Agende uma reunião comigo.
    </p>
  </div>
  <div className="flex justify-center mt-4">
    <a href="https://cal.com/felipe-machado-agenda/" className="inline-flex items-center justify-center px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">
      Agendar
    </a>
  </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ marginLeft: '455px', marginTop: '30px' }}>
  <div className="space-y-4 text-center">
    <div className="flex items-center gap-3 justify-center">
      <Mail className="h-6 w-6 text-primary" />
      <span>felipe.mch.alt@gmail.com</span>
    </div>
    <div className="flex items-center gap-3 justify-center">
      <Linkedin className="h-6 w-6 text-primary" />
      <span>linkedin.com/in/felipemch</span>
    </div>
    <div className="flex items-center gap-3 justify-center">
      <Github className="h-6 w-6 text-primary" />
      <span>github.com/felipemchdev</span>
    </div>
  </div>
</div>
</section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Felipe Machado. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/felipemchdev" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/felipemch" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
