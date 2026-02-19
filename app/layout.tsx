import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "HB Portfolio",
  description: "Étudiant en 4ème année Ingénierie des Systèmes Informatiques à ISGA Fès. Fullstack Developer passionné par les technologies modernes.",
  keywords: ["Fullstack", "Developer", "React", "Next.js", "TypeScript", "ISGA", "Fès"],
  authors: [{ name: "Hamza Benmoussa" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HB Portfolio",
    description: "Étudiant en 4ème année Ingénierie des Systèmes Informatiques à ISGA Fès",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground min-h-screen flex flex-col`}>
        <div className="fixed inset-0 bg-gradient-mesh opacity-30 pointer-events-none" />
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

