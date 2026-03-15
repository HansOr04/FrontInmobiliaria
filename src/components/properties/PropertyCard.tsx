'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Bed, Bath, Car, Ruler, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useFavorites } from '@/hooks/useFavorites'
import { formatPrice, formatArea } from '@/lib/utils'
import type { Property } from '@/types/property'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites()
  const favorite = isLoaded && isFavorite(property.id)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(property.id)
  }

  const propertyUrl = `/inmobiliaria/${property.operation_type}/${property.slug}`

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.main_image || '/images/placeholders/property.svg'}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Badges */}
        {property.featured && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 shadow-lg"
          >
            Destacada
          </Badge>
        )}

        <Badge
          variant="default"
          className="absolute top-3 right-14 shadow-lg capitalize"
        >
          {property.operation_type}
        </Badge>

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <Heart
            className={`w-5 h-5 ${
              favorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
      </div>

      <CardContent className="p-4">
        {/* Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-corporate-purple">
            {formatPrice(property.price)}
          </h3>
        </div>

        {/* Title */}
        <h4 className="font-semibold text-lg mb-1 line-clamp-1">
          {property.title}
        </h4>

        {/* Location */}
        <p className="text-sm text-corporate-gray-medium mb-3 flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          {property.neighborhood}, {property.city}
        </p>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-corporate-gray-dark mb-4 flex-wrap">
          {property.bedrooms && property.bedrooms > 0 && (
            <span className="flex items-center gap-1">
              <Bed className="w-4 h-4" /> {property.bedrooms}
            </span>
          )}
          {property.bathrooms && property.bathrooms > 0 && (
            <span className="flex items-center gap-1">
              <Bath className="w-4 h-4" /> {property.bathrooms}
            </span>
          )}
          {property.parking_spaces && property.parking_spaces > 0 && (
            <span className="flex items-center gap-1">
              <Car className="w-4 h-4" /> {property.parking_spaces}
            </span>
          )}
          {property.area_built && (
            <span className="flex items-center gap-1">
              <Ruler className="w-4 h-4" /> {formatArea(property.area_built)}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link href={propertyUrl}>
          <Button className="w-full bg-corporate-green hover:bg-corporate-green/90">
            Ver Detalles
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
