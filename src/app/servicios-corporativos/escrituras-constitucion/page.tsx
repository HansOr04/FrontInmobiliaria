import { Button } from '@/components/ui/button'
import { FileText, Building, Users, DollarSign, CheckCircle, Clock,
         Shield, Target, BookOpen, Scale, AlertCircle, Briefcase } from 'lucide-react'
import Link from 'next/link'

const companyTypes = [
  {
    type: 'Compañía Limitada',
    minPartners: '2-15 socios',
    minCapital: '$400',
    liability: 'Limitada a aportes',
    management: 'Gerente designado',
    recommended: 'Pequeñas y medianas empresas familiares',
    advantages: [
      'Proceso más simple',
      'Menor capital inicial',
      'Control entre pocos socios',
      'Menos formalidades'
    ],
    considerations: [
      'Máximo 15 socios',
      'Transferencia de participaciones con aprobación',
      'No puede cotizar en bolsa'
    ],
    time: '6-8 semanas',
    cost: '$800-$1,200',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    type: 'Sociedad Anónima',
    minPartners: '2+ accionistas',
    minCapital: '$800',
    liability: 'Limitada a acciones',
    management: 'Presidente y Directorio',
    recommended: 'Empresas medianas y grandes con proyección de crecimiento',
    advantages: [
      'Fácil transferencia de acciones',
      'Puede cotizar en bolsa',
      'Múltiples accionistas',
      'Mayor proyección'
    ],
    considerations: [
      'Mayor capital mínimo',
      'Más formalidades',
      'Obligación de directorio',
      'Juntas obligatorias'
    ],
    time: '8-10 semanas',
    cost: '$1,200-$1,800',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    type: 'Sociedad por Acciones Simplificada (SAS)',
    minPartners: '1+ accionistas',
    minCapital: 'Sin mínimo',
    liability: 'Limitada a aportes',
    management: 'Flexible',
    recommended: 'Startups, emprendimientos y empresas tecnológicas',
    advantages: [
      'Un solo accionista posible',
      'Sin capital mínimo',
      'Máxima flexibilidad',
      'Proceso más ágil',
      'Menos costos'
    ],
    considerations: [
      'Relativamente nueva',
      'Objeto social amplio',
      'Regulación en desarrollo'
    ],
    time: '4-6 semanas',
    cost: '$600-$1,000',
    color: 'bg-green-100 text-green-600'
  },
]

const process = [
  {
    step: '1',
    title: 'Consultoría Inicial',
    description: 'Definición del tipo de empresa',
    icon: Target,
    time: '1 semana',
    activities: [
      'Reunión con socios fundadores',
      'Análisis de necesidades',
      'Recomendación de tipo societario',
      'Definición de estructura de capital',
      'Planificación tributaria inicial'
    ]
  },
  {
    step: '2',
    title: 'Reserva de Nombre',
    description: 'Trámite en Superintendencia de Compañías',
    icon: BookOpen,
    time: '3-5 días',
    activities: [
      'Búsqueda de nombres disponibles',
      'Solicitud de reserva',
      'Aprobación de nombre',
      'Validez 30 días'
    ]
  },
  {
    step: '3',
    title: 'Apertura de Cuenta',
    description: 'Depósito de capital en banco',
    icon: DollarSign,
    time: '1 semana',
    activities: [
      'Elección de institución financiera',
      'Apertura de cuenta de integración',
      'Depósito del capital',
      'Obtención de certificado bancario'
    ]
  },
  {
    step: '4',
    title: 'Elaboración de Estatutos',
    description: 'Redacción del contrato social',
    icon: FileText,
    time: '1 semana',
    activities: [
      'Redacción personalizada',
      'Definición de gobierno corporativo',
      'Cláusulas especiales',
      'Revisión con socios'
    ]
  },
  {
    step: '5',
    title: 'Escritura Pública',
    description: 'Formalización ante notario',
    icon: Scale,
    time: '1 semana',
    activities: [
      'Elevación a escritura pública',
      'Comparecencia de socios',
      'Firma ante notario',
      'Obtención de copias certificadas'
    ]
  },
  {
    step: '6',
    title: 'Aprobación y Registro',
    description: 'Trámites en Superintendencia',
    icon: Shield,
    time: '2-3 semanas',
    activities: [
      'Presentación en Superintendencia',
      'Aprobación de estatutos',
      'Inscripción en registro mercantil',
      'Obtención de RUC',
      'Publicación en periódico'
    ]
  },
]

