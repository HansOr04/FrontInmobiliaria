import { Button } from '@/components/ui/button'
import { Calculator, BookOpen, FileText, CheckCircle, Clock, Users, Award, Target } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'NIIF para PYMES',
    description: 'Normas Internacionales de Información Financiera aplicadas a pequeñas y medianas empresas',
    duration: '40 horas',
    modality: 'Virtual',
    price: '$250',
    level: 'Intermedio',
    topics: ['Introducción a NIIF', 'Estados Financieros', 'Instrumentos Financieros', 'Propiedades Planta y Equipo', 'Inventarios', 'Casos Prácticos'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Contabilidad General',
    description: 'Fundamentos de contabilidad para principiantes',
    duration: '32 horas',
    modality: 'Presencial',
    price: '$180',
    level: 'Básico',
    topics: ['Principios Contables', 'Cuenta y Partida Doble', 'Libro Diario', 'Libro Mayor', 'Balance', 'Estado de Resultados'],
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Estados Financieros Avanzados',
    description: 'Elaboración y análisis de estados financieros complejos',
    duration: '24 horas',
    modality: 'Híbrido',
    price: '$200',
    level: 'Avanzado',
    topics: ['Estado de Situación Financiera', 'Estado de Resultados Integral', 'Estado de Cambios en el Patrimonio', 'Estado de Flujos de Efectivo', 'Notas Explicativas', 'Análisis e Interpretación'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Costos y Presupuestos',
    description: 'Gestión de costos empresariales y elaboración de presupuestos',
    duration: '28 horas',
    modality: 'Virtual',
    price: '$190',
    level: 'Intermedio',
    topics: ['Contabilidad de Costos', 'Costeo por Procesos', 'Costeo ABC', 'Punto de Equilibrio', 'Presupuesto Maestro', 'Control Presupuestario'],
    color: 'bg-orange-100 text-orange-600'
  },
]

const benefits = [
  { icon: Award, title: 'Certificado Oficial', description: 'Avalado por organismos profesionales' },
  { icon: Users, title: 'Docentes Expertos', description: 'CPAs con experiencia práctica' },
  { icon: BookOpen, title: 'Material Incluido', description: 'PDFs, videos y casos prácticos' },
  { icon: Target, title: 'Enfoque Práctico', description: 'Aplicación inmediata en tu trabajo' },
]

export default function CapacitacionContablePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">Capacitación Contable</h1>
            <p className="text-xl mb-8 opacity-90">
              Cursos especializados en NIIF, contabilidad general, estados financieros y costos.
              Certificaciones reconocidas internacionalmente.
            </p>
            <Link href="#cursos">
              <Button size="lg" variant="secondary">Ver Cursos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">Cursos Disponibles</h2>
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
                    <Clock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.duration}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Users className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.modality}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Calculator className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                    <p className="text-xs text-corporate-gray-medium font-bold text-blue-600">{course.price}</p>
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

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">Beneficios</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
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

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Capacitarte?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscríbete ahora y obtén un 10% de descuento en tu primer curso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Inscribirse Ahora</Button>
            <Link href="/capacitacion">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Ver Todas las Áreas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
