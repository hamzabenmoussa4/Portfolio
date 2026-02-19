"use client"

import { motion } from "framer-motion"
import { BookOpen, Code2, Lightbulb, Trophy } from "lucide-react"

const qualities = [
  {
    icon: Code2,
    title: "Développement Moderne",
    description: "Passionné par les dernières technologies et les meilleures pratiques de développement.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Toujours à la recherche de solutions créatives et innovantes pour résoudre les problèmes.",
  },
  {
    icon: BookOpen,
    title: "Apprentissage Continu",
    description: "En constante évolution pour maîtriser les technologies émergentes.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "Engagé à produire un code de qualité et des expériences utilisateur optimales.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
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
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez mon parcours, mes valeurs et ce qui me motive dans le monde du développement.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Étudiant en Ingénierie Informatique
            </h3>
            <p className="text-muted-foreground mb-6">
            Étudiant en 4ᵉ année d’ingénierie en systèmes informatiques, passionné par le développement logiciel, la résolution de problèmes et la création de solutions numériques efficaces.
            </p>
            <p className="text-muted-foreground mb-6">
            Je travaille avec des technologies web modernes comme React.js et je reste ouvert à d’autres frameworks et stacks (Laravel, Node.js, etc.). J’ai de l’expérience avec Java, Python, C++, C#, et bien d’autres, ainsi qu’avec des bases de données comme MongoDB, MySQL et Oracle.
            </p>
            <p className="text-muted-foreground">
            En parallèle du développement, j’ai une solide base en systèmes et en fondamentaux des réseaux, incluant l’administration Linux et Windows, ainsi que les réseaux Cisco. J’aime également les algorithmes, les structures de données, et explorer le machine learning avec Python.
            </p>
          </motion.div>

          {/* Qualities Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-xl"
              >
                <quality.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{quality.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {quality.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
