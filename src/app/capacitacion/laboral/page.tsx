import { Button } from '@/components/ui/button'
import { Briefcase, BookOpen, FileText, CheckCircle, Clock, Users, Award, Target } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Derecho Laboral Ecuatoriano',
    description: 'Marco legal, contratos y obligaciones del empleador',
    duration: '36 horas',
    modality: 'Virtual',
    price: '$200',
    level: 'Básico',
    topics: ['Código de Trabajo', 'Tipos de Contratos', 'Jornada Laboral', 'Remuneraciones', 'Desvinculación Laboral', 'Derechos del Trabajador'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Nómina y Seguridad Social',
    description: 'Cálculo de rol de pagos, beneficios sociales y afiliaciones',
    duration: '24 horas',
    modality: 'Presencial',
    price: '$180',
    level: 'Intermedio',
    topics: ['Rol de Pagos', 'Cálculo de Beneficios', 'IESS y Fondos de Reserva', 'Décimos', 'Utilidades', 'Liquidaciones'],
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Gestión del Talento Humano',
    description: 'Reclutamiento, selección y desarrollo de personal',
    duration: '32 horas',
    modality: 'Híbrido',
    price: '$220',
    level: 'Intermedio',
    topics: ['Reclutamiento', 'Selección por Competencias', 'Evaluación de Desempeño', 'Capacitación', 'Clima Laboral', 'Compensación'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Seguridad y Salud Ocupacional',
    description: 'Prevención de riesgos laborales y cumplimiento normativo',
    duration: '28 horas',
    modality: 'Presencial',
    price: '$190',
    level: 'Básico',
    topics: ['Marco Legal SSO', 'Identificación de Riesgos', 'Plan de Emergencias', 'Equipos de Protección', 'Comité de Seguridad', 'Auditorías'],
    color: 'bg-orange-100 text-orange-600'
  },
]

const benefits = [
  { icon: Award, title: 'Certificado Avalado', description: 'Reconocido por el Ministerio de Trabajo' },
  { icon: Users, title: 'Expertos en RRHH', description: 'Profesionales con experiencia práctica' },
  { icon: BookOpen, title: 'Material Actualizado', description: 'Incluye últimas reformas laborales' },
  { icon: Target, title: 'Casos Reales', description: 'Ejemplos del sector empresarial' },
]

export default function CapacitacionLaboralPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-green-600 via-teal-700 to-cyan-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">Capacitación Laboral</h1>
            <p className="text-xl mb-8 opacity-90">
              Cursos especializados en derecho laboral, nómina, gestión del talento humano
              y seguridad ocupacional.
            </p>
            <Link href="#cursos"><Button size="lg" variant="secondary">Ver Cursos</Button></Link>
          </div>
        </div>
      </section>

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
                    <Clock className="w-5 h-5 mx-auto mb-1 text-green-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.duration}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Users className="w-5 h-5 mx-auto mb-1 text-green-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.modality}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Briefcase className="w-5 h-5 mx-auto mb-1 text-green-600" />
                    <p className="text-xs text-corporate-gray-medium font-bold text-green-600">{course.price}</p>
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
          <h2 className="heading-3 text-corporate-purple text-center mb-12">Beneficios</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
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

      <section className="section-padding bg-gradient-to-r from-green-600 to-teal-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Capacitarte?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscríbete ahora y mejora tu gestión laboral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Inscribirse Ahora</Button>
            <Link href="/capacitacion">
              <Button size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                Ver Todas las Áreas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
