import type { CSSProperties, ComponentType } from "react"
import { BrainCircuit, Network, Workflow } from "lucide-react"
import {
  SiApacheairflow,
  SiApachehadoop,
  SiApachespark,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiJenkins,
  SiKubernetes,
  SiPostgresql,
  SiPython,
  SiScala,
} from "react-icons/si"

const SUPPORTED_LOCALES = ["pt", "en"] as const

export type Locale = (typeof SUPPORTED_LOCALES)[number]

const DEFAULT_LOCALE: Locale = "pt"

export interface NavItem {
  label: string
  href: string
}

export interface SiteConfig {
  name: string
  role: string
  bio: string
  links: {
    github: string
    linkedin: string
    email: string
    calendar: string
  }
}

export interface Project {
  title: string
  subtitle: string
  imageSrc?: string
  tags: string[]
  href: string
  priority?: boolean
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  period: string
  description: string[]
  skills: string[]
  isCurrent: boolean
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
}

type SkillIcon = ComponentType<{ className?: string; style?: CSSProperties }>

export interface Skill {
  name: string
  icon: SkillIcon
  color: string
}

export interface ContactContent {
  title: string
  description: string
  emailButton: string
  scheduleButton: string
  footerRights: string
}

export interface SectionTitles {
  experience: string
  education: string
  projects: string
  skills: string
}

export interface HeroContent {
  navItems: NavItem[]
  calendarLabel: string
  themeToggleLabel: string
  languageSelectorLabel: string
  portfolioPtLabel: string
  portfolioEnLabel: string
}

export interface SiteContent {
  locale: Locale
  siteConfig: SiteConfig
  hero: HeroContent
  sectionTitles: SectionTitles
  projects: Project[]
  experience: ExperienceItem[]
  education: EducationItem[]
  contact: ContactContent
  introText: string
  technologiesLabel: string
  skills: Skill[]
  interests: string[]
}

