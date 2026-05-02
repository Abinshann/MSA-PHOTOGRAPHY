'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { portfolioCategories, portfolioItems, portfolioContent } from '@/lib/data'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems.slice(0, 12)
      : portfolioItems
        .filter((item) => item.category === activeCategory)
        .slice(0, 12);

  const currentIndex = selectedImage !== null
    ? filteredItems.findIndex(item => item.id === selectedImage)
    : -1

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (currentIndex === -1) return
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[newIndex].id)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return
      if (e.key === 'Escape') setSelectedImage(null)
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
      if (e.key === 'ArrowRight') navigateLightbox('next')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, currentIndex, filteredItems])

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
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
            {portfolioContent.heading}
          </h2>
          <p className="text-muted-foreground tracking-wide max-w-xl mx-auto">
            {portfolioContent.description}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`md:px-6 md:py-2 px:3 py-1 text-xs tracking-widest uppercase transition-all duration-300 border ${activeCategory === category
                ? 'border-accent text-accent'
                : 'border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-card"
                onClick={() => setSelectedImage(item.id)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs tracking-widest uppercase text-accent mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-[var(--font-playfair)] text-xl text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-[100vw] h-[100dvh] z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('prev')
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateLightbox('next')
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {filteredItems.find((item) => item.id === selectedImage) && (
                <>
                  <Image
                    src={filteredItems.find((item) => item.id === selectedImage)!.image}
                    alt={filteredItems.find((item) => item.id === selectedImage)!.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-[var(--font-playfair)] text-2xl text-foreground">
                      {filteredItems.find((item) => item.id === selectedImage)!.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {filteredItems.find((item) => item.id === selectedImage)!.location}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
