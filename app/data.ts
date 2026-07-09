import type { CSSProperties, ComponentType } from "react"
import { BrainCircuit, Cloud, Network, Workflow } from "lucide-react"
import {
  SiApacheairflow,
  SiApachespark,
  SiAmazonwebservices,
  SiDbt,
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
  { name: "PySpark", icon: SiApachespark, color: "#E25A1C" },
  { name: "Scala", icon: SiScala, color: "#DC322F" },
  { name: "Apache Airflow", icon: SiApacheairflow, color: "#017CEE" },
  { name: "dbt", icon: SiDbt, color: "#FF694A" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Azure", icon: Cloud, color: "#0078D4" },
  { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "CI/CD (Jenkins)", icon: SiJenkins, color: "#D24939" },
  { name: "Distributed Systems", icon: Network, color: "#0EA5E9" },
  { name: "ETL / Data Pipelines", icon: Workflow, color: "#14B8A6" },
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
        title: "CDC E-commerce Data Engineering",
        subtitle: "Pipeline CDC determinístico com Medallion Architecture. Geração de eventos sintéticos, ordenação por event-time, late event handling, validação de schema via Pydantic e observabilidade por run.",
        tags: ["Python", "Pydantic", "Typer", "pytest", "DuckDB", "CDC", "Medallion"],
        href: "https://github.com/felipemchdev/cdc_ecommerce_data_eng",
        priority: true,
      },
      {
        title: "Arbiter — Data Observability Engine",
        subtitle: "Motor de observabilidade e mapeamento de logs open-source. FastAPI + Celery + Redis + PostgreSQL + dashboard Next.js com DAG interativo. Deploy real em Azure Container Apps.",
        tags: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Next.js", "Azure"],
        href: "https://github.com/felipemchdev/arbiter",
        priority: true,
      },
      {
        title: "Data Pipeline Medallion (dbt + Airflow)",
        subtitle: "Pipeline end-to-end Medallion com dataset Olist. Ingestão bruta → limpeza/deduplicação → regras de negócio. Stack: DuckDB, dbt-duckdb, Great Expectations, Airflow, Docker Compose.",
        tags: ["Python", "dbt", "DuckDB", "Apache Airflow", "Great Expectations", "Docker"],
        href: "https://github.com/felipemchdev/data-dbt-batch",
        priority: false,
      },
      {
        title: "Analytics Platform (dbt + Airflow + Streamlit)",
        subtitle: "Analytics engineering para análise de desempenho em redes sociais (Instagram, TikTok). CSVs brutos → modelos dimensionais → dashboard Streamlit. dbt + Airflow + PostgreSQL.",
        tags: ["Python", "dbt", "Apache Airflow", "PostgreSQL", "Streamlit"],
        href: "https://github.com/felipemchdev/analytics-platform-dbt",
        priority: false,
      },
      {
        title: "Portfólio",
        subtitle: "Portfólio técnico bilíngue com foco em posicionamento para Engenharia de Dados.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: false,
      },
      {
        title: "Pipefy FastAPI",
        subtitle: "Backend corporativo com FastAPI, gerenciamento de clientes, processamento de webhooks e integração GraphQL com Pipefy. Foco em arquitetura desacoplada e idempotência.",
        tags: ["Python", "FastAPI", "GraphQL", "Webhooks", "REST API"],
        href: "https://github.com/felipemchdev/pipefy_fastapi",
        priority: false,
      },
      {
        title: "dbt + DuckDB Analytics Platform",
        subtitle: "Pipeline analítico com dbt + DuckDB rodando em GitHub Actions. Geração de dados sintéticos repetível via seed, testes automatizados e documentação. Setup local e serverless.",
        tags: ["Python", "dbt", "DuckDB", "GitHub Actions"],
        href: "https://github.com/felipemchdev/dbt_duckdb_platform",
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
          "Criou sistema de validação de PRs do zero (Bitbucket API + webhooks + Teams), reduzindo ciclo de revisão de 20 min para menos de 2 min; ações logadas em planilha de controle em tempo real.",
          "Automatizou conversão MF para JSON com padronização de nomes e detecção de discrepâncias, reduzindo análise de 3 horas para 15 minutos.",
          "Participou de discussões de padronização de data contracts e nomenclatura de pipelines em produção.",
        ],
        skills: ["Python", "Bitbucket API", "Webhooks", "Data Contracts", "Automação", "AWS"],
        isCurrent: false,
      },
      {
        role: "Aprendiz em Engenharia de Dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jan 2024 - Jul 2025",
        description: [
          "Removeu declarações de threshold ineficientes de pipeline Spark (Scala), reduzindo etapa crítica de 8 min para 35 seg (93% mais rápido).",
          "Investigou e resolveu incidentes em produção em pipelines Spark usando logs do Airflow e diagnósticos de serviços AWS.",
          "Executou rollbacks e hotfixes em deploys de produção sob pressão de tempo.",
          "Adaptou templates de orquestração em Python e YAML para novos fluxos de dados.",
        ],
        skills: ["Python", "Scala", "Apache Spark", "Apache Airflow", "AWS", "Kubernetes", "Jenkins", "Bash", "ETL"],
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
        title: "CDC E-commerce Data Engineering",
        subtitle: "Deterministic CDC pipeline with Medallion Architecture. Synthetic event generation, event-time ordering, late event handling, Pydantic schema validation, and run-level observability.",
        tags: ["Python", "Pydantic", "Typer", "pytest", "DuckDB", "CDC", "Medallion"],
        href: "https://github.com/felipemchdev/cdc_ecommerce_data_eng",
        priority: true,
      },
      {
        title: "Arbiter — Data Observability Engine",
        subtitle: "Open-source data observability and log-mapping engine. FastAPI + Celery + Redis + PostgreSQL + Next.js dashboard with interactive DAG. Real deployment on Azure Container Apps.",
        tags: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Next.js", "Azure"],
        href: "https://github.com/felipemchdev/arbiter",
        priority: true,
      },
      {
        title: "Medallion Data Pipeline (dbt + Airflow)",
        subtitle: "End-to-end Medallion pipeline with the Olist dataset. Raw ingestion → cleaning/deduplication → business-rule aggregation. Stack: DuckDB, dbt-duckdb, Great Expectations, Airflow, Docker Compose.",
        tags: ["Python", "dbt", "DuckDB", "Apache Airflow", "Great Expectations", "Docker"],
        href: "https://github.com/felipemchdev/data-dbt-batch",
        priority: false,
      },
      {
        title: "Analytics Platform (dbt + Airflow + Streamlit)",
        subtitle: "Analytics engineering for social media performance analysis (Instagram, TikTok). Raw CSVs → dimensional models → Streamlit dashboard. dbt + Airflow + PostgreSQL.",
        tags: ["Python", "dbt", "Apache Airflow", "PostgreSQL", "Streamlit"],
        href: "https://github.com/felipemchdev/analytics-platform-dbt",
        priority: false,
      },
      {
        title: "Portfolio",
        subtitle: "Bilingual technical portfolio aligned with Data Engineering positioning.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: false,
      },
      {
        title: "Pipefy FastAPI",
        subtitle: "Corporate backend with FastAPI, client management, webhook processing, and GraphQL integration with Pipefy. Focused on decoupled architecture and idempotency.",
        tags: ["Python", "FastAPI", "GraphQL", "Webhooks", "REST API"],
        href: "https://github.com/felipemchdev/pipefy_fastapi",
        priority: false,
      },
      {
        title: "dbt + DuckDB Analytics Platform",
        subtitle: "Analytics pipeline with dbt + DuckDB running on GitHub Actions. Repeatable synthetic data generation via seed, automated tests, and documentation. Local and serverless setup.",
        tags: ["Python", "dbt", "DuckDB", "GitHub Actions"],
        href: "https://github.com/felipemchdev/dbt_duckdb_platform",
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
          "Built PR validation system from scratch (Bitbucket API + webhooks + Teams), cutting review cycle from 20 min to under 2 min; actions logged to live tracking spreadsheet.",
          "Automated MF-to-JSON conversion with name standardization and discrepancy detection, reducing manual analysis from 3 hours to 15 minutes.",
          "Participated in data contract and pipeline naming standardization across production environments.",
        ],
        skills: ["Python", "Bitbucket API", "Webhooks", "Data Contracts", "Automation", "AWS"],
        isCurrent: false,
      },
      {
        role: "Data Engineering Apprentice",
        company: "Serasa Experian",
        location: "Brazil",
        period: "Jan 2024 - Jul 2025",
        description: [
          "Removed inefficient threshold declarations from Spark (Scala) pipeline, reducing critical stage from 8 min to 35 sec (93% faster).",
          "Investigated and resolved production incidents in Spark pipelines using Airflow logs and AWS diagnostics.",
          "Executed rollbacks and hotfixes on production deployments under time pressure.",
          "Adapted Python and YAML orchestration templates for new data workflows.",
        ],
        skills: ["Python", "Scala", "Apache Spark", "Apache Airflow", "AWS", "Kubernetes", "Jenkins", "Bash", "ETL"],
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
