import { Button } from '@/components/ui/button'
import { DollarSign, TrendingUp, PieChart, Target, Users, FileText, CheckCircle,
         Clock, BarChart3, Calculator, Shield, Lightbulb } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: PieChart,
    title: 'Análisis Financiero',
    description: 'Diagnóstico integral de la salud financiera',
    items: [
      'Análisis de estados financieros',
      'Ratios e indicadores',
      'Análisis de rentabilidad',
      'Evaluación de liquidez',
      'Estructura de capital',
      'Benchmarking sectorial'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Target,
    title: 'Planeación Estratégica',
    description: 'Desarrollo de estrategias financieras',
    items: [
      'Plan financiero a 3-5 años',
      'Presupuestos maestros',
      'Proyecciones financieras',
      'Escenarios y sensibilidad',
      'Plan de inversiones',
      'Estrategia de financiamiento'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: BarChart3,
    title: 'Optimización de Capital',
    description: 'Mejora en estructura y uso de recursos',
    items: [
      'Estructura óptima de capital',
      'Gestión de capital de trabajo',
      'Reducción de costos',
      'Optimización fiscal',
      'Gestión de tesorería',
      'Eficiencia operativa'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: TrendingUp,
    title: 'Financiamiento',
    description: 'Asesoría en obtención de recursos',
    items: [
      'Identificación de fuentes',
      'Estructuración de operaciones',
      'Negociación con entidades',
      'Due diligence financiero',
      'Levantamiento de capital',
      'Inversionistas estratégicos'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
]

const industries = [
  {
    name: 'Manufactura',
    icon: '🏭',
    expertise: ['Gestión de inventarios', 'Control de costos', 'Optimización de producción']
  },
  {
    name: 'Retail',
    icon: '🛍️',
    expertise: ['Flujo de caja', 'Gestión de puntos de venta', 'Análisis de márgenes']
  },
  {
    name: 'Servicios',
    icon: '💼',
    expertise: ['Pricing de servicios', 'Gestión de proyectos', 'Control presupuestario']
  },
  {
    name: 'Tecnología',
    icon: '💻',
    expertise: ['Valoración de startups', 'Fundraising', 'Métricas SaaS']
  },
  {
    name: 'Construcción',
    icon: '🏗️',
    expertise: ['Flujos de proyecto', 'Financiamiento de obras', 'Control de avance']
  },
  {
    name: 'Agroindustria',
    icon: '🌾',
    expertise: ['Ciclos productivos', 'Costos agrícolas', 'Financiamiento rural']
  },
]

const process = [
  {
    step: '1',
    title: 'Diagnóstico Inicial',
    description: 'Evaluación completa de la situación actual',
    icon: Calculator,
    activities: [
      'Reunión inicial con directivos',
      'Revisión de información financiera',
      'Identificación de problemáticas',
      'Definición de objetivos'
    ],
    time: '1-2 semanas'
  },
  {
    step: '2',
    title: 'Análisis Profundo',
    description: 'Estudio detallado de todas las áreas',
    icon: PieChart,
    activities: [
      'Análisis de estados financieros',
      'Evaluación de procesos',
      'Benchmarking sectorial',
      'Identificación de oportunidades'
    ],
    time: '2-3 semanas'
  },
  {
    step: '3',
    title: 'Diseño de Estrategia',
    description: 'Desarrollo de plan de acción',
    icon: Lightbulb,
    activities: [
      'Formulación de estrategias',
      'Proyecciones financieras',
      'Plan de implementación',
      'Definición de KPIs'
    ],
    time: '2 semanas'
  },
  {
    step: '4',
    title: 'Implementación',
    description: 'Ejecución del plan con acompañamiento',
    icon: Target,
    activities: [
      'Puesta en marcha',
      'Capacitación del equipo',
      'Monitoreo de avances',
      'Ajustes necesarios'
    ],
    time: '3-6 meses'
  },
]

const packages = [
  {
    name: 'Consultoría Puntual',
    price: '$800',
    duration: '1 mes',
    description: 'Para resolver problemáticas específicas',
    features: [
      'Diagnóstico financiero',
      'Análisis de problema específico',
      'Recomendaciones',
      '2 reuniones de seguimiento',
      'Informe ejecutivo'
    ],
    ideal: 'Empresas con necesidad puntual',
    color: 'border-gray-300'
  },
  {
    name: 'Asesoría Integral',
    price: '$2,500',
    duration: '3 meses',
    description: 'Acompañamiento completo',
    features: [
      'Todo lo del plan Puntual',
      'Plan estratégico financiero',
      'Proyecciones a 3 años',
      'Optimización de procesos',
      'Reuniones quincenales',
      'Soporte continuo',
      'Dashboard financiero'
    ],
    ideal: 'Empresas en crecimiento',
    color: 'border-blue-500',
    popular: true
  },
  {
    name: 'CFO Virtual',
    price: '$1,500/mes',
    duration: 'Continuo',
    description: 'Director financiero externo',
    features: [
      'Todo lo del plan Integral',
      'Dirección financiera completa',
      'Participación en directorio',
      'Gestión de tesorería',
      'Relación con bancos',
      'Disponibilidad permanente',
      'Equipo de soporte'
    ],
    ideal: 'Empresas establecidas',
    color: 'border-purple-500'
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Mejora de Rentabilidad',
    description: 'Incremento promedio del 25% en márgenes',
    stats: '+25% rentabilidad'
  },
  {
    icon: DollarSign,
    title: 'Reducción de Costos',
    description: 'Identificación de ahorros significativos',
    stats: '-15% costos'
  },
  {
    icon: Shield,
    title: 'Mejor Control',
    description: 'Sistemas de información y monitoreo',
    stats: '100% visibilidad'
  },
  {
    icon: Clock,
    title: 'Decisiones Ágiles',
    description: 'Información oportuna para decidir',
    stats: '50% más rápido'
  },
]

const tools = [
  'Modelos financieros personalizados',
  'Dashboards de Power BI',
  'Plantillas de presupuestos',
  'Análisis de sensibilidad',
  'Reportes ejecutivos',
  'KPI tracking',
  'Proyecciones automatizadas',
  'Análisis de escenarios'
]

export default function AsesoriaFinancieraPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Asesoría Financiera Integral
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Consultoría financiera estratégica para empresas que buscan optimizar recursos,
              mejorar rentabilidad y tomar decisiones informadas.
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
              Tu Aliado Financiero Estratégico
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Más de 15 años ayudando a empresas a maximizar su valor. Combinamos expertise
              financiero con profundo conocimiento de negocios para entregar soluciones prácticas.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              No solo analizamos números, entendemos tu negocio y te ayudamos a alcanzar
              tus objetivos estratégicos.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-corporate-gray-medium">Empresas Asesoradas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-corporate-gray-medium">Años Experiencia</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <p className="text-corporate-gray-medium">Mejora Promedio</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-corporate-gray-medium">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestros Servicios
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

      {/* Industrias */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Sectores que Atendemos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold mb-3">{industry.name}</h3>
                <ul className="space-y-1">
                  {industry.expertise.map((item, idx) => (
                    <li key={idx} className="text-xs text-corporate-gray-medium">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestro Proceso
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg hover:shadow-md transition-shadow"
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
                        <p className="text-corporate-gray-medium text-sm mb-3">{item.description}</p>
                        <div className="flex items-center gap-2 text-xs text-blue-700 mb-4">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-16">
                      <ul className="space-y-1">
                        {item.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Resultados que Obtendrás
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
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

      {/* Herramientas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Herramientas que Utilizamos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Modalidades de Servicio
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
                <div className="text-3xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                <div className="text-sm text-corporate-gray-medium mb-3">{pkg.duration}</div>
                <p className="text-corporate-gray-medium mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-3 rounded-lg mb-6">
                  <p className="text-xs text-corporate-gray-medium">
                    <strong>Ideal para:</strong> {pkg.ideal}
                  </p>
                </div>
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
          <h2 className="heading-3 mb-6">¿Listo para Optimizar tus Finanzas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una consulta gratuita de 30 minutos y descubre cómo podemos
            ayudarte a alcanzar tus objetivos financieros.
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
