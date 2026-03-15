import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LeadPriority } from '@/types/admin';
import { AlertCircle } from 'lucide-react';

interface LeadPriorityBadgeProps {
  priority: LeadPriority;
}

const priorityConfig: Record<
  LeadPriority,
  { label: string; className: string; icon?: boolean }
> = {
  baja: {
    label: 'Baja',
    className: 'bg-gray-100 text-gray-600 hover:bg-gray-100',
  },
  media: {
    label: 'Media',
    className: 'bg-blue-100 text-blue-600 hover:bg-blue-100',
  },
  alta: {
    label: 'Alta',
    className: 'bg-orange-100 text-orange-600 hover:bg-orange-100',
    icon: true,
  },
  urgente: {
    label: 'Urgente',
    className: 'bg-red-100 text-red-600 hover:bg-red-100',
    icon: true,
  },
};

export function LeadPriorityBadge({ priority }: LeadPriorityBadgeProps) {
  const config = priorityConfig[priority];

  return (
    <Badge variant="secondary" className={cn('font-medium', config.className)}>
      {config.icon && <AlertCircle className="w-3 h-3 mr-1" />}
      {config.label}
    </Badge>
  );
}
