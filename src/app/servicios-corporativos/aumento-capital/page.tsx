import { Button } from '@/components/ui/button'
import { TrendingUp, DollarSign, Users, FileText, CheckCircle, Clock,
         Building, Shield, Target, AlertCircle, BookOpen, Scale } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: TrendingUp,
    title: 'Expansión del Negocio',
    description: 'Financiar crecimiento y nuevos proyectos',
    examples: [
      'Apertura de nuevas sucursales',
      'Lanzamiento de productos',
      'Expansión geográfica',
      'Adquisición de activos'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Shield,
    title: 'Fortalecimiento Financiero',
    description: 'Mejorar la estructura de capital',
    examples: [
      'Reducción de endeudamiento',
      'Mejora de ratios financieros',
      'Mayor solvencia',
      'Acceso a nuevos créditos'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Users,
    title: 'Entrada de Socios',
    description: 'Incorporación de nuevos accionistas',
    examples: [
      'Inversionistas estratégicos',
      'Socios operativos',
      'Fondos de inversión',
      'Familiares del negocio'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Target,
    title: 'Cumplimiento Legal',
    description: 'Satisfacer requisitos normativos',
    examples: [
      'Capital mínimo legal',
      'Requisitos sectoriales',
      'Licencias y permisos',
      'Capitalización bancaria'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
]

const methods = [
  {
    name: 'Capitalización de Utilidades',
    description: 'Conversión de utilidades retenidas en capital',
    icon: TrendingUp,
    advantages: [
      'No requiere aporte de efectivo',
      'Proceso más simple',
      'Menor costo',
      'Fortalece patrimonio'
    ],
    considerations: [
      'Requiere utilidades disponibles',
      'Afecta distribución de dividendos',
      'Debe aprobarse en junta'
    ],
    cost: 'Desde $500'
  },
  {
    name: 'Nuevos Aportes en Efectivo',
    description: 'Aporte de dinero por socios actuales o nuevos',
    icon: DollarSign,
    advantages: [
      'Inyección inmediata de recursos',
      'Flexibilidad en montos',
      'Puede incorporar nuevos socios',
      'Mejora liquidez'
    ],
    considerations: [
      'Requiere disponibilidad de recursos',
      'Puede diluir participaciones',
      'Valoración de la empresa'
    ],
    cost: 'Desde $800'
  },
  {
    name: 'Capitalización de Créditos',
    description: 'Conversión de deuda en capital',
    icon: Scale,
    advantages: [
      'Reduce endeudamiento',
      'Mejora ratios financieros',
      'No requiere efectivo',
      'Fortalece balance'
    ],
    considerations: [
      'Acreedor se vuelve socio',
      'Requiere acuerdo con acreedores',
      'Valoración de pasivos'
    ],
    cost: 'Desde $1,200'
  },
  {
    name: 'Aporte de Bienes',
    description: 'Capitalización mediante activos',
    icon: Building,
    advantages: [
      'No requiere efectivo',
      'Incorpora activos productivos',
      'Puede generar ventajas fiscales',
      'Fortalece activos'
    ],
    considerations: [
      'Requiere avalúo pericial',
      'Transferencia de dominio',
      'Costos notariales adicionales'
    ],
    cost: 'Desde $1,500'
  },
]

const process = [
  {
    step: '1',
    title: 'Junta General de Accionistas',
    description: 'Aprobación del aumento de capital',
    icon: Users,
    time: '1-2 semanas',
    deliverables: ['Convocatoria', 'Acta de junta', 'Resoluciones']
  },
  {
    step: '2',
    title: 'Suscripción y Pago',
    description: 'Formalización de aportes',
    icon: FileText,
    time: '1-4 semanas',
    deliverables: ['Declaraciones de suscripción', 'Comprobantes de pago', 'Avalúos si aplica']
  },
  {
    step: '3',
    title: 'Reforma de Estatutos',
    description: 'Modificación del capital social',
    icon: BookOpen,
    time: '1 semana',
    deliverables: ['Escritura pública', 'Estatutos reformados']
  },
  {
    step: '4',
    title: 'Inscripción Registral',
    description: 'Registro en entidades públicas',
    icon: CheckCircle,
    time: '2-3 semanas',
    deliverables: ['Razón de inscripción', 'RUC actualizado', 'Certificados']
  },
]

const requirements = [
  {
    category: 'Documentos Corporativos',
    items: [
      'Escritura de constitución vigente',
      'Estatutos actualizados',
      'Nómina de accionistas actualizada',
      'Certificados de acciones',
      'Última reforma (si existe)'
    ]
  },
  {
    category: 'Información Financiera',
    items: [
      'Estados financieros recientes',
      'Declaraciones de impuestos',
      'RUC actualizado',
      'Certificado de cumplimiento tributario',
      'Balance de situación'
    ]
  },
  {
    category: 'Documentos de Socios',
    items: [
      'Cédulas de identidad',
      'Certificado de votación',
      'Papeleta de votación',
      'Cargas familiares (si aplica)',
      'Estados de cuenta (para aportes)'
    ]
  },
  {
    category: 'Según Tipo de Aporte',
    items: [
      'Avalúo pericial (bienes)',
      'Certificados de depósito (efectivo)',
      'Documentos de créditos (capitalización)',
      'Títulos de propiedad (inmuebles)',
      'Facturas y documentos de soporte'
    ]
  },
]

const faqs = [
  {
    question: '¿Cuánto tiempo tarda el proceso completo?',
    answer: 'El proceso típico toma entre 6 a 12 semanas, dependiendo del método de capitalización, complejidad de la operación y tiempos de respuesta de las entidades públicas.'
  },
  {
    question: '¿Todos los socios deben participar en el aumento?',
    answer: 'No necesariamente. Los socios tienen derecho preferente, pero pueden renunciar a él. Si no participan, su porcentaje de participación se diluirá proporcionalmente.'
  },
  {
    question: '¿Hay implicaciones fiscales?',
    answer: 'Generalmente el aumento de capital no genera impuestos directos, pero sí puede tener implicaciones en ISD (para aportes en efectivo desde el exterior), Impuesto a la Renta (capitalización de utilidades) y otros según el caso.'
  },
  {
    question: '¿Se pueden incorporar nuevos socios?',
    answer: 'Sí, el aumento de capital es una excelente oportunidad para incorporar nuevos accionistas. Requiere valoración de la empresa y negociación de términos de entrada.'
  },
  {
    question: '¿Cuál es el costo total del proceso?',
    answer: 'Los costos varían según el método y monto. Incluyen: honorarios profesionales ($500-$2,500), notaría ($200-$800), registro ($100-$300), publicaciones ($50-$100), y avalúos si aplica ($300-$1,000).'
  },
  {
    question: '¿Qué pasa si no se completa el aumento aprobado?',
    answer: 'Si el aumento aprobado no se suscribe y paga en el plazo establecido, la reforma queda sin efecto. Se requiere nueva junta para aprobar nuevas condiciones o cancelar el proceso.'
  },
]

export default function AumentoCapitalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Aumento de Capital
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Asesoría integral en procesos de capitalización empresarial. Desde la estrategia
              hasta la inscripción registral, acompañamos cada paso del proceso.
            </p>
            <Link href="#metodos">
              <Button size="lg" variant="secondary">
                Ver Métodos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Razones */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-6">
              ¿Por Qué Aumentar el Capital?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              El aumento de capital es una decisión estratégica que puede impulsar
              el crecimiento de tu empresa o fortalecer su estructura financiera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg ${reason.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{reason.description}</p>
                  <ul className="space-y-2">
                    {reason.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-corporate-gray-medium">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Métodos */}
      <section id="metodos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Métodos de Capitalización
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {methods.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                      <p className="text-corporate-gray-medium">{method.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-green-700 mb-3">✓ Ventajas:</h4>
                    <ul className="space-y-2">
                      {method.advantages.map((adv, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-corporate-gray-medium">{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-orange-700 mb-3">⚠ Consideraciones:</h4>
                    <ul className="space-y-2">
                      {method.considerations.map((cons, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <AlertCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-corporate-gray-medium">{cons}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-corporate-gray-medium">Costo estimado:</span>
                    <span className="text-lg font-bold text-emerald-600">{method.cost}</span>
                  </div>
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
            Proceso de Aumento de Capital
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-emerald-600" />
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-corporate-gray-medium text-sm mb-3">{item.description}</p>
                        <div className="flex items-center gap-2 text-xs text-emerald-700 mb-4">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-16">
                      <p className="text-xs font-semibold text-corporate-gray-dark mb-2">Entregables:</p>
                      <ul className="space-y-1">
                        {item.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Tiempo Total Estimado</h4>
                  <p className="text-sm text-blue-800">
                    El proceso completo toma entre <strong>6 a 12 semanas</strong>, dependiendo de la complejidad
                    de la operación, método de capitalización seleccionado y tiempos de respuesta de las entidades públicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Requisitos Documentales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold mb-4 text-emerald-700">{req.category}</h3>
                <ul className="space-y-2">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-corporate-gray-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Importante</h4>
                <p className="text-sm text-amber-800">
                  Los requisitos específicos pueden variar según el tipo de empresa, método de capitalización
                  y circunstancias particulares. Contáctanos para una evaluación personalizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-corporate-purple mb-3">{faq.question}</h3>
                <p className="text-corporate-gray-medium leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Capitalizar tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una consulta gratuita y te ayudaremos a elegir el mejor método
            de capitalización para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Consulta Gratuita
            </Button>
            <Link href="/servicios-corporativos">
              <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
