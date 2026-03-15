import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LeadStatus } from '@/types/admin';

interface LeadStatusBadgeProps {
  status: LeadStatus;
}

const statusConfig: Record<
  LeadStatus,
  { label: string; className: string }
> = {
  nuevo: {
    label: 'Nuevo',
    className: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
  },
  contactado: {
    label: 'Contactado',
    className: 'bg-purple-100 text-purple-700 hover:bg-purple-100',
  },
  calificado: {
    label: 'Calificado',
    className: 'bg-cyan-100 text-cyan-700 hover:bg-cyan-100',
  },
  visita_agendada: {
    label: 'Visita Agendada',
    className: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
  },
  negociacion: {
    label: 'En Negociación',
    className: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
  },
  convertido: {
    label: 'Convertido',
    className: 'bg-green-100 text-green-700 hover:bg-green-100',
  },
  descartado: {
    label: 'Descartado',
    className: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
  },
};

export function LeadStatusBadge({ status }: LeadStatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <Badge variant="secondary" className={cn('font-medium', config.className)}>
      {config.label}
    </Badge>
  );
}
