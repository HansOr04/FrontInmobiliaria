export type LeadSource = 'website' | 'facebook' | 'instagram' | 'whatsapp' | 'referral' | 'other'

export type LeadStatus = 'nuevo' | 'contactado' | 'calificado' | 'convertido' | 'descartado'

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  message: string
  source: LeadSource
  status: LeadStatus
  property_id?: string
  created_at: string
  updated_at: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  property_id?: string
  accept_terms: boolean
}

export interface PropertyInquiryFormData {
  name: string
  email: string
  phone: string
  message: string
  preferred_contact: 'email' | 'phone' | 'whatsapp'
  visit_date?: string
}

export interface SellPropertyFormData {
  // Datos del propietario
  owner_name: string
  owner_email: string
  owner_phone: string

  // Datos de la propiedad
  property_type: string
  address: string
  city: string
  desired_price: number
  bedrooms?: number
  bathrooms?: number
  area: number
  condition: 'excelente' | 'bueno' | 'regular' | 'requiere_reparaciones'
  description: string
  has_documents: boolean
  visit_availability: string
}

export interface TestimonialFormData {
  name: string
  email: string
  rating: number
  comment: string
  property_id?: string
  allow_publish: boolean
}
