'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { aboutContent } from '@/lib/data'

export default function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <motion.div style={{ y: imageY }} className="absolute inset-0">
              <Image
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
            {/* Decorative Frame */}
            <div className="absolute inset-4 border border-accent/30 pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-16 h-px bg-accent mb-8 origin-left"
            />

            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-light tracking-wide text-foreground mb-8">
              {aboutContent.heading}
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {aboutContent.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p className="text-accent italic font-[var(--font-playfair)] text-lg">
                {aboutContent.location}
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
            >
              {aboutContent.stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="block font-[var(--font-playfair)] text-3xl text-accent"
                  >
                    {stat.number}
                  </motion.span>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

