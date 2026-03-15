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

const contactSchema = z.object({
    name: z.string().min(2, 'El nombre es requerido'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional(),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
    accept_terms: z.literal(true, {
        errorMap: () => ({ message: 'Debes aceptar los términos' }),
    }),
})

type ContactFormValues = z.infer<typeof contactSchema>

interface ContactAgentFormProps {
    propertyId: string
    propertyTitle: string
}

export default function ContactAgentForm({ propertyId, propertyTitle }: ContactAgentFormProps) {
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
            message: `Hola, estoy interesado en la propiedad "${propertyTitle}" y me gustaría recibir más información.`,
        },
    })

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true)
        try {
            await api.post('/leads', {
                ...data,
                property_id: propertyId,
                source: 'website',
                status: 'nuevo',
            })

            toast({
                title: 'Mensaje enviado',
                description: 'Un agente se pondrá en contacto contigo pronto.',
            })

            reset()
        } catch (error) {
            console.error('Error sending lead:', error)
            toast({
                title: 'Error',
                description: 'No se pudo enviar el mensaje. Inténtalo de nuevo.',
                variant: 'destructive',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contactar Agente</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Input placeholder="Nombre completo" {...register('name')} />
                    {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <Input type="email" placeholder="Email" {...register('email')} />
                    {errors.email && (
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <Input type="tel" placeholder="Teléfono (opcional)" {...register('phone')} />
                </div>

                <div>
                    <Textarea
                        placeholder="Mensaje"
                        className="min-h-[100px]"
                        {...register('message')}
                    />
                    {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="terms"
                        onCheckedChange={(checked) => setValue('accept_terms', checked as true)}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-500">
                        Acepto la política de privacidad
                    </Label>
                </div>
                {errors.accept_terms && (
                    <p className="text-sm text-red-500">{errors.accept_terms.message}</p>
                )}

                <Button type="submit" className="w-full bg-corporate-blue hover:bg-corporate-blue/90" disabled={isSubmitting}>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
            </form>
        </div>
    )
}
