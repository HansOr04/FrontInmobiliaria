'use client'

import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-corporate-purple via-corporate-purple/90 to-corporate-green">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-1 mb-6">
            ENCUENTRA TU HOGAR IDEAL
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-100">
            Más de 500 propiedades disponibles en todo Ecuador
          </p>

          {/* Search Bar */}
          <SearchBar />
        </motion.div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
