// ============================================================
// data.ts — Single source of truth for all home page content
// ============================================================

// ─── SITE META ───────────────────────────────────────────────
export const siteConfig = {
  name: 'Muhammed Sultan Ali',
  shortName: 'MSA',
  tagline: 'Visual Storyteller',
  location: 'Based in Abu Dhabi, creating worldwide.',
  email: 'muhammedsultanaliuae@gmail.com',
  instagram: 'https://www.instagram.com/abinnshan/',
  instagramHandle: '@muhammedsultanali',
  whatsapp: 'https://wa.me/+971542440221',
  whatsappNumber: '+971 54 244 0221',
  copyright: 'Muhammed Sultan Ali',
  availability: 'Open for wedding bookings 2025-2026 and commercial projects worldwide.',
}

// ─── NAVIGATION ──────────────────────────────────────────────
export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

// ─── HERO SECTION ────────────────────────────────────────────
export const heroContent = {
  firstName: 'Muhammed',
  lastName: 'Sultan Ali',
  subtitle: 'Visual Storyteller',
  scrollLabel: 'Scroll',
}

export const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    alt: 'Wedding couple in golden light',
  },
  {
    image: 'https://images.unsplash.com/photo-1776958183865-9ccc51cb8459?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Portrait in dramatic lighting',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    alt: 'Mountain landscape at sunset',
  },
  {
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80',
    alt: 'Nature and travel photography',
  },
]

// ─── CINEMATIC BREAKS ─────────────────────────────────────────
export const cinematicSections = [
  {
    id: 'cinematic-1',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80',
    text: 'Every frame tells a story',
    reverse: false,
  },
  {
    id: 'cinematic-2',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
    text: 'Light is the brush, emotion is the canvas',
    reverse: true,
  },
  {
    id: 'cinematic-3',
    image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?w=1920&q=80',
    text: 'Moments become memories, memories become art',
    reverse: false,
  },
]

// ─── PORTFOLIO SECTION ────────────────────────────────────────
export const portfolioContent = {
  heading: 'Portfolio',
  description: 'A curated collection of moments captured across the world',
}

export const portfolioCategories = ['All', 'Weddings', 'Portraits', 'Travel', 'Lifestyle', "Beach"]

export const portfolioItems = [
  {
    id: 1,
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1777127054674-4f198346bc44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Stillness',
    location: 'Abu Dhabi, UAE',
  },
  {
    id: 2,
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1777125259057-67d1dae9caad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Night Life',
    location: 'Abu Dhabi, UAE',
  },
  {
    id: 3,
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1776876768948-b85423275071?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Waterfront',
    location: 'Abu Dhabi, UAE',
  },
  {
    id: 4,
    category: 'Animal',
    image: 'https://images.unsplash.com/photo-1776962928364-faaaaaefe03b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Cat',
    location: 'Abu Dhabi, UAE',
  },
  {
    id: 5,
    category: 'Cars',
    image: 'https://images.unsplash.com/photo-1776962443836-2a28af56e1e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'First Dance',
    location: 'Paris, France',
  },
  {
    id: 6,
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1777124941757-9737a5fb3d4c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'b&w',
    location: 'Dubai, UAE',
  },
  {
    id: 7,
    category: 'Portraits',
    image: 'https://res.cloudinary.com/dbbzmkzhd/image/upload/q_auto/f_auto/v1777703944/DSCF4253.JPG_iemtjh.jpg',
    title: 'Morning',
    location: 'Dubai, UAE',
  },
  {
    id: 8,
    category: 'Street',
    image: 'https://images.unsplash.com/photo-1776962762114-1311f7076f88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Old Rules',
    location: 'Abu Dhabi, UAE',
  },
  {
    id: 9,
    category: 'Lifestyle',
    image: 'https://images.unsplash.com/photo-1776962692799-887175bc225e?q=80&w=723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Night Life',
    location: 'Abu Dhabi',
  },
  {
    id: 10,
    category: 'Portraits',
    image: 'https://images.unsplash.com/photo-1777125258978-fac3801c6834?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Quiet Dedication',
    location: 'Abu Dhabi',
  },
  {
    id: 11,
    category: 'Travel',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
    title: 'Mountain Serenity',
    location: 'Kerala',
  },
  {
    id: 12,
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1777127357612-4e8e4413adbd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Beach Vibe',
    location: 'Abu Dhabi, UAE',
  },
  // {
  //   id: 13,
  //   category: 'Lifestyle',
  //   image: 'https://images.unsplash.com/photo-1777126091777-90f400886717?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   title: 'Friendship',
  //   location: 'Abu Dhabi, UAE',
  // },
]

// ─── ABOUT SECTION ────────────────────────────────────────────
export const aboutContent = {
  heading: 'About Me',
  image: '/about.webp',
  imageAlt: 'Muhammed Sultan Ali - Visual Storyteller',
  bio: [
    'I am a visual storyteller with a passion for capturing the raw, unscripted moments that define our human experience. Through my lens, I seek to find the extraordinary within the ordinary.',
    "With over a decade of experience across weddings, portraits, and documentary work, I've developed a cinematic approach that blends artistry with authenticity. Every frame is an opportunity to preserve a feeling, a connection, a story.",
  ],
  location: 'Based in Abu Dhabi, creating worldwide.',
  stats: [
    { number: '1+', label: 'Years' },
    { number: '2+', label: 'Projects' },
    { number: '2+', label: 'Countries' },
  ],
}

// ─── CONTACT SECTION ─────────────────────────────────────────
export const contactContent = {
  heading: "Let's Work Together",
  subheading: "Ready to create something beautiful? Let's discuss your vision.",
  availability: 'Currently Available',
  availabilityText: 'Open for wedding bookings 2025-2026 and commercial projects worldwide.',
}

export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/abinnshan/',
    label: '@abinnshan',
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/+971542440221',
    label: '+971 XX XXX XXXX',
  },
  {
    name: 'Email',
    href: 'mailto:muhammedsultanaliuae@gmail.com',
    label: 'muhammedsultanaliuae@gmail.com',
  },
]
