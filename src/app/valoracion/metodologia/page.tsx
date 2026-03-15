import { Button } from '@/components/ui/button'
import { TrendingUp, DollarSign, Building2, BarChart3, Calculator, CheckCircle,
         FileText, Target, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

const methodologies = [
  {
    icon: TrendingUp,
    title: 'Flujo de Caja Descontado (DCF)',
    subtitle: 'Discounted Cash Flow',
    description: 'Metodología más utilizada para empresas en marcha con flujos predecibles',
    benefits: [
      'Considera el valor del dinero en el tiempo',
      'Basada en proyecciones financieras',
      'Ideal para empresas maduras',
      'Reconocida internacionalmente'
    ],
    process: [
      'Proyección de flujos de caja libre (3-10 años)',
      'Cálculo del WACC (costo promedio ponderado de capital)',
      'Determinación del valor terminal',
      'Descuento de flujos a valor presente'
    ],
    when: 'Empresas con historial financiero y flujos predecibles',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: BarChart3,
    title: 'Múltiplos Comparables',
    subtitle: 'Market Approach',
    description: 'Valoración basada en transacciones de empresas similares',
    benefits: [
      'Basada en datos reales de mercado',
      'Fácil de explicar y entender',
      'Útil para validar otros métodos',
      'Rápida de aplicar'
    ],
    process: [
      'Selección de empresas comparables',
      'Recopilación de múltiplos (EBITDA, ventas, etc.)',
      'Ajuste por diferencias',
      'Aplicación de múltiplos a la empresa valorada'
    ],
    when: 'Existen transacciones comparables en el sector',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Building2,
    title: 'Valor Patrimonial Ajustado',
    subtitle: 'Asset-Based Approach',
    description: 'Valoración basada en activos y pasivos ajustados a valor de mercado',
    benefits: [
      'Útil para empresas con activos tangibles',
      'Fácil de verificar',
      'Base sólida de valor',
      'Ideal para holding y bienes raíces'
    ],
    process: [
      'Inventario de todos los activos',
      'Valoración a precios de mercado',
      'Ajuste de pasivos',
      'Cálculo del patrimonio neto ajustado'
    ],
    when: 'Empresas con activos tangibles significativos',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: DollarSign,
    title: 'EVA (Valor Económico Agregado)',
    subtitle: 'Economic Value Added',
    description: 'Mide la creación de valor por encima del costo de capital',
    benefits: [
      'Considera el costo de oportunidad',
      'Mide creación real de valor',
      'Útil para gestión',
      'Vincula valor con performance'
    ],
    process: [
      'Cálculo del NOPAT (utilidad operativa después de impuestos)',
      'Determinación del capital invertido',
      'Cálculo del costo de capital (WACC)',
      'EVA = NOPAT - (Capital × WACC)'
    ],
    when: 'Empresas con foco en creación de valor',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Zap,
    title: 'Venture Capital Method',
    subtitle: 'Para Startups',
    description: 'Metodología específica para startups y empresas de alto crecimiento',
    benefits: [
      'Diseñada para empresas sin historial',
      'Considera potencial de crecimiento',
      'Incluye múltiples rondas de inversión',
      'Ajustada por riesgo'
    ],
    process: [
      'Proyección de exit value (valor de salida)',
      'Determinación de tasa de retorno esperada',
      'Cálculo del valor pre-money',
      'Ajustes por dilución'
    ],
    when: 'Startups y empresas tecnológicas pre-revenue',
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Calculator,
    title: 'Método de Scorecard',
    subtitle: 'Para Empresas Tempranas',
    description: 'Valoración basada en factores cualitativos y cuantitativos',
    benefits: [
      'Útil cuando hay poca data financiera',
      'Considera múltiples factores',
      'Flexible y adaptable',
      'Reconoce factores intangibles'
    ],
    process: [
      'Valor promedio de empresas similares',
      'Evaluación de factores (equipo, mercado, producto)',
      'Asignación de pesos a cada factor',
      'Cálculo del valor ajustado'
    ],
    when: 'Startups en etapa temprana, empresas innovadoras',
    color: 'bg-indigo-100 text-indigo-600'
  },
]

const ourProcess = [
  {
    step: '1',
    title: 'Análisis Inicial',
    description: 'Revisamos tu empresa, industria y objetivos de valoración',
    duration: '2 - 5 dias'
  },
  {
    step: '2',
    title: 'Recopilación de Información',
    description: 'Solicitamos estados financieros, contratos, proyecciones y documentos clave',
    duration: '1 - 15 dias'
  },
  {
    step: '3',
    title: 'Selección de Metodologías',
    description: 'Determinamos las metodologías más apropiadas para tu caso',
    duration: '25 dias'
  },
  {
    step: '4',
    title: 'Desarrollo de Modelos',
    description: 'Construimos modelos financieros y aplicamos las metodologías',
    duration: '35 dias'
  },
  {
    step: '5',
    title: 'Análisis y Validación',
    description: 'Validamos resultados y realizamos análisis de sensibilidad',
    duration: '5 dias'
  },
  {
    step: '6',
    title: 'Informe y Presentación',
    description: 'Entregamos informe completo y presentamos resultados',
    duration: '5 dias'
  },
]

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Metodologías de Valoración
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Aplicamos las metodologías más reconocidas internacionalmente, adaptadas a las
              características específicas de tu empresa y sector.
            </p>
            <Link href="#consulta">
              <Button size="lg" variant="secondary">
                Solicitar Asesoría
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
              Enfoque Metodológico Riguroso
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              No existe una única metodología perfecta para todas las empresas. Por ello, aplicamos
              múltiples enfoques y los comparamos para llegar a un rango de valor bien fundamentado.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Todas nuestras valoraciones cumplen con estándares internacionales como IVS
              (International Valuation Standards) y son realizadas por profesionales certificados.
            </p>
          </div>

          {/* Beneficios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Estándares Internacionales',
                description: 'Cumplimos con IVS, IFRS y mejores prácticas globales'
              },
              {
                icon: Target,
                title: 'Enfoque Personalizado',
                description: 'Seleccionamos metodologías según tu caso específico'
              },
              {
                icon: FileText,
                title: 'Informes Detallados',
                description: 'Documentación completa y defendible de cada valoración'
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4">
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

      {/* Metodologías */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Principales Metodologías que Aplicamos
          </h2>

          <div className="space-y-8">
            {methodologies.map((method, index) => {
              const Icon = method.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Header */}
                    <div className="lg:col-span-3">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${method.color} flex items-center justify-center`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold mb-1">{method.title}</h3>
                          <p className="text-sm text-corporate-gray-medium mb-3">{method.subtitle}</p>
                          <p className="text-corporate-gray-medium">{method.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Beneficios */}
                    <div>
                      <h4 className="font-semibold mb-3 text-corporate-purple">Beneficios</h4>
                      <ul className="space-y-2">
                        {method.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-corporate-gray-medium">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Proceso */}
                    <div>
                      <h4 className="font-semibold mb-3 text-corporate-purple">Proceso</h4>
                      <ol className="space-y-2">
                        {method.process.map((step, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 text-purple-600 text-xs flex items-center justify-center mr-2 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="text-corporate-gray-medium">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Cuándo usar */}
                    <div>
                      <h4 className="font-semibold mb-3 text-corporate-purple">¿Cuándo Usar?</h4>
                      <p className="text-sm text-corporate-gray-medium bg-gray-50 p-4 rounded-lg">
                        {method.when}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Combinación de metodologías */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-3 text-corporate-purple text-center mb-8">
              Combinación de Metodologías
            </h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl">
              <p className="text-lg text-corporate-gray-medium mb-6 text-center">
                En la práctica, aplicamos <strong>múltiples metodologías</strong> y las comparamos para llegar
                a un rango de valor bien fundamentado.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">2-4</div>
                  <p className="text-sm text-corporate-gray-medium">Metodologías por valoración</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">3-5</div>
                  <p className="text-sm text-corporate-gray-medium">Escenarios analizados</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">±15%</div>
                  <p className="text-sm text-corporate-gray-medium">Rango de valor típico</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg">
                <h4 className="font-semibold mb-4 text-center">Ejemplo de Combinación</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-corporate-gray-medium">Metodología DCF:</span>
                    <span className="font-semibold">$2.5M - $2.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-corporate-gray-medium">Múltiplos Comparables:</span>
                    <span className="font-semibold">$2.3M - $2.6M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-corporate-gray-medium">Valor Patrimonial Ajustado:</span>
                    <span className="font-semibold">$2.0M - $2.2M</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="font-semibold text-corporate-purple">Rango de Valor Final:</span>
                    <span className="font-bold text-xl text-corporate-purple">$2.2M - $2.7M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestro Proceso de Valoración
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {ourProcess.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-corporate-gray-medium mb-2">{item.description}</p>
                    <span className="text-sm text-purple-600 font-medium">Duración: {item.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Tiempo Total Estimado</h3>
              <div className="text-4xl font-bold text-purple-600 mb-2"> 90 dias </div>
              <p className="text-corporate-gray-medium">
                Dependiendo de la complejidad de la empresa y el paquete seleccionado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consulta" className="section-padding bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿No Estás Seguro Qué Metodología Necesitas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una consulta gratuita y te ayudaremos a determinar el enfoque más adecuado para tu empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Agendar Consulta Gratuita
            </Button>
            <Link href="/valoracion">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                Ver Paquetes de Valoración
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
