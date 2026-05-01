'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, MessageCircle, Mail, Send, ArrowUpRight } from 'lucide-react'
import { contactContent, socialLinks } from '@/lib/data'

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  WhatsApp: MessageCircle,
  Email: Mail,
}

export default function Contact() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-16 h-px bg-accent mx-auto mb-8"
          />
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-foreground mb-4">
            {contactContent.heading}
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-xl mx-auto">
            {contactContent.subheading}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border focus:border-accent outline-none py-3 text-foreground transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground tracking-widest uppercase text-sm hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {socialLinks.map((link, index) => {
                const Icon = iconMap[link.name]
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group flex items-center gap-6 p-4 border border-border hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="p-3 bg-card text-accent">
                      {Icon && <Icon size={24} />}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                        {link.name}
                      </p>
                      <p className="text-foreground">{link.label}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted-foreground group-hover:text-accent transition-colors"
                    />
                  </motion.a>
                )
              })}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm tracking-widest uppercase text-muted-foreground">
                  {contactContent.availability}
                </span>
              </div>
              <p className="text-foreground">
                {contactContent.availabilityText}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
