'use client';

import { useState } from 'react';
import { Bell } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock notifications - replace with real data from API
const mockNotifications = [
  {
    id: '1',
    type: 'info' as const,
    title: 'Nuevo lead',
    message: 'Juan Pérez ha consultado sobre una propiedad',
    read: false,
    created_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 min ago
    link: '/admin/leads/1',
  },
  {
    id: '2',
    type: 'success' as const,
    title: 'Propiedad publicada',
    message: 'Departamento en La Carolina fue publicado exitosamente',
    read: false,
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 min ago
    link: '/admin/propiedades/123',
  },
  {
    id: '3',
    type: 'warning' as const,
    title: 'Testimonio pendiente',
    message: 'Tienes 3 testimonios esperando aprobación',
    read: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    link: '/admin/testimonios/pendientes',
  },
];

export function NotificationBell() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-yellow-600';
      case 'error':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notificaciones</span>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllAsRead}
              className="h-auto p-0 text-xs text-corporate-purple hover:text-corporate-purple/80"
            >
              Marcar todas como leídas
            </Button>
          )}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {notifications.length === 0 ? (
          <div className="py-8 text-center text-sm text-gray-500">
            No tienes notificaciones
          </div>
        ) : (
          <div className="max-h-[400px] overflow-y-auto">
            {notifications.map((notification) => (
              <DropdownMenuItem
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={cn(
                  'flex flex-col items-start gap-1 p-3 cursor-pointer',
                  !notification.read && 'bg-purple-50'
                )}
              >
                <div className="flex items-start justify-between w-full gap-2">
                  <div className="flex-1">
                    <p
                      className={cn(
                        'text-sm font-medium',
                        getNotificationColor(notification.type)
                      )}
                    >
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {formatDistanceToNow(new Date(notification.created_at), {
                        addSuffix: true,
                        locale: es,
                      })}
                    </p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-corporate-purple rounded-full flex-shrink-0 mt-1" />
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </div>
        )}

        {notifications.length > 0 && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-center justify-center text-corporate-purple hover:text-corporate-purple/80">
              Ver todas las notificaciones
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
