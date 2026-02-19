"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Server, Terminal, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Laravel", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "Java", level: 85 },
      { name: "Python", level: 85 },
      { name: "C++", level: 95 },
      { name: "C#", level: 90 },
    ],
  },
  {
    title: "Base de données",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 95 },
      { name: "MySQL", level: 95 },
      { name: "Oracle Database", level: 75 },
    ],
  },
  {
    title: "Outils & Systèmes",
    icon: Terminal,
    skills: [
      { name: "Linux System Administration", level: 75 },
      { name: "Windows Administration", level: 80 },
      { name: "Cisco Networking", level: 75 },
      { name: "MATLAB", level: 85 },
      { name: "Git", level: 85 },
      { name: "Algorithms", level: 95 },
      { name: "Machine Learning", level: 75 },
    ],
  },
];


export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
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
            Mes <span className="gradient-text">compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un aperçu des technologies et outils que j'utilise pour créer des applications modernes.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-primary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
