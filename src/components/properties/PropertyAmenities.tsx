import type { PropertyAmenity } from '@/types/property'
import { Check } from 'lucide-react'

interface PropertyAmenitiesProps {
    amenities: PropertyAmenity[]
}

export default function PropertyAmenities({ amenities }: PropertyAmenitiesProps) {
    if (!amenities || amenities.length === 0) return null

    // Group amenities by category if needed, or just list them
    // For now, we'll just list them all

    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Comodidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {amenities.map((amenity) => (
                    <div key={amenity.id} className="flex items-center text-gray-700">
                        <div className="flex-shrink-0 mr-2">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                <Check className="w-3 h-3 text-corporate-green" />
                            </div>
                        </div>
                        <span>{amenity.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
