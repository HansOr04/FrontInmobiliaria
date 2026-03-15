import ServiceHero from '@/components/services/ServiceHero'
import { Award, Users, TrendingUp, Globe } from 'lucide-react'

export default function AntecedentesPage() {
  return (
    <div className="min-h-screen">
      <ServiceHero
        title="ANTECEDENTES EN VALORACIÓN"
        subtitle="Nuestra Trayectoria y Experiencia"
        accentColor="blue"
      />

      {/* Historia */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-16">
            Nuestra Historia
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="space-y-12">
              {[
                { year: '2005', title: 'Fundación', description: 'Inicio de operaciones en Quito, Ecuador' },
                { year: '2010', title: 'Primeras 50 valoraciones', description: 'Consolidación en el mercado local' },
                { year: '2015', title: 'Certificación Internacional', description: 'Acreditación por organismos internacionales' },
                { year: '2020', title: 'Más de 500 empresas', description: 'Expansión a nivel nacional' },
                { year: '2024', title: 'Expansión Regional', description: 'Presencia en Colombia y Perú' },
              ].map((item, index) => (
                <div key={index} className="flex gap-8">
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-corporate-gray-medium">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Certificaciones y Acreditaciones
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, name: 'ISO 9001:2015' },
              { icon: Globe, name: 'IVSC Member' },
              { icon: TrendingUp, name: 'CFA Institute' },
              { icon: Users, name: 'Cámara de Comercio' },
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <cert.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <p className="font-semibold">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Nuestro Equipo de Expertos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Dr. Juan Ortiz',
                role: 'Director de Valoración',
                credentials: 'PhD en Finanzas, CFA',
                experience: '20+ años de experiencia',
              },
              {
                name: 'Ing. María Idrovo',
                role: 'Directora de Análisis',
                credentials: 'MBA, Valuador Certificado',
                experience: '15+ años de experiencia',
              },
              {
                name: 'Ec. Carlos Mendoza',
                role: 'Senior Manager',
                credentials: 'MSc en Economía',
                experience: '12+ años de experiencia',
              },
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300" />
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-corporate-gray-medium mb-1">{member.credentials}</p>
                <p className="text-sm text-corporate-gray-medium">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-corporate-purple text-center mb-12">
            Casos de Éxito Destacados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Construcción',
                result: 'Valoración de $5M',
                outcome: 'Venta exitosa en 6 meses',
              },
              {
                industry: 'Tecnología',
                result: 'Atracción de $2M',
                outcome: 'Inversión Series A',
              },
              {
                industry: 'Manufactura',
                result: 'Planificación sucesoria',
                outcome: 'Transición generacional exitosa',
              },
            ].map((caso, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <div className="text-blue-600 font-semibold mb-2">{caso.industry}</div>
                <h3 className="text-xl font-bold mb-2">{caso.result}</h3>
                <p className="text-corporate-gray-medium">{caso.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
