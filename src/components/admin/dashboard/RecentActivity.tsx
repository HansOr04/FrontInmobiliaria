'use client';

import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Building2, Mail, Star, GraduationCap, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface Activity {
  id: string;
  type: 'property' | 'lead' | 'testimonial' | 'course' | 'user';
  action: string;
  title: string;
  description?: string;
  user_name: string;
  created_at: string;
  link?: string;
}

// Mock data - replace with real API data
const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'property',
    action: 'created',
    title: 'Nueva propiedad',
    description: 'Departamento en La Carolina',
    user_name: 'Ana García',
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    link: '/admin/propiedades/123',
  },
  {
    id: '2',
    type: 'lead',
    action: 'created',
    title: 'Nuevo lead',
    description: 'Juan Pérez - Interesado en departamento',
    user_name: 'Sistema',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    link: '/admin/leads/456',
  },
  {
    id: '3',
    type: 'testimonial',
    action: 'approved',
    title: 'Testimonio aprobado',
    description: 'María González - 5 estrellas',
    user_name: 'Admin',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    link: '/admin/testimonios/789',
  },
  {
    id: '4',
    type: 'course',
    action: 'created',
    title: 'Nuevo curso',
    description: 'NIIF para PYMES - Febrero 2024',
    user_name: 'Admin',
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    link: '/admin/cursos/101',
  },
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'property':
      return Building2;
    case 'lead':
      return Mail;
    case 'testimonial':
      return Star;
    case 'course':
      return GraduationCap;
    case 'user':
      return UserPlus;
    default:
      return Building2;
  }
};

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'property':
      return 'bg-purple-100 text-corporate-purple';
    case 'lead':
      return 'bg-blue-100 text-blue-600';
    case 'testimonial':
      return 'bg-yellow-100 text-yellow-600';
    case 'course':
      return 'bg-green-100 text-green-600';
    case 'user':
      return 'bg-gray-100 text-gray-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad Reciente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockActivities.map((activity) => {
            const Icon = getActivityIcon(activity.type);
            const colorClass = getActivityColor(activity.type);

            return (
              <Link
                key={activity.id}
                href={activity.link || '#'}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Avatar className={cn('w-10 h-10', colorClass)}>
                  <AvatarFallback className={colorClass}>
                    <Icon className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  {activity.description && (
                    <p className="text-sm text-gray-600 truncate">
                      {activity.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-xs text-gray-500">{activity.user_name}</p>
                    <span className="text-xs text-gray-400">•</span>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(activity.created_at), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <Link
          href="/admin/actividad"
          className="block text-center text-sm text-corporate-purple hover:text-corporate-purple/80 font-medium mt-4 pt-4 border-t"
        >
          Ver toda la actividad →
        </Link>
      </CardContent>
    </Card>
  );
}
