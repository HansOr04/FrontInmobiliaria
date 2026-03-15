import ServiceHero from '@/components/services/ServiceHero'
import ServiceCard from '@/components/services/ServiceCard'
import { Button } from '@/components/ui/button'
import { Handshake, TrendingUp, TrendingDown, DollarSign, FileText, Calculator } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Negociaciones',
    description: 'Mediación y representación en negociaciones empresariales',
    icon: Handshake,
    href: '/asesoria/negociaciones',
  },
  {
    title: 'Aumento de Capital',
    description: 'Asesoría en procesos de capitalización empresarial',
    icon: TrendingUp,
    href: '/asesoria/aumento-capital',
  },
  {
    title: 'Disminución de Capital',
    description: 'Gestión de reducción de capital social',
    icon: TrendingDown,
    href: '/asesoria/disminucion-capital',
  },
  {
    title: 'Asesoría Financiera',
    description: 'Consultoría financiera integral para empresas',
    icon: DollarSign,
    href: '/asesoria/asesoria-financiera',
  },
  {
    title: 'Escrituras de Constitución',
    description: 'Elaboración de documentos de constitución societaria',
    icon: FileText,
    href: '/asesoria/escrituras-constitucion',
  },
  {
    title: 'Determinaciones Fiscales',
    description: 'Asesoría en procesos de fiscalización tributaria',
    icon: Calculator,
    href: '/asesoria/determinaciones-fiscales',
  },
]

export default function AsesoriaPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="ASESORÍA EMPRESARIAL INTEGRAL"
        subtitle="Soluciones estratégicas para tu empresa"
        description="Más de 1,000 empresas asesoradas exitosamente"
        accentColor="violet"
      >
        <Link href="#contacto">
          <Button size="lg" variant="orange">
            Solicitar Asesoría
          </Button>
        </Link>
      </ServiceHero>

      {/* Servicios de Asesoría */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-4">
              Servicios de Asesoría Empresarial
            </h2>
            <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
              Acompañamiento profesional en decisiones estratégicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                iconColor="text-violet-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Especialización */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Áreas de Especialización
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Asesoría Financiera',
                items: ['Análisis de viabilidad', 'Estructuración financiera', 'Optimización de costos', 'Gestión de liquidez']
              },
              {
                title: 'Asesoría Legal Corporativa',
                items: ['Constitución de empresas', 'Reforma de estatutos', 'Acuerdos societarios', 'Contratos comerciales']
              },
              {
                title: 'Asesoría Tributaria',
                items: ['Planificación fiscal', 'Defensa tributaria', 'Auditoría preventiva', 'Optimización impositiva']
              },
              {
                title: 'M&A (Fusiones y Adquisiciones)',
                items: ['Due diligence', 'Estructuración de operaciones', 'Negociación', 'Integración post-fusión']
              },
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-4 text-corporate-purple">{area.title}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-gray-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuándo necesitas asesoría */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Cuándo Necesitas Asesoría?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '🚀', text: 'Vas a iniciar un negocio' },
              { icon: '💰', text: 'Necesitas capital' },
              { icon: '📉', text: 'Enfrentas problemas financieros' },
              { icon: '📈', text: 'Quieres expandir tu empresa' },
              { icon: '🤝', text: 'Planeas vender o fusionar' },
              { icon: '⚖️', text: 'Tienes conflictos con socios' },
              { icon: '📋', text: 'Auditoría o fiscalización pendiente' },
              { icon: '🎯', text: 'Necesitas planificación estratégica' },
              { icon: '🏢', text: 'Cambio de estructura societaria' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl">{item.icon}</div>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Proceso */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestro Proceso de Asesoría
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: '1', title: 'Diagnóstico', desc: 'Análisis inicial de situación' },
              { num: '2', title: 'Propuesta', desc: 'Plan de acción personalizado' },
              { num: '3', title: 'Ejecución', desc: 'Implementación de soluciones' },
              { num: '4', title: 'Seguimiento', desc: 'Monitoreo de resultados' },
              { num: '5', title: 'Ajustes', desc: 'Optimización continua' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-corporate-gray-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Casos de Éxito
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Restructuración Financiera',
                empresa: 'Empresa Manufacturera',
                resultado: 'Reducción de 40% en costos operativos',
              },
              {
                title: 'Fusión Empresarial',
                empresa: 'Empresas de Servicios',
                resultado: 'Integración exitosa en 6 meses',
              },
              {
                title: 'Defensa Tributaria',
                empresa: 'Empresa Comercial',
                resultado: 'Ahorro de $200K en contingencias',
              },
            ].map((caso, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{caso.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{caso.empresa}</p>
                <p className="font-medium text-corporate-green">{caso.resultado}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="section-padding bg-gradient-to-r from-corporate-purple to-violet-700 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Necesitas Asesoría Empresarial?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="orange">
              Agendar Consulta Gratuita
            </Button>
            <Button size="lg" className="bg-white text-corporate-purple hover:bg-gray-100">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
