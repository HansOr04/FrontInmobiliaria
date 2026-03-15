import { Button } from '@/components/ui/button'
import { FileText, TrendingUp, Users, Target, AlertCircle, CheckCircle, BarChart3,
         Shield, Briefcase, DollarSign, PieChart, LineChart } from 'lucide-react'
import Link from 'next/link'

const analysisAreas = [
  {
    icon: FileText,
    title: 'Análisis Financiero',
    description: 'Evaluación profunda de la salud financiera de tu empresa',
    items: [
      'Análisis de estados financieros (3-5 años)',
      'Ratios financieros (liquidez, rentabilidad, endeudamiento)',
      'Tendencias y evolución histórica',
      'Comparación con benchmarks del sector',
      'Calidad de los ingresos y EBITDA',
      'Capital de trabajo y flujo de caja'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: TrendingUp,
    title: 'Análisis Operativo',
    description: 'Evaluación de la eficiencia y efectividad operacional',
    items: [
      'Procesos clave y cadena de valor',
      'Eficiencia operativa y productividad',
      'Calidad de productos/servicios',
      'Capacidad instalada y utilización',
      'Tecnología y sistemas',
      'Mejores prácticas operacionales'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Users,
    title: 'Análisis de Recursos Humanos',
    description: 'Evaluación del capital humano y organización',
    items: [
      'Estructura organizacional',
      'Calidad del equipo directivo',
      'Rotación y satisfacción del personal',
      'Planes de compensación',
      'Cultura organizacional',
      'Dependencia de personas clave'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: Target,
    title: 'Análisis Estratégico',
    description: 'Evaluación de la posición competitiva y estrategia',
    items: [
      'Posicionamiento en el mercado',
      'Ventajas competitivas sostenibles',
      'Análisis de la competencia',
      'Barreras de entrada',
      'Estrategia y modelo de negocio',
      'Oportunidades de crecimiento'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: BarChart3,
    title: 'Análisis de Mercado',
    description: 'Evaluación del entorno de mercado y sector',
    items: [
      'Tamaño y crecimiento del mercado',
      'Tendencias y drivers del sector',
      'Análisis de clientes',
      'Concentración y diversificación',
      'Ciclo de vida del sector',
      'Factores macroeconómicos'
    ],
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: Shield,
    title: 'Análisis de Riesgos',
    description: 'Identificación y evaluación de riesgos clave',
    items: [
      'Riesgos operacionales',
      'Riesgos financieros',
      'Riesgos legales y regulatorios',
      'Riesgos de mercado',
      'Riesgos estratégicos',
      'Plan de mitigación'
    ],
    color: 'bg-red-100 text-red-600'
  },
]

const fodaAnalysis = {
  fortalezas: [
    'Marca reconocida en el mercado',
    'Equipo directivo experimentado',
    'Tecnología moderna y eficiente',
    'Buena posición financiera',
  ],
  oportunidades: [
    'Expansión a nuevos mercados',
    'Lanzamiento de nuevos productos',
    'Adquisiciones estratégicas',
    'Alianzas estratégicas',
  ],
  debilidades: [
    'Alta dependencia de pocos clientes',
    'Procesos operativos manuales',
    'Necesidad de actualización tecnológica',
    'Limitada presencia digital',
  ],
  amenazas: [
    'Entrada de nuevos competidores',
    'Cambios regulatorios',
    'Volatilidad económica',
    'Disrupciones tecnológicas',
  ],
}

const deliverables = [
  {
    icon: FileText,
    title: 'Informe Ejecutivo',
    description: 'Resumen de hallazgos principales y conclusiones',
    pages: '10-15 páginas'
  },
  {
    icon: BarChart3,
    title: 'Análisis Financiero Detallado',
    description: 'Estados financieros ajustados, ratios y tendencias',
    pages: '20-30 páginas'
  },
  {
    icon: Target,
    title: 'Análisis FODA',
    description: 'Fortalezas, Oportunidades, Debilidades y Amenazas',
    pages: '5-10 páginas'
  },
  {
    icon: PieChart,
    title: 'Benchmarking Sectorial',
    description: 'Comparación con empresas similares del sector',
    pages: '10-15 páginas'
  },
  {
    icon: AlertCircle,
    title: 'Análisis de Riesgos',
    description: 'Identificación y evaluación de riesgos principales',
    pages: '8-12 páginas'
  },
  {
    icon: LineChart,
    title: 'Recomendaciones',
    description: 'Sugerencias para mejorar el valor de la empresa',
    pages: '5-8 páginas'
  },
]

export default function SituacionEmpresaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-teal-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Análisis de Situación Empresarial
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Evaluación integral de tu empresa desde múltiples perspectivas: financiera,
              operativa, estratégica y de mercado.
            </p>
            <Link href="#consulta">
              <Button size="lg" variant="secondary">
                Solicitar Análisis
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
              ¿Por Qué es Importante Analizar la Situación de tu Empresa?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Antes de valorar una empresa, es fundamental entender su situación actual. Un análisis
              integral nos permite identificar fortalezas a capitalizar, debilidades a corregir,
              oportunidades a explotar y amenazas a mitigar.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Este análisis no solo es la base para una valoración precisa, sino también una
              herramienta invaluable para la toma de decisiones estratégicas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">6</div>
              <p className="text-corporate-gray-medium">Áreas de Análisis</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">30+</div>
              <p className="text-corporate-gray-medium">Indicadores Clave</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">3-5</div>
              <p className="text-corporate-gray-medium">Años Analizados</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">60+</div>
              <p className="text-corporate-gray-medium">Páginas Informe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Análisis */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Áreas de Análisis
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analysisAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                  <p className="text-corporate-gray-medium mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.items.map((item, idx) => (
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

      {/* Análisis FODA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Análisis FODA (Ejemplo)
          </h2>

          <div className="max-w-5xl mx-auto">
            <p className="text-center text-corporate-gray-medium mb-12">
              El análisis FODA es una herramienta fundamental que nos permite identificar los
              factores internos y externos que afectan el valor de tu empresa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fortalezas */}
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border-2 border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-600 text-white flex items-center justify-center mr-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700">Fortalezas</h3>
                </div>
                <p className="text-sm text-corporate-gray-medium mb-4">
                  Factores internos positivos que agregan valor
                </p>
                <ul className="space-y-2">
                  {fodaAnalysis.fortalezas.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">+</span>
                      <span className="text-sm text-corporate-gray-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Oportunidades */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mr-3">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Oportunidades</h3>
                </div>
                <p className="text-sm text-corporate-gray-medium mb-4">
                  Factores externos que pueden aumentar el valor
                </p>
                <ul className="space-y-2">
                  {fodaAnalysis.oportunidades.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">○</span>
                      <span className="text-sm text-corporate-gray-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Debilidades */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-xl border-2 border-orange-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-600 text-white flex items-center justify-center mr-3">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700">Debilidades</h3>
                </div>
                <p className="text-sm text-corporate-gray-medium mb-4">
                  Factores internos que reducen el valor
                </p>
                <ul className="space-y-2">
                  {fodaAnalysis.debilidades.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-600 mr-2">-</span>
                      <span className="text-sm text-corporate-gray-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Amenazas */}
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl border-2 border-red-200">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600 text-white flex items-center justify-center mr-3">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-700">Amenazas</h3>
                </div>
                <p className="text-sm text-corporate-gray-medium mb-4">
                  Factores externos que pueden reducir el valor
                </p>
                <ul className="space-y-2">
                  {fodaAnalysis.amenazas.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-red-600 mr-2">!</span>
                      <span className="text-sm text-corporate-gray-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ratios Financieros */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Principales Ratios Financieros que Analizamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                category: 'Liquidez',
                ratios: ['Ratio Corriente', 'Prueba Ácida', 'Capital de Trabajo'],
                color: 'bg-blue-100 text-blue-700'
              },
              {
                category: 'Rentabilidad',
                ratios: ['ROE', 'ROA', 'Margen EBITDA', 'Margen Neto'],
                color: 'bg-green-100 text-green-700'
              },
              {
                category: 'Endeudamiento',
                ratios: ['Deuda/Patrimonio', 'Deuda/EBITDA', 'Cobertura Intereses'],
                color: 'bg-orange-100 text-orange-700'
              },
              {
                category: 'Eficiencia',
                ratios: ['Rotación Inventarios', 'Rotación CxC', 'Rotación Activos'],
                color: 'bg-purple-100 text-purple-700'
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className={`inline-block px-3 py-1 rounded-full ${item.color} text-sm font-semibold mb-4`}>
                  {item.category}
                </div>
                <ul className="space-y-2">
                  {item.ratios.map((ratio, idx) => (
                    <li key={idx} className="text-sm text-corporate-gray-medium flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                      {ratio}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregables */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Qué Recibes?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-3">{item.description}</p>
                  <span className="text-xs text-green-600 font-medium">{item.pages}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-center mb-4">Informe Completo</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">60-90</div>
                <p className="text-sm text-corporate-gray-medium">Páginas</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
                <p className="text-sm text-corporate-gray-medium">Gráficos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">30+</div>
                <p className="text-sm text-corporate-gray-medium">Tablas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Proceso de Análisis
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Recopilación de Información',
                  description: 'Estados financieros, organigramas, planes estratégicos, contratos clave',
                  duration: '3-5 días'
                },
                {
                  step: '2',
                  title: 'Entrevistas con la Dirección',
                  description: 'Reuniones con gerentes y directores para entender el negocio',
                  duration: '2-3 días'
                },
                {
                  step: '3',
                  title: 'Análisis Cuantitativo',
                  description: 'Procesamiento de datos financieros y cálculo de ratios',
                  duration: '5-7 días'
                },
                {
                  step: '4',
                  title: 'Análisis Cualitativo',
                  description: 'Evaluación de factores no financieros (FODA, mercado, estrategia)',
                  duration: '3-5 días'
                },
                {
                  step: '5',
                  title: 'Benchmarking',
                  description: 'Comparación con empresas similares y estándares del sector',
                  duration: '2-3 días'
                },
                {
                  step: '6',
                  title: 'Informe y Presentación',
                  description: 'Elaboración del informe final y presentación de hallazgos',
                  duration: '3-7 días'
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-corporate-gray-medium mb-2">{item.description}</p>
                    <span className="text-sm text-green-600 font-medium">Duración: {item.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consulta" className="section-padding bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Conocer la Situación Real de tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita un análisis integral y obtén insights valiosos para mejorar tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Análisis
            </Button>
            <Link href="/valoracion">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                Ver Servicios de Valoración
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
