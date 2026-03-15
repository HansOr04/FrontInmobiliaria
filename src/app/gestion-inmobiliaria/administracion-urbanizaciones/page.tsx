import { Button } from '@/components/ui/button'
import { Building2, Users, Wrench, Shield, FileText, TrendingUp, CheckCircle,
         Calendar, DollarSign, Activity, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: DollarSign,
    title: 'Administración Financiera',
    description: 'Gestión completa de ingresos y gastos',
    items: [
      'Cobro de alícuotas y cuotas',
      'Control de morosidad',
      'Presupuestos anuales',
      'Estados financieros mensuales',
      'Contabilidad y tesorería',
      'Auditorías internas'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Wrench,
    title: 'Mantenimiento y Operaciones',
    description: 'Cuidado integral de áreas comunes',
    items: [
      'Mantenimiento preventivo',
      'Mantenimiento correctivo',
      'Limpieza de áreas comunes',
      'Jardinería y paisajismo',
      'Seguridad y vigilancia',
      'Gestión de proveedores'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: FileText,
    title: 'Gestión Administrativa',
    description: 'Procesos administrativos eficientes',
    items: [
      'Convocatoria a asambleas',
      'Actas y documentación',
      'Archivo y custodia',
      'Comunicados a residentes',
      'Atención de reclamos',
      'Gestión de correspondencia'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Shield,
    title: 'Cumplimiento Legal',
    description: 'Asesoría legal especializada',
    items: [
      'Reglamento interno',
      'Contratos con proveedores',
      'Gestión de cobranzas',
      'Asesoría legal',
      'Trámites municipales',
      'Permisos y licencias'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Incremento del Valor',
    description: 'Mantenimiento adecuado que preserva y aumenta el valor de las propiedades',
    stats: '+15% valor promedio'
  },
  {
    icon: DollarSign,
    title: 'Reducción de Costos',
    description: 'Negociación con proveedores y optimización de gastos operativos',
    stats: '-20% gastos operativos'
  },
  {
    icon: Users,
    title: 'Mayor Satisfacción',
    description: 'Atención profesional y respuesta rápida a necesidades de residentes',
    stats: '98% satisfacción'
  },
  {
    icon: Activity,
    title: 'Control Total',
    description: 'Reportes detallados y plataforma online para seguimiento en tiempo real',
    stats: '24/7 acceso'
  },
]

const platform = [
  {
    icon: DollarSign,
    title: 'Pagos Online',
    description: 'Paga tu alícuota desde cualquier dispositivo',
    features: ['Tarjetas de crédito/débito', 'Transferencias', 'Historial de pagos']
  },
  {
    icon: Calendar,
    title: 'Reservas',
    description: 'Reserva áreas comunes fácilmente',
    features: ['Disponibilidad en tiempo real', 'Confirmación instantánea', 'Calendario integrado']
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Reporta problemas y da seguimiento',
    features: ['Reportes con fotos', 'Estado en tiempo real', 'Notificaciones']
  },
  {
    icon: FileText,
    title: 'Documentos',
    description: 'Accede a estados de cuenta y documentos',
    features: ['Estados financieros', 'Actas', 'Reglamentos']
  },
]

export default function AdministracionUrbanizacionesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Administración de Urbanizaciones
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Gestión integral y profesional de complejos habitacionales, urbanizaciones, conjuntos residenciales cerrados y edificios.
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
              Gestión Profesional de Tu Urbanización
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Administramos tu urbanización como si fuera nuestra. Con más de 15 años de experiencia
              gestionando complejos habitacionales, ofrecemos un servicio integral que abarca desde
              la administración financiera hasta el mantenimiento de áreas comunes.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Nuestro objetivo es mejorar la calidad de vida de los residentes, mantener el valor
              de las propiedades y garantizar el cumplimiento de todas las normativas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-corporate-gray-medium">Urbanizaciones</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">3,000+</div>
              <p className="text-corporate-gray-medium">Unidades Gestionadas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-corporate-gray-medium">Años Experiencia</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <p className="text-corporate-gray-medium">Satisfacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-gray-50">
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

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Beneficios de Nuestra Gestión
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-3">{benefit.description}</p>
                  <div className="text-lg font-bold text-green-600">{benefit.stats}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Plataforma Digital */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Plataforma Digital para Residentes
          </h2>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-center text-corporate-gray-medium mb-8">
              Acceso 24/7 a toda la información de tu urbanización desde tu computadora o smartphone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platform.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2" />
                        {item}
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
            ¿Cómo Funciona?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Contacto Inicial',
                  description: 'Nos cuentas las necesidades de tu urbanización',
                  icon: Phone
                },
                {
                  step: '2',
                  title: 'Visita y Evaluación',
                  description: 'Visitamos la urbanización y evaluamos su estado',
                  icon: MapPin
                },
                {
                  step: '3',
                  title: 'Propuesta Personalizada',
                  description: 'Te enviamos una propuesta con servicios y costos',
                  icon: FileText
                },
                {
                  step: '4',
                  title: 'Presentación a la Asamblea',
                  description: 'Presentamos nuestros servicios a los residentes',
                  icon: Users
                },
                {
                  step: '5',
                  title: 'Inicio de Operaciones',
                  description: 'Comenzamos la gestión integral de la urbanización',
                  icon: CheckCircle
                },
                {
                  step: '6',
                  title: 'Gestión Continua',
                  description: 'Reportes mensuales y mejora continua',
                  icon: Activity
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg flex items-start gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-green-600" />
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

      {/* Áreas que gestionamos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Áreas Comunes que Gestionamos
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🏊', name: 'Piscinas' },
              { icon: '🏋️', name: 'Gimnasios' },
              { icon: '🎮', name: 'Salones de Juegos' },
              { icon: '🎉', name: 'Salones de Eventos' },
              { icon: '🌳', name: 'Áreas Verdes' },
              { icon: '🅿️', name: 'Parqueaderos' },
              { icon: '🎾', name: 'Canchas Deportivas' },
              { icon: '👶', name: 'Áreas Infantiles' },
              { icon: '🛡️', name: 'Garita de Seguridad' },
              { icon: '🚪', name: 'Accesos' },
              { icon: '💡', name: 'Iluminación' },
              { icon: '🚿', name: 'Instalaciones Sanitarias' },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{area.icon}</div>
                <p className="font-medium text-sm">{area.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Tu Urbanización Necesita Gestión Profesional?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una cotización sin compromiso y descubre cómo podemos mejorar tu urbanización.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Cotización
            </Button>
            <Link href="/gestion-inmobiliaria">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
