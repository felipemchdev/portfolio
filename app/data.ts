import { Github, Linkedin, Mail, Calendar, MapPin, Briefcase, BrainCircuit } from "lucide-react";
import {
    SiPython, SiGit, SiDocker, SiReact, SiNextdotjs, SiNodedotjs,
    SiMongodb, SiPostgresql, SiHtml5, SiCss3, SiJavascript, SiTailwindcss,
    SiApachespark, SiApachehadoop
} from "react-icons/si";

export const siteConfig = {
    name: "Felipe Machado",
    role: "Engenharia de Dados e Software",
    bio: "",
    links: {
        github: "https://github.com/felipemchdev",
        linkedin: "https://linkedin.com/in/felipemch",
        email: "mailto:felipe.mch.alt@gmail.com",
        calendar: "https://cal.com/felipemch",
    }
};

export const projects = [
    {
        title: "Portfólio",
        subtitle: "Este site que você está vendo agora 😄",
        imageSrc: "/images/portfolio-image.png",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/portfolio",
        priority: true,
    },
    {
        title: "API Site de Eventos",
        subtitle: "API para se inscrever em eventos, com sistema de contabilização de inscritos",
        imageSrc: "/images/api-eventos.png",
        tags: ["Python", "Flask", "SQLAlchemy"],
        href: "https://github.com/felipemchdev/Event_API_Flask",
        priority: false,
    },
    {
        title: "DataLake Simples",
        subtitle: "Carga e manipulação de dados em formato Parquet",
        imageSrc: "/images/datalake.png",
        tags: ["Python", "DuckDB", "Parquet"],
        href: "https://github.com/felipemchdev/datalake_py_parquet",
        priority: false,
    },
    {
        title: "Análise de Vendas com Streamlit",
        subtitle: "Dashboard em Python para análise de vendas",
        imageSrc: "/images/analise-financeira.png",
        tags: ["Jupyter", "Python", "Pandas", "Streamlit"],
        href: "https://github.com/felipemchdev/fin_analysis_py",
        priority: false,
    },
    {
        title: "Site de Eventos",
        subtitle: "Página para eventos, com sistema de inscritos e contador de convites",
        imageSrc: "/images/site-eventos.png",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        href: "https://github.com/felipemchdev/webevent_react-node",
        priority: false,
    },
    {
        title: "Calculadora KivyMD",
        subtitle: "Calculadora em KivyMD com Matplotlib, para gerar gráficos das funções",
        imageSrc: "/images/calculadora-kivy.png",
        tags: ["KivyMD", "Matplotlib", "Python"],
        href: "https://github.com/felipemchdev/CalculadoraKivyMD/releases/tag/KIVY!",
        priority: false,
    },
    {
        title: "TrackFit – Calorias & Treinos",
        subtitle: "Controle de alimentação e treinos 100% local",
        imageSrc: "/images/trackfit.png",
        tags: ["React", "Next.js", "TypeScript", "Local Storage"],
        href: "https://github.com/felipemchdev/TrackFit",
        priority: false,
    },
    {
        title: "Sistema de Gestão Acadêmica",
        subtitle: "Sistema para gestão de universidade e alunos",
        tags: ["JavaScript", "HTML", "CSS"],
        href: "https://github.com/felipemchdev/sga_sistema_universidade_js",
        priority: false,
    },
];

export const experience = [
    {
        role: "Estagiário em Arquitetura de dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jul 2025 - Fev 2026",
        description: [
            "Análise e monitoramento de novas tecnologias para identificar riscos de segurança, não conformidades e custos desnecessários",
            "Avaliação e elaboração de nomenclaturas e contratos de dados",
            "Desenvolvimento de automações funcionais em larga escala"
        ],
        skills: ["Python", "Javascript", "AWS", "ETL", "DataLake", "Databricks", "Figma"],
        isCurrent: false,
    },
    {
        role: "Aprendiz em Engenharia de Dados",
        company: "Serasa Experian",
        location: "Brasil",
        period: "Jan 2024 - Jul 2025",
        description: [
            "Desenvolvimento e manutenção de pipelines de dados usando Python, SQL e Apache Airflow",
            "Implementação de soluções em AWS para processamento e armazenamento de dados",
            "Resolução de bugs e otimização de processos de ETL",
            "Colaboração em projetos de análise e modelagem de dados"
        ],
        skills: ["Python", "SQL", "AWS", "Apache Airflow", "Git", "ETL", "Docker", "Kubernetes", "Jenkins", "Jira"],
        isCurrent: false,
    }
];

export const skills = [
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
    { name: "AI Prompting", icon: BrainCircuit, color: "#a855f7" },
];

export const interests = [
    "Neural Engineering - EEG, EMG, EKG",
    "Virtual Reality",
    "Data Engineering",
    "Motorsport Data - MATLAB",
    "AI Engineering",
    "Software Development",
    "Media Creation",
    "Media Editing",
    "Photography"
];

export const education = [
    {
        degree: "Engenharia de Computação",
        institution: "UNICEP - Centro Universitário Central Paulista",
        period: "Jan 2024 - Dez 2027 (Previsão)",
    }
];
