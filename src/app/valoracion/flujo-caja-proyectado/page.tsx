import { Button } from '@/components/ui/button'
import { DollarSign, TrendingUp, Calculator, ArrowDownCircle, ArrowUpCircle,
         Activity, Target, CheckCircle, AlertCircle, Zap, BarChart3 } from 'lucide-react'
import Link from 'next/link'

const cashFlowComponents = [
  {
    icon: TrendingUp,
    title: 'Flujo de Caja Operativo',
    description: 'Efectivo generado por las operaciones del negocio',
    formula: 'EBITDA - Impuestos + Δ Capital de Trabajo',
    items: [
      'EBITDA (Utilidad operativa)',
      'Menos: Impuestos sobre utilidades',
      'Más/Menos: Cambios en capital de trabajo',
      'Cuentas por cobrar',
      'Inventarios',
      'Cuentas por pagar'
    ],
    color: 'bg-green-100 text-green-600',
    arrow: ArrowUpCircle,
    arrowColor: 'text-green-600'
  },
  {
    icon: ArrowDownCircle,
    title: 'Flujo de Caja de Inversión',
    description: 'Efectivo usado en inversiones de capital',
    formula: '- CAPEX - Inversiones',
    items: [
      'Menos: CAPEX (Inversión en activos fijos)',
      'Maquinaria y equipo',
      'Tecnología',
      'Expansión de instalaciones',
      'Menos: Otras inversiones',
      'Adquisiciones'
    ],
    color: 'bg-red-100 text-red-600',
    arrow: ArrowDownCircle,
    arrowColor: 'text-red-600'
  },
  {
    icon: Activity,
    title: 'Flujo de Caja Libre (FCF)',
    description: 'Efectivo disponible para inversionistas',
    formula: 'Flujo Operativo - Flujo de Inversión',
    items: [
      'Flujo de caja operativo',
      'Menos: Flujo de caja de inversión',
      'Igual: Flujo de Caja Libre',
      'Este es el flujo usado para valoración',
      'Representa efectivo disponible',
      'Para accionistas y acreedores'
    ],
    color: 'bg-blue-100 text-blue-600',
    arrow: Target,
    arrowColor: 'text-blue-600'
  },
]

const fcfTypes = [
  {
    type: 'Flujo de Caja Libre de la Empresa (FCFF)',
    subtitle: 'Free Cash Flow to Firm',
    description: 'Flujo disponible para todos los inversionistas (deuda + equity)',
    formula: 'EBITDA × (1 - Tasa de Impuesto) - CAPEX - Δ Capital de Trabajo',
    usedFor: 'Valoración de toda la empresa (Enterprise Value)',
    discount: 'Se descuenta con WACC (Costo promedio ponderado de capital)',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    type: 'Flujo de Caja Libre del Equity (FCFE)',
    subtitle: 'Free Cash Flow to Equity',
    description: 'Flujo disponible solo para accionistas',
    formula: 'FCFF - Intereses × (1 - Tasa de Impuesto) + Δ Deuda Neta',
    usedFor: 'Valoración del patrimonio (Equity Value)',
    discount: 'Se descuenta con Ke (Costo del patrimonio)',
    color: 'bg-blue-100 text-blue-700'
  },
]

const importance = [
  {
    icon: Target,
    title: 'Base de la Valoración DCF',
    description: 'El método de Flujo de Caja Descontado (DCF) es el más utilizado en valoración profesional, y requiere proyección de FCF.',
  },
  {
    icon: DollarSign,
    title: 'Mide Efectivo Real',
    description: 'A diferencia de la utilidad contable, el FCF muestra el efectivo real disponible para distribuir.',
  },
  {
    icon: Calculator,
    title: 'Decisiones de Inversión',
    description: 'Permite evaluar si la empresa genera suficiente efectivo para financiar crecimiento y pagar dividendos.',
  },
  {
    icon: Activity,
    title: 'Salud Financiera',
    description: 'Un FCF positivo y creciente indica una empresa saludable que genera valor.',
  },
]

