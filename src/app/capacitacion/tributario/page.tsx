import { Button } from '@/components/ui/button'
import { TrendingUp, BookOpen, FileText, CheckCircle, Clock, Users, Award, Target } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    title: 'Impuesto a la Renta',
    description: 'Cálculo, declaración y planificación del IR para personas naturales y sociedades',
    duration: '32 horas',
    modality: 'Virtual',
    price: '$220',
    level: 'Intermedio',
    topics: ['Base Legal', 'Ingresos Gravados', 'Gastos Deducibles', 'Conciliación Tributaria', 'Formulario 101 y 102', 'Planificación Fiscal'],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'IVA y Retenciones',
    description: 'Impuesto al Valor Agregado y retenciones en la fuente',
    duration: '24 horas',
    modality: 'Presencial',
    price: '$180',
    level: 'Básico',
    topics: ['Hecho Generador del IVA', 'Crédito Tributario', 'Retenciones IVA', 'Retenciones IR', 'Declaraciones Mensuales', 'ATS'],
    color: 'bg-green-100 text-green-600'
  },
  {
    title: 'Auditoría Tributaria',
    description: 'Técnicas de auditoría y defensa ante el SRI',
    duration: '40 horas',
    modality: 'Híbrido',
    price: '$280',
    level: 'Avanzado',
    topics: ['Proceso de Fiscalización', 'Facultades del SRI', 'Revisión Documental', 'Recursos Administrativos', 'Juicio de Exc epción', 'Defensa Tributaria'],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    title: 'Comprobantes Electrónicos',
    description: 'Facturación electrónica y cumplimiento normativo',
    duration: '16 horas',
    modality: 'Virtual',
    price: '$120',
    level: 'Básico',
    topics: ['Marco Legal', 'Tipos de Comprobantes', 'Autorización y Emisión', 'Firma Electrónica', 'Errores Comunes', 'Sanciones'],
    color: 'bg-orange-100 text-orange-600'
  },
]

const benefits = [
  { icon: Award, title: 'Certificado Avalado', description: 'Reconocido por organismos contables' },
  { icon: Users, title: 'Expertos Tributarios', description: 'Auditores y consultores del SRI' },
  { icon: BookOpen, title: 'Normativa Actualizada', description: 'Últimas reformas tributarias' },
  { icon: Target, title: 'Casos Prácticos', description: 'Ejercicios reales de fiscalización' },
]

export default function CapacitacionTributarioPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-orange-600 via-red-700 to-pink-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">Capacitación Tributaria</h1>
            <p className="text-xl mb-8 opacity-90">
              Cursos especializados en impuestos, declaraciones, auditoría tributaria
              y facturación electrónica.
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
                    <Clock className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.duration}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <Users className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                    <p className="text-xs text-corporate-gray-medium">{course.modality}</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded">
                    <TrendingUp className="w-5 h-5 mx-auto mb-1 text-orange-600" />
                    <p className="text-xs text-corporate-gray-medium font-bold text-orange-600">{course.price}</p>
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
                  <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
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

      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Dominar lo Tributario?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Inscríbete ahora y evita sanciones del SRI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">Inscribirse Ahora</Button>
            <Link href="/capacitacion">
              <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
                Ver Todas las Áreas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
