import { Building2, DollarSign, Users, GraduationCap, Lightbulb } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Building2,
    title: 'INMOBILIARIA',
    description: 'Compra, venta y alquiler de propiedades en todo Ecuador',
    href: '/inmobiliaria/compra',
    color: 'text-corporate-purple',
  },
  {
    icon: DollarSign,
    title: 'VALORACIÓN',
    description: 'Valoración profesional de empresas con metodologías certificadas',
    href: '/valoracion',
    color: 'text-blue-600',
  },
  {
    icon: Users,
    title: 'GESTIÓN',
    description: 'Administración integral de urbanizaciones y condominios',
    href: '/gestion-inmobiliaria',
    color: 'text-corporate-green',
  },
  {
    icon: GraduationCap,
    title: 'CAPACITACIÓN',
    description: 'Formación especializada en contabilidad, tributación y finanzas',
    href: '/capacitacion',
    color: 'text-purple-600',
  },
  {
    icon: Lightbulb,
    title: 'ASESORÍA',
    description: 'Asesoría empresarial en negociaciones y capital',
    href: '/asesoria',
    color: 'text-violet-600',
  },
]

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-corporate-purple mb-4">
            NUESTROS SERVICIOS
          </h2>
          <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
            Soluciones integrales para todas tus necesidades inmobiliarias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <service.icon
                  className={`w-16 h-16 mb-4 ${service.color} group-hover:scale-110 transition-transform`}
                />
                <h3 className="font-semibold text-lg mb-2 text-corporate-gray-dark">
                  {service.title}
                </h3>
                <p className="text-sm text-corporate-gray-medium mb-4">
                  {service.description}
                </p>
                <span className="text-sm text-corporate-green font-medium group-hover:underline">
                  Explorar →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