const exampleProjection = {
  years: ['Año 1', 'Año 2', 'Año 3', 'Año 4', 'Año 5'],
  ebitda: [500, 550, 605, 666, 732],
  taxes: [-150, -165, -182, -200, -220],
  workingCapital: [-20, -15, -10, -10, -5],
  operatingCF: [330, 370, 413, 456, 507],
  capex: [-100, -80, -85, -90, -95],
  fcf: [230, 290, 328, 366, 412],
  growth: ['-', '26%', '13%', '12%', '13%']
}

export default function FlujoCajaProyectadoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Flujo de Caja Proyectado
            </h1>
            <p className="text-xl mb-8 opacity-90">
              El componente más importante de cualquier valoración: proyección del efectivo
              que generará tu empresa en el futuro.
            </p>
            <Link href="#consulta">
              <Button size="lg" variant="secondary">
                Solicitar Análisis de Flujo
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
              ¿Qué es el Flujo de Caja Libre?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              El Flujo de Caja Libre (FCF por sus siglas en inglés) es el efectivo que genera
              una empresa después de pagar todos sus gastos operativos, impuestos e inversiones
              necesarias para mantener y hacer crecer el negocio.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Es la métrica más importante en valoración porque representa el efectivo real
              que está disponible para ser distribuido a los inversionistas.
            </p>
          </div>

          {/* ¿Por qué es importante? */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importance.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
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

      {/* Componentes del FCF */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Componentes del Flujo de Caja Libre
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {cashFlowComponents.map((component, index) => {
              const Icon = component.icon
              const Arrow = component.arrow
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl ${component.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold">{component.title}</h3>
                        <Arrow className={`w-6 h-6 ${component.arrowColor}`} />
                      </div>
                      <p className="text-corporate-gray-medium mb-4">{component.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <p className="text-sm font-mono text-corporate-gray-dark">{component.formula}</p>
                      </div>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {component.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-corporate-gray-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Resumen visual */}
          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-xl">
            <h4 className="font-semibold text-center mb-6 text-lg">Cálculo del FCF</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span className="text-corporate-gray-medium">EBITDA</span>
                <span className="font-semibold">$500,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span className="text-corporate-gray-medium">Menos: Impuestos</span>
                <span className="font-semibold text-red-600">-$150,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded">
                <span className="text-corporate-gray-medium">Menos: Δ Capital de Trabajo</span>
                <span className="font-semibold text-red-600">-$20,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded border-t-2 border-green-300">
                <span className="font-semibold">= Flujo de Caja Operativo</span>
                <span className="font-bold text-green-600">$330,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded mt-4">
                <span className="text-corporate-gray-medium">Menos: CAPEX</span>
                <span className="font-semibold text-red-600">-$100,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded border-t-2 border-blue-300">
                <span className="font-bold text-blue-700">= FLUJO DE CAJA LIBRE (FCF)</span>
                <span className="font-bold text-2xl text-blue-700">$230,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de FCF */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Tipos de Flujo de Caja Libre
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {fcfTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border-2 border-gray-200">
                <div className={`inline-block px-4 py-2 rounded-full ${type.color} text-sm font-semibold mb-4`}>
                  {type.subtitle}
                </div>
                <h3 className="text-xl font-semibold mb-3">{type.type}</h3>
                <p className="text-corporate-gray-medium mb-6">{type.description}</p>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="text-xs text-corporate-gray-medium mb-2">Fórmula:</p>
                  <p className="text-sm font-mono text-corporate-gray-dark">{type.formula}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Se usa para:</p>
                      <p className="text-sm text-corporate-gray-medium">{type.usedFor}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calculator className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold">Descuento:</p>
                      <p className="text-sm text-corporate-gray-medium">{type.discount}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplo de Proyección */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Ejemplo de Proyección de FCF a 5 Años
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left font-semibold">Concepto</th>
                    {exampleProjection.years.map((year, idx) => (
                      <th key={idx} className="p-3 text-right font-semibold">{year}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium">EBITDA</td>
                    {exampleProjection.ebitda.map((val, idx) => (
                      <td key={idx} className="p-3 text-right">${val.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b bg-red-50">
                    <td className="p-3 font-medium">Impuestos (30%)</td>
                    {exampleProjection.taxes.map((val, idx) => (
                      <td key={idx} className="p-3 text-right text-red-600">${val.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b bg-red-50">
                    <td className="p-3 font-medium">Δ Capital de Trabajo</td>
                    {exampleProjection.workingCapital.map((val, idx) => (
                      <td key={idx} className="p-3 text-right text-red-600">${val.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b bg-green-50 font-semibold">
                    <td className="p-3">= Flujo Operativo</td>
                    {exampleProjection.operatingCF.map((val, idx) => (
                      <td key={idx} className="p-3 text-right text-green-700">${val.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-b bg-red-50">
                    <td className="p-3 font-medium">CAPEX</td>
                    {exampleProjection.capex.map((val, idx) => (
                      <td key={idx} className="p-3 text-right text-red-600">${val.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-3 text-blue-700">= FCF</td>
                    {exampleProjection.fcf.map((val, idx) => (
                      <td key={idx} className="p-3 text-right text-blue-700 text-lg">${val.toLocaleString()}</td>
                    ))}
                  </tr>
                  <tr className="border-t-2 border-gray-300">
                    <td className="p-3 text-sm text-corporate-gray-medium">Crecimiento FCF</td>
                    {exampleProjection.growth.map((val, idx) => (
                      <td key={idx} className="p-3 text-right text-sm text-corporate-gray-medium">{val}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$1,626K</div>
                <p className="text-sm text-corporate-gray-medium">FCF Total 5 Años</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">$325K</div>
                <p className="text-sm text-corporate-gray-medium">FCF Promedio Anual</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">79%</div>
                <p className="text-sm text-corporate-gray-medium">Crecimiento Total</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factores que afectan el FCF */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Factores que Afectan el Flujo de Caja Libre
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: 'Factores Positivos (Aumentan FCF)',
                color: 'bg-green-50 border-green-200',
                items: [
                  'Crecimiento de ventas',
                  'Mejora de márgenes',
                  'Reducción de capital de trabajo',
                  'Mayor eficiencia operativa',
                  'Menores inversiones en CAPEX',
                  'Optimización fiscal'
                ]
              },
              {
                icon: AlertCircle,
                title: 'Factores Negativos (Reducen FCF)',
                color: 'bg-red-50 border-red-200',
                items: [
                  'Caída de ventas',
                  'Compresión de márgenes',
                  'Aumento de capital de trabajo',
                  'Ineficiencias operativas',
                  'Altas inversiones en CAPEX',
                  'Mayor carga fiscal'
                ]
              },
            ].map((section, index) => {
              const Icon = section.icon
              return (
                <div key={index} className={`${section.color} border-2 rounded-xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6" />
                    <h3 className="font-semibold">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="mr-2">{index === 0 ? '✓' : '⚠'}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Señales de Alerta */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Señales de Alerta en el FCF
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Cuidado con estas señales</h4>
                  <p className="text-sm text-yellow-800">
                    Un FCF negativo o decreciente puede indicar problemas. Sin embargo, contexto es clave:
                    puede ser temporal debido a inversiones de crecimiento.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'FCF negativo por varios años consecutivos',
                  'FCF significativamente menor que utilidad neta',
                  'CAPEX creciendo más rápido que ingresos',
                  'Capital de trabajo creciendo sin control',
                  'Dependencia de financiamiento externo continuo',
                  'Utilidades sin respaldo de efectivo real',
                ].map((signal, idx) => (
                  <div key={idx} className="flex items-start bg-white p-3 rounded-lg">
                    <span className="text-red-600 mr-2 text-lg">!</span>
                    <span className="text-sm text-corporate-gray-dark">{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consulta" className="section-padding bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Cuánto Efectivo Genera Realmente tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita un análisis detallado de flujo de caja y descubre el verdadero potencial de tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Análisis de Flujo
            </Button>
            <Link href="/valoracion">
              <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                Ver Servicios Completos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
