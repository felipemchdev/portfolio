import type { CSSProperties, ComponentType } from "react"
import { BrainCircuit } from "lucide-react"
import {
  SiPython,
  SiGit,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiApachespark,
  SiApachehadoop,
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
  { name: "Spark", icon: SiApachespark, color: "#E25A1C" },
  { name: "Hadoop", icon: SiApachehadoop, color: "#66CCFF" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "AI Prompting", icon: BrainCircuit, color: "#A855F7" },
]

const interests: string[] = [
  "Neural Engineering - EEG, EMG, EKG",
  "Virtual Reality",
  "Data Engineering",
  "Motorsport Data - MATLAB",
  "AI Engineering",
  "Software Development",
  "Media Creation",
  "Media Editing",
  "Photography",
]

const CONTENT_BY_LOCALE: Record<Locale, Omit<SiteContent, "locale">> = {
  pt: {
    siteConfig: {
      name: "Felipe Machado",
      role: "Engenharia de Dados e Software",
      bio: "",
      links: {
        github: "https://github.com/felipemchdev",
        linkedin: "https://linkedin.com/in/felipemch",
        email: "mailto:felipe.mch.alt@gmail.com",
        calendar: "https://cal.com/felipemch",
      },
    },
    hero: {
      navItems: [
        { label: "Experiencia", href: "#experience" },
        { label: "Formacao", href: "#education" },
        { label: "Projetos", href: "#projects" },
        { label: "Habilidades", href: "#skills" },
        { label: "Contato", href: "#contact" },
      ],
      calendarLabel: "Agendar",
      themeToggleLabel: "Alternar tema",
      languageSelectorLabel: "Selecionar idioma",
    },
    sectionTitles: {
      experience: "Experiencia",
      education: "Formacao",
      projects: "Projetos",
      skills: "Habilidades",
    },
    projects: [
      {
        title: "Portfolio",
        subtitle: "Este site que voce esta vendo agora.",
        imageSrc: "/images/portfolio-image.png",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: true,
      },
      {
        title: "API Site de Eventos",
        subtitle: "API para inscricao em eventos com contagem de inscritos.",
        imageSrc: "/images/api-eventos.png",
        tags: ["Python", "Flask", "SQLAlchemy"],
        href: "https://github.com/felipemchdev/Event_API_Flask",
        priority: false,
      },
      {
        title: "DataLake Simples",
        subtitle: "Carga e manipulacao de dados em formato Parquet.",
        imageSrc: "/images/datalake.png",
        tags: ["Python", "DuckDB", "Parquet"],
        href: "https://github.com/felipemchdev/datalake_py_parquet",
        priority: false,
      },
      {
        title: "Analise de Vendas com Streamlit",
        subtitle: "Dashboard em Python para analise de vendas.",
        imageSrc: "/images/analise-financeira.png",
        tags: ["Jupyter", "Python", "Pandas", "Streamlit"],
        href: "https://github.com/felipemchdev/fin_analysis_py",
        priority: false,
      },
      {
        title: "Site de Eventos",
        subtitle: "Pagina de eventos com sistema de inscritos e contador de convites.",
        imageSrc: "/images/site-eventos.png",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/webevent_react-node",
        priority: false,
      },
      {
        title: "Calculadora KivyMD",
        subtitle: "Calculadora em KivyMD com Matplotlib para gerar graficos.",
        imageSrc: "/images/calculadora-kivy.png",
        tags: ["KivyMD", "Matplotlib", "Python"],
        href: "https://github.com/felipemchdev/CalculadoraKivyMD/releases/tag/KIVY!",
        priority: false,
      },
      {
        title: "TrackFit - Calorias e Treinos",
        subtitle: "Controle de alimentacao e treinos 100% local.",
        imageSrc: "/images/trackfit.png",
        tags: ["React", "Next.js", "TypeScript", "Local Storage"],
        href: "https://github.com/felipemchdev/TrackFit",
        priority: false,
      },
      {
        title: "Sistema de Gestao Academica",
        subtitle: "Sistema para gestao de universidade e alunos.",
        tags: ["JavaScript", "HTML", "CSS"],
        href: "https://github.com/felipemchdev/sga_sistema_universidade_js",
        priority: false,
      },
    ],
    experience: [
      {
        role: "Estagiario em Arquitetura de Dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jul 2025 - Fev 2026",
        description: [
          "Analise e monitoramento de novas tecnologias para identificar riscos, nao conformidades e custos desnecessarios.",
          "Avaliacao e elaboracao de nomenclaturas e contratos de dados.",
          "Desenvolvimento de automacoes funcionais em larga escala.",
        ],
        skills: ["Python", "JavaScript", "AWS", "ETL", "DataLake", "Databricks", "Figma"],
        isCurrent: false,
      },
      {
        role: "Aprendiz em Engenharia de Dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jan 2024 - Jul 2025",
        description: [
          "Desenvolvimento e manutencao de pipelines de dados usando Python, SQL e Apache Airflow.",
          "Implementacao de solucoes em AWS para processamento e armazenamento de dados.",
          "Resolucao de bugs e otimizacao de processos de ETL.",
          "Colaboracao em projetos de analise e modelagem de dados.",
        ],
        skills: ["Python", "SQL", "AWS", "Apache Airflow", "Git", "ETL", "Docker", "Kubernetes", "Jenkins", "Jira"],
        isCurrent: false,
      },
    ],
    education: [
      {
        degree: "Engenharia de Computacao",
        institution: "UNICEP - Centro Universitario Central Paulista",
        period: "Jan 2024 - Dez 2027 (Previsao)",
      },
    ],
    contact: {
      title: "Contato",
      description: "Estou aberto a novas oportunidades e conversas. Se voce tem um projeto em mente ou so quer dizer oi, entre em contato.",
      emailButton: "Enviar email",
      scheduleButton: "Agendar reuniao",
      footerRights: "Todos os direitos reservados.",
    },
    introText: "Bem-vindo",
    technologiesLabel: "Tecnologias usadas",
    skills,
    interests,
  },
  en: {
    siteConfig: {
      name: "Felipe Machado",
      role: "Data and Software Engineering",
      bio: "",
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
    },
    sectionTitles: {
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
    },
    projects: [
      {
        title: "Portfolio",
        subtitle: "This website you are looking at right now.",
        imageSrc: "/images/portfolio-image.png",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: true,
      },
      {
        title: "Events API",
        subtitle: "API for event registration with attendee counting.",
        imageSrc: "/images/api-eventos.png",
        tags: ["Python", "Flask", "SQLAlchemy"],
        href: "https://github.com/felipemchdev/Event_API_Flask",
        priority: false,
      },
      {
        title: "Simple DataLake",
        subtitle: "Data ingestion and manipulation using Parquet format.",
        imageSrc: "/images/datalake.png",
        tags: ["Python", "DuckDB", "Parquet"],
        href: "https://github.com/felipemchdev/datalake_py_parquet",
        priority: false,
      },
      {
        title: "Sales Analysis with Streamlit",
        subtitle: "Python dashboard for sales analytics.",
        imageSrc: "/images/analise-financeira.png",
        tags: ["Jupyter", "Python", "Pandas", "Streamlit"],
        href: "https://github.com/felipemchdev/fin_analysis_py",
        priority: false,
      },
      {
        title: "Events Website",
        subtitle: "Events page with registration flow and invite counter.",
        imageSrc: "/images/site-eventos.png",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/webevent_react-node",
        priority: false,
      },
      {
        title: "KivyMD Calculator",
        subtitle: "KivyMD calculator with Matplotlib charts.",
        imageSrc: "/images/calculadora-kivy.png",
        tags: ["KivyMD", "Matplotlib", "Python"],
        href: "https://github.com/felipemchdev/CalculadoraKivyMD/releases/tag/KIVY!",
        priority: false,
      },
      {
        title: "TrackFit - Calories and Workouts",
        subtitle: "100% local nutrition and workout tracker.",
        imageSrc: "/images/trackfit.png",
        tags: ["React", "Next.js", "TypeScript", "Local Storage"],
        href: "https://github.com/felipemchdev/TrackFit",
        priority: false,
      },
      {
        title: "Academic Management System",
        subtitle: "System to manage universities and students.",
        tags: ["JavaScript", "HTML", "CSS"],
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
          "Analyzed and monitored emerging technologies to identify security risks, compliance gaps, and unnecessary costs.",
          "Designed and reviewed data naming conventions and data contracts.",
          "Built functional automation at scale.",
        ],
        skills: ["Python", "JavaScript", "AWS", "ETL", "DataLake", "Databricks", "Figma"],
        isCurrent: false,
      },
      {
        role: "Data Engineering Apprentice",
        company: "Serasa Experian",
        location: "Brazil",
        period: "Jan 2024 - Jul 2025",
        description: [
          "Developed and maintained data pipelines using Python, SQL, and Apache Airflow.",
          "Implemented AWS solutions for data processing and storage.",
          "Resolved bugs and optimized ETL workflows.",
          "Collaborated on analytics and data modeling initiatives.",
        ],
        skills: ["Python", "SQL", "AWS", "Apache Airflow", "Git", "ETL", "Docker", "Kubernetes", "Jenkins", "Jira"],
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
      description: "I am always open to new opportunities and conversations. If you have a project in mind or just want to say hi, reach out.",
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
