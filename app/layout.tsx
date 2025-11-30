import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import MouseGlow from "@/components/mouse-glow"

export const metadata: Metadata = {
  title: "Felipe Machado - Desenvolvedor Back-end & Engenharia de Dados",
  description:
    "Portfólio profissional de Felipe Machado, desenvolvedor back-end com experiência em Python, SQL, AWS, e Engenharia de Dados.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <style>{`
:root {
  --font-sans: "Geist", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
  --font-mono: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
html { 
  font-family: var(--font-sans);
  scroll-behavior: smooth;
}
        `}</style>
      </head>
      <body>
        <MouseGlow />
        {children}
      </body>
    </html>
  )
}
