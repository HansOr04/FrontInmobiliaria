// Permissions hook

'use client';

import { useMemo } from 'react';
import { useAuth } from './useAuth';
import { Permission } from '@/types/permissions';
import { createPermissionChecker } from '@/lib/permissions';

export function usePermissions() {
  const { user } = useAuth();

  const permissions = useMemo(() => {
    if (!user) {
      return {
        hasPermission: () => false,
        hasAnyPermission: () => false,
        hasAllPermissions: () => false,
        canAccess: () => false,
      };
    }

    return createPermissionChecker(user.role);
  }, [user]);

  return permissions;
}

// Specific permission hooks for common checks
export function useCanEditProperty() {
  const permissions = usePermissions();
  return permissions.hasPermission('properties:edit');
}

export function useCanDeleteProperty() {
  const permissions = usePermissions();
  return permissions.hasPermission('properties:delete');
}

export function useCanViewAllLeads() {
  const permissions = usePermissions();
  return permissions.hasPermission('leads:view_all');
}

export function useCanAssignLeads() {
  const permissions = usePermissions();
  return permissions.hasPermission('leads:assign');
}

export function useCanApproveTestimonials() {
  const permissions = usePermissions();
  return permissions.hasPermission('testimonials:approve');
}

export function useCanManageUsers() {
  const permissions = usePermissions();
  return permissions.hasAnyPermission(['users:create', 'users:edit', 'users:delete']);
}

export function useCanViewReports() {
  const permissions = usePermissions();
  return permissions.hasPermission('reports:view');
}

export function useCanExportReports() {
  const permissions = usePermissions();
  return permissions.hasPermission('reports:export');
}
