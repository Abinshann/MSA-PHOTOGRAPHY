'use client'

import { motion } from 'framer-motion'
import { Instagram, MessageCircle, Mail } from 'lucide-react'
import { siteConfig, socialLinks } from '@/lib/data'

const footerIconMap: Record<string, React.ElementType> = {
  Instagram,
  WhatsApp: MessageCircle,
  Email: Mail,
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 lg:px-8 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="font-[var(--font-playfair)] text-2xl tracking-wider text-foreground">
              {siteConfig.shortName}
            </span>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">
              {siteConfig.tagline}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = footerIconMap[social.name]
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  aria-label={social.name}
                >
                  {Icon && <Icon size={20} />}
                </a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs tracking-widest text-muted-foreground"
          >
            © {currentYear} {siteConfig.copyright}. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
