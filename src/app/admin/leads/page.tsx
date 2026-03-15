'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { LeadTable } from '@/components/admin/leads/LeadTable';
import { AssignLeadDialog } from '@/components/admin/leads/AssignLeadDialog';
import { Lead, LeadStatus, LeadPriority } from '@/types/admin';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Mock data - replace with real API call
const mockLeads: Lead[] = [
  {
    id: '1',
    name: 'Juan Pérez',
    email: 'juan@email.com',
    phone: '0991234567',
    message: 'Interesado en departamento de 2 habitaciones',
    property_id: '123',
    property_title: 'Departamento en La Carolina',
    status: 'nuevo',
    priority: 'alta',
    source: 'website',
    assigned_to: undefined,
    assigned_to_name: undefined,
    budget: 80000,
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: '2',
    name: 'María González',
    email: 'maria@email.com',
    phone: '0987654321',
    message: 'Busco casa en Cumbayá',
    status: 'contactado',
    priority: 'media',
    source: 'facebook',
    assigned_to: '1',
    assigned_to_name: 'Ana García',
    budget: 150000,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: '3',
    name: 'Carlos Rodríguez',
    email: 'carlos@email.com',
    phone: '0998765432',
    message: 'Interesado en terreno para construcción',
    property_id: '456',
    property_title: 'Terreno en Tumbaco',
    status: 'calificado',
    priority: 'urgente',
    source: 'whatsapp',
    assigned_to: '2',
    assigned_to_name: 'Carlos Méndez',
    budget: 50000,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
];

export default function LeadsPage() {
  const [leads] = useState<Lead[]>(mockLeads);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    source: '',
    search: '',
  });
  const [assignDialogOpen, setAssignDialogOpen] = useState<string | null>(null);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleAssign = (leadId: string, userId: string) => {
    console.log('Assign lead', leadId, 'to user', userId);
    // TODO: Implement API call
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    if (filters.status && lead.status !== filters.status) return false;
    if (filters.priority && lead.priority !== filters.priority) return false;
    if (filters.source && lead.source !== filters.source) return false;
    if (
      filters.search &&
      !lead.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !lead.email.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const newLeadsCount = leads.filter((l) => l.status === 'nuevo').length;
  const unassignedCount = leads.filter((l) => !l.assigned_to).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-1">
            Gestiona todos los contactos y consultas
          </p>
        </div>
        <div className="flex gap-3">
          <Badge variant="secondary" className="h-8 px-4">
            {newLeadsCount} nuevos
          </Badge>
          <Badge variant="outline" className="h-8 px-4">
            {unassignedCount} sin asignar
          </Badge>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg border space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Buscar por nombre o email..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="pl-10"
            />
          </div>

          <Select
            value={filters.status}
            onValueChange={(value) => handleFilterChange('status', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todos los estados</SelectItem>
              <SelectItem value="nuevo">Nuevo</SelectItem>
              <SelectItem value="contactado">Contactado</SelectItem>
              <SelectItem value="calificado">Calificado</SelectItem>
              <SelectItem value="visita_agendada">Visita Agendada</SelectItem>
              <SelectItem value="negociacion">En Negociación</SelectItem>
              <SelectItem value="convertido">Convertido</SelectItem>
              <SelectItem value="descartado">Descartado</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.priority}
            onValueChange={(value) => handleFilterChange('priority', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Prioridad" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas las prioridades</SelectItem>
              <SelectItem value="baja">Baja</SelectItem>
              <SelectItem value="media">Media</SelectItem>
              <SelectItem value="alta">Alta</SelectItem>
              <SelectItem value="urgente">Urgente</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={filters.source}
            onValueChange={(value) => handleFilterChange('source', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Fuente" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas las fuentes</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="referral">Referido</SelectItem>
              <SelectItem value="other">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-sm text-gray-600">
          Mostrando {filteredLeads.length} de {leads.length} leads
        </div>
      </div>

      {/* Table */}
      <LeadTable
        leads={filteredLeads}
        onAssign={(leadId) => setAssignDialogOpen(leadId)}
      />

      {/* Assign Dialog */}
      {assignDialogOpen && (
        <AssignLeadDialog
          leadId={assignDialogOpen}
          onAssign={handleAssign}
          trigger={<div />}
        />
      )}
    </div>
  );
}
