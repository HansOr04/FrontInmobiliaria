'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PropertyForm } from '@/components/admin/properties/PropertyForm';

export default function NewPropertyPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to create property
      console.log('Creating property...', data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/admin/propiedades');
    } catch (error) {
      console.error('Error creating property:', error);
    } finally {
      setIsSubmitting(false);
    }
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
          Volver a Propiedades
        </Button>
        <h1 className="text-3xl font-bold text-gray-900">Nueva Propiedad</h1>
        <p className="text-gray-600 mt-1">
          Completa la información de la nueva propiedad
        </p>
      </div>

      <PropertyForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />

      {/* Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Nota:</strong> Esta es una versión básica del formulario.
          Las imágenes y características avanzadas se pueden agregar después de crear la propiedad.
        </p>
      </div>
    </div>
  );
}

