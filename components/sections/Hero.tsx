"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative flex items-start lg:items-center px-6 sm:px-10 lg:px-20 pt-24 lg:pt-28 pb-16">
      <div className="max-w-6xl w-full mx-auto">
        {/* Text left, Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] items-center gap-8 lg:gap-12">
          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm mb-2 tracking-wide"
            >
              Bonjour, je suis
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] mb-3"
            >
              Hamza <span className="gradient-text">Benmoussa</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-5"
            >
              Développeur Fullstack • Étudiant en Ingénierie (ISGA Fès)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.36 }}
              className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7"
            >
              Étudiant en 4ème année d’Ingénierie des Systèmes Informatiques. Passionné par le
              développement web moderne, je conçois des solutions performantes, bien structurées
              et orientées qualité.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-md"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 transition-all font-medium"
              >
                Me contacter
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
              className="flex items-center gap-6 mt-7 justify-center lg:justify-start"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="mailto:hamza.benmoussa@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl scale-110" />

              <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border border-white/15 shadow-xl">
                <img
                  src="/moi.jpeg"
                  alt="Hamza Benmoussa"
                  className="w-full h-full object-cover object-[50%_22%]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
