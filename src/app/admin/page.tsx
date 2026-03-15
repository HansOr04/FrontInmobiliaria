'use client';

import { Building2, Users, Star, GraduationCap, TrendingUp, CheckCircle } from 'lucide-react';
import { StatsCard } from '@/components/admin/dashboard/StatsCard';
import { RecentActivity } from '@/components/admin/dashboard/RecentActivity';
import { QuickActions } from '@/components/admin/dashboard/QuickActions';
import { useAuth } from '@/hooks/useAuth';
import { formatUserRole } from '@/lib/auth';

// Mock stats data - replace with real API data
const mockStats = {
  total_properties: 150,
  properties_available: 120,
  new_leads: 45,
  pending_testimonials: 12,
  active_courses: 5,
  total_sales: 28,
};

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bienvenido, {user?.name}
        </h1>
        <p className="text-gray-600 mt-1">
          {formatUserRole(user?.role || 'agent')} • Panel de Administración
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="Total Propiedades"
          value={mockStats.total_properties}
          icon={Building2}
          trend={{ value: 12, isPositive: true }}
          href="/admin/propiedades"
          iconColor="text-corporate-purple"
          iconBgColor="bg-purple-100"
        />

        <StatsCard
          title="Propiedades Disponibles"
          value={mockStats.properties_available}
          icon={CheckCircle}
          href="/admin/propiedades?status=disponible"
          iconColor="text-green-600"
          iconBgColor="bg-green-100"
        />

        <StatsCard
          title="Nuevos Leads"
          value={mockStats.new_leads}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
          href="/admin/leads?status=nuevo"
          iconColor="text-blue-600"
          iconBgColor="bg-blue-100"
        />

        <StatsCard
          title="Testimonios Pendientes"
          value={mockStats.pending_testimonials}
          icon={Star}
          href="/admin/testimonios/pendientes"
          iconColor="text-yellow-600"
          iconBgColor="bg-yellow-100"
        />

        <StatsCard
          title="Cursos Activos"
          value={mockStats.active_courses}
          icon={GraduationCap}
          href="/admin/cursos?status=activo"
          iconColor="text-purple-600"
          iconBgColor="bg-purple-100"
        />

        <StatsCard
          title="Ventas del Mes"
          value={mockStats.total_sales}
          icon={TrendingUp}
          trend={{ value: 15, isPositive: true }}
          href="/admin/reportes/ventas"
          iconColor="text-corporate-green"
          iconBgColor="bg-green-100"
        />
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions />
        <RecentActivity />
      </div>
    </div>
  );
}
