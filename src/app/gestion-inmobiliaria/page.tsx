import ServiceHero from '@/components/services/ServiceHero'
import ServiceCard from '@/components/services/ServiceCard'
import { Button } from '@/components/ui/button'
import { Building2, Users, FileCheck, Scale } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Administración de Urbanizaciones',
    description: 'Gestión integral de complejos habitacionales y urbanizaciones',
    icon: Building2,
    href: '/gestion-inmobiliaria/administracion-urbanizaciones',
  },
  {
    title: 'Administración de Condominios',
    description: 'Manejo profesional de edificios y conjuntos residenciales',
    icon: Users,
    href: '/gestion-inmobiliaria/administracion-condominios',
  },
  {
    title: 'Gestión Normativa',
    description: 'Cumplimiento de normativas y regulaciones inmobiliarias',
    icon: FileCheck,
    href: '/gestion-inmobiliaria/gestion-normativa',
  },
  {
    title: 'Leyes de Propiedad Horizontal',
    description: 'Asesoría legal en propiedad horizontal y condominios',
    icon: Scale,
    href: '/gestion-inmobiliaria/leyes-propiedad-horizontal',
  },
]

export default function GestionInmobiliariaPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="GESTIÓN INMOBILIARIA PROFESIONAL"
        subtitle="Administramos tu propiedad como si fuera nuestra"
        description="Más de 50 urbanizaciones y 200 condominios bajo nuestra gestión"
        accentColor="green"
      >
        <Link href="#contacto">
          <Button size="lg" variant="orange">
            Solicitar Cotización
          </Button>
        </Link>
      </ServiceHero>

      {/* Nuestros Servicios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-4">
              Servicios de Gestión Inmobiliaria
            </h2>
            <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
              Soluciones completas para la administración de propiedades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                iconColor="text-green-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Por qué gestión profesional */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Por Qué Elegir Gestión Profesional?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Maximiza el valor',
                description: 'Incrementa el valor de tu propiedad con mantenimiento adecuado',
                icon: '📈',
              },
              {
                title: 'Reduce costos',
                description: 'Optimiza gastos operativos con negociación de proveedores',
                icon: '💰',
              },
              {
                title: 'Cumplimiento normativo',
                description: 'Garantiza el cumplimiento de todas las regulaciones',
                icon: '✓',
              },
              {
                title: 'Transparencia total',
                description: 'Reportes financieros y operativos mensuales detallados',
                icon: '📊',
              },
              {
                title: 'Plataforma 24/7',
                description: 'Acceso online para residentes y propietarios',
                icon: '💻',
              },
              {
                title: 'Equipo profesional',
                description: 'Personal capacitado y con experiencia',
                icon: '👥',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-corporate-gray-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propiedades bajo gestión */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Propiedades Bajo Nuestra Gestión
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-corporate-gray-dark">Urbanizaciones</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">200+</div>
              <p className="text-corporate-gray-dark">Condominios</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <p className="text-corporate-gray-dark">Unidades</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-corporate-gray-dark">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plataforma para residentes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Plataforma Digital para Residentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Pago de alícuotas online',
              'Reserva de áreas comunes',
              'Reportes de mantenimiento',
              'Comunicados y noticias',
              'Estados de cuenta',
              'Chat con administración',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  ✓
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Necesitas Gestión Profesional?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicita una cotización sin compromiso y descubre cómo podemos ayudarte
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
            Solicitar Cotización
          </Button>
        </div>
      </section>
    </div>
  )
}
