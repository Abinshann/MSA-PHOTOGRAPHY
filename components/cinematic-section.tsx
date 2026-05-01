'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface CinematicSectionProps {
  image: string
  text: string
  reverse?: boolean
}

export default function CinematicSection({ image, text, reverse = false }: CinematicSectionProps) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  return (
    <section ref={sectionRef} className="relative h-[80vh] overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 cinematic-vignette" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className={`relative z-10 flex items-center justify-center h-full px-6 ${
          reverse ? 'text-right' : 'text-left'
        }`}
      >
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className={`w-16 h-px bg-accent mb-8 ${reverse ? 'ml-auto' : ''}`} />
            <p className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-foreground italic">
              {`"${text}"`}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
