import { z } from 'zod'

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono inválido').optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  property_id: z.string().uuid().optional(),
  accept_terms: z.boolean().refine(val => val === true, {
    message: 'Debes aceptar los términos y condiciones'
  })
})

// Property Inquiry Form Schema
export const propertyInquirySchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Teléfono inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  preferred_contact: z.enum(['email', 'phone', 'whatsapp']),
  visit_date: z.string().optional(),
})

// Sell Property Form Schema
export const sellPropertySchema = z.object({
  // Datos del propietario
  owner_name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  owner_email: z.string().email('Email inválido'),
  owner_phone: z.string().min(10, 'Teléfono inválido'),

  // Datos de la propiedad
  property_type: z.enum(['casa', 'departamento', 'terreno', 'oficina', 'local_comercial', 'bodega']),
  address: z.string().min(10, 'La dirección debe ser más específica'),
  city: z.string().min(2, 'Ciudad inválida'),
  desired_price: z.number().positive('El precio debe ser mayor a 0'),
  bedrooms: z.number().int().positive().optional(),
  bathrooms: z.number().int().positive().optional(),
  area: z.number().positive('El área debe ser mayor a 0'),
  condition: z.enum(['excelente', 'bueno', 'regular', 'requiere_reparaciones']),
  description: z.string().min(20, 'La descripción debe tener al menos 20 caracteres'),
  has_documents: z.boolean(),
  visit_availability: z.string().min(5, 'Indica tu disponibilidad'),
})

// Testimonial Form Schema
export const testimonialSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  rating: z.number().min(1).max(5),
  comment: z.string().min(20, 'El comentario debe tener al menos 20 caracteres'),
  property_id: z.string().uuid().optional(),
  allow_publish: z.boolean(),
})

// Newsletter Schema
export const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
})

// Property Search Schema
export const propertySearchSchema = z.object({
  property_type: z.string().optional(),
  operation_type: z.enum(['venta', 'alquiler']).optional(),
  city: z.string().optional(),
  neighborhood: z.string().optional(),
  min_price: z.number().positive().optional(),
  max_price: z.number().positive().optional(),
  bedrooms: z.number().int().positive().optional(),
  bathrooms: z.number().int().positive().optional(),
  parking_spaces: z.number().int().positive().optional(),
  min_area: z.number().positive().optional(),
  max_area: z.number().positive().optional(),
  furnished: z.boolean().optional(),
  pets_allowed: z.boolean().optional(),
  amenities: z.array(z.string()).optional(),
  featured: z.boolean().optional(),
  search: z.string().optional(),
})

// Login Schema
export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
  remember: z.boolean().optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type PropertyInquiryValues = z.infer<typeof propertyInquirySchema>
export type SellPropertyValues = z.infer<typeof sellPropertySchema>
export type TestimonialValues = z.infer<typeof testimonialSchema>
export type NewsletterValues = z.infer<typeof newsletterSchema>
export type PropertySearchValues = z.infer<typeof propertySearchSchema>
export type LoginValues = z.infer<typeof loginSchema>