const requirements = {
  socios: [
    'Cédulas de identidad vigentes',
    'Certificados de votación actualizados',
    'Papeletas de votación',
    'Estados de cuenta (últimos 3 meses)',
    'Declaración de origen de fondos',
    'Cargas familiares (si aplica)'
  ],
  empresa: [
    'Razón social (3 opciones)',
    'Objeto social detallado',
    'Domicilio de la empresa',
    'Capital social a aportar',
    'Distribución de participaciones/acciones',
    'Designación de administradores'
  ],
  extranjeros: [
    'Pasaporte vigente',
    'Visa (si aplica)',
    'Certificado de antecedentes penales apostillado',
    'Poder notarial (si no comparece)',
    'Traducción oficial de documentos'
  ]
}

const included = [
  {
    category: 'Asesoría Legal',
    icon: Scale,
    items: [
      'Consultoría de tipo societario',
      'Estructura de capital',
      'Gobierno corporativo',
      'Planificación tributaria básica'
    ]
  },
  {
    category: 'Documentación',
    icon: FileText,
    items: [
      'Minuta de constitución',
      'Estatutos personalizados',
      'Escritura pública',
      'Contratos de suscripción'
    ]
  },
  {
    category: 'Trámites',
    icon: CheckCircle,
    items: [
      'Reserva de nombre',
      'Gestión ante Superintendencia',
      'Inscripción en registro mercantil',
      'Obtención de RUC',
      'Publicación en periódico'
    ]
  },
  {
    category: 'Entregables',
    icon: Briefcase,
    items: [
      'Carpeta corporativa completa',
      'Certificados de existencia',
      'Nombramientos inscritos',
      'Libro de accionistas/socios',
      'Asesoría post-constitución'
    ]
  },
]

const costs = [
  { item: 'Honorarios profesionales', range: '$600 - $1,800', notes: 'Según tipo de sociedad' },
  { item: 'Derechos de registro', range: '$200 - $400', notes: 'Superintendencia y Registro' },
  { item: 'Escritura pública', range: '$150 - $300', notes: 'Notaría' },
  { item: 'Publicación en periódico', range: '$50 - $100', notes: 'Extracto de constitución' },
  { item: 'Patente municipal', range: '$10 - $200', notes: 'Varía según cantón' },
  { item: 'Gastos varios', range: '$100 - $200', notes: 'Copias, trámites, etc.' },
]

const faqs = [
  {
    question: '¿Cuál es el tipo de empresa más conveniente para mí?',
    answer: 'Depende de varios factores: número de socios, capital disponible, tipo de negocio, proyección de crecimiento, y necesidad de inversión externa. La SAS es ideal para emprendimientos ágiles, la Cía. Ltda. para negocios familiares, y la S.A. para empresas con proyección de crecimiento y múltiples accionistas.'
  },
  {
    question: '¿Puedo constituir una empresa con un solo socio?',
    answer: 'Sí, mediante una Sociedad por Acciones Simplificada (SAS), que permite un solo accionista. Las Cía. Ltda. y S.A. requieren mínimo 2 socios, aunque uno puede tener participación mayoritaria.'
  },
  {
    question: '¿Cuánto tiempo tarda todo el proceso?',
    answer: 'Para una SAS: 4-6 semanas. Para Cía. Ltda.: 6-8 semanas. Para S.A.: 8-10 semanas. Los tiempos pueden variar según la complejidad del caso, disponibilidad de documentos, y tiempos de respuesta de las entidades públicas.'
  },
  {
    question: '¿Puedo operar mientras se constituye la empresa?',
    answer: 'No se recomienda facturar o firmar contratos hasta tener el RUC definitivo. Sin embargo, puedes realizar actividades preparatorias como contratar personal, alquilar locales (a nombre personal), y preparar el negocio.'
  },
  {
    question: '¿Qué pasa si los socios están en diferentes ciudades?',
    answer: 'No hay problema. Podemos coordinar firmas en diferentes notarías o trabajar con poderes notariales. Para socios en el extranjero, se requieren poderes apostillados o legalizados según el país.'
  },
  {
    question: '¿Cuánto debo aportar como capital?',
    answer: 'Los mínimos legales son: SAS sin mínimo, Cía. Ltda. $400, S.A. $800. Sin embargo, recomendamos aportar un capital que refleje las necesidades reales del negocio para los primeros 3-6 meses de operación.'
  },
]

