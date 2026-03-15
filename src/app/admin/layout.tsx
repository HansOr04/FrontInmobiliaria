import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { AdminSidebar } from '@/components/admin/layout/AdminSidebar';
import { AdminHeader } from '@/components/admin/layout/AdminHeader';

export const metadata = {
  title: 'Panel Administrativo | Ortiz Idrovo Inmobiliaria',
  description: 'Gestión del sistema inmobiliario',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen overflow-hidden bg-gray-50">
        {/* Sidebar */}
        <AdminSidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <AdminHeader />

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
