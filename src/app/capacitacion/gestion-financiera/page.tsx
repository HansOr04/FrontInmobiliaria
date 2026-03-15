import { Button } from '@/components/ui/button'
import { BookOpen, Target, FileText, CheckCircle, Clock, Users, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Planeación Financiera Estratégica',
    description: 'Elaboración de planes financieros a largo plazo',
    duration: '40 horas',
    modality: 'Híbrido',
    price: '$280',
    level: 'Avanzado',
    topics: ['Diagnóstico Financiero', 'Proyecciones', 'Escenarios', 'Estrategias Financieras', 'Plan de Inversiones', 'Contingencias'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Control de Gestión',
    description: 'Herramientas para monitorear y controlar el desempeño',
    duration: '32 horas',
    modality: 'Virtual',
    price: '$220',
    level: 'Intermedio',
    topics: ['KPIs Financieros', 'Balanced Scorecard', 'Dashboard Gerencial', 'Análisis de Variaciones', 'Reporting Ejecutivo', 'Mejora Continua'],
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Gestión de Capital de Trabajo',
    description: 'Optimización de liquidez y recursos corrientes',
    duration: '24 horas',
    modality: 'Presencial',
    price: '$190',
    level: 'Intermedio',
    topics: ['Ciclo de Conversión', 'Cuentas por Cobrar', 'Inventarios', 'Cuentas por Pagar', 'Cash Management', 'Optimización'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Gestión de Riesgos Financieros',
    description: 'Identificación y mitigación de riesgos empresariales',
    duration: '28 horas',
    modality: 'Virtual',
    price: '$200',
    level: 'Avanzado',
    topics: ['Tipos de Riesgos', 'Identificación', 'Evaluación', 'Estrategias de Mitigación', 'Seguros', 'Planes de Contingencia'],
    color: 'bg-orange-100 text-orange-600'
  },
]

const benefits = [
  { icon: Award, title: 'Certificado Ejecutivo', description: 'Para alta gerencia' },
  { icon: Users, title: 'Expertos Consultores', description: 'Consultores de empresas Fortune 500' },
  { icon: BookOpen, title: 'Herramientas', description: 'Plantillas y modelos incluidos' },
  { icon: Target, title: 'Networking', description: 'Conexión con otros gerentes' },
]

export default function CapacitacionGestionFinancieraPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">Gestión Financiera</h1>
            <p className="text-xl mb-8 opacity-90">
              Cursos especializados en planeación, control, estrategia financiera
              y gestión de riesgos para alta gerencia.
            </p>
            <Link href="#cursos"><Button size="lg" variant="secondary">Ver Cursos</Button></Link>
          </div>
        </div>
      </section>

      <section id="cursos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">Cursos Ejecutivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow">
                <div className={`inline-block px-3 py-1 rounded-full ${course.color} text-sm font-semibold mb-4`}>
                  {course.level}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
                <p className="text-corporate-gray-medium mb-6">{course.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Clock className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.duration}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Users className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.modality}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
                    <p className="text-xs text-corporate-gray-medium font-bold text-emerald-600">{course.price}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Temas:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-corporate-gray-medium">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" variant="orange">Inscribirse Ahora</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">Beneficios Ejecutivos</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-corporate-gray-medium">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Liderar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscríbete ahora y lleva tu gestión financiera al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Inscribirse Ahora</Button>
            <Link href="/capacitacion">
              <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100">
                Ver Todas las Áreas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
