import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import type { Property, PropertySearchParams, PropertySearchResponse } from '@/types/property'

const extractPropertiesArray = (payload: any): Property[] => {
  if (Array.isArray(payload?.properties)) return payload.properties
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload)) return payload
  return []
}

export const useProperties = (filters: PropertySearchParams = { sort_by: 'date_desc', sort_order: 'desc' }, page: number = 1) => {
  return useQuery({
    queryKey: ['properties', filters, page],
    queryFn: async () => {
      const params = new URLSearchParams()

      Object.entries({ ...filters, page, limit: filters.limit || 20 }).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          if (Array.isArray(value)) {
            value.forEach(v => params.append(key, v.toString()))
          } else {
            params.append(key, value.toString())
          }
        }
      })

      const { data } = await api.get<any>(`/properties/search?${params}`)

      // Transform backend response to match PropertySearchResponse interface
      return {
        properties: data.data,
        total: data.meta.total,
        page: data.meta.page,
        limit: data.meta.limit,
        total_pages: data.meta.total_pages,
      } as PropertySearchResponse
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useProperty = (slug: string) => {
  return useQuery({
    queryKey: ['property', slug],
    queryFn: async () => {
      const { data } = await api.get<{ data: Property }>(`/properties/${slug}`)
      return data.data
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  })
}

export const usePropertyById = (id: string) => {
  return useQuery({
    queryKey: ['property', id],
    queryFn: async () => {
      // The API endpoint /api/properties/:id accepts direct ID
      const { data } = await api.get<{ data: Property }>(`/properties/${id}`)
      return data.data
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  })
}

export const useFeaturedProperties = (limit: number = 8) => {
  return useQuery({
    queryKey: ['featured-properties', limit],
    queryFn: async () => {
      const { data } = await api.get<any>(`/properties/featured?limit=${limit}`)
      return extractPropertiesArray(data)
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  })
}

export const useSimilarProperties = (propertyId: string, limit: number = 4) => {
  return useQuery({
    queryKey: ['similar-properties', propertyId, limit],
    queryFn: async () => {
      const { data } = await api.get<any>(`/properties/${propertyId}/similar?limit=${limit}`)
      return extractPropertiesArray(data)
    },
    enabled: !!propertyId,
    staleTime: 10 * 60 * 1000,
  })
}
