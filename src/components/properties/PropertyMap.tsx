import { MapPin } from 'lucide-react'

interface PropertyMapProps {
    address: string
    city: string
    latitude?: number
    longitude?: number
}

export default function PropertyMap({ address, city, latitude, longitude }: PropertyMapProps) {
    // If we have precise coordinates, we could use them with a mapping library.
    // For now, we'll use a Google Maps query based on address + city if coordinates are missing,
    // or coordinates if present.

    const query = latitude && longitude
        ? `${latitude},${longitude}`
        : `${address}, ${city}`

    const encodedQuery = encodeURIComponent(query)
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodedQuery}`

    // Since we might not have an API key configured in env yet, 
    // we'll use a simple link to Google Maps for now to be safe and free.
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`

    return (
        <div className="bg-gray-50 rounded-lg p-4 h-64 flex flex-col items-center justify-center text-center">
            <MapPin className="w-10 h-10 text-corporate-gray-medium mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
            <p className="text-gray-600 mb-4">{address}, {city}</p>

            <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-corporate-blue hover:underline font-medium"
            >
                Ver en Google Maps
            </a>

            {/* 
        TODO: detailed map implementation 
        If a map library is added (e.g. valid react-leaflet setup), implement it here.
      */}
        </div>
    )
}
