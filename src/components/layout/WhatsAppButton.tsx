'use client'

import { useState, useEffect } from 'react'
import { MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getWhatsAppLink } from '@/lib/utils'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    const message = 'Hola, me gustaría obtener más información sobre sus propiedades.'
    window.open(getWhatsAppLink(message), '_blank')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-colors"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
