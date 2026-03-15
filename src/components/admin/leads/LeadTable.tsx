'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Eye, UserPlus, Phone, Mail as MailIcon } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { LeadStatusBadge } from './LeadStatusBadge';
import { LeadPriorityBadge } from './LeadPriorityBadge';
import { Lead } from '@/types/admin';
import { getWhatsAppLink } from '@/lib/utils';
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
import { Badge } from '@/components/ui/badge';

interface LeadTableProps {
  leads: Lead[];
  isLoading?: boolean;
  onAssign?: (leadId: string) => void;
}

export function LeadTable({ leads, isLoading, onAssign }: LeadTableProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelected(leads.map((l) => l.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-500">Cargando leads...</p>
      </div>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-gray-500 mb-4">No se encontraron leads</p>
      </div>
    );
  }

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox
                checked={selected.length === leads.length}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
            </TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Contacto</TableHead>
            <TableHead>Propiedad</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Prioridad</TableHead>
            <TableHead>Asignado a</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead className="w-32">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>
                <Checkbox
                  checked={selected.includes(lead.id)}
                  onChange={() => handleSelect(lead.id)}
                />
              </TableCell>
              <TableCell>
                <div>
                  <p className="font-medium text-gray-900">{lead.name}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {lead.source}
                  </Badge>
                </div>
              </TableCell>
              <TableCell>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MailIcon className="w-3 h-3" />
                    <a
                      href={`mailto:${lead.email}`}
                      className="hover:text-corporate-purple hover:underline"
                    >
                      {lead.email}
                    </a>
                  </div>
                  {lead.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-3 h-3" />
                      <a
                        href={`tel:${lead.phone}`}
                        className="hover:text-corporate-purple"
                      >
                        {lead.phone}
                      </a>
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {lead.property_title ? (
                  <Link
                    href={`/admin/propiedades/${lead.property_id}`}
                    className="text-sm text-corporate-purple hover:underline line-clamp-2"
                  >
                    {lead.property_title}
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">Sin propiedad</span>
                )}
              </TableCell>
              <TableCell>
                <LeadStatusBadge status={lead.status} />
              </TableCell>
              <TableCell>
                <LeadPriorityBadge priority={lead.priority} />
              </TableCell>
              <TableCell>
                {lead.assigned_to_name ? (
                  <span className="text-sm text-gray-700">
                    {lead.assigned_to_name}
                  </span>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onAssign?.(lead.id)}
                  >
                    <UserPlus className="w-3 h-3 mr-1" />
                    Asignar
                  </Button>
                )}
              </TableCell>
              <TableCell>
                <span className="text-sm text-gray-600">
                  {formatDistanceToNow(new Date(lead.created_at), {
                    addSuffix: true,
                    locale: es,
                  })}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link href={`/admin/leads/${lead.id}`}>
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </Link>
                  {lead.phone && (
                    <a
                      href={getWhatsAppLink(lead.phone, `Hola ${lead.name}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm" className="text-green-600">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
