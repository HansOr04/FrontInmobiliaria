import { Button } from '@/components/ui/button'
import { Building, Users, Wrench, Shield, FileText, TrendingUp, CheckCircle,
         Calculator, Phone, Clock, Zap, DollarSign, Activity } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Calculator,
    title: 'Gestión Contable y Financiera',
    description: 'Control total de las finanzas del condominio',
    items: [
      'Cobro de alícuotas mensuales',
      'Control y gestión de morosidad',
      'Presupuestos anuales',
      'Estados financieros mensuales',
      'Conciliaciones bancarias',
      'Pago a proveedores y servicios',
      'Fondos de reserva',
      'Declaraciones tributarias'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Integral',
    description: 'Cuidado profesional de todo el edificio',
    items: [
      'Mantenimiento preventivo programado',
      'Mantenimiento correctivo 24/7',
      'Limpieza de áreas comunes',
      'Mantenimiento de ascensores',
      'Revisión de instalaciones eléctricas',
      'Plomería y sistemas sanitarios',
      'Pintura y reparaciones',
      'Control de plagas'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Users,
    title: 'Gestión Administrativa',
    description: 'Todos los procesos administrativos',
    items: [
      'Atención a copropietarios',
      'Convocatoria a asambleas',
      'Elaboración de actas',
      'Archivo de documentación',
      'Control de accesos',
      'Gestión de correspondencia',
      'Resolución de conflictos',
      'Comunicados y notificaciones'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Shield,
    title: 'Seguridad y Cumplimiento',
    description: 'Protección y cumplimiento normativo',
    items: [
      'Supervisión de seguridad',
      'Control de cámaras y alarmas',
      'Seguros del edificio',
      'Cumplimiento de normativas',
      'Reglamento interno',
      'Permisos municipales',
      'Inspecciones técnicas',
      'Asesoría legal'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
]

const differences = [
  {
    feature: 'Tipo de propiedad',
    condominio: 'Edificio vertical (departamentos)',
    urbanizacion: 'Horizontal (casas)'
  },
  {
    feature: 'Áreas comunes',
    condominio: 'Ascensores, pasillos, lobby, azotea',
    urbanizacion: 'Calles, parques, piscina, canchas'
  },
  {
    feature: 'Servicios básicos',
    condominio: 'Administración de servicios individuales',
    urbanizacion: 'Servicios comunitarios'
  },
  {
    feature: 'Mantenimiento',
    condominio: 'Estructural, fachada, instalaciones',
    urbanizacion: 'Vías, jardines, seguridad perimetral'
  },
  {
    feature: 'Administración',
    condominio: 'Más intensiva y técnica',
    urbanizacion: 'Más extensiva y operativa'
  },
]

const emergencyServices = [
  {
    icon: Phone,
    title: 'Atención 24/7',
    description: 'Línea directa para emergencias',
    response: 'Respuesta inmediata'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento Urgente',
    description: 'Técnicos disponibles cualquier hora',
    response: 'Máx. 2 horas'
  },
  {
    icon: Shield,
    title: 'Seguridad',
    description: 'Monitoreo y respuesta ante incidentes',
    response: 'Inmediato'
  },
  {
    icon: Zap,
    title: 'Servicios Básicos',
    description: 'Solución de cortes de agua/luz',
    response: 'Máx. 1 hora'
  },
]

const commonIssues = [
  {
    problem: 'Morosidad alta',
    solution: 'Sistema de cobro eficiente con recordatorios automáticos y gestión de cobranza legal',
    icon: DollarSign,
    color: 'bg-red-100 text-red-600'
  },
  {
    problem: 'Falta de transparencia',
    solution: 'Plataforma digital con estados financieros y reportes detallados en tiempo real',
    icon: FileText,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    problem: 'Mantenimiento deficiente',
    solution: 'Planes de mantenimiento preventivo con proveedores certificados y garantía',
    icon: Wrench,
    color: 'bg-orange-100 text-orange-600'
  },
  {
    problem: 'Conflictos entre copropietarios',
    solution: 'Mediación profesional y aplicación objetiva del reglamento interno',
    icon: Users,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    problem: 'Gastos descontrolados',
    solution: 'Presupuestos detallados, negociación con proveedores y auditorías mensuales',
    icon: Calculator,
    color: 'bg-green-100 text-green-600'
  },
  {
    problem: 'Incumplimiento normativo',
    solution: 'Asesoría legal permanente y gestión de permisos y licencias',
    icon: Shield,
    color: 'bg-yellow-100 text-yellow-600'
  },
]

export default function AdministracionCondominiosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Administración de Condominios
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Gestión profesional y especializada de edificios, conjuntos residenciales
              y propiedades en régimen de propiedad horizontal.
            </p>
            <Link href="#contacto">
              <Button size="lg" variant="secondary">
                Solicitar Cotización
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
              Expertos en Propiedad Horizontal
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              La administración de condominios requiere conocimientos especializados en propiedad
              horizontal, gestión financiera, mantenimiento técnico y manejo de relaciones humanas.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Con más de 20 edificios bajo nuestra gestión, somos especialistas en convertir
              condominios problemáticos en comunidades armoniosas y bien administradas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-corporate-gray-medium">Edificios</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <p className="text-corporate-gray-medium">Departamentos</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-corporate-gray-medium">Atención</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-corporate-gray-medium">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Servicios Especializados
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
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
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

      {/* Diferencias Condominio vs Urbanización */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Condominio vs Urbanización: Diferencias Clave
          </h2>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="p-4 text-left">Aspecto</th>
                  <th className="p-4 text-left">Condominio (Vertical)</th>
                  <th className="p-4 text-left">Urbanización (Horizontal)</th>
                </tr>
              </thead>
              <tbody>
                {differences.map((diff, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-4 font-semibold text-corporate-purple">{diff.feature}</td>
                    <td className="p-4 text-corporate-gray-medium">{diff.condominio}</td>
                    <td className="p-4 text-corporate-gray-medium">{diff.urbanizacion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center p-6 bg-blue-50 rounded-lg max-w-3xl mx-auto">
            <p className="text-corporate-gray-medium">
              <strong>Ambos servicios</strong> comparten el objetivo de mejorar la calidad de vida
              y mantener el valor de las propiedades, pero requieren enfoques y especialización diferentes.
            </p>
          </div>
        </div>
      </section>

      {/* Servicio de Emergencias */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Servicio de Emergencias 24/7
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-3">{service.description}</p>
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                    {service.response}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center p-8 bg-red-50 border-2 border-red-200 rounded-xl max-w-3xl mx-auto">
            <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Linea de Contacto</h3>
            <p className="text-corporate-gray-medium mb-4">
              Disponible 24 horas, 7 días a la semana para cualquier emergencia en tu condominio
            </p>
            <div className="text-3xl font-bold text-red-600">0989 266 385</div>
          </div>
        </div>
      </section>

      {/* Problemas comunes y soluciones */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Problemas Comunes y Nuestras Soluciones
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue, index) => {
              const Icon = issue.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-lg ${issue.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-3 text-corporate-purple">❌ {issue.problem}</h3>
                  <p className="text-sm text-corporate-gray-medium">
                    <strong className="text-green-600">✓ Solución:</strong> {issue.solution}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Qué incluye el servicio */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Qué Incluye Nuestro Servicio?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                category: 'Básico (Incluido)',
                items: [
                  'Administración financiera completa',
                  'Gestión de cobranza y morosidad',
                  'Convocatoria y actas de asambleas',
                  'Atención a copropietarios',
                  'Supervisión de mantenimiento',
                  'Reportes mensuales',
                  'Plataforma digital',
                  'Asesoría administrativa'
                ]
              },
              {
                category: 'Opcionales (Costo Adicional)',
                items: [
                  'Personal de seguridad 24/7',
                  'Personal de limpieza',
                  'Conserje/portero',
                  'Jardinería',
                  'Mantenimiento de piscina',
                  'Mantenimiento de ascensores',
                  'Seguros del edificio',
                  'Asesoría legal especializada'
                ]
              },
            ].map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 text-corporate-purple">{section.category}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-corporate-gray-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Cómo Empezar?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Contacto',
                  description: 'Llámanos o escríbenos para agendar una cita',
                  icon: Phone
                },
                {
                  step: '2',
                  title: 'Visita',
                  description: 'Visitamos el edificio y evaluamos su estado',
                  icon: Building
                },
                {
                  step: '3',
                  title: 'Propuesta',
                  description: 'Te enviamos una propuesta detallada con costos',
                  icon: FileText
                },
                {
                  step: '4',
                  title: 'Asamblea',
                  description: 'Presentamos a los copropietarios (si lo desean)',
                  icon: Users
                },
                {
                  step: '5',
                  title: 'Inicio',
                  description: 'Comenzamos la administración del condominio',
                  icon: CheckCircle
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-corporate-gray-medium">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Tu Edificio Necesita Mejor Administración?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una evaluación gratuita y descubre cómo podemos mejorar tu condominio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Evaluación Gratuita
            </Button>
            <Link href="/gestion-inmobiliaria">
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
