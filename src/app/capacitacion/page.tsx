import ServiceHero from '@/components/services/ServiceHero'
import ServiceCard from '@/components/services/ServiceCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Briefcase, Calculator, TrendingUp, PieChart } from 'lucide-react'
import Link from 'next/link'

const areas = [
  {
    title: 'Capacitación Contable',
    description: 'NIIF, Contabilidad General, Estados Financieros',
    icon: Calculator,
    href: '/capacitacion/contable',
  },
  {
    title: 'Capacitación Laboral',
    description: 'Derecho Laboral, Nómina, Seguridad Social',
    icon: Briefcase,
    href: '/capacitacion/laboral',
  },
  {
    title: 'Capacitación Tributaria',
    description: 'Impuestos, Declaraciones, Auditoría Tributaria',
    icon: TrendingUp,
    href: '/capacitacion/tributario',
  },
  {
    title: 'Capacitación Financiera',
    description: 'Análisis Financiero, Ratios, Presupuestos',
    icon: PieChart,
    href: '/capacitacion/financiero',
  },
  {
    title: 'Gestión Financiera',
    description: 'Planeación, Control, Estrategia Financiera',
    icon: BookOpen,
    href: '/capacitacion/gestion-financiera',
  },
]

const proximosCursos = [
  {
    title: 'NIIF para PYMES',
    fecha: '15 Feb 2024',
    duracion: '40 horas',
    modalidad: 'Virtual',
    precio: '$250',
    cupos: '5/30',
    categoria: 'Contable',
  },
  {
    title: 'Nómina y Seguridad Social',
    fecha: '20 Feb 2024',
    duracion: '24 horas',
    modalidad: 'Presencial',
    precio: '$180',
    cupos: '8/25',
    categoria: 'Laboral',
  },
  {
    title: 'Impuesto a la Renta',
    fecha: '25 Feb 2024',
    duracion: '32 horas',
    modalidad: 'Híbrido',
    precio: '$220',
    cupos: '12/30',
    categoria: 'Tributario',
  },
]

export default function CapacitacionPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="CAPACITACIÓN PROFESIONAL"
        subtitle="Impulsa tu carrera con cursos especializados"
        description="Más de 5,000 profesionales capacitados"
        accentColor="purple"
      >
        <Link href="#cursos">
          <Button size="lg" variant="orange">
            Ver Cursos Disponibles
          </Button>
        </Link>
      </ServiceHero>

      {/* Áreas de Capacitación */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-corporate-purple mb-4">
              Áreas de Capacitación
            </h2>
            <p className="text-lg text-corporate-gray-medium max-w-2xl mx-auto">
              Programas especializados para profesionales y empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <ServiceCard
                key={index}
                {...area}
                iconColor="text-purple-600"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Próximos Cursos */}
      <section id="cursos" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Próximos Cursos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {proximosCursos.map((curso, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600" />
                <CardContent className="p-6">
                  <Badge className="mb-3">{curso.categoria}</Badge>
                  <h3 className="font-semibold text-xl mb-4">{curso.title}</h3>

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-corporate-gray-medium">📅 Inicio:</span>
                      <span className="font-medium">{curso.fecha}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-corporate-gray-medium">🕐 Duración:</span>
                      <span className="font-medium">{curso.duracion}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-corporate-gray-medium">💻 Modalidad:</span>
                      <span className="font-medium">{curso.modalidad}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-corporate-gray-medium">💵 Precio:</span>
                      <span className="font-bold text-corporate-purple">{curso.precio}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-corporate-gray-medium mb-1">
                      Cupos disponibles: {curso.cupos}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${(parseInt(curso.cupos.split('/')[0]) / parseInt(curso.cupos.split('/')[1])) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="orange" className="flex-1">
                      Inscribirse
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Ver más
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Modalidades de Estudio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: 'Presencial', icon: '🏫', description: 'En nuestras instalaciones' },
              { title: 'Virtual en Vivo', icon: '💻', description: 'Clases online interactivas' },
              { title: 'Grabado', icon: '📹', description: 'A tu propio ritmo' },
              { title: 'Híbrido', icon: '🔄', description: 'Presencial + Virtual' },
            ].map((modalidad, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">{modalidad.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{modalidad.title}</h3>
                <p className="text-sm text-corporate-gray-medium">{modalidad.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué capacitarte */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            ¿Por Qué Capacitarte con Nosotros?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'Instructores certificados',
              'Material didáctico incluido',
              'Certificado con aval',
              'Networking con profesionales',
              'Acceso a grabaciones',
              'Descuentos corporativos',
            ].map((beneficio, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  ✓
                </div>
                <span className="font-medium">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-3 mb-6">¿Listo para Impulsar tu Carrera?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inscríbete ahora y obtén 15% de descuento en tu primer curso
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Ver Todos los Cursos
          </Button>
        </div>
      </section>
    </div>
  )
}
