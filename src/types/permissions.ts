// Permission system type definitions

import { UserRole } from './admin';

export type Permission =
  | 'dashboard:view'
  | 'properties:view'
  | 'properties:create'
  | 'properties:edit'
  | 'properties:delete'
  | 'properties:publish'
  | 'leads:view_all'
  | 'leads:view_assigned'
  | 'leads:create'
  | 'leads:edit'
  | 'leads:delete'
  | 'leads:assign'
  | 'testimonials:view'
  | 'testimonials:approve'
  | 'testimonials:delete'
  | 'courses:view'
  | 'courses:create'
  | 'courses:edit'
  | 'courses:delete'
  | 'courses:manage_enrollments'
  | 'users:view'
  | 'users:create'
  | 'users:edit'
  | 'users:delete'
  | 'reports:view'
  | 'reports:export'
  | 'settings:view'
  | 'settings:edit';

export type PermissionMap = Record<UserRole, Permission[]>;

export const ROLE_PERMISSIONS: PermissionMap = {
  super_admin: [
    'dashboard:view',
    'properties:view',
    'properties:create',
    'properties:edit',
    'properties:delete',
    'properties:publish',
    'leads:view_all',
    'leads:view_assigned',
    'leads:create',
    'leads:edit',
    'leads:delete',
    'leads:assign',
    'testimonials:view',
    'testimonials:approve',
    'testimonials:delete',
    'courses:view',
    'courses:create',
    'courses:edit',
    'courses:delete',
    'courses:manage_enrollments',
    'users:view',
    'users:create',
    'users:edit',
    'users:delete',
    'reports:view',
    'reports:export',
    'settings:view',
    'settings:edit',
  ],
  admin: [
    'dashboard:view',
    'properties:view',
    'properties:create',
    'properties:edit',
    'properties:delete',
    'properties:publish',
    'leads:view_all',
    'leads:view_assigned',
    'leads:create',
    'leads:edit',
    'leads:assign',
    'testimonials:view',
    'testimonials:approve',
    'testimonials:delete',
    'courses:view',
    'courses:create',
    'courses:edit',
    'courses:delete',
    'courses:manage_enrollments',
    'reports:view',
    'reports:export',
  ],
  agent: [
    'dashboard:view',
    'properties:view',
    'properties:create',
    'properties:edit',
    'leads:view_assigned',
    'leads:create',
    'leads:edit',
    'testimonials:view',
    'courses:view',
    'reports:view',
  ],
  receptionist: [
    'dashboard:view',
    'properties:view',
    'leads:view_all',
    'leads:create',
    'leads:edit',
    'leads:assign',
    'testimonials:view',
    'courses:view',
    'courses:manage_enrollments',
  ],
  accountant: [
    'dashboard:view',
    'properties:view',
    'reports:view',
    'reports:export',
  ],
};

export interface PermissionCheck {
  hasPermission: (permission: Permission) => boolean;
  hasAnyPermission: (permissions: Permission[]) => boolean;
  hasAllPermissions: (permissions: Permission[]) => boolean;
  canAccess: (resource: string, action: string) => boolean;
}
