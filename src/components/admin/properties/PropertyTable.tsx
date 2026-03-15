'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, Edit, Trash2, MoreVertical } from 'lucide-react';
import { PropertyStatusBadge } from './PropertyStatusBadge';
import { PropertyAdmin } from '@/types/admin';
import { formatPrice } from '@/lib/utils';
import { useCanEditProperty, useCanDeleteProperty } from '@/hooks/usePermissions';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface PropertyTableProps {
  properties: PropertyAdmin[];
  isLoading?: boolean;
}

export function PropertyTable({ properties, isLoading }: PropertyTableProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const canEdit = useCanEditProperty();
  const canDelete = useCanDeleteProperty();

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelected(properties.map((p) => p.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta propiedad?')) {
      // TODO: Implement delete API call
      console.log('Delete property:', id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-500">Cargando propiedades...</p>
      </div>
    );
  }

  if (properties.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-gray-500 mb-4">No se encontraron propiedades</p>
        <Link href="/admin/propiedades/nueva">
          <Button>Crear primera propiedad</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selected.length === properties.length}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="w-20">Imagen</TableHead>
            <TableHead>Título</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Operación</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Ciudad</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Vistas</TableHead>
            <TableHead className="w-16">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties.map((property) => (
            <TableRow key={property.id}>
              <TableCell>
                <Checkbox
                  checked={selected.includes(property.id)}
                  onCheckedChange={() => handleSelect(property.id)}
                />
              </TableCell>
              <TableCell>
                {property.main_image ? (
                  <Image
                    src={property.main_image}
                    alt={property.title}
                    width={60}
                    height={45}
                    className="rounded object-cover"
                  />
                ) : (
                  <div className="w-[60px] h-[45px] bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    Sin imagen
                  </div>
                )}
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-gray-900 line-clamp-1">
                    {property.title}
                  </p>
                  {property.neighborhood && (
                    <p className="text-sm text-gray-500">{property.neighborhood}</p>
                  )}
                  {property.featured && (
                    <Badge variant="secondary" className="mt-1 text-xs">
                      Destacada
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{property.property_type}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline">{property.operation_type}</Badge>
              </TableCell>
              <TableCell className="font-medium">
                {formatPrice(property.price)}
              </TableCell>
              <TableCell>{property.city}</TableCell>
              <TableCell>
                <PropertyStatusBadge status={property.status} />
              </TableCell>
              <TableCell>
                <span className="text-sm text-gray-600">{property.views || 0}</span>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link
                        href={`/admin/propiedades/${property.id}`}
                        className="flex items-center"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Ver detalle
                      </Link>
                    </DropdownMenuItem>
                    {canEdit && (
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/admin/propiedades/${property.id}/editar`}
                          className="flex items-center"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Editar
                        </Link>
                      </DropdownMenuItem>
                    )}
                    {canDelete && (
                      <DropdownMenuItem
                        onClick={() => handleDelete(property.id)}
                        className="text-red-600 focus:text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
