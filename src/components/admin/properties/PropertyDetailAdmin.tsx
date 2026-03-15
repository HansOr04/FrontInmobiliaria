'use client'

import { usePropertyById } from '@/hooks/useProperties'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Edit, ChevronLeft, MapPin, DollarSign, Loader2 } from 'lucide-react'
import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'

interface PropertyDetailAdminProps {
    id: string
}

export default function PropertyDetailAdmin({ id }: PropertyDetailAdminProps) {
    const { data: property, isLoading, error } = usePropertyById(id)
    const router = useRouter()

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-96">
                <Loader2 className="w-8 h-8 animate-spin text-corporate-blue" />
            </div>
        )
    }

    if (error || !property) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propiedad no encontrada</h2>
                <Button onClick={() => router.back()} variant="outline">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Volver
                </Button>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-start">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{property.title}</h1>
                    <div className="flex items-center text-gray-500 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{property.address}, {property.city}</span>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => router.back()} variant="outline">
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Volver
                    </Button>
                    <Button onClick={() => router.push(`/admin/propiedades/${id}/editar`)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Editar
                    </Button>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Main Image */}
                    <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-100">
                        {property.images && property.images.length > 0 ? (
                            <Image
                                src={property.images.find(img => img.is_main)?.image_url || property.images[0].image_url}
                                alt={property.title}
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">Sin imagen</div>
                        )}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-sm">
                            {property.operation_type === 'venta' ? 'Venta' : 'Alquiler'}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <span className="block text-2xl font-bold text-gray-900">{formatPrice(property.price)}</span>
                            <span className="text-xs text-gray-500 uppercase">Precio</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <span className="block text-xl font-bold text-gray-900">{property.area_built}m²</span>
                            <span className="text-xs text-gray-500 uppercase">Construcción</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <span className="block text-xl font-bold text-gray-900">{property.bedrooms || 0}</span>
                            <span className="text-xs text-gray-500 uppercase">Habitaciones</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <span className="block text-xl font-bold text-gray-900">{property.bathrooms || 0}</span>
                            <span className="text-xs text-gray-500 uppercase">Baños</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Descripción</h3>
                        <p className="text-gray-600 whitespace-pre-line">{property.description}</p>
                    </div>

                    {property.amenities && property.amenities.length > 0 && (
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Comodidades</h3>
                            <div className="flex flex-wrap gap-2">
                                {property.amenities.map(amenity => (
                                    <span key={amenity.id} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                        {amenity.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <h3 className="font-semibold text-gray-900 mb-4">Estado</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-gray-500">Estado</span>
                                <span className={`px-2 py-1 rounded text-xs font-semibold uppercase ${property.status === 'disponible' ? 'bg-green-100 text-green-800' :
                                        property.status === 'reservada' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                    }`}>
                                    {property.status}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Publicado</span>
                                <span className="text-gray-900 text-sm">
                                    {formatDistanceToNow(new Date(property.created_at), { addSuffix: true, locale: es })}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500">Vistas</span>
                                <span className="text-gray-900 font-medium">{property.views}</span>
                            </div>
                        </div>
                    </div>

                    {property.agent_name && (
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <h3 className="font-semibold text-gray-900 mb-4">Agente Responsable</h3>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center font-bold text-gray-600">
                                    {property.agent_name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900 text-sm">{property.agent_name}</p>
                                    <p className="text-xs text-gray-500">{property.agent_email}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
