// Permission checking utilities

import { UserRole } from '@/types/admin';
import { Permission, ROLE_PERMISSIONS, PermissionCheck } from '@/types/permissions';

export const hasPermission = (userRole: UserRole, permission: Permission): boolean => {
  const permissions = ROLE_PERMISSIONS[userRole];
  return permissions.includes(permission);
};

export const hasAnyPermission = (userRole: UserRole, permissions: Permission[]): boolean => {
  return permissions.some((permission) => hasPermission(userRole, permission));
};

export const hasAllPermissions = (userRole: UserRole, permissions: Permission[]): boolean => {
  return permissions.every((permission) => hasPermission(userRole, permission));
};

export const canAccess = (userRole: UserRole, resource: string, action: string): boolean => {
  const permission = `${resource}:${action}` as Permission;
  return hasPermission(userRole, permission);
};

export const createPermissionChecker = (userRole: UserRole): PermissionCheck => {
  return {
    hasPermission: (permission: Permission) => hasPermission(userRole, permission),
    hasAnyPermission: (permissions: Permission[]) => hasAnyPermission(userRole, permissions),
    hasAllPermissions: (permissions: Permission[]) => hasAllPermissions(userRole, permissions),
    canAccess: (resource: string, action: string) => canAccess(userRole, resource, action),
  };
};

// Helper to get readable permission descriptions
export const getPermissionDescription = (permission: Permission): string => {
  const descriptions: Record<Permission, string> = {
    'dashboard:view': 'Ver panel principal',
    'properties:view': 'Ver propiedades',
    'properties:create': 'Crear propiedades',
    'properties:edit': 'Editar propiedades',
    'properties:delete': 'Eliminar propiedades',
    'properties:publish': 'Publicar propiedades',
    'leads:view_all': 'Ver todos los leads',
    'leads:view_assigned': 'Ver leads asignados',
    'leads:create': 'Crear leads',
    'leads:edit': 'Editar leads',
    'leads:delete': 'Eliminar leads',
    'leads:assign': 'Asignar leads',
    'testimonials:view': 'Ver testimonios',
    'testimonials:approve': 'Aprobar testimonios',
    'testimonials:delete': 'Eliminar testimonios',
    'courses:view': 'Ver cursos',
    'courses:create': 'Crear cursos',
    'courses:edit': 'Editar cursos',
    'courses:delete': 'Eliminar cursos',
    'courses:manage_enrollments': 'Gestionar inscripciones',
    'users:view': 'Ver usuarios',
    'users:create': 'Crear usuarios',
    'users:edit': 'Editar usuarios',
    'users:delete': 'Eliminar usuarios',
    'reports:view': 'Ver reportes',
    'reports:export': 'Exportar reportes',
    'settings:view': 'Ver configuración',
    'settings:edit': 'Editar configuración',
  };

  return descriptions[permission] || permission;
};

// Get all permissions for a role with descriptions
export const getRolePermissions = (role: UserRole) => {
  const permissions = ROLE_PERMISSIONS[role];
  return permissions.map((permission) => ({
    permission,
    description: getPermissionDescription(permission),
  }));
};

// Check if user can edit a specific lead (agents can only edit their assigned leads)
export const canEditLead = (
  userRole: UserRole,
  userId: string,
  leadAssignedTo?: string
): boolean => {
  // Super admin and admin can edit all leads
  if (userRole === 'super_admin' || userRole === 'admin') {
    return true;
  }

  // Agents and receptionists can only edit leads assigned to them
  if (userRole === 'agent' || userRole === 'receptionist') {
    return leadAssignedTo === userId;
  }

  return false;
};

// Check if user can delete a property
export const canDeleteProperty = (userRole: UserRole, propertyCreatedBy?: string, userId?: string): boolean => {
  // Super admin and admin can delete any property
  if (userRole === 'super_admin' || userRole === 'admin') {
    return true;
  }

  // Agents cannot delete properties
  return false;
};
