
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const navItems = [
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Expériences", href: "#experiences" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/hamzabenmoussa4", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hamza-benmoussa-0181353aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:hamzabenmoussa.tel@gmail.com", icon: Mail },
  { name: "WhatsApp", href: "https://wa.me/212644284247", icon: MessageCircle },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          {/* Logo - Left */}
          <div className="flex-1">
            <Link href="/" className="text-xl font-bold gradient-text">
              HB
            </Link>
          </div>

          {/* Desktop Navigation - Center (spaced) */}
<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-[720px] items-center justify-between">
  {/* Nav Links */}
  <div className="flex-1 flex items-center justify-center gap-10">
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.href}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
      >
        {item.name}
      </Link>
    ))}
  </div>

  {/* Social Links */}
  <div className="flex items-center gap-4 pl-6 border-l border-white/10">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <social.icon className="w-5 h-5" />
      </a>
    ))}
  </div>
</div>


          {/* Mobile Menu Button - Right */}
          <div className="flex-1 flex justify-end md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
