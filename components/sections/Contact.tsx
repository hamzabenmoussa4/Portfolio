"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
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
            Me <span className="gradient-text">contacter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tu as un projet en tête ou simplement envie de discuter ?
            N'hésite pas à me contacter !
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold mb-8">
              Restons en contact
            </h3>

            {/* Contact Methods */}
            <div className="space-y-4 mb-12">
              <a
                href="mailto:hamzabenmoussa.tel@gmail.com"
                className="flex items-center justify-center gap-4 p-4 glass glass-hover rounded-xl group"
              >
                <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">hamzabenmoussa.tel@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/hamza-benmoussa-0181353aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-4 glass glass-hover rounded-xl group"
              >
                <div className="p-3 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/hamza-benmoussa</p>
                </div>
              </a>

              <a
                href="https://github.com/hamzabenmoussa4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-4 glass glass-hover rounded-xl group"
              >
                <div className="p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/hamzabenmoussa4</p>
                </div>
              </a>

              <a
                href="https://wa.me/212644284247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-4 glass glass-hover rounded-xl group"
              >
                <div className="p-3 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+212 644 284 247</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

