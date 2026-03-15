import ContactForm from '@/components/contact/ContactForm'

export const metadata = {
  title: 'Contacto | Ortiz & Idrovo',
  description: 'Ponte en contacto con Ortiz & Idrovo para asesoría inmobiliaria, valoración, gestión y capacitación.',
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Hero Section */}
      <div className="bg-corporate-purple text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-purple-100 max-w-2xl mx-auto">
            Estamos listos para brindarte la mejor asesoría en bienes raíces y servicios corporativos.
          </p>
        </div>
      </div>

      <div className="container-custom mt-[-40px] relative z-10">
        <ContactForm />
      </div>

      {/* Map Section */}
      <div className="container-custom mt-16">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-[400px] overflow-hidden">
            <iframe 
               title="Ubicación de Inmobiliaria Ortiz Idrovo"
               src="https://www.openstreetmap.org/export/embed.html?bbox=-78.55%2C-0.28%2C-78.45%2C-0.18&amp;layer=mapnik&amp;marker=-0.23%2C-78.50" 
               width="100%" 
               height="100%" 
               style={{ border: 0, borderRadius: '0.75rem' }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  )
}
