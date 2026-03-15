'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Propiedades Disponibles' },
  { value: 95, suffix: '%', label: 'Clientes Satisfechos' },
  { value: 20, suffix: '+', label: 'Años de Experiencia' },
  { value: 1000, suffix: '+', label: 'Propiedades Vendidas' },
]

function useCountUp(end: number, duration: number = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return count
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-r from-corporate-purple via-corporate-purple/90 to-corporate-green text-white"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatItem({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number
  suffix: string
  label: string
  isVisible: boolean
}) {
  const count = useCountUp(value, 2000, isVisible)

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-gray-100">{label}</div>
    </div>
  )
}
