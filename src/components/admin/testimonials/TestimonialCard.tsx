import { Star, Check, X, Edit, CheckCircle } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Testimonial } from '@/types/admin';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function TestimonialCard({
  testimonial,
  onApprove,
  onReject,
  onEdit,
}: TestimonialCardProps) {
  const getStatusBadge = () => {
    switch (testimonial.status) {
      case 'aprobado':
        return (
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            Aprobado
          </Badge>
        );
      case 'rechazado':
        return (
          <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
            Rechazado
          </Badge>
        );
      default:
        return (
          <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">
            Pendiente
          </Badge>
        );
    }
  };

  return (
    <Card className={testimonial.status === 'pendiente' ? 'border-yellow-200 bg-yellow-50/30' : ''}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < testimonial.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          {getStatusBadge()}
        </div>

        <blockquote className="text-lg mb-4 text-gray-700">
          "{testimonial.content}"
        </blockquote>

        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <strong>Nombre:</strong> {testimonial.name}
            {testimonial.show_name && (
              <span title="Autoriza mostrar nombre">
                <CheckCircle className="w-4 h-4 text-green-600" />
              </span>
            )}
          </div>
          <div>
            <strong>Email:</strong> {testimonial.email}
          </div>
          {testimonial.service_type && (
            <div>
              <strong>Servicio:</strong> {testimonial.service_type}
            </div>
          )}
          {testimonial.property_title && (
            <div>
              <strong>Propiedad:</strong> {testimonial.property_title}
            </div>
          )}
          <div>
            <strong>Fecha:</strong>{' '}
            {formatDistanceToNow(new Date(testimonial.created_at), {
              addSuffix: true,
              locale: es,
            })}
          </div>
        </div>

        {testimonial.rejection_reason && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
            <p className="text-sm font-medium text-red-900 mb-1">
              Motivo del rechazo:
            </p>
            <p className="text-sm text-red-700">{testimonial.rejection_reason}</p>
          </div>
        )}

        {testimonial.status === 'pendiente' && (
          <div className="flex gap-2">
            <Button
              onClick={() => onApprove?.(testimonial.id)}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              <Check className="w-4 h-4 mr-2" />
              Aprobar
            </Button>
            <Button
              onClick={() => onReject?.(testimonial.id)}
              variant="outline"
              className="flex-1 text-red-600 hover:bg-red-50"
            >
              <X className="w-4 h-4 mr-2" />
              Rechazar
            </Button>
            <Button
              onClick={() => onEdit?.(testimonial.id)}
              variant="ghost"
            >
              <Edit className="w-4 h-4" />
            </Button>
          </div>
        )}

        {testimonial.status === 'aprobado' && testimonial.reviewed_by && (
          <p className="text-xs text-gray-500 mt-4">
            Aprobado por {testimonial.reviewed_by}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
