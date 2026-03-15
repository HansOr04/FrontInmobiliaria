'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider } from '@radix-ui/react-slider'
import { PROPERTY_TYPES, CITIES, AMENITIES } from '@/constants/amenities'
import type { PropertyFilters as Filters } from '@/types/property'

interface PropertyFiltersProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
  onApply: () => void
  onReset: () => void
}

export default function PropertyFilters({
  filters,
  onFiltersChange,
  onApply,
  onReset,
}: PropertyFiltersProps) {
  const updateFilter = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value })
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
      <h3 className="font-semibold text-lg mb-6 text-corporate-purple">
        Filtros
      </h3>

      {/* Property Type */}
      <div className="mb-6">
        <Label className="mb-2 block">Tipo de Propiedad</Label>
        <select
          value={filters.property_type as string || ''}
          onChange={(e) => updateFilter('property_type', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Todos</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div className="mb-6">
        <Label className="mb-2 block">Ciudad</Label>
        <select
          value={filters.city || ''}
          onChange={(e) => updateFilter('city', e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">Todas</option>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <Label className="mb-2 block">Rango de Precio</Label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Mínimo"
            value={filters.min_price || ''}
            onChange={(e) => updateFilter('min_price', Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Máximo"
            value={filters.max_price || ''}
            onChange={(e) => updateFilter('max_price', Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-6">
        <Label className="mb-2 block">Habitaciones</Label>
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => updateFilter('bedrooms', filters.bedrooms === num ? undefined : num)}
              className={`p-2 border rounded-md transition-colors ${
                filters.bedrooms === num
                  ? 'bg-corporate-green text-white border-corporate-green'
                  : 'border-gray-300 hover:border-corporate-green'
              }`}
            >
              {num === 5 ? '5+' : num}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div className="mb-6">
        <Label className="mb-2 block">Baños</Label>
        <div className="grid grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => updateFilter('bathrooms', filters.bathrooms === num ? undefined : num)}
              className={`p-2 border rounded-md transition-colors ${
                filters.bathrooms === num
                  ? 'bg-corporate-green text-white border-corporate-green'
                  : 'border-gray-300 hover:border-corporate-green'
              }`}
            >
              {num === 5 ? '5+' : num}
            </button>
          ))}
        </div>
      </div>

      {/* Area Range */}
      <div className="mb-6">
        <Label className="mb-2 block">Área (m²)</Label>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            placeholder="Mín"
            value={filters.min_area || ''}
            onChange={(e) => updateFilter('min_area', Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <input
            type="number"
            placeholder="Máx"
            value={filters.max_area || ''}
            onChange={(e) => updateFilter('max_area', Number(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <Label className="mb-2 block">Amenidades</Label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {AMENITIES.building.slice(0, 6).map((amenity) => (
            <label key={amenity.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.amenities?.includes(amenity.id) || false}
                onChange={(e) => {
                  const current = filters.amenities || []
                  const updated = e.target.checked
                    ? [...current, amenity.id]
                    : current.filter((id) => id !== amenity.id)
                  updateFilter('amenities', updated)
                }}
                className="rounded border-gray-300"
              />
              <span className="text-sm">{amenity.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <Button onClick={onApply} className="flex-1 bg-corporate-green hover:bg-corporate-green/90">
          Aplicar
        </Button>
        <Button onClick={onReset} variant="outline" className="flex-1">
          Limpiar
        </Button>
      </div>
    </div>
  )
}
