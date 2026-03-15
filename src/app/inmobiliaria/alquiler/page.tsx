'use client'

import { useState } from 'react'
import { useProperties } from '@/hooks/useProperties'
import { useFilters } from '@/hooks/useFilters'
import PropertyCard from '@/components/properties/PropertyCard'
import PropertyFilters from '@/components/properties/PropertyFilters'
import { Button } from '@/components/ui/button'
import { Grid3x3, List } from 'lucide-react'

export default function AlquilerPage() {
  const [page, setPage] = useState(1)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState<string>('created_at')

  const { filters, updateFilters, resetFilters, applyFilters } = useFilters({
    operation_type: 'alquiler',
  })

  const { data, isLoading, error } = useProperties(
    { ...filters, sort_by: sortBy as any },
    page
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-corporate-green text-white py-12">
        <div className="container-custom">
          <h1 className="heading-2 mb-4">PROPIEDADES EN ALQUILER</h1>
          <p className="text-lg">Encuentra el lugar perfecto para ti</p>
        </div>
      </div>

      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <PropertyFilters
              filters={filters}
              onFiltersChange={updateFilters}
              onApply={applyFilters}
              onReset={resetFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="text-sm text-corporate-gray-medium">
                {data && (
                  <span>
                    Mostrando {data.properties.length} de {data.total} propiedades
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="date_desc">Más Recientes</option>
                  <option value="price_asc">Precio: Menor a Mayor</option>
                  <option value="price_desc">Precio: Mayor a Menor</option>
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid'
                      ? 'bg-corporate-green text-white'
                      : 'bg-gray-100'
                      }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list'
                      ? 'bg-corporate-green text-white'
                      : 'bg-gray-100'
                      }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="skeleton h-96 rounded-lg" />
                ))}
              </div>
            ) : error || !data || data.properties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-corporate-gray-medium">
                  No se encontraron propiedades
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {data.properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>

                {data.total_pages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <Button
                      onClick={() => setPage(Math.max(1, page - 1))}
                      disabled={page === 1}
                      variant="outline"
                    >
                      Anterior
                    </Button>
                    <span className="px-4">
                      Página {page} de {data.total_pages}
                    </span>
                    <Button
                      onClick={() => setPage(page + 1)}
                      disabled={page === data.total_pages}
                      variant="outline"
                    >
                      Siguiente
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
