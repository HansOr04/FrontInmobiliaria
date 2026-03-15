'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Phone, Mail, MessageSquare, Calendar, DollarSign, Building2, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { LeadStatusBadge } from '@/components/admin/leads/LeadStatusBadge';
import { LeadPriorityBadge } from '@/components/admin/leads/LeadPriorityBadge';
import { Lead } from '@/types/admin';
import { getWhatsAppLink, formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Mock data - replace with real API call
const mockLead: Lead = {
  id: '1',
  name: 'Juan Pérez',
  email: 'juan@email.com',
  phone: '0991234567',
  message: 'Estoy buscando un departamento de 2 habitaciones en el sector norte de Quito, preferiblemente cerca del parque La Carolina. Mi presupuesto es de alrededor de $80,000.',
  property_id: '123',
  property_title: 'Departamento en La Carolina - 2 habitaciones',
  status: 'nuevo',
  priority: 'alta',
  source: 'website',
  assigned_to: undefined,
  assigned_to_name: undefined,
  budget: 80000,
  notes: [
    {
      id: '1',
      lead_id: '1',
      user_id: '1',
      user_name: 'Ana García',
      content: 'Cliente muy interesado, agendar visita para esta semana',
      created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    },
  ],
  created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  updated_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
};

export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<Lead>(mockLead);
  const [newNote, setNewNote] = useState('');
  const [status, setStatus] = useState(lead.status);
  const [priority, setPriority] = useState(lead.priority);

  const handleAddNote = () => {
    if (!newNote.trim()) return;

    // TODO: API call to add note
    console.log('Adding note:', newNote);
    setNewNote('');
  };

  const handleUpdateStatus = (newStatus: string) => {
    setStatus(newStatus as typeof status);
    // TODO: API call to update status
    console.log('Updating status to:', newStatus);
  };

  const handleUpdatePriority = (newPriority: string) => {
    setPriority(newPriority as typeof priority);
    // TODO: API call to update priority
    console.log('Updating priority to:', newPriority);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Leads
        </Button>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Lead #{lead.id.slice(0, 8)}
            </h1>
            <p className="text-gray-600 mt-1">
              Creado{' '}
              {formatDistanceToNow(new Date(lead.created_at), {
                addSuffix: true,
                locale: es,
              })}
            </p>
          </div>
          <div className="flex gap-2">
            <LeadStatusBadge status={status} />
            <LeadPriorityBadge priority={priority} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Nombre</p>
                  <p className="font-medium">{lead.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${lead.email}`}
                    className="font-medium text-corporate-purple hover:underline"
                  >
                    {lead.email}
                  </a>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${lead.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar email
                  </a>
                </Button>
              </div>

              {lead.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Teléfono</p>
                    <a
                      href={`tel:${lead.phone}`}
                      className="font-medium text-corporate-purple hover:underline"
                    >
                      {lead.phone}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={`tel:${lead.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Llamar
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="text-green-600" asChild>
                      <a
                        href={getWhatsAppLink(lead.phone, `Hola ${lead.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Fuente</p>
                  <Badge variant="outline">{lead.source}</Badge>
                </div>
              </div>

              {lead.budget && (
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Presupuesto</p>
                    <p className="font-medium">{formatPrice(lead.budget)}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Message */}
          <Card>
            <CardHeader>
              <CardTitle>Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 whitespace-pre-wrap">{lead.message}</p>
            </CardContent>
          </Card>

          {/* Property Interest */}
          {lead.property_id && (
            <Card>
              <CardHeader>
                <CardTitle>Propiedad de Interés</CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href={`/admin/propiedades/${lead.property_id}`}
                  className="flex items-center gap-3 p-4 border rounded-lg hover:border-corporate-purple hover:bg-purple-50 transition-colors"
                >
                  <Building2 className="w-10 h-10 text-corporate-purple" />
                  <div className="flex-1">
                    <p className="font-medium text-corporate-purple">
                      {lead.property_title}
                    </p>
                    <p className="text-sm text-gray-500">Ver detalles de la propiedad</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          )}

          {/* Notes */}
          <Card>
            <CardHeader>
              <CardTitle>Notas Internas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {lead.notes && lead.notes.length > 0 ? (
                <div className="space-y-3">
                  {lead.notes.map((note) => (
                    <div key={note.id} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-medium text-sm">{note.user_name}</p>
                        <span className="text-xs text-gray-400">•</span>
                        <p className="text-xs text-gray-500">
                          {formatDistanceToNow(new Date(note.created_at), {
                            addSuffix: true,
                            locale: es,
                          })}
                        </p>
                      </div>
                      <p className="text-sm text-gray-700">{note.content}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500">No hay notas aún</p>
              )}

              <div className="pt-4 border-t space-y-3">
                <Label htmlFor="note">Agregar nota</Label>
                <Textarea
                  id="note"
                  placeholder="Escribe una nota interna sobre este lead..."
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  rows={3}
                />
                <Button onClick={handleAddNote} disabled={!newNote.trim()}>
                  Agregar Nota
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Status & Management */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estado y Gestión</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="status">Estado</Label>
                <Select value={status} onValueChange={handleUpdateStatus}>
                  <SelectTrigger id="status" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nuevo">Nuevo</SelectItem>
                    <SelectItem value="contactado">Contactado</SelectItem>
                    <SelectItem value="calificado">Calificado</SelectItem>
                    <SelectItem value="visita_agendada">Visita Agendada</SelectItem>
                    <SelectItem value="negociacion">En Negociación</SelectItem>
                    <SelectItem value="convertido">Convertido</SelectItem>
                    <SelectItem value="descartado">Descartado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="priority">Prioridad</Label>
                <Select value={priority} onValueChange={handleUpdatePriority}>
                  <SelectTrigger id="priority" className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baja">Baja</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Asignado a</Label>
                <div className="mt-2">
                  {lead.assigned_to_name ? (
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="font-medium">{lead.assigned_to_name}</span>
                      <Button variant="ghost" size="sm">
                        Reasignar
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" className="w-full">
                      Asignar a agente
                    </Button>
                  )}
                </div>
              </div>

              <Button className="w-full bg-corporate-purple hover:bg-corporate-purple/90">
                Guardar Cambios
              </Button>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Historial</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Lead creado</p>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(lead.created_at), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </p>
                  </div>
                </div>
                {lead.updated_at !== lead.created_at && (
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Última actualización</p>
                      <p className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(lead.updated_at), {
                          addSuffix: true,
                          locale: es,
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
