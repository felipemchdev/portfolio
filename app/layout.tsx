import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google"; // Using Libre Baskerville for serif headings
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Felipe Machado | Portfolio",
  description: "Engenheiro de Software e Arquiteto de Dados.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} ${inter.variable} font-sans antialiased text-foreground bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
