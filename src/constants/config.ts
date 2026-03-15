export const SITE_CONFIG = {
  name: 'Ortiz Idrovo Inmobiliaria',
  description: 'Encuentra tu hogar ideal con Ortiz Idrovo Inmobiliaria. Más de 20 años de experiencia en el mercado inmobiliario ecuatoriano.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+593989266385',
  email: 'jortiz@inmobiliariaortizidrovo.com',
  phone: '+593 989 266 385',
  address: 'Calle N73B,Quito, Ecuador',
  social: {
    facebook: 'https://facebook.com/ortizidrovo',
    instagram: 'https://instagram.com/ortizidrovo',
    linkedin: 'https://linkedin.com/company/ortizidrovo',
    youtube: 'https://youtube.com/@ortizidrovo',
  },
}

export const PAGINATION = {
  defaultLimit: 20,
  maxLimit: 100,
}

export const IMAGE_SIZES = {
  thumbnail: { width: 300, height: 225 },
  card: { width: 400, height: 300 },
  hero: { width: 1920, height: 1080 },
  detail: { width: 1200, height: 800 },
}

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Ortiz Idrovo Inmobiliaria',
  defaultTitle: 'Ortiz Idrovo Inmobiliaria - Encuentra tu hogar ideal',
  description: 'Compra, venta y alquiler de propiedades en Ecuador. Más de 20 años de experiencia en el mercado inmobiliario.',
  openGraph: {
    type: 'website',
    locale: 'es_EC',
    siteName: 'Ortiz Idrovo Inmobiliaria',
  },
}
