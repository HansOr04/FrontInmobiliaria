'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Search } from 'lucide-react';
import { PropertyTable } from '@/components/admin/properties/PropertyTable';
import { useProperties } from '@/hooks/useProperties';
import { useCanEditProperty } from '@/hooks/usePermissions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function PropertiesPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    property_type: '',
    operation_type: '',
    status: '',
    search: '',
  });

  const canCreate = useCanEditProperty();

  // Use the existing properties hook
  const { data, isLoading } = useProperties(
    {
      property_type: filters.property_type && filters.property_type !== 'ALL' ? (filters.property_type as any) : undefined,
      operation_type: filters.operation_type && filters.operation_type !== 'ALL' ? (filters.operation_type as 'venta' | 'alquiler') : undefined,
      status: filters.status && filters.status !== 'ALL' ? filters.status : undefined,
      search: filters.search || undefined,
      page,
      limit: 20,
    } as any,
    page
  );

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1); // Reset to first page when filtering
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Propiedades</h1>
          <p className="text-gray-600 mt-1">
            Gestiona todas las propiedades del sistema
          </p>
        </div>
        {canCreate && (
          <Link href="/admin/propiedades/nueva">
            <Button className="bg-corporate-purple hover:bg-corporate-purple/90">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Propiedad
            </Button>
          </Link>
        )}
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Buscar propiedades..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>

          <Select
            value={filters.property_type}
            onValueChange={(value) => handleFilterChange('property_type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Tipo de propiedad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todos los tipos</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="departamento">Departamento</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
              <SelectItem value="oficina">Oficina</SelectItem>
              <SelectItem value="local_comercial">Local Comercial</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.operation_type}
            onValueChange={(value) => handleFilterChange('operation_type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Operación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todas las operaciones</SelectItem>
              <SelectItem value="venta">Venta</SelectItem>
              <SelectItem value="alquiler">Alquiler</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.status}
            onValueChange={(value) => handleFilterChange('status', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ALL">Todos los estados</SelectItem>
              <SelectItem value="disponible">Disponible</SelectItem>
              <SelectItem value="vendida">Vendida</SelectItem>
              <SelectItem value="alquilada">Alquilada</SelectItem>
              <SelectItem value="reservada">Reservada</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {data && (
          <div className="text-sm text-gray-600">
            Mostrando {data.properties.length} de {data.total} propiedades
          </div>
        )}
      </div>

      {/* Table */}
      <PropertyTable
        properties={
          data?.properties.map((p) => ({
            id: p.id,
            title: p.title,
            slug: p.slug,
            property_type: p.property_type,
            operation_type: p.operation_type,
            status: p.status as 'disponible' | 'vendida' | 'alquilada' | 'reservada',
            price: p.price,
            city: p.city,
            neighborhood: p.neighborhood,
            bedrooms: p.bedrooms,
            bathrooms: p.bathrooms,
            area_built: p.area_built,
            main_image: p.main_image,
            featured: p.featured,
            published: true,
            views: p.views || 0,
            created_at: p.created_at,
            updated_at: p.updated_at,
          })) || []
        }
        isLoading={isLoading}
      />

      {/* Pagination */}
      {data && data.total_pages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Página {data.page} de {data.total_pages}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Anterior
            </Button>
            <Button
              variant="outline"
              onClick={() => setPage((p) => p + 1)}
              disabled={page === data.total_pages}
            >
              Siguiente
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
