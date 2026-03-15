import { Button } from '@/components/ui/button'
import { Scale, FileText, Users, DollarSign, Shield, AlertCircle, CheckCircle,
         Building, Gavel, BookOpen, Target, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const keyAspects = [
  {
    icon: Building,
    title: 'Régimen de Propiedad Horizontal',
    description: 'Base legal de condominios y edificios',
    topics: [
      'Definición y constitución',
      'Bienes propios y comunes',
      'Alícuotas y coeficientes',
      'Escrituras y registros',
      'Modificaciones al régimen',
      'Disolución del condominio'
    ],
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Users,
    title: 'Derechos y Obligaciones',
    description: 'De copropietarios y administración',
    topics: [
      'Derecho al uso y goce',
      'Obligaciones de pago',
      'Uso de áreas comunes',
      'Prohibiciones y restricciones',
      'Representación legal',
      'Responsabilidades'
    ],
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: FileText,
    title: 'Asambleas y Decisiones',
    description: 'Funcionamiento y toma de decisiones',
    topics: [
      'Tipos de asambleas',
      'Convocatoria y quórum',
      'Mayorías requeridas',
      'Actas y documentación',
      'Votaciones',
      'Impugnación de acuerdos'
    ],
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: DollarSign,
    title: 'Aspectos Financieros',
    description: 'Gestión económica del condominio',
    topics: [
      'Presupuesto anual',
      'Alícuotas ordinarias',
      'Cuotas extraordinarias',
      'Fondo de reserva',
      'Morosidad y cobro',
      'Transparencia financiera'
    ],
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: Shield,
    title: 'Administración',
    description: 'Gestión y administrador',
    topics: [
      'Figura del administrador',
      'Funciones y atribuciones',
      'Nombramiento y remoción',
      'Responsabilidades',
      'Rendición de cuentas',
      'Remuneración'
    ],
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: Gavel,
    title: 'Sanciones y Conflictos',
    description: 'Infracciones y resolución de disputas',
    topics: [
      'Tipos de infracciones',
      'Sistema de multas',
      'Procedimiento sancionatorio',
      'Mediación y arbitraje',
      'Vías legales',
      'Ejecución de sanciones'
    ],
    color: 'bg-yellow-100 text-yellow-600'
  },
]

const commonConflicts = [
  {
    conflict: 'Morosidad en el pago de alícuotas',
    solution: 'Procedimiento de cobranza: recordatorios, multas, restricción de servicios, demanda judicial',
    prevention: 'Comunicación clara, facilidades de pago, sistema de alertas tempranas'
  },
  {
    conflict: 'Ruidos y molestias entre vecinos',
    solution: 'Mediación, aplicación del reglamento, multas progresivas',
    prevention: 'Reglamento claro, horarios establecidos, aislamiento acústico'
  },
  {
    conflict: 'Uso indebido de áreas comunes',
    solution: 'Notificación, restricción de acceso, multas',
    prevention: 'Reglamento específico, sistema de reservas, control de acceso'
  },
  {
    conflict: 'Modificaciones no autorizadas',
    solution: 'Orden de detención, multa, obligación de revertir',
    prevention: 'Proceso de autorización claro, inspecciones periódicas'
  },
  {
    conflict: 'Desacuerdos sobre el presupuesto',
    solution: 'Asamblea extraordinaria, presentación detallada, votación',
    prevention: 'Transparencia total, presupuesto participativo, justificación clara'
  },
  {
    conflict: 'Conflictos con la administración',
    solution: 'Asamblea, cambio de administrador si corresponde',
    prevention: 'Contrato claro, evaluación periódica, comunicación fluida'
  },
]

const assemblyTypes = [
  {
    type: 'Asamblea General Ordinaria',
    frequency: 'Anual',
    purpose: 'Aprobar presupuesto, estados financieros, elegir administrador',
    quorum: '50% + 1 en primera convocatoria',
    decisions: 'Mayoría simple de presentes'
  },
  {
    type: 'Asamblea General Extraordinaria',
    frequency: 'Cuando sea necesario',
    purpose: 'Temas urgentes o específicos',
    quorum: '50% + 1 en primera convocatoria',
    decisions: 'Mayoría simple (según tema)'
  },
  {
    type: 'Asamblea para Reforma de Estatutos',
    frequency: 'Excepcional',
    purpose: 'Modificar estatutos o reglamento',
    quorum: '75% de copropietarios',
    decisions: '75% de votos favorables'
  },
]

const faqs = [
  {
    question: '¿Qué es una alícuota?',
    answer: 'Es el porcentaje de participación de cada unidad en los gastos comunes del condominio. Se calcula según la superficie, ubicación y características de cada unidad.'
  },
  {
    question: '¿Pueden restringirme servicios por mora?',
    answer: 'Sí, el reglamento puede establecer restricciones como acceso a áreas recreativas o estacionamientos, pero NO pueden cortar servicios básicos como agua o luz.'
  },
  {
    question: '¿Puedo alquilar mi departamento?',
    answer: 'Generalmente sí, a menos que el reglamento lo prohíba expresamente. Sin embargo, el inquilino debe cumplir el reglamento y el propietario es responsable solidario.'
  },
  {
    question: '¿Cómo se destituye al administrador?',
    answer: 'Por decisión de la asamblea general con mayoría simple. Debe convocarse asamblea y el administrador tiene derecho a defenderse.'
  },
  {
    question: '¿Qué pasa si no asisto a las asambleas?',
    answer: 'Las decisiones tomadas te obligan igual. Si no asistes a 3 asambleas consecutivas sin justificación, puedes ser multado según el reglamento.'
  },
  {
    question: '¿Puedo modificar la fachada de mi departamento?',
    answer: 'No sin autorización de la asamblea. Las fachadas son áreas comunes y cualquier modificación requiere aprobación de al menos 75% de copropietarios.'
  },
]

export default function LeyesPropiedadHorizontalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-pink-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Leyes de Propiedad Horizontal
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Asesoría legal especializada en régimen de propiedad horizontal,
              condominios y copropiedades.
            </p>
            <Link href="#contacto">
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
              ¿Qué es la Propiedad Horizontal?
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              La Propiedad Horizontal es un régimen especial que permite que diferentes personas
              sean propietarias de unidades individuales (departamentos, locales) dentro de un mismo
              edificio o conjunto, compartiendo la propiedad de áreas y servicios comunes.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Este régimen está regulado por leyes específicas que establecen derechos, obligaciones
              y procedimientos que todos los copropietarios deben cumplir.
            </p>
          </div>

          {/* Concepto visual */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-center mb-6">Estructura de la Propiedad Horizontal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Bienes Propios</h4>
                <ul className="space-y-2 text-sm text-corporate-gray-medium">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Departamento o local
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Balcones y terrazas privadas
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Parqueadero asignado
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Bodega asignada
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-purple-700">Bienes Comunes</h4>
                <ul className="space-y-2 text-sm text-corporate-gray-medium">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Estructura del edificio
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Ascensores y escaleras
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Pasillos y lobby
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    Piscina, gimnasio, áreas sociales
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aspectos clave */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Aspectos Clave de la Ley
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyAspects.map((aspect, index) => {
              const Icon = aspect.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-lg ${aspect.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{aspect.title}</h3>
                  <p className="text-corporate-gray-medium mb-6">{aspect.description}</p>
                  <ul className="space-y-2">
                    {aspect.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2 mt-1.5 flex-shrink-0" />
                        <span className="text-corporate-gray-medium">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tipos de asambleas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Tipos de Asambleas
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {assemblyTypes.map((assembly, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <h3 className="font-semibold text-purple-700 mb-2">{assembly.type}</h3>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                      {assembly.frequency}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Propósito:</p>
                    <p className="text-sm text-corporate-gray-medium">{assembly.purpose}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Quórum:</p>
                    <p className="text-sm text-corporate-gray-medium">{assembly.quorum}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">Decisiones:</p>
                    <p className="text-sm text-corporate-gray-medium">{assembly.decisions}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conflictos comunes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Conflictos Comunes y Soluciones
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {commonConflicts.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3 text-corporate-purple">
                      ⚠️ {item.conflict}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2 text-yellow-900">Solución Legal:</p>
                        <p className="text-sm text-yellow-800">{item.solution}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm font-semibold mb-2 text-green-900">Prevención:</p>
                        <p className="text-sm text-green-800">{item.prevention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestros Servicios Legales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: 'Elaboración de Reglamentos',
                description: 'Redacción de reglamentos internos adaptados a tu condominio',
                price: 'Desde $800'
              },
              {
                icon: Scale,
                title: 'Asesoría Legal Permanente',
                description: 'Consultas ilimitadas sobre propiedad horizontal',
                price: '$150/mes'
              },
              {
                icon: Users,
                title: 'Asistencia a Asambleas',
                description: 'Asesoría legal durante asambleas generales',
                price: '$200/asamblea'
              },
              {
                icon: Gavel,
                title: 'Gestión de Conflictos',
                description: 'Mediación y resolución de disputas entre copropietarios',
                price: '$500/caso'
              },
              {
                icon: DollarSign,
                title: 'Cobro de Morosidad',
                description: 'Gestión legal de cobro de alícuotas impagas',
                price: '20% del monto recuperado'
              },
              {
                icon: BookOpen,
                title: 'Capacitaciones',
                description: 'Talleres sobre derechos y obligaciones para copropietarios',
                price: '$400/sesión'
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-purple-600">{service.price}</div>
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

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-corporate-purple">{faq.question}</h3>
                    <p className="text-corporate-gray-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-corporate-gray-medium mb-4">¿Tienes más preguntas?</p>
            <Button variant="outline">
              Contáctanos para Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Necesitas Asesoría Legal en Propiedad Horizontal?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contamos con abogados especializados en régimen de propiedad horizontal.
            Primera consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Agendar Consulta Gratuita
            </Button>
            <Link href="/gestion-inmobiliaria">
              <Button size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                Ver Otros Servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
