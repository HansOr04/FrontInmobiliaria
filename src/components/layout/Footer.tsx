import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/constants/config'

export default function Footer() {
  return (
    <footer className="bg-corporate-purple text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <Link href="/" className="mb-4 block" aria-label="Ir al inicio">
              <Image
                src="/logo.svg"
                alt="Ortiz Idrovo"
                width={240}
                height={135}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Soluciones integrales en el sector contable, tributario, financiero, laboral e inmobiliario ecuatoriano. Tu confianza, nuestro compromiso.
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-corporate-green transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-corporate-green transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-corporate-green transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-corporate-green transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Inmobiliaria */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Inmobiliaria</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/inmobiliaria/compra" className="hover:text-corporate-green transition-colors">
                  Compra
                </Link>
              </li>
              <li>
                <Link href="/inmobiliaria/venta" className="hover:text-corporate-green transition-colors">
                  Venta
                </Link>
              </li>
              <li>
                <Link href="/inmobiliaria/alquiler" className="hover:text-corporate-green transition-colors">
                  Alquiler
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios - será expandido en Fase 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400">Valoración</span>
              </li>
              <li>
                <span className="text-gray-400">Gestión</span>
              </li>
              <li>
                <span className="text-gray-400">Capacitación</span>
              </li>
              <li>
                <span className="text-gray-400">Asesoría</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-corporate-green transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-corporate-green transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Ortiz Idrovo Inmobiliaria. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center gap-6">
            <Link href="/privacidad" className="hover:text-corporate-green transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-corporate-green transition-colors">
              Términos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
