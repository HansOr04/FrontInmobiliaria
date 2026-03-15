export const AMENITIES = {
  building: [
    { id: 'piscina', name: 'Piscina', icon: '🏊' },
    { id: 'gimnasio', name: 'Gimnasio', icon: '💪' },
    { id: 'salon_eventos', name: 'Salón de Eventos', icon: '🎉' },
    { id: 'juegos_infantiles', name: 'Juegos Infantiles', icon: '🎮' },
    { id: 'bbq', name: 'Área BBQ', icon: '🍖' },
    { id: 'seguridad_24_7', name: 'Seguridad 24/7', icon: '🔒' },
    { id: 'ascensor', name: 'Ascensor', icon: '🛗' },
    { id: 'porteria', name: 'Portería', icon: '🚪' },
    { id: 'coworking', name: 'Espacio Coworking', icon: '💼' },
    { id: 'lavanderia', name: 'Lavandería', icon: '🧺' },
  ],
  unit: [
    { id: 'cocina_equipada', name: 'Cocina Equipada', icon: '🍳' },
    { id: 'balcon', name: 'Balcón', icon: '🏞️' },
    { id: 'terraza', name: 'Terraza', icon: '☀️' },
    { id: 'walk_in_closet', name: 'Walk-in Closet', icon: '👔' },
    { id: 'aire_acondicionado', name: 'Aire Acondicionado', icon: '❄️' },
    { id: 'calefaccion', name: 'Calefacción', icon: '🔥' },
    { id: 'estudio', name: 'Estudio', icon: '📚' },
    { id: 'bodega', name: 'Bodega', icon: '📦' },
    { id: 'jardin', name: 'Jardín', icon: '🌳' },
    { id: 'vista_panoramica', name: 'Vista Panorámica', icon: '🌄' },
  ],
  location: [
    { id: 'cerca_metro', name: 'Cerca del Metro', icon: '🚇' },
    { id: 'cerca_parques', name: 'Cerca de Parques', icon: '🌲' },
    { id: 'cerca_escuelas', name: 'Cerca de Escuelas', icon: '🏫' },
    { id: 'cerca_centros_comerciales', name: 'Centros Comerciales', icon: '🛒' },
    { id: 'zona_tranquila', name: 'Zona Tranquila', icon: '🤫' },
    { id: 'zona_comercial', name: 'Zona Comercial', icon: '🏪' },
  ],
}

export const CITIES = [
  'Quito',
  'Guayaquil',
  'Cuenca',
  'Ambato',
  'Loja',
  'Manta',
  'Portoviejo',
  'Machala',
  'Santo Domingo',
  'Ibarra',
]

export const QUITO_NEIGHBORHOODS = [
  'La Carolina',
  'González Suárez',
  'La Floresta',
  'Cumbayá',
  'Tumbaco',
  'Los Chillos',
  'Calderón',
  'San Rafael',
  'Iñaquito',
  'La Pradera',
]

export const PROPERTY_TYPES = [
  { value: 'casa', label: 'Casa' },
  { value: 'departamento', label: 'Departamento' },
  { value: 'terreno', label: 'Terreno' },
  { value: 'edificio', label: 'Edificio' },
  { value: 'oficina', label: 'Oficina' },
  { value: 'local_comercial', label: 'Local Comercial' },
  { value: 'bodega', label: 'Bodega' },
]

export const PRICE_RANGES = [
  { label: 'Hasta $50,000', min: 0, max: 50000 },
  { label: '$50,000 - $100,000', min: 50000, max: 100000 },
  { label: '$100,000 - $150,000', min: 100000, max: 150000 },
  { label: '$150,000 - $200,000', min: 150000, max: 200000 },
  { label: '$200,000 - $300,000', min: 200000, max: 300000 },
  { label: 'Más de $300,000', min: 300000, max: null },
]
