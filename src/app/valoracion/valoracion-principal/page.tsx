import { Button } from '@/components/ui/button'
import PricingTable from '@/components/services/PricingTable'
import { Calculator, FileText, TrendingUp, BarChart3, Target, CheckCircle,
         Clock, Users, Award, Shield, Zap, DollarSign } from 'lucide-react'
import Link from 'next/link'

const pricingPlans = [
  {
    name: 'BÁSICO',
    price: 'Desde $1,500',
    description: 'Ideal para PYMEs y startups',
    features: [
      '✓ Análisis financiero básico (3 años históricos)',
      '✓ 1 metodología de valoración (DCF o Múltiplos)',
      '✓ Proyecciones a 3 años',
      '✓ 1 escenario de valoración',
      '✓ Informe ejecutivo (10-15 páginas)',
      '✓ 1 reunión de presentación',
      '✓ Tiempo de entrega: 30 dias',
      '✓ Soporte por email durante el proceso',
    ],
    cta: 'Solicitar Paquete Básico',
    ctaVariant: 'outline' as const,
  },
  {
    name: 'ESTÁNDAR',
    price: 'Desde $8,000',
    description: 'El más solicitado',
    features: [
      '✓ Todo lo del paquete Básico',
      '✓ Análisis financiero completo (5 años históricos)',
      '✓ 2-3 metodologías de valoración',
      '✓ Análisis FODA detallado',
      '✓ Proyecciones a 5 años',
      '✓ 3 escenarios (optimista, base, pesimista)',
      '✓ Análisis de sensibilidad',
      '✓ Benchmarking sectorial',
      '✓ Informe completo (30-40 páginas)',
      '✓ 2 reuniones (inicial y presentación)',
      '✓ Soporte 30 días post-entrega',
      '✓ Tiempo de entrega: 60 días',
    ],
    cta: 'Solicitar Paquete Estándar',
    highlighted: true,
    ctaVariant: 'secondary' as const,
  },
  {
    name: 'PREMIUM',
    price: 'Desde $12,000',
    description: 'Servicio completo y exhaustivo',
    features: [
      '✓ Todo lo del paquete Estándar',
      '✓ Análisis financiero exhaustivo (7-10 años)',
      '✓ 3-4 metodologías de valoración',
      '✓ Due diligence financiero completo',
      '✓ Proyecciones a 10 años',
      '✓ 3-5 escenarios detallados',
      '✓ Análisis de sensibilidad avanzado',
      '✓ Múltiples análisis de escenarios',
      '✓ Informe ejecutivo + técnico (60+ páginas)',
      '✓ Presentación en PowerPoint',
      '✓ Reuniones ilimitadas',
      '✓ Soporte 90 días post-entrega',
      '✓ Actualización anual gratis (primer año)',
      '✓ Tiempo de entrega: 90 dias',
    ],
    cta: 'Solicitar Paquete Premium',
    ctaVariant: 'orange' as const,
  },
]

const whatsIncluded = [
  {
    icon: FileText,
    title: 'Informe de Valoración',
    description: 'Documento profesional con todos los análisis y conclusiones',
    items: ['Resumen ejecutivo', 'Metodologías aplicadas', 'Análisis detallado', 'Conclusiones y rango de valor']
  },
  {
    icon: BarChart3,
    title: 'Modelo Financiero',
    description: 'Archivo Excel con todos los cálculos y proyecciones',
    items: ['Estados financieros proyectados', 'Flujos de caja', 'Cálculos de valoración', 'Análisis de sensibilidad']
  },
  {
    icon: TrendingUp,
    title: 'Presentación Ejecutiva',
    description: 'PowerPoint resumiendo hallazgos principales',
    items: ['Resumen visual', 'Gráficos clave', 'Conclusiones', 'Recomendaciones']
  },
  {
    icon: Users,
    title: 'Reuniones',
    description: 'Sesiones de trabajo y presentación de resultados',
    items: ['Kick-off inicial', 'Seguimiento', 'Presentación final', 'Q&A']
  },
]

const deliveryProcess = [
  {
    step: '1',
    title: 'Contacto Inicial',
    description: 'Conversación para entender tus necesidades',
    duration: '1 día',
    icon: Users
  },
  {
    step: '2',
    title: 'Propuesta y Cotización',
    description: 'Enviamos propuesta personalizada',
    duration: '1-2 días',
    icon: FileText
  },
  {
    step: '3',
    title: 'Inicio del Proyecto',
    description: 'Firma de contrato y reunión kick-off',
    duration: '1 día',
    icon: CheckCircle
  },
  {
    step: '4',
    title: 'Recopilación de Información',
    description: 'Enviamos checklist de documentos necesarios',
    duration: '3-7 días',
    icon: FileText
  },
  {
    step: '5',
    title: 'Análisis y Valoración',
    description: 'Nuestro equipo trabaja en el análisis completo',
    duration: '2-4 semanas',
    icon: Calculator
  },
  {
    step: '6',
    title: 'Entrega y Presentación',
    description: 'Presentamos resultados y respondemos consultas',
    duration: '1 día',
    icon: Target
  },
]