const skills: Skill[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Apache Spark", icon: SiApachespark, color: "#E25A1C" },
  { name: "Scala", icon: SiScala, color: "#DC322F" },
  { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
  { name: "AWS (S3, Glacier)", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "CI/CD (Jenkins)", icon: SiJenkins, color: "#D24939" },
  { name: "Distributed Systems", icon: Network, color: "#0EA5E9" },
  { name: "ETL / Data Pipelines", icon: Workflow, color: "#14B8A6" },
  { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Data Architecture", icon: BrainCircuit, color: "#A855F7" },
]

const interests: string[] = [
  "Data Platform Architecture",
  "Data Reliability",
  "Data Engineering",
  "Distributed Systems",
  "Pipeline Orchestration",
  "Cloud Data Infrastructure",
]

const CONTENT_BY_LOCALE: Record<Locale, Omit<SiteContent, "locale">> = {
  pt: {
    siteConfig: {
      name: "Felipe Machado",
      role: "Data Engineer",
      bio: "Data Engineer focado em sistemas distribuídos e plataformas de dados em produção. Experiência prática com Python, Spark, Scala, Airflow e AWS, atuando em operação de pipelines, análise de trade-offs de arquitetura e avaliação de risco/custo. Aberto a oportunidades internacionais.",
      links: {
        github: "https://github.com/felipemchdev",
        linkedin: "https://linkedin.com/in/felipemch",
        email: "mailto:felipe.mch.alt@gmail.com",
        calendar: "https://cal.com/felipemch",
      },
    },
    hero: {
      navItems: [
        { label: "Experiência", href: "#experience" },
        { label: "Formação", href: "#education" },
        { label: "Projetos", href: "#projects" },
        { label: "Habilidades", href: "#skills" },
        { label: "Contato", href: "#contact" },
      ],
      calendarLabel: "Agendar",
      themeToggleLabel: "Alternar tema",
      languageSelectorLabel: "Selecionar idioma",
      portfolioPtLabel: "CURRICULO",
      portfolioEnLabel: "RESUME",
    },
    sectionTitles: {
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      skills: "Habilidades",
    },
    projects: [
      {
        title: "DataLake Simples",
        subtitle: "Pipeline de ingestão e manipulação de dados em Parquet com foco em processamento analítico.",
        imageSrc: "/images/datalake.png",
        tags: ["Python", "DuckDB", "Parquet", "ETL", "Data Lake"],
        href: "https://github.com/felipemchdev/datalake_py_parquet",
        priority: true,
      },
      {
        title: "API Site de Eventos",
        subtitle: "API para ingestão de inscrições e persistência transacional de dados de eventos.",
        imageSrc: "/images/api-eventos.png",
        tags: ["Python", "Flask", "SQLAlchemy", "SQL"],
        href: "https://github.com/felipemchdev/Event_API_Flask",
        priority: false,
      },
      {
        title: "Análise de Vendas com Streamlit",
        subtitle: "Pipeline de preparação e transformação de dados de vendas com camada de visualização analítica.",
        imageSrc: "/images/analise-financeira.png",
        tags: ["Python", "Pandas", "Streamlit", "ETL"],
        href: "https://github.com/felipemchdev/fin_analysis_py",
        priority: false,
      },
      {
        title: "Portfólio",
        subtitle: "Portfólio técnico bilíngue com foco em posicionamento para Engenharia de Dados.",
        imageSrc: "/images/portfolio-image.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: false,
      },
      {
        title: "Site de Eventos",
        subtitle: "Aplicação web com fluxo de inscrição integrado à API e persistência de dados de participantes.",
        imageSrc: "/images/site-eventos.png",
        tags: ["Next.js", "TypeScript", "React.js", "API Integration"],
        href: "https://github.com/felipemchdev/webevent_react-node",
        priority: false,
      },
      {
        title: "TrackFit - Calorias e Treinos",
        subtitle: "Aplicação local para registro estruturado de dados de alimentação e treinos.",
        imageSrc: "/images/trackfit.png",
        tags: ["Next.js", "TypeScript", "Local Storage"],
        href: "https://github.com/felipemchdev/TrackFit",
        priority: false,
      },
      {
        title: "Calculadora KivyMD",
        subtitle: "Aplicação Python para cálculos e visualização de dados numéricos com gráficos.",
        imageSrc: "/images/calculadora-kivy.png",
        tags: ["KivyMD", "Matplotlib", "Python"],
        href: "https://github.com/felipemchdev/CalculadoraKivyMD/releases/tag/KIVY!",
        priority: false,
      },
      {
        title: "Sistema de Gestão Acadêmica",
        subtitle: "Sistema acadêmico com operações CRUD para entidades de universidade e alunos.",
        tags: ["JavaScript", "HTML", "CSS", "SQL"],
        href: "https://github.com/felipemchdev/sga_sistema_universidade_js",
        priority: false,
      },
    ],
    experience: [
      {
        role: "Estagiário em Arquitetura de Dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jul 2025 - Fev 2026",
        description: [
          "Condução de análises de risco e custo para iniciativas de infraestrutura de dados.",
          "Participação em discussões de arquitetura para avaliar escalabilidade e trade-offs de soluções.",
          "Análise de tecnologias candidatas para identificar riscos de segurança e ineficiências operacionais.",
          "Apoio à definição de contratos de dados e padrões de nomenclatura.",
          "Contribuição em iniciativas de automação em ambientes de dados de larga escala.",
        ],
        skills: ["Análise de Risco", "Análise de Custo", "Arquitetura de Dados", "Contratos de Dados", "Escalabilidade", "Automação", "AWS"],
        isCurrent: false,
      },
      {
        role: "Aprendiz em Engenharia de Dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jan 2024 - Jul 2025",
        description: [
          "Investigação e resolução de incidentes em produção em pipelines Spark (Scala) executando em ambientes Kubernetes.",
          "Desenvolvimento e manutenção de pipelines de dados com Python, Scala e Apache Spark.",
          "Monitoramento e manutenção de workflows no Apache Airflow e de ambientes de processamento baseados em Hadoop.",
          "Gestão de fluxos de CI/CD com Jenkins e execução de deploys em ambientes de QA/Dev.",
          "Operações em AWS S3 via Bash, incluindo transferências cross-bucket e validação de objetos em Glacier.",
          "Revisão de codebases legados para entendimento de arquitetura e implementação de correções sob restrições de produção.",
        ],
        skills: ["Python", "Scala", "Apache Spark", "Apache Airflow", "AWS (S3/Glacier)", "Kubernetes", "Jenkins", "Bash", "Hadoop", "ETL"],
        isCurrent: false,
      },
    ],
    education: [
      {
        degree: "Engenharia de Computação",
        institution: "UNICEP - Centro Universitário Central Paulista",
        period: "Jan 2024 - Dez 2027 (Previsão)",
      },
    ],
    contact: {
      title: "Contato",
      description: "Aberto a oportunidades em Engenharia de Dados, incluindo posições internacionais. Se houver sinergia técnica, entre em contato.",
      emailButton: "Enviar email",
      scheduleButton: "Agendar reunião",
      footerRights: "Todos os direitos reservados.",
    },
    introText: "Bem-vindo",
    technologiesLabel: "Tecnologias",
    skills,
    interests,
  },
  en: {
    siteConfig: {
      name: "Felipe Machado",
      role: "Data Engineer",
      bio: "Data Engineer focused on distributed systems and production-grade data platforms. Hands-on with Python, Spark, Scala, Airflow, and AWS, with experience in pipeline operations, architecture trade-off analysis, and risk/cost evaluation. Open to international opportunities.",
      links: {
        github: "https://github.com/felipemchdev",
        linkedin: "https://linkedin.com/in/felipemch",
        email: "mailto:felipe.mch.alt@gmail.com",
        calendar: "https://cal.com/felipemch",
      },
    },
    hero: {
      navItems: [
        { label: "Experience", href: "#experience" },
        { label: "Education", href: "#education" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
      ],
      calendarLabel: "Schedule",
      themeToggleLabel: "Toggle theme",
      languageSelectorLabel: "Select language",
      portfolioPtLabel: "CURRICULO",
      portfolioEnLabel: "RESUME",
    },
    sectionTitles: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
    },
    projects: [
      {
        title: "Simple DataLake",
        subtitle: "Data ingestion and transformation pipeline in Parquet focused on analytical processing.",
        imageSrc: "/images/datalake.png",
        tags: ["Python", "DuckDB", "Parquet", "ETL", "Data Lake"],
        href: "https://github.com/felipemchdev/datalake_py_parquet",
        priority: true,
      },
      {
        title: "Events API",
        subtitle: "API for event-registration ingestion and transactional persistence of event data.",
        imageSrc: "/images/api-eventos.png",
        tags: ["Python", "Flask", "SQLAlchemy", "SQL"],
        href: "https://github.com/felipemchdev/Event_API_Flask",
        priority: false,
      },
      {
        title: "Sales Analysis with Streamlit",
        subtitle: "Sales-data preparation and transformation pipeline with an analytical visualization layer.",
        imageSrc: "/images/analise-financeira.png",
        tags: ["Python", "Pandas", "Streamlit", "ETL"],
        href: "https://github.com/felipemchdev/fin_analysis_py",
        priority: false,
      },
      {
        title: "Portfolio",
        subtitle: "Bilingual technical portfolio aligned with Data Engineering positioning.",
        imageSrc: "/images/portfolio-image.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: false,
      },
      {
        title: "Events Website",
        subtitle: "Web application with API-backed registration flow and participant-data persistence.",
        imageSrc: "/images/site-eventos.png",
        tags: ["Next.js", "TypeScript", "React.js", "API Integration"],
        href: "https://github.com/felipemchdev/webevent_react-node",
        priority: false,
      },
      {
        title: "TrackFit - Calories and Workouts",
        subtitle: "Local-first app for structured nutrition and workout data tracking.",
        imageSrc: "/images/trackfit.png",
        tags: ["Next.js", "TypeScript", "Local Storage"],
        href: "https://github.com/felipemchdev/TrackFit",
        priority: false,
      },
      {
        title: "KivyMD Calculator",
        subtitle: "Python application for numerical calculations and chart-based data visualization.",
        imageSrc: "/images/calculadora-kivy.png",
        tags: ["KivyMD", "Matplotlib", "Python"],
        href: "https://github.com/felipemchdev/CalculadoraKivyMD/releases/tag/KIVY!",
        priority: false,
      },
      {
        title: "Academic Management System",
        subtitle: "Academic system with CRUD operations for university and student entities.",
        tags: ["JavaScript", "HTML", "CSS", "SQL"],
        href: "https://github.com/felipemchdev/sga_sistema_universidade_js",
        priority: false,
      },
    ],
    experience: [
      {
        role: "Data Architecture Intern",
        company: "Serasa Experian",
        location: "Brazil",
        period: "Jul 2025 - Feb 2026",
        description: [
          "Conducted risk and cost analysis for data infrastructure initiatives.",
          "Participated in architecture discussions evaluating scalability and system trade-offs.",
          "Analyzed candidate technologies to identify security risks and operational inefficiencies.",
          "Supported the definition of data contracts and naming standards.",
          "Contributed to automation initiatives in large-scale data environments.",
        ],
        skills: ["Risk Analysis", "Cost Analysis", "Data Architecture", "Data Contracts", "Scalability", "Automation", "AWS"],
        isCurrent: false,
      },
      {
        role: "Data Engineering Apprentice",
        company: "Serasa Experian",
        location: "Brazil",
        period: "Jan 2024 - Jul 2025",
        description: [
          "Investigated and resolved production incidents in Spark (Scala) pipelines running in Kubernetes environments.",
          "Developed and maintained data pipelines using Python, Scala, and Apache Spark.",
          "Monitored and maintained Apache Airflow workflows and Hadoop-based processing environments.",
          "Managed CI/CD workflows in Jenkins and executed QA/Dev deployments.",
          "Performed AWS S3 operations via Bash, including cross-bucket transfers and Glacier object validation.",
          "Reviewed legacy codebases to understand system architecture and implement bug fixes under production constraints.",
        ],
        skills: ["Python", "Scala", "Apache Spark", "Apache Airflow", "AWS (S3/Glacier)", "Kubernetes", "Jenkins", "Bash", "Hadoop", "ETL"],
        isCurrent: false,
      },
    ],
    education: [
      {
        degree: "Computer Engineering",
        institution: "UNICEP - Central Paulista University Center",
        period: "Jan 2024 - Dec 2027 (Expected)",
      },
    ],
    contact: {
      title: "Contact",
      description: "Open to Data Engineering opportunities, including international roles. Reach out if there is technical alignment.",
      emailButton: "Send email",
      scheduleButton: "Schedule meeting",
      footerRights: "All rights reserved.",
    },
    introText: "Welcome",
    technologiesLabel: "Technologies used",
    skills,
    interests,
  },
}

function normalizeLanguageTag(language: string): string {
  return language.toLowerCase().split(/[-_]/)[0]
}

function isLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale)
}

export function getLocaleFromLanguages(languages: readonly string[]): Locale {
  for (const language of languages) {
    if (!language) {
      continue
    }

    const normalized = normalizeLanguageTag(language)
    if (isLocale(normalized)) {
      return normalized
    }
  }

  return DEFAULT_LOCALE
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") {
    return DEFAULT_LOCALE
  }

  return getLocaleFromLanguages([...(navigator.languages ?? []), navigator.language])
}

export function getSiteContent(locale: Locale): SiteContent {
  const safeLocale = isLocale(locale) ? locale : DEFAULT_LOCALE
  return {
    locale: safeLocale,
    ...CONTENT_BY_LOCALE[safeLocale],
  }
}
