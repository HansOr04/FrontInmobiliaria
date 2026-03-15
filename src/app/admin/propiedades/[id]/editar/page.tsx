'use client';

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PropertyForm } from '@/components/admin/properties/PropertyForm';
import { usePropertyById } from '@/hooks/useProperties';
import api from '@/lib/api';

interface EditPropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function EditPropertyPage({ params }: EditPropertyPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const { data: property, isLoading, error } = usePropertyById(id);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      await api.put(`/properties/${id}`, data);
      router.push('/admin/propiedades');
    } catch (error) {
      console.error('Error updating property:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error || !property) {
    return <div>Error al cargar la propiedad</div>;
  }

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
          Volver a Propiedades
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Editar Propiedad</h1>
        <p className="text-gray-600 mt-1">
          Modifica la información de la propiedad
        </p>
      </div>

      <PropertyForm 
        initialData={property} 
        onSubmit={handleSubmit} 
        isSubmitting={isSubmitting} 
      />
    </div>
  );
}
