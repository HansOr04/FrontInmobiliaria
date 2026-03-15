'use client'

import { useFeaturedProperties } from '@/hooks/useProperties'
import PropertyCard from '@/components/properties/PropertyCard'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FeaturedProperties() {
  const { data: properties, isLoading, error } = useFeaturedProperties(8)

  if (isLoading) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-corporate-purple mb-4">
              PROPIEDADES DESTACADAS
            </h2>
            <p className="text-lg text-corporate-gray-medium">
              Descubre las mejores oportunidades del mercado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="skeleton h-96 rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error || !properties || properties.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-corporate-purple mb-4">
            PROPIEDADES DESTACADAS
          </h2>
          <p className="text-lg text-corporate-gray-medium">
            Descubre las mejores oportunidades del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/inmobiliaria/compra">
            <Button variant="secondary" size="lg">
              Ver Todas las Propiedades
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
