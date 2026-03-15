import { Button } from '@/components/ui/button'
import { Building2, Factory, ShoppingCart, Briefcase, Rocket, Heart, GraduationCap,
         Utensils, Car, Laptop, TrendingUp, Users, Target, Award } from 'lucide-react'
import Link from 'next/link'

const businessLines = [
  {
    icon: Building2,
    title: 'Sector Inmobiliario',
    description: 'Constructoras, desarrolladoras inmobiliarias, administradoras de propiedades',
    sectors: ['Construcción residencial', 'Comercial', 'Industrial', 'Administración de rentas'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Factory,
    title: 'Manufactura e Industria',
    description: 'Empresas de producción, transformación y manufactura',
    sectors: ['Alimentos y bebidas', 'Textil', 'Metalmecánica', 'Química'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: ShoppingCart,
    title: 'Comercio y Retail',
    description: 'Negocios de comercialización al por mayor y menor',
    sectors: ['Supermercados', 'Tiendas especializadas', 'E-commerce', 'Distribuidoras'],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Briefcase,
    title: 'Servicios Profesionales',
    description: 'Empresas de servicios B2B y consultorías',
    sectors: ['Consultorías', 'Asesorías', 'Servicios legales', 'Auditoría'],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Rocket,
    title: 'Startups y Tecnología',
    description: 'Empresas tecnológicas y de innovación',
    sectors: ['Software', 'Fintech', 'SaaS', 'Marketplace'],
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Heart,
    title: 'Salud y Bienestar',
    description: 'Clínicas, hospitales y centros médicos',
    sectors: ['Clínicas', 'Laboratorios', 'Farmacias', 'Centros de estética'],
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: GraduationCap,
    title: 'Educación',
    description: 'Instituciones educativas y centros de formación',
    sectors: ['Colegios', 'Universidades', 'Academias', 'Centros de capacitación'],
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: Utensils,
    title: 'Restaurantes y Hostelería',
    description: 'Servicios de alimentos y hospitalidad',
    sectors: ['Restaurantes', 'Hoteles', 'Catering', 'Franquicias'],
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: Car,
    title: 'Automotriz y Transporte',
    description: 'Concesionarios, talleres y empresas de transporte',
    sectors: ['Concesionarios', 'Talleres', 'Transporte', 'Logística'],
    color: 'bg-cyan-100 text-cyan-600'
  },
  {
    icon: Laptop,
    title: 'Servicios Digitales',
    description: 'Agencias digitales y empresas de marketing',
    sectors: ['Marketing digital', 'Desarrollo web', 'Diseño', 'Producción audiovisual'],
    color: 'bg-teal-100 text-teal-600'
  },
]

const valuationApproaches = [
  {
    icon: TrendingUp,
    title: 'Valoración por Tamaño',
    description: 'Adaptamos nuestra metodología según el tamaño de tu empresa',
    items: [
      'Microempresas (hasta $100K ventas anuales)',
      'Pequeñas empresas ($100K - $1M)',
      'Medianas empresas ($1M - $10M)',
      'Grandes empresas (más de $10M)',
    ]
  },
  {
    icon: Users,
    title: 'Valoración por Etapa',
    description: 'Diferentes enfoques según la madurez del negocio',
    items: [
      'Startups pre-revenue',
      'Empresas en crecimiento',
      'Empresas maduras',
      'Empresas en reestructuración',
    ]
  },
  {
    icon: Target,
    title: 'Propósito de la Valoración',
    description: 'Especializados en diferentes objetivos',
    items: [
      'Compra-venta de empresas',
      'Entrada de inversionistas',
      'Planificación sucesoria',
      'Resolución de conflictos',
    ]
  },
]

export default function LineasNegocioPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Líneas de Negocio
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Experiencia comprobada en la valoración de empresas de todos los sectores económicos.
              Más de 500 empresas valoradas en 15+ industrias diferentes.
            </p>
            <Link href="#contacto">
              <Button size="lg" variant="secondary">
                Consulta tu Sector
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introducción */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-3 text-corporate-purple mb-6">
              Valoramos Empresas de Todos los Sectores
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Nuestra experiencia multisectorial nos permite entender las particularidades de cada industria,
              aplicando las metodologías más apropiadas y considerando los factores específicos que afectan
              el valor de tu empresa.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-corporate-gray-medium">Sectores</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-corporate-gray-medium">Empresas Valoradas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-corporate-gray-medium">Años Experiencia</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-corporate-gray-medium">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Sectores que Atendemos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessLines.map((line, index) => {
              const Icon = line.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg ${line.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{line.title}</h3>
                  <p className="text-corporate-gray-medium mb-4">{line.description}</p>
                  <div className="space-y-2">
                    {line.sectors.map((sector, idx) => (
                      <div key={idx} className="flex items-center text-sm text-corporate-gray-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                        {sector}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enfoques de valoración */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestros Enfoques de Valoración
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valuationApproaches.map((approach, index) => {
              const Icon = approach.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{approach.description}</p>
                  <ul className="space-y-3">
                    {approach.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-sm text-corporate-gray-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Casos especiales */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Casos Especiales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: '🌱',
                title: 'Startups Pre-Revenue',
                description: 'Valoración de empresas en etapa temprana sin ingresos consistentes, utilizando metodologías específicas como Venture Capital Method o Scorecard.'
              },
              {
                icon: '🏗️',
                title: 'Empresas en Construcción',
                description: 'Valoración de proyectos inmobiliarios en desarrollo considerando el valor del terreno, proyecto y flujos futuros.'
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Empresas Familiares',
                description: 'Consideración de factores especiales como estructuras de propiedad complejas y planificación sucesoria.'
              },
              {
                icon: '🔄',
                title: 'Empresas en Reestructuración',
                description: 'Valoración de empresas en proceso de turnaround o reorganización empresarial.'
              },
              {
                icon: '🌐',
                title: 'Empresas con Activos Internacionales',
                description: 'Consideración de múltiples jurisdicciones, tipos de cambio y riesgos país.'
              },
              {
                icon: '🎯',
                title: 'Holdings y Grupos Empresariales',
                description: 'Valoración de estructuras corporativas complejas con múltiples subsidiarias.'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-corporate-gray-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué somos diferentes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Por Qué Somos Diferentes?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Experiencia Multisectorial',
                description: '20+ años valorando empresas en diversos sectores'
              },
              {
                icon: Users,
                title: 'Equipo Especializado',
                description: 'Expertos con certificaciones internacionales'
              },
              {
                icon: Target,
                title: 'Metodologías Probadas',
                description: 'Aplicamos las mejores prácticas internacionales'
              },
              {
                icon: TrendingUp,
                title: 'Enfoque Personalizado',
                description: 'Cada valoración es única y adaptada a tu sector'
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-corporate-gray-medium">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Tu Sector No Está Listado?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            No te preocupes. Contáctanos para una consulta gratuita y te diremos cómo podemos ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Agendar Consulta Gratuita
            </Button>
            <Link href="/valoracion">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Ver Todos los Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}