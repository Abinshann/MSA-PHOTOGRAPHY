'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STAGES = ['Initializing', 'Fetching assets', 'Rendering', 'Almost there', 'Complete']

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stageIndex = Math.min(
    Math.floor((progress / 100) * (STAGES.length - 0.01)),
    STAGES.length - 1
  )

  const tickCount = Math.floor((progress / 100) * 5)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 12 + 2
        if (next >= 100) {
          clearInterval(timerRef.current!)
          setTimeout(() => setIsLoading(false), 900)
          return 100
        }
        return next
      })
    }, 120)

    return () => clearInterval(timerRef.current!)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed top-0 left-0 w-full h-full min-w-[100vw] min-h-[100dvh] z-[100] bg-background"
        >
          {/* Grain overlay */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: '200px',
            }}
          />

          {/* Viewport-locked inner wrapper */}
          <div className="absolute top-0 left-0 w-[100vw] h-[100dvh] flex flex-col items-center justify-center overflow-hidden pointer-events-none">
            {/* Corner brackets */}
            {/* Top-left */}
            <span className="absolute top-3 left-3 md:top-5 md:left-5 w-4 h-px md:w-7 bg-border" />
            <span className="absolute top-3 left-3 md:top-5 md:left-5 w-px h-4 md:h-7 bg-border" />
            {/* Bottom-right */}
            <span className="absolute bottom-3 right-3 md:bottom-5 md:right-5 w-4 h-px md:w-7 bg-border" />
            <span className="absolute bottom-3 right-3 md:bottom-5 md:right-5 w-px h-4 md:h-7 bg-border" />

            {/* Meta labels */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute top-3 right-3 md:top-4 md:right-5 text-[7px] md:text-[9px] tracking-[0.1em] md:tracking-[0.15em] text-muted-foreground uppercase select-none"
            >
              Loading
            </motion.p>

            <motion.p
              key={STAGES[stageIndex]}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-3 left-3 md:bottom-4 md:left-5 text-[7px] md:text-[9px] tracking-[0.1em] md:tracking-[0.12em] text-muted-foreground select-none font-mono"
            >
              {STAGES[stageIndex]}
            </motion.p>

            {/* Center content */}
            <div className="flex flex-col items-center justify-center w-full px-4 mx-auto pointer-events-auto" style={{ maxWidth: '24rem' }}>
              {/* Logo */}
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-[var(--font-playfair)] text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-normal tracking-[0.15em] md:tracking-[0.25em] text-foreground leading-none mb-6 md:mb-8 select-none text-center w-full"
              >
                MSA
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] text-muted-foreground uppercase mb-8 md:mb-10 font-mono select-none text-center w-full"
              >
                Est. 2024
              </motion.p>

              {/* Progress bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative overflow-hidden bg-border h-px w-[50vw] max-w-[180px] mx-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: progress / 100 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                />
              </motion.div>

              {/* Progress text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-muted-foreground font-mono select-none text-center tabular-nums"
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.p>

              {/* Tick dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center gap-1 md:gap-1.5 mt-5 md:mt-6 w-full"
                aria-hidden
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    animate={{ backgroundColor: i < tickCount ? 'hsl(var(--foreground))' : 'hsl(var(--border))' }}
                    transition={{ duration: 0.2 }}
                    className="block w-[2px] h-[2px] md:w-[3px] md:h-[3px] rounded-full"
                  />
                ))}
              </motion.div>
            </div>

          </div>

          {/* Wipe-out overlay on finish */}
          <motion.div
            className="absolute inset-0 bg-background"
            initial={{ scaleY: 1, transformOrigin: 'bottom' }}
            animate={{ scaleY: 0, transformOrigin: 'bottom' }}
            transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}