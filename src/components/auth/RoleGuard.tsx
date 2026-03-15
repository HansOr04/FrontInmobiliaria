'use client';

import { ReactNode } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { UserRole } from '@/types/admin';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: UserRole[];
  fallback?: ReactNode;
}

export function RoleGuard({ children, allowedRoles, fallback }: RoleGuardProps) {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    if (fallback) {
      return <>{fallback}</>;
    }

    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Acceso Denegado</AlertTitle>
          <AlertDescription>
            No tienes permisos para acceder a esta sección.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return <>{children}</>;
}
