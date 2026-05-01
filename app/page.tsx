'use client'

import dynamic from 'next/dynamic'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import Portfolio from '@/components/portfolio'
import CinematicSection from '@/components/cinematic-section'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Preloader from '@/components/preloader'
import { cinematicSections } from '@/lib/data'

// Dynamically import smooth scroll to avoid SSR issues
const SmoothScroll = dynamic(() => import('@/components/providers/smooth-scroll'), {
  ssr: false,
})

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <Navigation />

      <main>
        {/* Hero Section - Fullscreen cinematic intro */}
        <Hero />

        {/* First Cinematic Break */}
        <CinematicSection
          image={cinematicSections[0].image}
          text={cinematicSections[0].text}
          reverse={cinematicSections[0].reverse}
        />

        {/* Portfolio Gallery */}
        <Portfolio />

        {/* Second Cinematic Break */}
        <CinematicSection
          image={cinematicSections[1].image}
          text={cinematicSections[1].text}
          reverse={cinematicSections[1].reverse}
        />

        {/* About Section */}
        <About />

        {/* Third Cinematic Break */}
        <CinematicSection
          image={cinematicSections[2].image}
          text={cinematicSections[2].text}
          reverse={cinematicSections[2].reverse}
        />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </SmoothScroll>
  )
}