export default function EscriturasConstitucionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-700 to-violet-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Constitución de Empresas
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Asesoría integral para constituir tu empresa. Desde la elección del tipo societario
              hasta la obtención del RUC. Proceso completo, rápido y sin complicaciones.
            </p>
            <Link href="#tipos">
              <Button size="lg" variant="secondary">
                Tipos de Empresa
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
              Tu Empresa en Regla, Sin Complicaciones
            </h2>
            <p className="text-lg text-corporate-gray-medium leading-relaxed mb-6">
              Constituir una empresa implica tomar decisiones importantes que afectarán tu negocio
              por años. Te acompañamos en cada paso, desde la elección del tipo societario hasta
              la obtención de todos los permisos necesarios.
            </p>
            <p className="text-lg text-corporate-gray-medium leading-relaxed">
              Más de 200 empresas constituidas con nosotros están operando exitosamente en Ecuador.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <p className="text-corporate-gray-medium">Empresas Constituidas</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <p className="text-corporate-gray-medium">Éxito en Trámites</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
              <p className="text-corporate-gray-medium">Años Experiencia</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">4-10</div>
              <p className="text-corporate-gray-medium">Semanas Proceso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Empresa */}
      <section id="tipos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Tipos de Empresa que Constituimos
          </h2>

          <div className="space-y-8">
            {companyTypes.map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-lg ${company.color} flex items-center justify-center flex-shrink-0`}>
                    <Building className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">{company.type}</h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <p className="text-xs text-corporate-gray-medium mb-1">Socios</p>
                        <p className="font-semibold text-sm">{company.minPartners}</p>
                      </div>
                      <div>
                        <p className="text-xs text-corporate-gray-medium mb-1">Capital mínimo</p>
                        <p className="font-semibold text-sm">{company.minCapital}</p>
                      </div>
                      <div>
                        <p className="text-xs text-corporate-gray-medium mb-1">Tiempo</p>
                        <p className="font-semibold text-sm">{company.time}</p>
                      </div>
                      <div>
                        <p className="text-xs text-corporate-gray-medium mb-1">Costo</p>
                        <p className="font-semibold text-sm text-purple-600">{company.cost}</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg mb-6">
                      <p className="text-sm">
                        <strong className="text-purple-900">Recomendado para:</strong>{' '}
                        <span className="text-purple-800">{company.recommended}</span>
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3 text-sm">✓ Ventajas</h4>
                        <ul className="space-y-2">
                          {company.advantages.map((adv, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-corporate-gray-medium">{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-3 text-sm">⚠ Consideraciones</h4>
                        <ul className="space-y-2">
                          {company.considerations.map((cons, idx) => (
                            <li key={idx} className="flex items-start text-sm">
                              <AlertCircle className="w-4 h-4 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-corporate-gray-medium">{cons}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Proceso de Constitución
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-5 h-5 text-purple-600" />
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <div className="ml-auto flex items-center gap-2 text-xs text-purple-700">
                            <Clock className="w-4 h-4" />
                            <span className="font-semibold">{item.time}</span>
                          </div>
                        </div>
                        <p className="text-corporate-gray-medium text-sm mb-4">{item.description}</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {item.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mr-2" />
                              {activity}
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
        </div>
      </section>

      {/* Requisitos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Requisitos Documentales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6">
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Documentos de Socios</h3>
              <ul className="space-y-2">
                {requirements.socios.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-corporate-gray-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <Building className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Información de la Empresa</h3>
              <ul className="space-y-2">
                {requirements.empresa.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-corporate-gray-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6">
              <FileText className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-4">Socios Extranjeros</h3>
              <ul className="space-y-2">
                {requirements.extranjeros.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-corporate-gray-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Incluye */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Qué Incluye Nuestro Servicio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {included.map((section, index) => {
              const Icon = section.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <Icon className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold mb-4">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
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

      {/* Costos */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Desglose de Costos
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-purple-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Concepto</th>
                    <th className="px-6 py-4 text-left">Rango</th>
                    <th className="px-6 py-4 text-left">Notas</th>
                  </tr>
                </thead>
                <tbody>
                  {costs.map((cost, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-semibold">{cost.item}</td>
                      <td className="px-6 py-4 text-purple-600 font-bold">{cost.range}</td>
                      <td className="px-6 py-4 text-sm text-corporate-gray-medium">{cost.notes}</td>
                    </tr>
                  ))}
                  <tr className="bg-purple-100 font-bold">
                    <td className="px-6 py-4">TOTAL APROXIMADO</td>
                    <td className="px-6 py-4 text-purple-700 text-lg">$1,110 - $3,000</td>
                    <td className="px-6 py-4 text-sm">Depende del tipo de sociedad</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
      <section className="section-padding bg-gradient-to-r from-purple-600 to-violet-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Constituir tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agenda una consulta gratuita y te ayudaremos a elegir el mejor tipo societario
            para tu negocio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Consulta Gratuita
            </Button>
            <Link href="/servicios-corporativos">
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
