import { Button } from '@/components/ui/button'
import { TrendingDown, DollarSign, Users, FileText, CheckCircle, Clock,
         AlertTriangle, Shield, Target, Scale, BookOpen, XCircle } from 'lucide-react'
import Link from 'next/link'

const reasons = [
  {
    icon: DollarSign,
    title: 'Devolución a Accionistas',
    description: 'Retorno de capital a los socios',
    examples: [
      'Liquidez para accionistas',
      'Retiro parcial de socios',
      'Distribución de excedentes',
      'Recompra de acciones'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: XCircle,
    title: 'Absorción de Pérdidas',
    description: 'Ajuste por resultados negativos',
    examples: [
      'Pérdidas acumuladas',
      'Saneamiento financiero',
      'Ajuste patrimonial',
      'Equilibrio contable'
    ],
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Target,
    title: 'Reestructuración',
    description: 'Optimización de la estructura de capital',
    examples: [
      'Ajuste a necesidades reales',
      'Eliminación de capital ocioso',
      'Simplificación accionaria',
      'Preparación para fusión'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Users,
    title: 'Salida de Socios',
    description: 'Retiro de accionistas',
    examples: [
      'Separación de socios',
      'Sucesiones familiares',
      'Compra de participaciones',
      'Resolución de conflictos'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
]

const methods = [
  {
    name: 'Reducción con Devolución',
    description: 'Retorno efectivo de capital a accionistas',
    icon: DollarSign,
    process: 'Se devuelve dinero o activos a los socios en proporción a su participación',
    requirements: [
      'Disponibilidad de recursos',
      'Publicación de edictos',
      'Derecho de oposición (45 días)',
      'Aprobación de acreedores'
    ],
    timeline: '3-4 meses',
    risk: 'Alto',
    cost: 'Desde $1,000'
  },
  {
    name: 'Reducción por Pérdidas',
    description: 'Absorción de pérdidas acumuladas',
    icon: XCircle,
    process: 'Se reduce el capital para absorber pérdidas del balance',
    requirements: [
      'Estados financieros auditados',
      'Junta general de accionistas',
      'Reforma de estatutos',
      'Sin devolución a socios'
    ],
    timeline: '6-8 semanas',
    risk: 'Bajo',
    cost: 'Desde $600'
  },
  {
    name: 'Amortización de Acciones',
    description: 'Extinción de acciones propias',
    icon: Target,
    process: 'La empresa compra y cancela sus propias acciones',
    requirements: [
      'Utilidades disponibles',
      'Acuerdo con accionistas',
      'Precio justo de recompra',
      'Cumplimiento legal'
    ],
    timeline: '2-3 meses',
    risk: 'Medio',
    cost: 'Desde $800'
  },
  {
    name: 'Condonación de Dividendos',
    description: 'Los socios renuncian a dividendos',
    icon: Users,
    process: 'Dividendos declarados se usan para reducir capital',
    requirements: [
      'Dividendos ya declarados',
      'Acuerdo unánime',
      'Documentación formal',
      'Registro contable'
    ],
    timeline: '4-6 semanas',
    risk: 'Bajo',
    cost: 'Desde $500'
  },
]

const process = [
  {
    step: '1',
    title: 'Evaluación Inicial',
    description: 'Análisis de viabilidad y método',
    icon: Target,
    time: '1 semana',
    activities: [
      'Revisión de estados financieros',
      'Análisis de viabilidad legal',
      'Evaluación de impacto',
      'Selección de método'
    ]
  },
  {
    step: '2',
    title: 'Junta de Accionistas',
    description: 'Aprobación de la reducción',
    icon: Users,
    time: '2 semanas',
    activities: [
      'Convocatoria a junta',
      'Presentación de propuesta',
      'Votación y aprobación',
      'Levantamiento de acta'
    ]
  },
  {
    step: '3',
    title: 'Publicación y Oposición',
    description: 'Protección de acreedores (si aplica)',
    icon: AlertTriangle,
    time: '45 días',
    activities: [
      'Publicación de edictos',
      'Período de oposición',
      'Atención de reclamos',
      'Certificado de no oposición'
    ]
  },
  {
    step: '4',
    title: 'Formalización',
    description: 'Escritura pública e inscripción',
    icon: FileText,
    time: '3-4 semanas',
    activities: [
      'Reforma de estatutos',
      'Escritura pública',
      'Inscripción en registro',
      'Actualización de RUC'
    ]
  },
]

const considerations = [
  {
    title: 'Capital Mínimo Legal',
    icon: Scale,
    description: 'La reducción no puede dejar el capital por debajo del mínimo legal establecido para el tipo de sociedad.',
    importance: 'Crítico',
    color: 'bg-red-50 border-red-200'
  },
  {
    title: 'Derecho de Oposición',
    icon: Shield,
    description: 'En reducciones con devolución, los acreedores tienen 45 días para oponerse si consideran que afecta sus garantías.',
    importance: 'Alto',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    title: 'Tratamiento Fiscal',
    icon: DollarSign,
    description: 'La devolución puede generar utilidades gravables. La reducción por pérdidas puede afectar arrastre de pérdidas fiscales.',
    importance: 'Alto',
    color: 'bg-yellow-50 border-yellow-200'
  },
  {
    title: 'Impacto en Contratos',
    icon: FileText,
    description: 'Algunos contratos (préstamos, franquicias) pueden tener cláusulas que restrinjan la reducción de capital.',
    importance: 'Medio',
    color: 'bg-blue-50 border-blue-200'
  },
]

const comparison = {
  headers: ['Aspecto', 'Con Devolución', 'Por Pérdidas', 'Amortización'],
  rows: [
    ['Objetivo', 'Retornar recursos', 'Sanear balance', 'Reestructurar'],
    ['Flujo de efectivo', 'Salida de caja', 'Sin impacto', 'Salida de caja'],
    ['Período oposición', 'Sí (45 días)', 'No', 'Sí (45 días)'],
    ['Tiempo total', '3-4 meses', '6-8 semanas', '2-3 meses'],
    ['Complejidad', 'Alta', 'Media', 'Media'],
    ['Costo aprox.', '$1,000-$1,500', '$600-$900', '$800-$1,200'],
    ['Riesgo legal', 'Alto', 'Bajo', 'Medio'],
  ]
}

const faqs = [
  {
    question: '¿Cuándo es obligatorio reducir el capital?',
    answer: 'Es obligatorio reducir el capital cuando las pérdidas acumuladas superan el 50% del capital social, según la Ley de Compañías. La empresa debe convocar una junta extraordinaria para decidir la reducción o disolución.'
  },
  {
    question: '¿Qué pasa si un acreedor se opone?',
    answer: 'Si hay oposición fundada, la reducción no puede ejecutarse hasta que se pague la deuda, se garantice el pago, o se llegue a un acuerdo con el acreedor. El proceso se suspende hasta resolver la oposición.'
  },
  {
    question: '¿Se puede reducir el capital por debajo del mínimo legal?',
    answer: 'No. Las S.A. deben mantener mínimo $800 y las Cía. Ltda. $400. Si la reducción obligatoria por pérdidas deja el capital bajo ese mínimo, la empresa debe transformarse o disolverse.'
  },
  {
    question: '¿La reducción afecta el porcentaje de participación?',
    answer: 'Depende del método. Si todos los socios participan proporcionalmente, los porcentajes se mantienen. Si solo algunos reducen, las participaciones se ajustan proporcionalmente.'
  },
  {
    question: '¿Hay implicaciones fiscales en la devolución?',
    answer: 'Sí. Si la devolución excede el capital aportado originalmente, el exceso se considera utilidad y está sujeto a Impuesto a la Renta. Se requiere análisis fiscal detallado.'
  },
  {
    question: '¿Cuánto cuesta el proceso completo?',
    answer: 'Los costos totales incluyen: honorarios profesionales ($600-$1,500), publicaciones ($150-$250), notaría ($150-$400), registro ($100-$200), y trámites varios ($100-$200). Total aproximado: $1,100-$2,550.'
  },
]

export default function DisminucionCapitalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Disminución de Capital
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Asesoría especializada en procesos de reducción de capital social. Gestionamos
              desde el análisis de viabilidad hasta la inscripción registral.
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
              ¿Por Qué Reducir el Capital?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              La reducción de capital puede ser necesaria por razones financieras, estratégicas
              o de reestructuración societaria.
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
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
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
            Métodos de Reducción
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {methods.map((method, index) => {
              const Icon = method.icon
              const riskColors: Record<string, string> = {
                'Alto': 'text-red-600 bg-red-100',
                'Medio': 'text-orange-600 bg-orange-100',
                'Bajo': 'text-green-600 bg-green-100'
              }
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                      <p className="text-corporate-gray-medium text-sm">{method.description}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-corporate-gray-medium italic">{method.process}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Requisitos:</h4>
                    <ul className="space-y-2">
                      {method.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-corporate-gray-medium">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-corporate-gray-medium mb-1">Tiempo</p>
                      <p className="font-semibold text-sm">{method.timeline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-corporate-gray-medium mb-1">Riesgo</p>
                      <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${riskColors[method.risk]}`}>
                        {method.risk}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-corporate-gray-medium mb-1">Costo</p>
                      <p className="font-semibold text-sm text-slate-600">{method.cost}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Comparación de Métodos
          </h2>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-slate-700 text-white">
                <tr>
                  {comparison.headers.map((header, index) => (
                    <th key={index} className="px-6 py-4 text-left font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 text-sm ${cellIndex === 0 ? 'font-semibold text-corporate-purple' : 'text-corporate-gray-medium'}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Proceso de Reducción
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
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-600 text-white flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-slate-600" />
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-corporate-gray-medium text-sm mb-3">{item.description}</p>
                        <div className="flex items-center gap-2 text-xs text-slate-700 mb-4">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{item.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-16">
                      <ul className="space-y-1">
                        {item.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mr-2" />
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

      {/* Consideraciones */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Consideraciones Importantes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {considerations.map((item, index) => {
              const Icon = item.icon
              const importanceColors: Record<string, string> = {
                'Crítico': 'bg-red-600',
                'Alto': 'bg-orange-600',
                'Medio': 'bg-blue-600'
              }
              return (
                <div
                  key={index}
                  className={`border-2 ${item.color} rounded-lg p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-slate-700 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <span className={`inline-block px-2 py-1 rounded text-xs font-semibold text-white ${importanceColors[item.importance]}`}>
                          {item.importance}
                        </span>
                      </div>
                      <p className="text-sm text-corporate-gray-medium leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-corporate-purple mb-3">{faq.question}</h3>
                <p className="text-corporate-gray-medium leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-slate-600 to-zinc-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Necesitas Reducir el Capital?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una evaluación gratuita y te ayudaremos a elegir el mejor método
            para tu situación particular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Evaluación Gratuita
            </Button>
            <Link href="/servicios-corporativos">
              <Button size="lg" variant="outline" className="bg-white text-slate-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
