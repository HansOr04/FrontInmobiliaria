import { formatPrice } from '@/lib/utils'
import type { Property } from '@/types/property'
import { BedDouble, Bath, Car, Maximize, MapPin, Calendar } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'

interface PropertyInfoProps {
    property: Property
}

export default function PropertyInfo({ property }: PropertyInfoProps) {
    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                        <div className="flex items-center text-corporate-gray-medium mt-2">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>
                                {property.address}, {property.city}
                            </span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-corporate-green">
                            {formatPrice(property.price)}
                        </p>
                        {property.maintenance_fee && (
                            <p className="text-sm text-gray-500">
                                + {formatPrice(property.maintenance_fee)} alícuota
                            </p>
                        )}
                        <div className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gray-100 text-gray-600">
                            {property.operation_type}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100">
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Maximize className="w-6 h-6 text-corporate-blue mb-2" />
                    <span className="text-2xl font-semibold">{property.area_built}m²</span>
                    <span className="text-xs text-gray-500 uppercase">Construcción</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <BedDouble className="w-6 h-6 text-corporate-blue mb-2" />
                    <span className="text-2xl font-semibold">{property.bedrooms || 0}</span>
                    <span className="text-xs text-gray-500 uppercase">Habitaciones</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Bath className="w-6 h-6 text-corporate-blue mb-2" />
                    <span className="text-2xl font-semibold">{property.bathrooms || 0}</span>
                    <span className="text-xs text-gray-500 uppercase">Baños</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg">
                    <Car className="w-6 h-6 text-corporate-blue mb-2" />
                    <span className="text-2xl font-semibold">{property.parking_spaces || 0}</span>
                    <span className="text-xs text-gray-500 uppercase">Garajes</span>
                </div>
            </div>

            <div className="prose max-w-none text-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
                <p className="whitespace-pre-line">{property.description}</p>
            </div>

            <div className="flex items-center text-sm text-gray-500 pt-4">
                <Calendar className="w-4 h-4 mr-2" />
                Publicado {formatDistanceToNow(new Date(property.created_at), { addSuffix: true, locale: es })}
            </div>
        </div>
    )
}
