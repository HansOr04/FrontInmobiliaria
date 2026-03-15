import Link from 'next/link';
import { Plus, Mail, Star, FileBarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { usePermissions } from '@/hooks/usePermissions';

const actions = [
  {
    title: 'Nueva Propiedad',
    description: 'Agregar una nueva propiedad al sistema',
    href: '/admin/propiedades/nueva',
    icon: Plus,
    permission: 'properties:create' as const,
    color: 'bg-corporate-purple hover:bg-corporate-purple/90',
  },
  {
    title: 'Ver Leads Pendientes',
    description: 'Revisar leads sin asignar',
    href: '/admin/leads?status=nuevo',
    icon: Mail,
    permission: 'leads:view_assigned' as const,
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    title: 'Aprobar Testimonios',
    description: 'Revisar testimonios pendientes',
    href: '/admin/testimonios/pendientes',
    icon: Star,
    permission: 'testimonials:approve' as const,
    color: 'bg-yellow-600 hover:bg-yellow-700',
  },
  {
    title: 'Ver Reportes',
    description: 'Consultar estadísticas y reportes',
    href: '/admin/reportes',
    icon: FileBarChart,
    permission: 'reports:view' as const,
    color: 'bg-green-600 hover:bg-green-700',
  },
];

export function QuickActions() {
  const permissions = usePermissions();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Acciones Rápidas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {actions.map((action) => {
            const [resource, actionName] = action.permission.split(':');
            const canAccess = permissions.canAccess(resource, actionName);

            if (!canAccess) return null;

            const Icon = action.icon;

            return (
              <Link key={action.href} href={action.href}>
                <Button
                  className={`w-full h-auto p-4 flex-col items-start gap-2 ${action.color} text-white`}
                  variant="default"
                >
                  <div className="flex items-center gap-2 w-full">
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{action.title}</span>
                  </div>
                  <p className="text-sm text-white/90 text-left">
                    {action.description}
                  </p>
                </Button>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
