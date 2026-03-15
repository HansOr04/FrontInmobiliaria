import { Button } from '@/components/ui/button'
import { LineChart, TrendingUp, BarChart3, DollarSign, Calendar, Target,
         Calculator, CheckCircle, AlertTriangle, Zap } from 'lucide-react'
import Link from 'next/link'

const projectionPeriods = [
  {
    years: 3,
    title: 'Proyección a 3 Años',
    description: 'Ideal para PYMEs y empresas en crecimiento',
    icon: Calendar,
    features: [
      'Proyección mensual año 1',
      'Proyección trimestral años 2-3',
      'Estados financieros proyectados',
      '1-2 escenarios',
      'Análisis de sensibilidad básico'
    ],
    useCase: 'PYMEs, empresas en crecimiento, planificación operativa',
    price: 'Incluido en paquete Básico',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    years: 5,
    title: 'Proyección a 5 Años',
    subtitle: 'Más común',
    description: 'Estándar para la mayoría de valoraciones',
    icon: TrendingUp,
    features: [
      'Proyección mensual año 1',
      'Proyección trimestral año 2',
      'Proyección anual años 3-5',
      '3 escenarios (optimista, base, pesimista)',
      'Análisis de sensibilidad completo',
      'Valor terminal calculado'
    ],
    useCase: 'Empresas maduras, valoración estándar, decisiones estratégicas',
    price: 'Incluido en paquete Estándar',
    color: 'bg-green-100 text-green-600'
  },
  {
    years: 10,
    title: 'Proyección a 10 Años',
    description: 'Para empresas con activos de larga duración',
    icon: BarChart3,
    features: [
      'Proyección mensual año 1',
      'Proyección trimestral años 2-3',
      'Proyección anual años 4-10',
      '3-5 escenarios detallados',
      'Análisis de sensibilidad avanzado',
      'Valor terminal y perpetuidad',
      'Análisis de punto de equilibrio'
    ],
    useCase: 'Proyectos inmobiliarios, infraestructura, minería, energía',
    price: 'Incluido en paquete Premium',
    color: 'bg-purple-100 text-purple-600'
  },
]

const financialStatements = [
  {
    icon: DollarSign,
    title: 'Estado de Resultados Proyectado',
    description: 'Proyección de ingresos, costos y gastos',
    items: [
      'Ingresos por línea de negocio',
      'Costo de ventas',
      'Gastos operacionales',
      'EBITDA',
      'Depreciación y amortización',
      'Intereses e impuestos',
      'Utilidad neta'
    ]
  },
  {
    icon: BarChart3,
    title: 'Balance General Proyectado',
    description: 'Proyección de activos, pasivos y patrimonio',
    items: [
      'Activos corrientes',
      'Activos fijos',
      'Pasivos corrientes',
      'Deuda a largo plazo',
      'Patrimonio',
      'Capital de trabajo'
    ]
  },
  {
    icon: LineChart,
    title: 'Flujo de Caja Proyectado',
    description: 'Proyección de entradas y salidas de efectivo',
    items: [
      'Flujo operativo',
      'Flujo de inversión',
      'Flujo de financiamiento',
      'Flujo de caja libre',
      'Saldo de caja final'
    ]
  },
]

const assumptions = [
  {
    category: 'Ingresos',
    color: 'bg-blue-100 text-blue-700',
    examples: [
      'Crecimiento del mercado',
      'Participación de mercado',
      'Precio promedio',
      'Volumen de ventas',
      'Nuevos productos/servicios',
      'Estacionalidad'
    ]
  },
  {
    category: 'Costos y Gastos',
    color: 'bg-orange-100 text-orange-700',
    examples: [
      'Costo de materiales',
      'Costos laborales',
      'Gastos administrativos',
      'Gastos de ventas',
      'Inflación',
      'Economías de escala'
    ]
  },
  {
    category: 'Inversiones',
    color: 'bg-purple-100 text-purple-700',
    examples: [
      'CAPEX (inversiones en activos)',
      'Inversión en capital de trabajo',
      'Tecnología',
      'Expansión',
      'Mantenimiento'
    ]
  },
  {
    category: 'Financiamiento',
    color: 'bg-green-100 text-green-700',
    examples: [
      'Estructura de capital',
      'Tasas de interés',
      'Amortización de deuda',
      'Dividendos',
      'Nueva deuda',
      'Aportes de capital'
    ]
  },
]

