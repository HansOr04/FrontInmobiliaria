import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type PropertyStatus = 'disponible' | 'vendida' | 'alquilada' | 'reservada';

interface PropertyStatusBadgeProps {
  status: PropertyStatus;
}

const statusConfig: Record<
  PropertyStatus,
  { label: string; className: string }
> = {
  disponible: {
    label: 'Disponible',
    className: 'bg-green-100 text-green-700 hover:bg-green-100',
  },
  vendida: {
    label: 'Vendida',
    className: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
  },
  alquilada: {
    label: 'Alquilada',
    className: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  },
  reservada: {
    label: 'Reservada',
    className: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
  },
};

export function PropertyStatusBadge({ status }: PropertyStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant="secondary" className={cn('font-medium', config.className)}>
      {config.label}
    </Badge>
  );
}
