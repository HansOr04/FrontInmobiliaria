import { Button } from '@/components/ui/button'
import { Calculator, FileText, Shield, AlertTriangle, CheckCircle, Clock,
         TrendingDown, Scale, Target, Users, BookOpen, DollarSign } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Shield,
    title: 'Defensa en Determinaciones',
    description: 'Representación ante el SRI',
    items: [
      'Análisis de actos determinativos',
      'Preparación de descargos',
      'Presentación de pruebas',
      'Negociación con fiscalizadores',
      'Recursos administrativos',
      'Facilidades de pago'
    ],
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: FileText,
    title: 'Reclamos Administrativos',
    description: 'Impugnación de actos del SRI',
    items: [
      'Reclamo de glosas',
      'Reclamo de multas',
      'Reclamo de intereses',
      'Consultas tributarias',
      'Reclamo de devoluciones',
      'Procedimientos coactivos'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Scale,
    title: 'Litigio Tributario',
    description: 'Defensa judicial en materia fiscal',
    items: [
      'Acciones de impugnación',
      'Demanda contencioso-tributaria',
      'Acciones de excepción',
      'Casación tributaria',
      'Acción extraordinaria',
      'Medidas cautelares'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: TrendingDown,
    title: 'Reducción de Contingencias',
    description: 'Minimización de riesgos fiscales',
    items: [
      'Auditoría preventiva',
      'Corrección de declaraciones',
      'Presentación espontánea',
      'Actas de finiquito',
      'Normalización tributaria',
      'Compliance fiscal'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
]

const processTypes = [
  {
    type: 'Determinación Presuntiva',
    description: 'Cuando el SRI calcula impuestos sin información completa',
    icon: Calculator,
    triggers: [
      'No presentación de declaraciones',
      'Declaraciones inconsistentes',
      'Falta de registros contables',
      'Negativa a proporcionar información'
    ],
    defense: [
      'Presentar documentación faltante',
      'Acreditar ingresos y gastos reales',
      'Demostrar inconsistencias del SRI',
      'Solicitar recálculo'
    ],
    time: '4-6 meses',
    successRate: '65%'
  },
  {
    type: 'Determinación Directa',
    description: 'Cuando el SRI revisa documentación del contribuyente',
    icon: FileText,
    triggers: [
      'Fiscalización programada',
      'Denuncias',
      'Cruces de información',
      'Operaciones inusuales'
    ],
    defense: [
      'Sustentar gastos observados',
      'Presentar contratos y documentos',
      'Demostrar realidad económica',
      'Corregir errores formales'
    ],
    time: '6-12 meses',
    successRate: '70%'
  },
  {
    type: 'Glosas Tributarias',
    description: 'Observaciones a gastos deducibles y créditos tributarios',
    icon: AlertTriangle,
    triggers: [
      'Gastos no sustentados',
      'Gastos no relacionados al giro',
      'Crédito tributario indebido',
      'Retenciones incorrectas'
    ],
    defense: [
      'Demostrar relación con el negocio',
      'Completar documentación',
      'Sustentar necesidad empresarial',
      'Corregir retenciones'
    ],
    time: '3-5 meses',
    successRate: '75%'
  },
]

const process = [
  {
    step: '1',
    title: 'Notificación',
    description: 'Recepción del acto determinativo',
    icon: AlertTriangle,
    time: 'Día 0',
    actions: [
      'Análisis urgente del acto',
      'Verificación de plazos',
      'Evaluación de riesgos',
      'Estrategia inicial'
    ]
  },
  {
    step: '2',
    title: 'Descargos',
    description: 'Presentación de argumentos y pruebas',
    icon: FileText,
    time: '20 días hábiles',
    actions: [
      'Recopilación de documentación',
      'Elaboración de descargos',
      'Presentación de pruebas',
      'Solicitud de audiencia'
    ]
  },
  {
    step: '3',
    title: 'Resolución Inicial',
    description: 'Decisión del SRI sobre descargos',
    icon: Scale,
    time: '120 días desde descargos',
    actions: [
      'Análisis de resolución',
      'Evaluación de aceptación/rechazo',
      'Preparación de reclamo',
      'Negociación de facilidades'
    ]
  },
  {
    step: '4',
    title: 'Reclamo Administrativo',
    description: 'Impugnación ante autoridad superior',
    icon: Shield,
    time: '20 días desde notificación',
    actions: [
      'Presentación de reclamo',
      'Ampliación de argumentos',
      'Nuevas pruebas',
      'Audiencia de sustentación'
    ]
  },
  {
    step: '5',
    title: 'Vía Judicial',
    description: 'Acciones ante Tribunal Contencioso',
    icon: BookOpen,
    time: 'Según caso',
    actions: [
      'Demanda contencioso-tributaria',
      'Medidas cautelares',
      'Proceso de conocimiento',
      'Recursos de apelación/casación'
    ]
  },
]

const strategies = [
  {
    title: 'Presentación Espontánea',
    icon: CheckCircle,
    description: 'Corrección voluntaria antes de fiscalización',
    benefits: [
      'Reducción de multas al 50%',
      'No hay intereses adicionales',
      'Evita sanciones mayores',
      'Facilidades de pago'
    ],
    when: 'Cuando detectas errores u omisiones antes de que el SRI lo haga',
    color: 'bg-green-50 border-green-200'
  },
  {
    title: 'Negociación de Facilidades',
    icon: DollarSign,
    description: 'Pago a plazos de deudas tributarias',
    benefits: [
      'Hasta 36 meses de plazo',
      'Evita coactivas',
      'Mantiene operaciones',
      'Protege patrimonio'
    ],
    when: 'Cuando no puedes pagar la totalidad inmediatamente',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Transacción Tributaria',
    icon: Scale,
    description: 'Acuerdo con el SRI para resolver controversias',
    benefits: [
      'Reducción de montos en disputa',
      'Fin rápido del conflicto',
      'Ahorro en costos legales',
      'Certeza jurídica'
    ],
    when: 'Cuando hay duda razonable sobre elementos del caso',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Medidas Cautelares',
    icon: Shield,
    description: 'Protección de bienes durante el proceso',
    benefits: [
      'Suspende cobranzas',
      'Protege cuentas bancarias',
      'Evita embargos',
      'Permite operar'
    ],
    when: 'Cuando hay riesgo de afectación patrimonial inmediata',
    color: 'bg-orange-50 border-orange-200'
  },
]

const costsTable = [
  { service: 'Análisis de determinación', cost: '$300 - $500', time: '3-5 días' },
  { service: 'Elaboración de descargos', cost: '$800 - $1,500', time: '2 semanas' },
  { service: 'Reclamo administrativo', cost: '$1,200 - $2,000', time: '1 mes' },
  { service: 'Demanda contencioso-tributaria', cost: '$2,500 - $4,000', time: '6-12 meses' },
  { service: 'Presentación espontánea', cost: '$400 - $800', time: '1 semana' },
  { service: 'Facilidades de pago', cost: '$300 - $600', time: '2 semanas' },
  { service: 'Auditoría preventiva', cost: '$1,000 - $3,000', time: '1 mes' },
]

const tips = [
  {
    icon: Clock,
    title: 'Actúa Rápido',
    description: 'Los plazos tributarios son perentorios. Un día de retraso puede significar perder el derecho a defenderse.'
  },
  {
    icon: FileText,
    title: 'Documenta Todo',
    description: 'La carga de la prueba recae en el contribuyente. Toda transacción debe estar completamente documentada.'
  },
  {
    icon: Users,
    title: 'Asesoría Especializada',
    description: 'El derecho tributario es complejo. Un error puede costar mucho más que el honorario de un experto.'
  },
  {
    icon: Shield,
    title: 'No Te Enfrentes Solo',
    description: 'El SRI tiene equipos especializados. Necesitas un profesional que conozca sus procedimientos y estrategias.'
  },
]

const faqs = [
  {
    question: '¿Qué hago si recibo una notificación del SRI?',
    answer: 'Lo primero es NO ignorarla. Lee cuidadosamente el contenido, identifica los plazos y contacta inmediatamente a un profesional tributario. Los plazos para responder son muy cortos (generalmente 20 días hábiles) y son fatales, es decir, no se pueden extender.'
  },
  {
    question: '¿Puedo negociar con el SRI?',
    answer: 'Sí. Existen varios mecanismos: facilidades de pago (hasta 36 meses), transacciones tributarias (para reducir montos en disputa), y presentaciones espontáneas (con reducción del 50% de multas). La clave es actuar antes de que se firme un acta de determinación.'
  },
  {
    question: '¿Cuánto tiempo toma resolver una determinación?',
    answer: 'Depende de la vía: descargos (4-6 meses), reclamo administrativo (+6 meses), vía judicial (1-3 años). Sin embargo, se pueden obtener suspensiones y medidas cautelares para proteger tus intereses mientras dura el proceso.'
  },
  {
    question: '¿Qué pasa si no pago la determinación?',
    answer: 'El SRI iniciará proceso coactivo: embargo de cuentas bancarias, retención de devoluciones, embargo de bienes, y en casos extremos, prohibición de salida del país. Es mejor buscar facilidades de pago o impugnar si hay fundamentos.'
  },
  {
    question: '¿Cuál es la tasa de éxito en defensas tributarias?',
    answer: 'Depende del caso: determinaciones presuntivas (65% éxito), determinaciones directas (70%), glosas tributarias (75%). La clave es actuar rápido, tener buena documentación y contar con asesoría especializada desde el inicio.'
  },
  {
    question: '¿Los honorarios se pueden pagar a éxito?',
    answer: 'Generalmente no. Los servicios tributarios requieren trabajo inmediato y especializado que debe ser remunerado independiente del resultado. Sin embargo, podemos estructurar pagos en fases según el avance del proceso.'
  },
]

export default function DeterminacionesFiscalesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-700 to-amber-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Defensa en Determinaciones Fiscales
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Protección especializada ante fiscalizaciones del SRI. Te defendemos en
              determinaciones tributarias, glosas, multas y procesos administrativos.
            </p>
            <Link href="#servicios">
              <Button size="lg" variant="secondary">
                Necesito Defensa
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Alerta */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <div className="bg-white border-2 border-red-500 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-red-900 mb-4">¿Recibiste una Notificación del SRI?</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">⏰ Los plazos son fatales:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• 20 días para descargos</li>
                      <li>• 20 días para reclamo</li>
                      <li>• No se pueden extender</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">🚨 Actúa inmediatamente:</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• No ignores la notificación</li>
                      <li>• Contacta un experto ya</li>
                      <li>• Preserva tus derechos</li>
                    </ul>
                  </div>
                </div>
                <Button variant="destructive" size="lg">
                  Contactar Ahora - Urgente
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Servicios de Defensa Tributaria
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow"
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

      {/* Tipos de Procesos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Tipos de Determinaciones
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {processTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{type.type}</h3>
                      <p className="text-corporate-gray-medium">{type.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-corporate-gray-medium mb-1">Tiempo promedio</div>
                      <div className="font-bold text-red-600">{type.time}</div>
                      <div className="text-sm text-green-700 font-semibold mt-2">{type.successRate} éxito</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3 text-sm">Causas Comunes:</h4>
                      <ul className="space-y-2">
                        {type.triggers.map((trigger, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <AlertTriangle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-corporate-gray-medium">{trigger}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-sm">Estrategias de Defensa:</h4>
                      <ul className="space-y-2">
                        {type.defense.map((def, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-corporate-gray-medium">{def}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
            Proceso de Defensa
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-red-600" />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="ml-auto text-xs font-semibold text-red-700 bg-red-100 px-3 py-1 rounded">
                          {item.time}
                        </div>
                      </div>
                      <p className="text-corporate-gray-medium text-sm mb-4">{item.description}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {item.actions.map((action, idx) => (
                          <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Estrategias */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Estrategias de Defensa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon
              return (
                <div
                  key={index}
                  className={`border-2 ${strategy.color} rounded-lg p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="w-8 h-8 text-corporate-purple flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{strategy.title}</h3>
                      <p className="text-sm text-corporate-gray-medium mb-4">{strategy.description}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Beneficios:</h4>
                    <ul className="space-y-1">
                      {strategy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-xs">
                          <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-corporate-gray-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-3 rounded">
                    <p className="text-xs text-corporate-gray-medium">
                      <strong>Cuándo usar:</strong> {strategy.when}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Costos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Costos de Servicios
          </h2>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-red-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Servicio</th>
                  <th className="px-6 py-4 text-left">Costo</th>
                  <th className="px-6 py-4 text-left">Tiempo</th>
                </tr>
              </thead>
              <tbody>
                {costsTable.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4">{item.service}</td>
                    <td className="px-6 py-4 font-bold text-red-600">{item.cost}</td>
                    <td className="px-6 py-4 text-sm text-corporate-gray-medium">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center text-sm text-corporate-gray-medium max-w-2xl mx-auto">
            Los costos varían según complejidad del caso, montos involucrados y etapa procesal.
            Incluyen análisis inicial, elaboración de documentos y representación.
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Consejos Importantes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-corporate-gray-medium">{tip.description}</p>
                </div>
              )
            })}
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
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Necesitas Defensa Urgente?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            No pierdas tiempo. Los plazos tributarios no esperan. Contacta ahora
            y protege tu patrimonio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contactar Ahora - Urgente
            </Button>
            <Link href="/servicios-corporativos">
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
