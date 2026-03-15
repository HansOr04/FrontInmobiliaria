import ServiceHero from '@/components/services/ServiceHero'
import ServiceCard from '@/components/services/ServiceCard'
import PricingTable from '@/components/services/PricingTable'
import { Button } from '@/components/ui/button'
import { FileText, TrendingUp, BarChart3, PieChart, DollarSign, LineChart, Calculator } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Antecedentes',
    description: 'Nuestra trayectoria y experiencia en valoración empresarial',
    icon: FileText,
    href: '/valoracion/antecedentes',
  },
  {
    title: 'Líneas de Negocio',
    description: 'Sectores y tipos de empresas que valoramos',
    icon: TrendingUp,
    href: '/valoracion/lineas-negocio',
  },
  {
    title: 'Metodología',
    description: 'Enfoques y metodologías de valoración que aplicamos',
    icon: BarChart3,
    href: '/valoracion/metodologia',
  },
  {
    title: 'Situación Empresa',
    description: 'Análisis integral de la situación empresarial',
    icon: PieChart,
    href: '/valoracion/situacion-empresa',
  },
  {
    title: 'Proyecciones Financieras',
    description: 'Modelos de proyección a 3, 5 y 10 años',
    icon: LineChart,
    href: '/valoracion/proyecciones-financieras',
  },
  {
    title: 'Flujo de Caja',
    description: 'Análisis detallado del flujo de caja proyectado',
    icon: DollarSign,
    href: '/valoracion/flujo-caja-proyectado',
  },
  {
    title: 'Valoración Principal',
    description: 'Paquetes y servicios de valoración',
    icon: Calculator,
    href: '/valoracion/valoracion-principal',
  },
]

const pricingPlans = [
  {
    name: 'BÁSICO',
    price: 'Desde $1,500',
    description: 'Ideal para PYMEs',
    features: [
      'Análisis financiero básico',
      '1 metodología de valoración',
      'Informe ejecutivo (10 páginas)',
      '1 reunión de presentación',
      'Tiempo: 2-3 semanas',
    ],
    cta: 'Solicitar',
    ctaVariant: 'outline' as const,
  },
  {
    name: 'ESTÁNDAR',
    price: 'Desde $3,500',
    description: 'Más solicitado',
    features: [
      'Todo en Básico +',
      '2-3 metodologías',
      'Análisis FODA',
      'Proyecciones 3 años',
      'Informe completo (30 páginas)',
      '2 reuniones',
      'Soporte 30 días',
      'Tiempo: 3-4 semanas',
    ],
    cta: 'Solicitar',
    highlighted: true,
    ctaVariant: 'secondary' as const,
  },
  {
    name: 'PREMIUM',
    price: 'Desde $6,500',
    description: 'Servicio completo',
    features: [
      'Todo en Estándar +',
      '3-4 metodologías',
      'Due diligence completo',
      'Proyecciones 5-10 años',
      'Análisis de escenarios',
      'Informe ejecutivo + técnico (60+ páginas)',
      'Reuniones ilimitadas',
      'Soporte 90 días',
      'Actualización anual gratis',
      'Tiempo: 4-6 semanas',
    ],
    cta: 'Solicitar',
    ctaVariant: 'orange' as const,
  },
]

export default function ValoracionPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="VALORACIÓN DE EMPRESAS"
        subtitle="Conoce el verdadero valor de tu negocio"
        description="Más de 500 empresas valoradas con metodologías internacionales"
        accentColor="blue"
      >
        <Link href="#cotizacion">
          <Button size="lg" variant="secondary">
            Solicitar Valoración Gratuita
          </Button>
        </Link>
      </ServiceHero>

      {/* ¿Qué es una valoración? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-3 text-corporate-purple mb-6">
              ¿Qué es una Valoración de Empresas?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              La valoración de empresas es el proceso de determinar el valor económico de un negocio
              utilizando metodologías financieras reconocidas internacionalmente. Es fundamental para
              tomar decisiones estratégicas como venta, fusión, atracción de inversión o planificación sucesoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-corporate-gray-medium">Empresas Valoradas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-corporate-gray-medium">Años de Experiencia</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-corporate-gray-medium">Sectores Atendidos</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-corporate-gray-medium">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-4">
              Nuestros Servicios de Valoración
            </h2>
            <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
              Servicios especializados para cada etapa del proceso de valoración
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                iconColor="text-blue-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ¿Por qué valorar? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Por Qué Valorar Tu Empresa?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Conocer el valor real',
                description: 'Obtén un valor objetivo basado en metodologías profesionales'
              },
              {
                title: 'Decisiones informadas',
                description: 'Toma decisiones estratégicas con información precisa'
              },
              {
                title: 'Atraer inversionistas',
                description: 'Facilita la entrada de nuevos socios o inversionistas'
              },
              {
                title: 'Planificar sucesión',
                description: 'Prepara la transición generacional de tu empresa'
              },
              {
                title: 'Venta exitosa',
                description: 'Establece un precio justo en procesos de venta'
              },
              {
                title: 'Resolución de conflictos',
                description: 'Soluciona disputas entre socios con base objetiva'
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-corporate-gray-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de empresas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Tipos de Empresas que Valoramos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: '🏗️', name: 'Constructoras' },
              { icon: '🏭', name: 'Manufactureras' },
              { icon: '🏪', name: 'Comerciales' },
              { icon: '💼', name: 'Servicios' },
              { icon: '🚀', name: 'Startups' },
              { icon: '🏥', name: 'Salud' },
              { icon: '🎓', name: 'Educación' },
              { icon: '🍽️', name: 'Restaurantes' },
              { icon: '🚗', name: 'Automotriz' },
              { icon: '💻', name: 'Tecnología' },
            ].map((type, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{type.icon}</div>
                <p className="font-medium">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="paquetes" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-4">
              Nuestros Paquetes de Valoración
            </h2>
            <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
              Elige el paquete que mejor se adapte a tus necesidades
            </p>
          </div>

          <PricingTable plans={pricingPlans} />

          <div className="text-center mt-12">
            <p className="text-sm text-corporate-gray-medium mb-4">
              ¿No estás seguro cuál elegir? Contáctanos para una asesoría gratuita
            </p>
            <Link href="#cotizacion">
              <Button size="lg" variant="orange">
                Solicitar Cotización Personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="cotizacion" className="section-padding bg-gradient-to-r from-corporate-purple to-corporate-green text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Valorar Tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicita una consulta gratuita y descubre cuánto vale realmente tu negocio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Agendar Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-corporate-purple hover:bg-gray-100">
              Descargar Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
