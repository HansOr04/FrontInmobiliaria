'use client'

import { useProperty } from '@/hooks/useProperties'
import PropertyGallery from './PropertyGallery'
import PropertyInfo from './PropertyInfo'
import PropertyAmenities from './PropertyAmenities'
import PropertyMap from './PropertyMap'
import ContactAgentForm from './ContactAgentForm'
import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface PropertyDetailsClientProps {
    slug: string
}

export default function PropertyDetailsClient({ slug }: PropertyDetailsClientProps) {
    const { data: property, isLoading, error } = useProperty(slug)
    const router = useRouter()

    if (isLoading) {
        return (
            <div className="container-custom py-12">
                <div className="animate-pulse space-y-8">
                    <div className="h-96 bg-gray-200 rounded-lg"></div>
                    <div className="h-10 w-1/2 bg-gray-200 rounded"></div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 bg-gray-200 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (error || !property) {
        return (
            <div className="container-custom py-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Propiedad no encontrada</h2>
                <Button onClick={() => router.back()} variant="outline">
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Volver
                </Button>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white pb-12">
            {/* Breadcrumb / Back */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="container-custom py-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-sm text-gray-600 hover:text-corporate-blue transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Volver a resultados
                    </button>
                </div>
            </div>

            <div className="container-custom py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <PropertyGallery images={property.images} title={property.title} />
                        <PropertyInfo property={property} />

                        <div className="border-t border-gray-100 pt-8">
                            <PropertyAmenities amenities={property.amenities} />
                        </div>

                        <div className="border-t border-gray-100 pt-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ubicación</h3>
                            <PropertyMap
                                address={property.address}
                                city={property.city}
                                latitude={property.latitude}
                                longitude={property.longitude}
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24">
                            <ContactAgentForm propertyId={property.id} propertyTitle={property.title} />

                            {/* Agent Info Card could go here */}
                            {property.agent_name && (
                                <div className="mt-6 bg-gray-50 p-6 rounded-lg border border-gray-100">
                                    <h4 className="font-semibold text-gray-900 mb-2">Agente Inmobiliario</h4>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-3 overflow-hidden">
                                            {property.agent_photo ? (
                                                <img src={property.agent_photo} alt={property.agent_name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-corporate-blue text-white font-bold">
                                                    {property.agent_name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">{property.agent_name}</p>
                                            <p className="text-sm text-gray-500">{property.agent_email}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
