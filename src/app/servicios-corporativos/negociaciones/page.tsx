import { Button } from '@/components/ui/button'
import { Handshake, Target, Users, FileText, CheckCircle, Clock, TrendingUp,
         Shield, Scale, DollarSign, MessageSquare, BookOpen } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Handshake,
    title: 'Mediación Empresarial',
    description: 'Facilitación de acuerdos entre partes',
    items: [
      'Mediación en conflictos societarios',
      'Negociación con proveedores',
      'Acuerdos comerciales',
      'Resolución de disputas',
      'Mediación laboral',
      'Acuerdos estratégicos'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Scale,
    title: 'Fusiones y Adquisiciones',
    description: 'Asesoría integral en procesos de M&A',
    items: [
      'Estructuración de operaciones',
      'Due diligence',
      'Valoración de empresas',
      'Negociación de términos',
      'Cierre de transacciones',
      'Integración post-merger'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Users,
    title: 'Alianzas Estratégicas',
    description: 'Desarrollo de asociaciones empresariales',
    items: [
      'Identificación de socios',
      'Estructuración de alianzas',
      'Joint ventures',
      'Acuerdos de colaboración',
      'Negociación de contratos',
      'Seguimiento de resultados'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: DollarSign,
    title: 'Negociación Financiera',
    description: 'Representación en acuerdos financieros',
    items: [
      'Negociación con bancos',
      'Reestructuración de deuda',
      'Condiciones de financiamiento',
      'Líneas de crédito',
      'Garantías',
      'Covenants financieros'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
]

const process = [
  {
    step: '1',
    title: 'Análisis Previo',
    description: 'Evaluación de objetivos y contexto',
    icon: Target,
    details: [
      'Identificación de objetivos',
      'Análisis de alternativas',
      'Evaluación de riesgos',
      'Definición de estrategia'
    ]
  },
  {
    step: '2',
    title: 'Preparación',
    description: 'Recopilación de información y estrategia',
    icon: BookOpen,
    details: [
      'Investigación de contraparte',
      'Preparación de documentos',
      'Definición de límites',
      'Simulación de escenarios'
    ]
  },
  {
    step: '3',
    title: 'Negociación',
    description: 'Conducción del proceso negociador',
    icon: MessageSquare,
    details: [
      'Presentación de propuestas',
      'Manejo de objeciones',
      'Búsqueda de acuerdos',
      'Documentación de avances'
    ]
  },
  {
    step: '4',
    title: 'Cierre',
    description: 'Formalización de acuerdos',
    icon: CheckCircle,
    details: [
      'Redacción de contratos',
      'Revisión legal',
      'Firma de documentos',
      'Plan de implementación'
    ]
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mejores Resultados',
    description: 'Maximización de valor en negociaciones',
    stats: '+30% mejores términos'
  },
  {
    icon: Clock,
    title: 'Ahorro de Tiempo',
    description: 'Proceso estructurado y eficiente',
    stats: '-40% tiempo negociación'
  },
  {
    icon: Shield,
    title: 'Protección Legal',
    description: 'Contratos sólidos y sin riesgos',
    stats: '100% seguridad jurídica'
  },
  {
    icon: Users,
    title: 'Experiencia',
    description: 'Más de 200 negociaciones exitosas',
    stats: '95% satisfacción'
  },
]

const packages = [
  {
    name: 'Básico',
    price: '$1,500',
    description: 'Para negociaciones puntuales',
    features: [
      'Asesoría estratégica',
      'Preparación de documentos',
      'Hasta 3 reuniones',
      'Revisión de contrato',
      'Seguimiento 1 mes'
    ],
    color: 'border-gray-300'
  },
  {
    name: 'Profesional',
    price: '$3,500',
    description: 'Para procesos complejos',
    features: [
      'Todo lo del plan Básico',
      'Representación en negociaciones',
      'Due diligence básico',
      'Hasta 10 reuniones',
      'Redacción de contratos',
      'Seguimiento 3 meses'
    ],
    color: 'border-blue-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Personalizado',
    description: 'Para M&A y alianzas estratégicas',
    features: [
      'Todo lo del plan Profesional',
      'Due diligence completo',
      'Valoración de empresas',
      'Reuniones ilimitadas',
      'Equipo dedicado',
      'Seguimiento continuo'
    ],
    color: 'border-purple-500'
  },
]

export default function NegociacionesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Negociaciones Empresariales
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Mediación y representación profesional en negociaciones estratégicas.
              Maximizamos el valor y protegemos tus intereses en cada acuerdo.
            </p>
            <Link href="#servicios">
              <Button size="lg" variant="secondary">
                Conocer Servicios
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
              Experiencia que Marca la Diferencia
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Con más de 15 años de experiencia en negociaciones empresariales, nuestro equipo
              ha participado en operaciones por más de $500 millones en diversos sectores.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Combinamos conocimiento técnico, habilidades negociadoras y expertise legal
              para lograr los mejores resultados para nuestros clientes.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <p className="text-corporate-gray-medium">Negociaciones</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$500M+</div>
              <p className="text-corporate-gray-medium">En Operaciones</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-corporate-gray-medium">Acuerdos Exitosos</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-corporate-gray-medium">Años Experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Servicios de Negociación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-corporate-gray-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestro Proceso
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-corporate-gray-medium text-sm mb-4">{item.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-16">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-corporate-gray-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Beneficios de Nuestros Servicios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-3">{benefit.description}</p>
                  <div className="text-lg font-bold text-blue-600">{benefit.stats}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Paquetes de Servicio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 border-2 ${pkg.color} ${pkg.popular ? 'shadow-xl scale-105' : 'shadow-md'} hover:shadow-2xl transition-all`}
              >
                {pkg.popular && (
                  <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-3">{pkg.price}</div>
                <p className="text-corporate-gray-medium mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  Solicitar
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Necesitas Apoyo en una Negociación?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a lograr mejores resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Agendar Consulta Gratuita
            </Button>
            <Link href="/servicios-corporativos">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