const additionalServices = [
  {
    icon: Zap,
    title: 'Valoración Express',
    description: 'Valoración rápida en 5-7 días hábiles',
    price: '+40% sobre tarifa base',
    features: ['Prioridad máxima', 'Equipo dedicado', 'Entrega garantizada']
  },
  {
    icon: TrendingUp,
    title: 'Actualización Anual',
    description: 'Actualización de la valoración cada año',
    price: '40% del valor original',
    features: ['Estados financieros actualizados', 'Nuevas proyecciones', 'Informe actualizado']
  },
  {
    icon: Users,
    title: 'Asesoría Post-Valoración',
    description: 'Acompañamiento en negociaciones',
    price: '$200/hora',
    features: ['Consultoría estratégica', 'Soporte en negociaciones', 'Respuesta a due diligence']
  },
  {
    icon: Award,
    title: 'Certificación de Valoración',
    description: 'Valoración certificada para uso oficial',
    price: '+$500',
    features: ['Certificado oficial', 'Firma de CPA', 'Validez legal']
  },
]

const faqs = [
  {
    question: '¿Cuánto tiempo toma una valoración?',
    answer: 'Depende del paquete: Básico (30 dias), Estándar (60 dias), Premium (90 dias). Ofrecemos servicio express con recargo del 40%.'
  },
  {
    question: '¿Qué documentos necesito proporcionar?',
    answer: 'Estados financieros de los últimos 3-5 años, declaraciones de impuestos, lista de activos, contratos importantes, información sobre clientes y proveedores principales, y plan estratégico si existe.'
  },
  {
    question: '¿La valoración es vinculante?',
    answer: 'No, es una opinión profesional del valor. Sin embargo, está respaldada por metodologías reconocidas y puede ser usada para negociaciones, toma de decisiones o resolución de conflictos.'
  },
  {
    question: '¿Puedo usar la valoración para un banco o inversionista?',
    answer: 'Sí, nuestras valoraciones cumplen con estándares internacionales (IVS) y son aceptadas por bancos, inversionistas y auditores. Para uso oficial, recomendamos agregar la certificación.'
  },
  {
    question: '¿Qué pasa si no estoy de acuerdo con el valor?',
    answer: 'Todos los supuestos son discutidos y validados con el cliente. Si hay desacuerdo, podemos ajustar supuestos (dentro de lo razonable) y recalcular. Nuestro objetivo es llegar a un valor justo y defendible.'
  },
  {
    question: '¿Hacen valoraciones de startups?',
    answer: 'Sí, utilizamos metodologías específicas para startups como Venture Capital Method, Scorecard y First Chicago Method. El paquete recomendado es Estándar o Premium.'
  },
]

export default function ValoracionPrincipalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-2 mb-6">
              Paquetes de Valoración
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Elige el paquete que mejor se adapte a tus necesidades y presupuesto.
              Todos incluyen metodologías reconocidas internacionalmente.
            </p>
            <Link href="#paquetes">
              <Button size="lg" variant="secondary">
                Ver Paquetes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Por Qué Elegirnos?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Soluciones integrales en base a la experiencia',
                description: 'Más de 500 empresas valoradas exitosamente'
              },
              {
                icon: Shield,
                title: 'Estándares Internacionales',
                description: 'Cumplimos con IVS, IFRS y mejores prácticas'
              },
              {
                icon: Users,
                title: 'Equipo Certificado',
                description: 'CPAs, MBAs y expertos con certificaciones'
              },
              {
                icon: Target,
                title: 'Enfoque Personalizado',
                description: 'Cada valoración es única y adaptada'
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
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

      {/* Paquetes */}
      <section id="paquetes" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-4">
              Nuestros Paquetes
            </h2>
            <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
              Selecciona el paquete que mejor se ajuste a tus necesidades.
              Todos incluyen garantía de satisfacción.
            </p>
          </div>

          <PricingTable plans={pricingPlans} />

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl max-w-3xl mx-auto">
            <h4 className="font-semibold mb-4">¿No estás seguro cuál elegir?</h4>
            <p className="text-corporate-gray-medium mb-6">
              Agenda una consulta gratuita de 30 minutos y te ayudaremos a determinar
              el paquete más adecuado para tu situación.
            </p>
            <Button size="lg" variant="orange">
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Qué Incluye una Valoración?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatsIncluded.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.items.map((subitem, idx) => (
                      <li key={idx} className="flex items-center text-xs text-corporate-gray-medium">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-2 flex-shrink-0" />
                        {subitem}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Proceso de Entrega
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {deliveryProcess.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-orange-600" />
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-corporate-gray-medium mb-2">{item.description}</p>
                      <span className="text-sm text-orange-600 font-medium">
                        <Clock className="w-4 h-4 inline mr-1" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-12 text-center p-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl">
              <h4 className="font-semibold mb-2">Tiempo Total</h4>
              <div className="text-4xl font-bold text-orange-600 mb-2">2 - 6 semanas</div>
              <p className="text-sm text-corporate-gray-medium">
                Dependiendo del paquete seleccionado y complejidad de la empresa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Servicios Adicionales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-corporate-gray-medium mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-orange-600 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-corporate-gray-medium">
                        <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3 text-lg text-corporate-purple">{faq.question}</h4>
                <p className="text-corporate-gray-medium">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-corporate-gray-medium mb-4">¿Tienes más preguntas?</p>
            <Button variant="outline">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8">
            <div className="text-center">
              <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Garantía de Satisfacción</h3>
              <p className="text-lg text-corporate-gray-medium mb-6">
                Estamos tan seguros de la calidad de nuestro trabajo que ofrecemos garantía
                de satisfacción: si no estás completamente satisfecho con nuestro servicio,
                te devolvemos el 100% de tu inversión.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Calidad Garantizada</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Entrega a Tiempo</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold">Soporte Post-Entrega</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Valorar tu Empresa?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita una cotización personalizada y recibe una propuesta en 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Solicitar Cotización
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-orange-600 hover:bg-gray-100">
              Agendar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
