import { ReactNode } from 'react'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description?: string
  accentColor?: 'blue' | 'green' | 'purple' | 'violet'
  children?: ReactNode
}

const colorClasses = {
  blue: 'from-blue-600 to-blue-500',
  green: 'from-green-600 to-green-500',
  purple: 'from-purple-600 to-purple-500',
  violet: 'from-corporate-purple to-violet-700',
}

export default function ServiceHero({
  title,
  subtitle,
  description,
  accentColor = 'blue',
  children,
}: ServiceHeroProps) {
  return (
    <section className={`relative bg-gradient-to-r ${colorClasses[accentColor]} text-white py-20 md:py-32`}>
      <div className="container-custom">
        <div className="max-w-4xl">
          <h1 className="heading-2 mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-6 font-light">{subtitle}</p>
          {description && (
            <p className="text-lg opacity-90 mb-8">{description}</p>
          )}
          {children}
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
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
