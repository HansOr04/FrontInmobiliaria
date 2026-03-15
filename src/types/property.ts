export type PropertyType =
  | 'casa'
  | 'departamento'
  | 'terreno'
  | 'edificio'
  | 'oficina'
  | 'local_comercial'
  | 'bodega'

export type OperationType = 'venta' | 'alquiler'

export type PropertyStatus = 'disponible' | 'vendida' | 'alquilada' | 'reservada'

export type PropertyCondition = 'excelente' | 'bueno' | 'regular' | 'requiere_reparaciones'

export interface PropertyImage {
  id: string
  property_id: string
  image_url: string
  is_main: boolean
  order: number
  created_at: string
}

export interface PropertyAmenity {
  id: string
  name: string
  icon?: string
  category: 'building' | 'unit' | 'location'
}

export interface Property {
  id: string
  slug: string
  title: string
  description: string
  property_type: PropertyType
  operation_type: OperationType
  status: PropertyStatus

  // Precios
  price: number
  price_per_m2?: number
  maintenance_fee?: number

  // Ubicación
  country: string
  province: string
  city: string
  neighborhood: string
  address: string
  latitude?: number
  longitude?: number

  // Características
  bedrooms?: number
  bathrooms?: number
  parking_spaces?: number
  area_built: number
  area_total?: number
  floor_number?: number
  total_floors?: number
  construction_year?: number

  // Estado
  condition?: PropertyCondition
  furnished?: boolean
  pets_allowed?: boolean

  // Imágenes
  main_image: string
  images: PropertyImage[]

  // Amenidades
  amenities: PropertyAmenity[]

  // Features adicionales
  video_url?: string
  virtual_tour_url?: string

  // Metadata
  featured: boolean
  views: number
  created_at: string
  updated_at: string

  // Agente
  agent_name?: string
  agent_phone?: string
  agent_email?: string
  agent_photo?: string
}

export interface PropertyFilters {
  property_type?: PropertyType | PropertyType[]
  operation_type?: OperationType
  city?: string
  neighborhood?: string
  min_price?: number
  max_price?: number
  bedrooms?: number
  bathrooms?: number
  parking_spaces?: number
  min_area?: number
  max_area?: number
  furnished?: boolean
  pets_allowed?: boolean
  amenities?: string[]
  featured?: boolean
  search?: string
}

export interface PropertySearchParams extends PropertyFilters {
  page?: number
  limit?: number
  sort_by?: 'price_asc' | 'price_desc' | 'date_desc' | 'date_asc' | 'area_desc' | 'area_asc' | 'views'
  sort_order?: 'asc' | 'desc'
}

export interface PropertySearchResponse {
  properties: Property[]
  total: number
  page: number
  limit: number
  total_pages: number
}
