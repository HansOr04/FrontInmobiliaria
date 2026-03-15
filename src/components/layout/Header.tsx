'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Building2, TrendingUp, Users, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const NAVIGATION = {
  inmobiliaria: {
    label: 'Inmobiliaria',
    icon: Building2,
    items: [
      { label: 'Compra', href: '/inmobiliaria/compra', description: 'Encuentra tu propiedad ideal' },
      { label: 'Venta', href: '/inmobiliaria/venta', description: 'Vende con expertos' },
      { label: 'Alquiler', href: '/inmobiliaria/alquiler', description: 'Alquila tu propiedad' },
      { divider: true },
      { label: 'Terrenos', href: '/inmobiliaria/terrenos' },
      { label: 'Edificios', href: '/inmobiliaria/edificios' },
      { label: 'Casas', href: '/inmobiliaria/casas' },
      { label: 'Departamentos', href: '/inmobiliaria/departamentos' },
      { label: 'Oficinas', href: '/inmobiliaria/oficinas' },
    ],
  },
  valoracion: {
    label: 'Valoración',
    icon: TrendingUp,
    items: [
      { label: 'Líneas de Negocio', href: '/valoracion/lineas-negocio', description: 'Sectores que valoramos' },
      { label: 'Metodología', href: '/valoracion/metodologia', description: 'Nuestro proceso de valoración' },
      { label: 'Situación de la Empresa', href: '/valoracion/situacion-empresa', description: 'Análisis integral' },
      { label: 'Proyecciones Financieras', href: '/valoracion/proyecciones-financieras', description: 'Proyecciones a futuro' },
      { label: 'Flujo de Caja', href: '/valoracion/flujo-caja-proyectado', description: 'Análisis de flujos' },
      { label: 'Valoración Principal', href: '/valoracion/valoracion-principal', description: 'Servicios principales' },
    ],
  },
  gestion: {
    label: 'Gestión',
    icon: Users,
    items: [
      { label: 'Administración de Urbanizaciones', href: '/gestion-inmobiliaria/administracion-urbanizaciones', description: 'Gestión de complejos' },
      { label: 'Administración de Condominios', href: '/gestion-inmobiliaria/administracion-condominios', description: 'Gestión profesional' },
      { label: 'Gestión Normativa', href: '/gestion-inmobiliaria/gestion-normativa', description: 'Cumplimiento legal' },
      { label: 'Leyes de Propiedad Horizontal', href: '/gestion-inmobiliaria/leyes-propiedad-horizontal', description: 'Asesoría legal' },
    ],
  },
  capacitacion: {
    label: 'Capacitación',
    icon: GraduationCap,
    items: [
      { label: 'Contable', href: '/capacitacion/contable', description: 'NIIF y estados financieros' },
      { label: 'Laboral', href: '/capacitacion/laboral', description: 'Derecho laboral y nómina' },
      { label: 'Tributario', href: '/capacitacion/tributario', description: 'Impuestos y declaraciones' },
      { label: 'Financiero', href: '/capacitacion/financiero', description: 'Análisis financiero' },
      { label: 'Gestión Financiera', href: '/capacitacion/gestion-financiera', description: 'Dirección financiera' },
    ],
  },
  asesoria: {
    label: 'Asesoría',
    icon: Briefcase,
    items: [
      { label: 'Negociaciones', href: '/asesoria/negociaciones', description: 'Mediación empresarial' },
      { label: 'Aumento de Capital', href: '/asesoria/aumento-capital', description: 'Capitalización empresarial' },
      { label: 'Disminución de Capital', href: '/asesoria/disminucion-capital', description: 'Reducción de capital' },
      { label: 'Asesoría Financiera', href: '/asesoria/asesoria-financiera', description: 'Consultoría integral' },
      { label: 'Escrituras de Constitución', href: '/asesoria/escrituras-constitucion', description: 'Constitución de empresas' },
      { label: 'Determinaciones Fiscales', href: '/asesoria/determinaciones-fiscales', description: 'Defensa tributaria' },
    ],
  },
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderDropdown = (key: keyof typeof NAVIGATION) => {
    const section = NAVIGATION[key]
    if (!section.items) return null
    const Icon = section.icon

    return (
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown(key)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-corporate-purple transition-colors rounded-lg hover:bg-gray-50">
          <Icon className="w-4 h-4" />
          {section.label}
          <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", activeDropdown === key && "rotate-180")} />
        </button>

        {activeDropdown === key && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
            {section.items.map((item: any, idx) =>
              item.divider ? (
                <div key={idx} className="my-2 border-t border-gray-200" />
              ) : (
                <Link
                  key={idx}
                  href={item.href!}
                  className="block px-4 py-3 hover:bg-purple-50 transition-colors"
                >
                  <div className="font-medium text-sm text-gray-900 hover:text-corporate-purple">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white border-b border-gray-200'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div className="text-lg font-bold">
              <span className="text-purple-700">Ortiz</span>{' '}
              <span className="text-gray-800">Idrovo</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {renderDropdown('inmobiliaria')}
            {renderDropdown('valoracion')}
            {renderDropdown('gestion')}
            {renderDropdown('capacitacion')}
            {renderDropdown('asesoria')}

            <Link href="/contacto" className="ml-2">
              <Button variant="orange" size="sm">
                Contacto
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-purple-700" />
            ) : (
              <Menu className="w-6 h-6 text-purple-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 mt-2 pt-4">
            <nav className="flex flex-col gap-2">
              {Object.entries(NAVIGATION).map(([key, section]) => {
                const Icon = section.icon
                return (
                  <div key={key}>
                    <button
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === key ? null : key)
                      }
                    >
                      <Icon className="w-5 h-5 text-purple-700" />
                      <span className="flex-1 text-left">{section.label}</span>
                      {section.items && (
                        <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === key && "rotate-180")} />
                      )}
                    </button>
                    {activeDropdown === key && section.items && (
                      <div className="pl-10 mt-1 mb-2 flex flex-col gap-1">
                        {section.items.map((item: any, idx) =>
                          item.divider ? null : (
                            <Link
                              key={idx}
                              href={item.href!}
                              className="text-sm text-gray-600 py-2 px-3 hover:bg-purple-50 hover:text-purple-700 rounded-lg"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                )
              })}

              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                <Button variant="orange" className="w-full">
                  Contacto
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
