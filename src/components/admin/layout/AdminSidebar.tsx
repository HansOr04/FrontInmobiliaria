'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Building2,
  Users,
  Star,
  GraduationCap,
  UserCog,
  FileBarChart,
  Settings,
  ChevronDown,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { usePermissions } from '@/hooks/usePermissions';
import { useState } from 'react';

interface NavItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  permission?: string;
  children?: {
    title: string;
    href: string;
    badge?: string;
  }[];
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    title: 'Propiedades',
    icon: Building2,
    permission: 'properties:view',
    children: [
      { title: 'Todas las propiedades', href: '/admin/propiedades' },
      { title: 'Nueva propiedad', href: '/admin/propiedades/nueva' },
    ],
  },
  {
    title: 'Leads',
    icon: Users,
    permission: 'leads:view_assigned',
    children: [
      { title: 'Todos los leads', href: '/admin/leads' },
      { title: 'Nuevos', href: '/admin/leads?status=nuevo', badge: 'new' },
    ],
  },
  {
    title: 'Testimonios',
    href: '/admin/testimonios',
    icon: Star,
    permission: 'testimonials:view',
  },
  {
    title: 'Cursos',
    icon: GraduationCap,
    permission: 'courses:view',
    children: [
      { title: 'Todos los cursos', href: '/admin/cursos' },
      { title: 'Nuevo curso', href: '/admin/cursos/nuevo' },
      { title: 'Inscripciones', href: '/admin/cursos/inscripciones' },
    ],
  },
  {
    title: 'Usuarios',
    icon: UserCog,
    permission: 'users:view',
    children: [
      { title: 'Todos los usuarios', href: '/admin/usuarios' },
      { title: 'Nuevo usuario', href: '/admin/usuarios/nuevo' },
    ],
  },
  {
    title: 'Reportes',
    icon: FileBarChart,
    permission: 'reports:view',
    children: [
      { title: 'Resumen general', href: '/admin/reportes' },
      { title: 'Propiedades', href: '/admin/reportes/propiedades' },
      { title: 'Leads', href: '/admin/reportes/leads' },
      { title: 'Ventas', href: '/admin/reportes/ventas' },
    ],
  },
  {
    title: 'Configuración',
    href: '/admin/configuracion',
    icon: Settings,
    permission: 'settings:view',
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const permissions = usePermissions();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (href: string) => {
    if (href === '/admin') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const canAccess = (item: NavItem) => {
    if (!item.permission) return true;
    const [resource, action] = item.permission.split(':');
    return permissions.canAccess(resource, action);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b border-gray-200 px-6">
        <Link href="/admin" className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-corporate-purple">ORTIZ IDROVO</h1>
          <p className="text-xs text-corporate-green">Admin Panel</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            if (!canAccess(item)) return null;

            const Icon = item.icon;
            const isExpanded = expandedItems.includes(item.title);
            const hasChildren = item.children && item.children.length > 0;

            if (!hasChildren) {
              return (
                <li key={item.title}>
                  <Link
                    href={item.href || '#'}
                    className={cn(
                      'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive(item.href || '')
                        ? 'bg-corporate-purple text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }

            return (
              <li key={item.title}>
                <button
                  onClick={() => toggleExpand(item.title)}
                  className={cn(
                    'w-full flex items-center justify-between gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    'text-gray-700 hover:bg-gray-100'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-4 h-4 transition-transform',
                      isExpanded && 'rotate-180'
                    )}
                  />
                </button>

                {isExpanded && (
                  <ul className="mt-1 space-y-1 ml-8">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            'flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                            isActive(child.href)
                              ? 'bg-purple-50 text-corporate-purple font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          )}
                        >
                          <span>{child.title}</span>
                          {child.badge === 'new' && (
                            <span className="px-2 py-0.5 text-xs font-semibold bg-orange-500 text-white rounded-full">
                              Nuevo
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer - Link to main site */}
      <div className="border-t border-gray-200 p-4">
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-corporate-purple transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Ir al sitio web</span>
        </Link>
      </div>
    </aside>
  );
}