const scenarios = [
  {
    name: 'Escenario Optimista',
    probability: '20-30%',
    description: 'Condiciones favorables del mercado',
    color: 'bg-green-100 border-green-300 text-green-700',
    assumptions: [
      'Crecimiento de ventas: +15-20%',
      'Mejora de márgenes',
      'Entrada exitosa a nuevos mercados',
      'Economía favorable'
    ]
  },
  {
    name: 'Escenario Base',
    probability: '50-60%',
    description: 'Escenario más probable',
    color: 'bg-blue-100 border-blue-300 text-blue-700',
    assumptions: [
      'Crecimiento de ventas: +8-12%',
      'Márgenes estables',
      'Ejecución del plan estratégico',
      'Condiciones normales'
    ]
  },
  {
    name: 'Escenario Pesimista',
    probability: '10-20%',
    description: 'Condiciones adversas',
    color: 'bg-orange-100 border-orange-300 text-orange-700',
    assumptions: [
      'Crecimiento de ventas: +2-5%',
      'Presión sobre márgenes',
      'Mayor competencia',
      'Economía desfavorable'
    ]
  },
]

export default function ProyeccionesFinancierasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Proyecciones Financieras
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Modelos financieros detallados que proyectan el futuro de tu empresa a 3, 5 o 10 años,
              fundamentales para la valoración y toma de decisiones estratégicas.
            </p>
            <Link href="#consulta">
              <Button size="lg" variant="secondary">
                Solicitar Proyección
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
              ¿Por Qué Son Importantes las Proyecciones Financieras?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Las proyecciones financieras son el corazón de cualquier valoración. Nos permiten
              estimar los flujos de caja futuros que generará tu empresa, que es la base para
              determinar su valor presente.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Más allá de la valoración, son una herramienta esencial para planificar el futuro,
              identificar necesidades de financiamiento, y tomar decisiones estratégicas informadas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3-10</div>
              <p className="text-corporate-gray-medium">Años Proyectados</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3-5</div>
              <p className="text-corporate-gray-medium">Escenarios</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <p className="text-corporate-gray-medium">Variables</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
              <p className="text-corporate-gray-medium">Personalizadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Períodos de Proyección */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Períodos de Proyección
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectionPeriods.map((period, index) => {
              const Icon = period.icon
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-8 hover:shadow-xl transition-shadow ${
                    period.subtitle ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  {period.subtitle && (
                    <div className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                      {period.subtitle}
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-lg ${period.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{period.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{period.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm text-corporate-purple">Incluye:</h4>
                    <ul className="space-y-2">
                      {period.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-corporate-gray-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-xs font-semibold text-corporate-gray-dark mb-2">Ideal para:</p>
                    <p className="text-sm text-corporate-gray-medium">{period.useCase}</p>
                  </div>

                  <div className="text-center pt-4 border-t">
                    <p className="text-sm font-semibold text-indigo-600">{period.price}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Estados Financieros Proyectados */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Estados Financieros Proyectados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialStatements.map((statement, index) => {
              const Icon = statement.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{statement.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{statement.description}</p>
                  <ul className="space-y-2">
                    {statement.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-corporate-gray-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mr-2" />
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

      {/* Supuestos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Supuestos Clave de las Proyecciones
          </h2>

          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Importancia de los Supuestos</h4>
                  <p className="text-sm text-yellow-800">
                    La calidad de las proyecciones depende de la calidad de los supuestos. Por eso,
                    cada supuesto debe estar bien fundamentado en datos históricos, análisis de mercado
                    y tendencias del sector.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {assumptions.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className={`inline-block px-3 py-1 rounded-full ${category.color} text-sm font-semibold mb-4`}>
                  {category.category}
                </div>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-corporate-gray-medium">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Escenarios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Análisis de Escenarios
          </h2>

          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-center text-corporate-gray-medium mb-8">
              Desarrollamos múltiples escenarios para capturar la incertidumbre y evaluar
              diferentes posibilidades de futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {scenarios.map((scenario, index) => (
              <div
                key={index}
                className={`${scenario.color} p-6 rounded-xl border-2`}
              >
                <h3 className="text-xl font-semibold mb-2">{scenario.name}</h3>
                <div className="text-sm font-medium mb-4">
                  Probabilidad: {scenario.probability}
                </div>
                <p className="text-sm mb-6">{scenario.description}</p>
                <div>
                  <h4 className="font-semibold mb-3 text-sm">Supuestos:</h4>
                  <ul className="space-y-2">
                    {scenario.assumptions.map((assumption, idx) => (
                      <li key={idx} className="text-sm flex items-start">
                        <span className="mr-2">•</span>
                        <span>{assumption}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
            <h4 className="font-semibold text-center mb-6">Ejemplo de Valoración con Escenarios</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">$3.2M</div>
                <div className="text-sm text-corporate-gray-medium mb-1">Optimista</div>
                <div className="text-xs text-corporate-gray-light">25% probabilidad</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg ring-2 ring-blue-500">
                <div className="text-2xl font-bold text-blue-600 mb-1">$2.5M</div>
                <div className="text-sm text-corporate-gray-medium mb-1">Base</div>
                <div className="text-xs text-corporate-gray-light">55% probabilidad</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-orange-600 mb-1">$1.9M</div>
                <div className="text-sm text-corporate-gray-medium mb-1">Pesimista</div>
                <div className="text-xs text-corporate-gray-light">20% probabilidad</div>
              </div>
            </div>
            <div className="mt-6 text-center p-4 bg-white rounded-lg">
              <div className="text-sm text-corporate-gray-medium mb-1">Valor Esperado (Ponderado)</div>
              <div className="text-3xl font-bold text-indigo-600">$2.4M</div>
            </div>
          </div>
        </div>
      </section>

      {/* Análisis de Sensibilidad */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Análisis de Sensibilidad
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-corporate-gray-medium mb-12">
              Evaluamos cómo cambia el valor de la empresa ante variaciones en las variables clave.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: TrendingUp,
                  title: 'Variables de Ingreso',
                  description: 'Crecimiento de ventas, precio, volumen, participación de mercado'
                },
                {
                  icon: DollarSign,
                  title: 'Variables de Costo',
                  description: 'Margen bruto, EBITDA, costos variables, costos fijos'
                },
                {
                  icon: Calculator,
                  title: 'Variables Financieras',
                  description: 'WACC, tasa de descuento, estructura de capital, tasas de interés'
                },
                {
                  icon: Zap,
                  title: 'Variables Operativas',
                  description: 'CAPEX, capital de trabajo, inversiones, eficiencias'
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-white p-6 rounded-lg flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-corporate-gray-medium">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-white p-8 rounded-xl">
              <h4 className="font-semibold text-center mb-6">Ejemplo de Tabla de Sensibilidad</h4>
              <p className="text-sm text-center text-corporate-gray-medium mb-6">
                Impacto en el valor ante cambios en Crecimiento de Ventas y Margen EBITDA
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Margen \ Crecimiento</th>
                      <th className="p-2 text-center">+5%</th>
                      <th className="p-2 text-center">+10%</th>
                      <th className="p-2 text-center">+15%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-medium">20%</td>
                      <td className="p-2 text-center">$2.1M</td>
                      <td className="p-2 text-center">$2.3M</td>
                      <td className="p-2 text-center">$2.6M</td>
                    </tr>
                    <tr className="border-b bg-blue-50">
                      <td className="p-2 font-medium">25%</td>
                      <td className="p-2 text-center">$2.3M</td>
                      <td className="p-2 text-center font-bold text-blue-600">$2.5M</td>
                      <td className="p-2 text-center">$2.8M</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-medium">30%</td>
                      <td className="p-2 text-center">$2.5M</td>
                      <td className="p-2 text-center">$2.8M</td>
                      <td className="p-2 text-center">$3.1M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consulta" className="section-padding bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Ver el Futuro de tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita proyecciones financieras profesionales y toma decisiones basadas en datos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Proyección
            </Button>
            <Link href="/valoracion">
              <Button size="lg" variant="outline" className="bg-white text-indigo-600 hover:bg-gray-100">
                Ver Paquetes Completos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
