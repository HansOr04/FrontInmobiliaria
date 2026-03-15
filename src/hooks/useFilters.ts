'use client'

import { useState, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { PropertyFilters } from '@/types/property'

export const useFilters = (initialFilters: PropertyFilters = {}) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [filters, setFilters] = useState<PropertyFilters>(() => {
    // Initialize from URL params if available
    const urlFilters: PropertyFilters = {}

    searchParams.forEach((value, key) => {
      if (key === 'min_price' || key === 'max_price' || key === 'min_area' || key === 'max_area') {
        urlFilters[key] = Number(value)
      } else if (key === 'bedrooms' || key === 'bathrooms' || key === 'parking_spaces') {
        urlFilters[key] = Number(value)
      } else if (key === 'furnished' || key === 'pets_allowed' || key === 'featured') {
        urlFilters[key] = value === 'true'
      } else if (key === 'amenities') {
        urlFilters[key] = value.split(',')
      } else {
        // @ts-ignore
        urlFilters[key] = value
      }
    })

    return { ...initialFilters, ...urlFilters }
  })

  const updateFilters = useCallback((newFilters: Partial<PropertyFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }, [])

  const resetFilters = useCallback(() => {
    setFilters(initialFilters)
  }, [initialFilters])

  const applyFilters = useCallback(() => {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          params.append(key, value.join(','))
        } else {
          params.append(key, value.toString())
        }
      }
    })

    router.push(`?${params.toString()}`)
  }, [filters, router])

  const hasActiveFilters = Object.keys(filters).length > Object.keys(initialFilters).length

  return {
    filters,
    updateFilters,
    resetFilters,
    applyFilters,
    hasActiveFilters,
  }
}
