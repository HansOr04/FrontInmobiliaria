'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star, Filter } from 'lucide-react';
import { TestimonialCard } from '@/components/admin/testimonials/TestimonialCard';
import { RejectDialog } from '@/components/admin/testimonials/RejectDialog';
import { Testimonial, TestimonialStatus } from '@/types/admin';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Mock data
const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    email: 'maria@email.com',
    rating: 5,
    content: 'Excelente servicio, encontré el departamento perfecto para mi familia. El equipo de Ortiz Idrovo fue muy profesional y atento durante todo el proceso.',
    service_type: 'Venta',
    property_id: '123',
    property_title: 'Departamento en La Carolina',
    show_name: true,
    status: 'pendiente',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: '2',
    name: 'Carlos Rodríguez',
    email: 'carlos@email.com',
    rating: 4,
    content: 'Muy buena atención y asesoría. Recomendado.',
    service_type: 'Alquiler',
    show_name: false,
    status: 'aprobado',
    reviewed_by: 'Admin',
    reviewed_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: '3',
    name: 'Ana Pérez',
    email: 'ana@email.com',
    rating: 2,
    content: 'Servicio regular, esperaba más.',
    status: 'rechazado',
    show_name: true,
    rejection_reason: 'Testimonio muy breve y poco constructivo',
    reviewed_by: 'Admin',
    reviewed_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    updated_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
  },
];

export default function TestimonialsPage() {
  const [testimonials] = useState<Testimonial[]>(mockTestimonials);
  const [activeTab, setActiveTab] = useState<'all' | TestimonialStatus>('all');
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const [rejectDialogOpen, setRejectDialogOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(null);

  const handleApprove = (id: string) => {
    console.log('Approve testimonial:', id);
    // TODO: API call to approve
  };

  const handleReject = (id: string) => {
    setSelectedTestimonial(id);
    setRejectDialogOpen(true);
  };

  const handleConfirmReject = (reason: string) => {
    if (selectedTestimonial) {
      console.log('Reject testimonial:', selectedTestimonial, 'Reason:', reason);
      // TODO: API call to reject
    }
  };

  const handleEdit = (id: string) => {
    console.log('Edit testimonial:', id);
    // TODO: Navigate to edit page or open dialog
  };

  // Filter testimonials
  const filteredTestimonials = testimonials.filter((t) => {
    if (activeTab !== 'all' && t.status !== activeTab) return false;
    if (ratingFilter !== 'all' && t.rating !== parseInt(ratingFilter)) return false;
    return true;
  });

  const pendingCount = testimonials.filter((t) => t.status === 'pendiente').length;
  const approvedCount = testimonials.filter((t) => t.status === 'aprobado').length;
  const rejectedCount = testimonials.filter((t) => t.status === 'rechazado').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Testimonios</h1>
          <p className="text-gray-600 mt-1">
            Gestiona las reseñas y testimonios de clientes
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="h-8 px-4">
            <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
            {pendingCount} pendientes
          </Badge>
        </div>
      </div>

      {/* Tabs and Filters */}
      <div className="bg-white p-4 rounded-lg border space-y-4">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">
                Todos ({testimonials.length})
              </TabsTrigger>
              <TabsTrigger value="pendiente">
                Pendientes ({pendingCount})
              </TabsTrigger>
              <TabsTrigger value="aprobado">
                Aprobados ({approvedCount})
              </TabsTrigger>
              <TabsTrigger value="rechazado">
                Rechazados ({rejectedCount})
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los ratings</SelectItem>
                  <SelectItem value="5">5 estrellas</SelectItem>
                  <SelectItem value="4">4 estrellas</SelectItem>
                  <SelectItem value="3">3 estrellas</SelectItem>
                  <SelectItem value="2">2 estrellas</SelectItem>
                  <SelectItem value="1">1 estrella</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value={activeTab} className="mt-6">
            {filteredTestimonials.length === 0 ? (
              <div className="text-center py-12">
                <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No hay testimonios en esta categoría</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    onEdit={handleEdit}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Quick Link to Pending */}
      {pendingCount > 0 && activeTab !== 'pendiente' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="font-medium text-yellow-900">
              Tienes {pendingCount} testimonio{pendingCount > 1 ? 's' : ''} pendiente
              {pendingCount > 1 ? 's' : ''} de aprobación
            </p>
            <p className="text-sm text-yellow-700">
              Revisa y aprueba los testimonios para que aparezcan en el sitio web
            </p>
          </div>
          <Button
            onClick={() => setActiveTab('pendiente')}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            Ver Pendientes
          </Button>
        </div>
      )}

      {/* Reject Dialog */}
      <RejectDialog
        isOpen={rejectDialogOpen}
        onClose={() => {
          setRejectDialogOpen(false);
          setSelectedTestimonial(null);
        }}
        onConfirm={handleConfirmReject}
        testimonialId={selectedTestimonial || ''}
      />
    </div>
  );
}
