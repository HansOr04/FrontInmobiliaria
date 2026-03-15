'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROPERTY_TYPES, CITIES, PRICE_RANGES } from '@/constants/amenities'

type TabType = 'venta' | 'alquiler'

export default function SearchBar() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('venta')
  const [propertyType, setPropertyType] = useState('')
  const [city, setCity] = useState('')
  const [priceRange, setPriceRange] = useState('')

  const handleSearch = () => {
    const params = new URLSearchParams()
    params.append('operation_type', activeTab)

    if (propertyType) params.append('property_type', propertyType)
    if (city) params.append('city', city)
    if (priceRange) {
      const range = PRICE_RANGES.find(r => r.label === priceRange)
      if (range) {
        params.append('min_price', range.min.toString())
        if (range.max) params.append('max_price', range.max.toString())
      }
    }

    router.push(`/inmobiliaria/${activeTab}?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('venta')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
            activeTab === 'venta'
              ? 'bg-corporate-green text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Comprar
        </button>
        <button
          onClick={() => setActiveTab('alquiler')}
          className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
            activeTab === 'alquiler'
              ? 'bg-corporate-green text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Alquilar
        </button>
      </div>

      {/* Search Fields */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Property Type */}
        <select
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-corporate-green focus:border-transparent outline-none"
        >
          <option value="">Tipo de propiedad</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>

        {/* City */}
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-corporate-green focus:border-transparent outline-none"
        >
          <option value="">Ciudad</option>
          {CITIES.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select>

        {/* Price Range */}
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-corporate-green focus:border-transparent outline-none"
        >
          <option value="">Rango de precio</option>
          {PRICE_RANGES.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          variant="orange"
          size="lg"
          className="w-full h-12"
        >
          <Search className="w-5 h-5 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  )
}
