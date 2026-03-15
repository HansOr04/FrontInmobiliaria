import { Button } from '@/components/ui/button'
import { FileCheck, Shield, AlertTriangle, CheckCircle, FileText, Scale,
         Building, Users, Clock, Target, BookOpen, AlertCircle, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const regulations = [
  {
    icon: Scale,
    title: 'Ley de Propiedad Horizontal',
    description: 'Cumplimiento de la normativa de copropiedades',
    items: [
      'Derechos y obligaciones de copropietarios',
      'Régimen de alícuotas',
      'Asambleas y votaciones',
      'Reglamento interno',
      'Sanciones y multas',
      'Uso de áreas comunes'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Building,
    title: 'Normativa Municipal',
    description: 'Regulaciones locales y permisos',
    items: [
      'Permisos de construcción',
      'Licencias de funcionamiento',
      'Ordenanzas municipales',
      'Impuestos prediales',
      'Uso de suelo',
      'Patentes'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Shield,
    title: 'Seguridad y Prevención',
    description: 'Normativas de seguridad e higiene',
    items: [
      'Plan de emergencias',
      'Señalética de seguridad',
      'Extintores y detectores',
      'Salidas de emergencia',
      'Inspecciones del cuerpo de bomberos',
      'Protocolo de evacuación'
    ],
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: FileText,
    title: 'Normativa Laboral',
    description: 'Cumplimiento de leyes laborales',
    items: [
      'Contratos de trabajo',
      'Afiliación al IESS',
      'Salarios y beneficios',
      'Seguridad ocupacional',
      'Reglamento interno de trabajo',
      'Liquidaciones'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: BookOpen,
    title: 'Normativa Ambiental',
    description: 'Regulaciones ambientales',
    items: [
      'Manejo de desechos',
      'Reciclaje y clasificación',
      'Áreas verdes',
      'Ruido y contaminación',
      'Efluentes y aguas residuales',
      'Certificaciones ambientales'
    ],
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: FileCheck,
    title: 'Normativa Contable-Tributaria',
    description: 'Obligaciones fiscales y contables',
    items: [
      'Declaraciones de IVA',
      'Retenciones en la fuente',
      'Anexos transaccionales',
      'Comprobantes electrónicos',
      'Libro de actas',
      'Estados financieros'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
]

const consequences = [
  {
    icon: AlertTriangle,
    title: 'Multas y Sanciones',
    description: 'Municipios y organismos de control',
    examples: ['Hasta $10,000 por incumplimientos', 'Clausura temporal', 'Órdenes de paralización'],
    severity: 'Alta',
    color: 'bg-red-100 border-red-300 text-red-700'
  },
  {
    icon: Scale,
    title: 'Demandas Legales',
    description: 'Copropietarios o terceros afectados',
    examples: ['Demandas civiles', 'Procesos penales', 'Indemnizaciones'],
    severity: 'Muy Alta',
    color: 'bg-red-100 border-red-300 text-red-700'
  },
  {
    icon: Shield,
    title: 'Accidentes y Responsabilidad',
    description: 'Por falta de medidas de seguridad',
    examples: ['Lesiones a residentes', 'Daños a terceros', 'Responsabilidad civil'],
    severity: 'Muy Alta',
    color: 'bg-red-100 border-red-300 text-red-700'
  },
  {
    icon: Building,
    title: 'Pérdida de Valor',
    description: 'Deterioro del valor de las propiedades',
    examples: ['Dificultad para vender', 'Precios reducidos', 'Mala reputación'],
    severity: 'Media',
    color: 'bg-yellow-100 border-yellow-300 text-yellow-700'
  },
]

const ourServices = [
  {
    service: 'Auditoría de Cumplimiento',
    description: 'Evaluación completa del estado de cumplimiento',
    deliverable: 'Informe detallado con hallazgos',
    duration: '1-2 semanas'
  },
  {
    service: 'Plan de Regularización',
    description: 'Estrategia para cumplir con todas las normativas',
    deliverable: 'Plan de acción con cronograma',
    duration: '1 semana'
  },
  {
    service: 'Implementación',
    description: 'Ejecución del plan de regularización',
    deliverable: 'Cumplimiento normativo completo',
    duration: '1-3 meses'
  },
  {
    service: 'Monitoreo Continuo',
    description: 'Seguimiento permanente de cambios normativos',
    deliverable: 'Alertas y actualizaciones',
    duration: 'Continuo'
  },
  {
    service: 'Asesoría Permanente',
    description: 'Consultas sobre cumplimiento normativo',
    deliverable: 'Respuestas y orientación',
    duration: '24/7'
  },
  {
    service: 'Gestión de Trámites',
    description: 'Obtención de permisos y licencias',
    deliverable: 'Permisos aprobados',
    duration: 'Variable'
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Protección Legal',
    description: 'Evita multas, sanciones y demandas',
    impact: 'Ahorro potencial: $5,000 - $50,000 anuales'
  },
  {
    icon: TrendingUp,
    title: 'Valor de Propiedades',
    description: 'Mantiene y aumenta el valor del inmueble',
    impact: 'Incremento del 5-10% en valor'
  },
  {
    icon: Users,
    title: 'Tranquilidad',
    description: 'Copropietarios y residentes seguros',
    impact: 'Mayor satisfacción y armonía'
  },
  {
    icon: CheckCircle,
    title: 'Imagen Profesional',
    description: 'Demuestra gestión seria y responsable',
    impact: 'Reputación mejorada'
  },
]

export default function GestionNormativaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Gestión Normativa
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Cumplimiento integral de normativas y regulaciones inmobiliarias.
              Protege tu inversión y evita sanciones legales.
            </p>
            <Link href="#contacto">
              <Button size="lg" variant="secondary">
                Solicitar Auditoría
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
              ¿Por Qué es Importante el Cumplimiento Normativo?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Las urbanizaciones y condominios deben cumplir con múltiples regulaciones:
              propiedad horizontal, municipales, laborales, de seguridad, ambientales y tributarias.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              El incumplimiento puede resultar en multas millonarias, demandas legales, accidentes
              graves y pérdida del valor de las propiedades. Una gestión normativa adecuada no es
              opcional, es fundamental.
            </p>
          </div>

          {/* Alerta */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-3">⚠️ Estadísticas Alarmantes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-1">65%</div>
                    <p className="text-sm text-red-800">De condominios tienen algún incumplimiento</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-1">$15K</div>
                    <p className="text-sm text-red-800">Multa promedio por infracciones</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-1">30%</div>
                    <p className="text-sm text-red-800">De demandas por incumplimientos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Normativas principales */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Principales Normativas que Gestionamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulations.map((reg, index) => {
              const Icon = reg.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg ${reg.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reg.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{reg.description}</p>
                  <ul className="space-y-2">
                    {reg.items.map((item, idx) => (
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

      {/* Consecuencias del incumplimiento */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Consecuencias del Incumplimiento
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {consequences.map((consequence, index) => {
              const Icon = consequence.icon
              return (
                <div
                  key={index}
                  className={`${consequence.color} border-2 rounded-xl p-6`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{consequence.title}</h3>
                      <p className="text-sm opacity-90">{consequence.description}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      consequence.severity === 'Muy Alta' ? 'bg-red-600 text-white' :
                      consequence.severity === 'Alta' ? 'bg-red-500 text-white' :
                      'bg-yellow-500 text-white'
                    }`}>
                      Severidad: {consequence.severity}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-2">Ejemplos:</p>
                    <ul className="space-y-1">
                      {consequence.examples.map((example, idx) => (
                        <li key={idx} className="text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestros Servicios de Gestión Normativa
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {ourServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-corporate-purple">{service.service}</h3>
                    </div>
                    <div>
                      <p className="text-sm text-corporate-gray-medium">{service.description}</p>
                    </div>
                    <div>
                      <p className="text-sm">
                        <strong className="text-corporate-purple">Entregable:</strong> {service.deliverable}
                      </p>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Beneficios de una Gestión Normativa Profesional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-3">{benefit.description}</p>
                  <p className="text-xs text-teal-600 font-semibold">{benefit.impact}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestro Proceso
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Auditoría Inicial',
                  description: 'Evaluamos el estado actual de cumplimiento en todas las áreas normativas',
                  duration: '1-2 semanas'
                },
                {
                  step: '2',
                  title: 'Informe de Hallazgos',
                  description: 'Presentamos un informe detallado con todos los incumplimientos encontrados',
                  duration: '3 días'
                },
                {
                  step: '3',
                  title: 'Plan de Regularización',
                  description: 'Diseñamos un plan con prioridades, cronograma y presupuesto',
                  duration: '1 semana'
                },
                {
                  step: '4',
                  title: 'Implementación',
                  description: 'Ejecutamos el plan: trámites, documentación, capacitaciones, etc.',
                  duration: '1-3 meses'
                },
                {
                  step: '5',
                  title: 'Verificación',
                  description: 'Verificamos que todos los incumplimientos fueron corregidos',
                  duration: '1 semana'
                },
                {
                  step: '6',
                  title: 'Monitoreo Continuo',
                  description: 'Mantenemos el cumplimiento con seguimiento permanente',
                  duration: 'Continuo'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-600 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-corporate-gray-medium mb-2">{item.description}</p>
                    <span className="text-sm text-teal-600 font-medium">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {item.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Tu Propiedad Cumple con Todas las Normativas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una auditoría gratuita y descubre tu nivel de cumplimiento normativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Auditoría Gratuita
            </Button>
            <Link href="/gestion-inmobiliaria">
              <Button size="lg" variant="outline" className="bg-white text-teal-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
