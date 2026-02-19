"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    id: 1,
    company: "JESA",
    logo: "/logo-jesa.avif",
    position: "Stagiaire",
    location: "Casablanca",
    duration: "Août 2025",
    description: "Dashboard de gestion des interlocuteurs de JESA à l'aide de Laravel et MySQL",
    fullDescription: `Conception et développement d'une plateforme web interne pour JESA, visant à optimiser la gestion et le suivi des interlocuteurs au sein de l'entreprise.

Développée avec Laravel et MySQL, la solution a permis de :

• Centraliser et structurer les données des interlocuteurs
• Faciliter la création, la mise à jour et la consultation des fiches
• Implémenter un système de recherche et de filtrage avancé pour un accès rapide à l'information
• Améliorer l'organisation et le suivi des interactions internes
• Offrir une interface intuitive adaptée aux besoins spécifiques des équipes

🎯 Résultat : amélioration de l'efficacité opérationnelle, réduction du temps de recherche d'informations et meilleure traçabilité des échanges.`,
    technologies: ["Laravel", "MySQL", "PHP"],
    period: "1 mois",
  },
  {
    id: 2,
    company: "LA RADEEF",
    logo: "/radeef_logo.jpg",
    position: "Stagiaire",
    location: "Fes",
    duration: "Août 2024",
    description: "Gestion du parc informatique de la RADEEF à l'aide de C++",
    fullDescription: `Développement d'une solution de gestion du parc informatique en C++, destinée à organiser et superviser les équipements IT de l'entreprise.

Le projet avait pour objectifs de :

• Gérer l'inventaire du matériel informatique
• Structurer et stocker efficacement les données liées aux équipements
• Améliorer la traçabilité des ressources IT
• Soutenir la gestion opérationnelle interne

🎯 Résultat : meilleure visibilité sur le parc informatique, optimisation du suivi des équipements et amélioration de l'organisation interne.`,
    technologies: ["C++"],
    period: "1 mois",
  },
]

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set())

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedIds)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedIds(newExpanded)
  }

  return (
    <section id="experiences" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Mes <span className="gradient-text">expériences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mes expériences professionnelles et stages dans différentes organisations.
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-colors flex flex-col"
            >
              {/* Experience Header */}
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    <p className="text-primary font-medium">{exp.position}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary w-fit">
                  {exp.period}
                </span>
              </div>

              {/* Experience Details */}
              <p className="text-muted-foreground mb-4">{exp.description}</p>

              {/* Meta Info */}
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-secondary/50 text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expand Button and Full Description */}
              {exp.fullDescription && (
                <div className="mt-auto pt-4 border-t border-border/30">
                  <motion.button
                    onClick={() => toggleExpanded(exp.id)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
                  >
                    {expandedIds.has(exp.id) ? "Voir moins" : "Voir plus"}
                    <motion.div
                      animate={{ rotate: expandedIds.has(exp.id) ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: expandedIds.has(exp.id) ? 1 : 0,
                      height: expandedIds.has(exp.id) ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-4 bg-muted/30 rounded-lg border border-border/30">
                      <p className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                        {exp.fullDescription}
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
