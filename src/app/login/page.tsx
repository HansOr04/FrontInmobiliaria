import Image from 'next/image';
import Link from 'next/link';
import { LoginForm } from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Iniciar Sesión - Panel Administrativo | Ortiz Idrovo Inmobiliaria',
  description: 'Accede al panel administrativo',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-purple via-purple-800 to-corporate-green flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold text-corporate-purple">
                ORTIZ IDROVO
              </h1>
              <p className="text-sm text-corporate-green">INMOBILIARIA</p>
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-white mt-6">
            Panel Administrativo
          </h2>
          <p className="text-purple-200 mt-2">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/80">
            Solo para personal autorizado
          </p>
          <Link
            href="/"
            className="text-sm text-white hover:text-purple-200 underline mt-2 inline-block"
          >
            ← Volver al sitio principal
          </Link>
        </div>

        {/* Demo Credentials (Remove in production) */}
        <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white text-sm">
          <p className="font-semibold mb-2">Credenciales de prueba:</p>
          <div className="space-y-1 text-white/90">
            <p>
              <strong>Super Admin:</strong> admin@ortiz idrovo.com / admin123
            </p>
            <p>
              <strong>Agente:</strong> agente@ortizidrovo.com / agente123
            </p>
          </div>
          <p className="text-xs text-white/70 mt-2">
            * Estas credenciales son solo para desarrollo
          </p>
        </div>
      </div>
    </div>
  );
}
