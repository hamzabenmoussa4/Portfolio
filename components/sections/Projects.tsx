"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const projects = [
  {
    title: "LibraryApp",
    description: "Dashboard Administrateur de gestion d'une bibliothèque avec React et MongoDB",
    tech: ["React", "MongoDB", "Node.js", "Tailwind"],
    github: "https://github.com/hamzabenmoussa4/LibraryApp",
  },
  {
    title: "Prediction Clients",
    description: "Dashboard administrateur de gestion des clients et des commandes, ainsi que faire la prédiction sur l'état du client en créant les règles et les badges. Réalisé avec Laravel et MySQL",
    tech: ["Laravel", "MySQL", "PHP", "JavaScript"],
    github: "https://github.com/hamzabenmoussa4/Dashboard-PredictionClients",
  },
  {
    title: "Spam Detection",
    description: "Application de détection de spam des emails avec Entrainement Machine Learning, réalisé avec Python",
    tech: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/hamzabenmoussa4/SpamDetection",
  },
  {
    title: "JESA Dashboard",
    description: "Dashboard pour la gestion des interlocuteurs de chaque employé de la société JESA, réalisé avec LARAVEL et MySQL",
    tech: ["Laravel", "MySQL", "PHP", "Blade"],
    github: "https://github.com/hamzabenmoussa4/JESA-dashboard",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes projets récents. N'hésite pas à explorer le code source !
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover rounded-xl overflow-hidden group"
            >
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-gradient-primary/5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg text-foreground hover:bg-white/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            Voir plus sur GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
