'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import api from '@/lib/api'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
  accept_terms: z.boolean().refine(val => val === true, 'Debes aceptar los términos y condiciones'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      accept_terms: false,
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      await api.post('/leads', {
        ...data,
        source: 'website_contact',
        status: 'nuevo',
      })

      toast({
        title: 'Mensaje enviado exitosamente',
        description: 'Nos pondremos en contacto contigo lo antes posible.',
      })

      reset()
    } catch (error) {
      console.error('Error enviando formulario de contacto:', error)
      toast({
        title: 'Error',
        description: 'No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      {/* Contact Information */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ponte en contacto con nosotros</h2>
        <p className="text-gray-600 mb-8">
          ¿Tienes alguna pregunta sobre nuestros servicios o propiedades? Estamos aquí para ayudarte. Completa el formulario y nos comunicaremos contigo a la brevedad.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-corporate-purple/10 rounded-lg text-corporate-purple">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Ubicación</h3>
              <p className="text-gray-600">Av. Francisco de Orellana, Guayaquil, Ecuador</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-corporate-blue/10 rounded-lg text-corporate-blue">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Teléfono</h3>
              <p className="text-gray-600">+593 99 123 4567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-corporate-green/10 rounded-lg text-corporate-green">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Correo Electrónico</h3>
              <p className="text-gray-600">info@inmobiliariaortizidrovo.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-corporate-orange/10 rounded-lg text-corporate-orange">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Horario de Atención</h3>
              <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name">Nombre Completo *</Label>
          <Input id="name" placeholder="Ej. Juan Pérez" className="mt-1.5" {...register('name')} />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="email">Correo Electrónico *</Label>
            <Input id="email" type="email" placeholder="juan@ejemplo.com" className="mt-1.5" {...register('email')} />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Teléfono (opcional)</Label>
            <Input id="phone" type="tel" placeholder="0991234567" className="mt-1.5" {...register('phone')} />
          </div>
        </div>

        <div>
          <Label htmlFor="message">Mensaje *</Label>
          <Textarea
            id="message"
            placeholder="¿En qué te podemos ayudar?"
            className="min-h-[120px] mt-1.5"
            {...register('message')}
          />
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
          )}
        </div>

        <div className="flex items-start space-x-3 pt-2">
          <Checkbox
            id="terms"
            checked={!!watch('accept_terms')}
            onChange={(e) => setValue('accept_terms', e.target.checked)}
          />
          <Label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
            He leído y acepto los <a href="#" className="text-corporate-purple hover:underline">términos y condiciones</a> y la <a href="#" className="text-corporate-purple hover:underline">política de privacidad</a>.
          </Label>
        </div>
        {errors.accept_terms && (
          <p className="text-sm text-red-500 -mt-3">{errors.accept_terms.message}</p>
        )}

        <Button type="submit" className="w-full bg-corporate-blue hover:bg-corporate-blue/90 h-12 text-lg font-medium" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </Button>
      </form>
    </div>
  )
}
