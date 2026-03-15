'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, Plus, Trash, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CITIES, AMENITIES } from '@/constants/amenities';
import { Property } from '@/types/property';

interface PropertyFormProps {
  initialData?: Partial<Property>;
  onSubmit: (data: any) => Promise<void>;
  isSubmitting?: boolean;
}

export function PropertyForm({
  initialData,
  onSubmit,
  isSubmitting = false,
}: PropertyFormProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('info');
  
  // Initialize with all fields
  const [formData, setFormData] = useState<any>({
    title: '',
    description: '',
    short_description: '',
    property_type: '',
    operation_type: '',
    price: '',
    currency: 'USD',
    price_negotiable: false,
    price_per_sqm: '',
    
    // Location
    address: '',
    city: '',
    state: '',
    country: 'Ecuador',
    postal_code: '',
    latitude: '',
    longitude: '',
    neighborhood: '',
    
    // Dimensions
    area_total: '',
    area_built: '',
    
    // Rooms & Distribution
    bedrooms: '',
    bathrooms: '',
    half_bathrooms: '',
    parking_spaces: '',
    
    // Construction
    year_built: '',
    floor: '',
    total_floors: '',
    
    // Amenities (JSON objects)
    building_amenities: {},
    unit_features: {},
    building_info: {},
    
    // Multimedia
    video_urls: [''],
    tour_360_url: '',
    
    // SEO
    meta_title: '',
    meta_description: '',
    keywords: [],
    
    // Status
    status: 'disponible',
    featured: false,
    published: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...formData,
        ...initialData,
        // Ensure numbers are converted to strings for inputs
        price: initialData.price?.toString() || '',
        price_per_sqm: initialData.price_per_sqm?.toString() || '',
        latitude: initialData.latitude?.toString() || '',
        longitude: initialData.longitude?.toString() || '',
        bedrooms: initialData.bedrooms?.toString() || '',
        bathrooms: initialData.bathrooms?.toString() || '',
        half_bathrooms: initialData.half_bathrooms?.toString() || '',
        parking_spaces: initialData.parking_spaces?.toString() || '',
        area_total: initialData.area_total?.toString() || '',
        area_built: initialData.area_built?.toString() || '',
        year_built: initialData.year_built?.toString() || '',
        floor: initialData.floor?.toString() || '',
        total_floors: initialData.total_floors?.toString() || '',
        
        // Ensure objects/arrays exist
        building_amenities: initialData.building_amenities || {},
        unit_features: initialData.unit_features || {},
        video_urls: initialData.video_urls?.length ? initialData.video_urls : [''],
        keywords: initialData.keywords || [],
      });
    }
  }, [initialData]);

  const handleChange = (key: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleAmenityChange = (category: string, id: string, checked: boolean) => {
    setFormData((prev: any) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [id]: checked
      }
    }));
  };

  const handleVideoUrlChange = (index: number, value: string) => {
    const newUrls = [...formData.video_urls];
    newUrls[index] = value;
    handleChange('video_urls', newUrls);
  };

  const addVideoUrl = () => {
    handleChange('video_urls', [...formData.video_urls, '']);
  };

  const removeVideoUrl = (index: number) => {
    const newUrls = formData.video_urls.filter((_: string, i: number) => i !== index);
    handleChange('video_urls', newUrls);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clean up data before submitting
    const dataToSubmit = { ...formData };
    
    // Filter empty video URLs
    dataToSubmit.video_urls = dataToSubmit.video_urls.filter((url: string) => url.trim() !== '');
    
    // Convert strings to numbers where necessary (optional if backend uses z.coerce)
    
    await onSubmit(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-corporate-purple hover:bg-corporate-purple/90"
          >
            <Save className="w-4 h-4 mr-2" />
            {isSubmitting ? 'Guardando...' : 'Guardar Propiedad'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="info">Información</TabsTrigger>
          <TabsTrigger value="details">Detalles</TabsTrigger>
          <TabsTrigger value="features">Características</TabsTrigger>
          <TabsTrigger value="amenities">Amenidades</TabsTrigger>
          <TabsTrigger value="multimedia">Multimedia</TabsTrigger>
          <TabsTrigger value="config">Configuración</TabsTrigger>
        </TabsList>

        {/* ==================== INFO TAB ==================== */}
        <TabsContent value="info" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Información Principal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="title">Título de la Propiedad <span className="text-red-600">*</span></Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange('title', e.target.value)}
                    placeholder="Ej: Lujoso departamento con vista al parque"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="property_type">Tipo de Propiedad <span className="text-red-600">*</span></Label>
                  <Select
                    value={formData.property_type}
                    onValueChange={(value) => handleChange('property_type', value)}
                    required
                  >
                    <SelectTrigger id="property_type">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="departamento">Departamento</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                      <SelectItem value="oficina">Oficina</SelectItem>
                      <SelectItem value="local_comercial">Local Comercial</SelectItem>
                      <SelectItem value="bodega">Bodega</SelectItem>
                      <SelectItem value="edificio">Edificio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="operation_type">Tipo de Operación <span className="text-red-600">*</span></Label>
                  <Select
                    value={formData.operation_type}
                    onValueChange={(value) => handleChange('operation_type', value)}
                    required
                  >
                    <SelectTrigger id="operation_type">
                      <SelectValue placeholder="Seleccionar..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="venta">Venta</SelectItem>
                      <SelectItem value="alquiler">Alquiler</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price">Precio <span className="text-red-600">*</span></Label>
                  <div className="flex gap-2">
                    <Select
                      value={formData.currency}
                      onValueChange={(value) => handleChange('currency', value)}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleChange('price', e.target.value)}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-end pb-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="price_negotiable"
                      checked={formData.price_negotiable}
                      onCheckedChange={(checked) => handleChange('price_negotiable', checked)}
                    />
                    <Label htmlFor="price_negotiable">Precio Negociable</Label>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Descripción Detallada <span className="text-red-600">*</span></Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  rows={6}
                  placeholder="Describe todas las bondades de la propiedad..."
                  required
                />
              </div>

              <div>
                <Label htmlFor="short_description">Descripción Corta (Extracto)</Label>
                <Textarea
                  id="short_description"
                  value={formData.short_description}
                  onChange={(e) => handleChange('short_description', e.target.value)}
                  rows={2}
                  placeholder="Breve resumen para tarjetas y listados..."
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Ubicación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">Ciudad <span className="text-red-600">*</span></Label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleChange('city', value)}
                    required
                  >
                    <SelectTrigger id="city">
                      <SelectValue placeholder="Seleccionar ciudad" />
                    </SelectTrigger>
                    <SelectContent>
                      {CITIES.map((city) => (
                        <SelectItem key={city} value={city.toLowerCase()}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="neighborhood">Barrio / Sector</Label>
                  <Input
                    id="neighborhood"
                    value={formData.neighborhood}
                    onChange={(e) => handleChange('neighborhood', e.target.value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="address">Dirección Exacta <span className="text-red-600">*</span></Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange('address', e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="latitude">Latitud</Label>
                  <Input
                    id="latitude"
                    type="number"
                    step="any"
                    value={formData.latitude}
                    onChange={(e) => handleChange('latitude', e.target.value)}
                    placeholder="-0.180653"
                  />
                </div>

                <div>
                  <Label htmlFor="longitude">Longitud</Label>
                  <Input
                    id="longitude"
                    type="number"
                    step="any"
                    value={formData.longitude}
                    onChange={(e) => handleChange('longitude', e.target.value)}
                    placeholder="-78.467834"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==================== DETAILS TAB ==================== */}
        <TabsContent value="details" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Dimensiones y Distribución</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="area_built">Área de Construcción (m²)</Label>
                  <Input
                    id="area_built"
                    type="number"
                    min="0"
                    value={formData.area_built}
                    onChange={(e) => handleChange('area_built', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="area_total">Área Total (m²)</Label>
                  <Input
                    id="area_total"
                    type="number"
                    min="0"
                    value={formData.area_total}
                    onChange={(e) => handleChange('area_total', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="price_per_sqm">Precio por m²</Label>
                  <Input
                    id="price_per_sqm"
                    type="number"
                    min="0"
                    value={formData.price_per_sqm}
                    onChange={(e) => handleChange('price_per_sqm', e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                <div>
                  <Label htmlFor="bedrooms">Habitaciones</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    min="0"
                    value={formData.bedrooms}
                    onChange={(e) => handleChange('bedrooms', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="bathrooms">Baños Completos</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    min="0"
                    value={formData.bathrooms}
                    onChange={(e) => handleChange('bathrooms', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="half_bathrooms">Medios Baños</Label>
                  <Input
                    id="half_bathrooms"
                    type="number"
                    min="0"
                    value={formData.half_bathrooms}
                    onChange={(e) => handleChange('half_bathrooms', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="parking_spaces">Estacionamientos</Label>
                  <Input
                    id="parking_spaces"
                    type="number"
                    min="0"
                    value={formData.parking_spaces}
                    onChange={(e) => handleChange('parking_spaces', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Detalles de Construcción</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="year_built">Año de Construcción</Label>
                  <Input
                    id="year_built"
                    type="number"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                    value={formData.year_built}
                    onChange={(e) => handleChange('year_built', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="floor">Piso Ubicación</Label>
                  <Input
                    id="floor"
                    type="number"
                    value={formData.floor}
                    onChange={(e) => handleChange('floor', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="total_floors">Total Pisos Edificio</Label>
                  <Input
                    id="total_floors"
                    type="number"
                    min="1"
                    value={formData.total_floors}
                    onChange={(e) => handleChange('total_floors', e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==================== FEATURES & AMENITIES TABS ==================== */}
        {/* We can group these or keep them separate. Keeping separate for clarity as per tabs list */}
        
        {/* Placeholder for "features" tab if distinct from amenities. 
            For this implementation, let's put unit internal features here */}
        <TabsContent value="features" className="space-y-6">
           <Card>
            <CardHeader>
              <CardTitle>Características de la Unidad</CardTitle>
              <p className="text-sm text-muted-foreground">Detalles internos del inmueble</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {AMENITIES.unit.map((amenity) => (
                  <div key={amenity.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`unit_${amenity.id}`}
                      checked={!!formData.unit_features?.[amenity.id]}
                      onCheckedChange={(checked) => handleAmenityChange('unit_features', amenity.id, checked as boolean)}
                    />
                    <Label htmlFor={`unit_${amenity.id}`} className="cursor-pointer font-normal">
                      {amenity.icon} {amenity.name}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Amenidades del Edificio / Conjunto</CardTitle>
              <p className="text-sm text-muted-foreground">Áreas comunales y servicios compartidos</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {AMENITIES.building.map((amenity) => (
                  <div key={amenity.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`building_${amenity.id}`}
                      checked={!!formData.building_amenities?.[amenity.id]}
                      onCheckedChange={(checked) => handleAmenityChange('building_amenities', amenity.id, checked as boolean)}
                    />
                    <Label htmlFor={`building_${amenity.id}`} className="cursor-pointer font-normal">
                      {amenity.icon} {amenity.name}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==================== MULTIMEDIA TAB ==================== */}
        <TabsContent value="multimedia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Videos y Recorridos Virtuales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <Label>URLs de Video (YouTube, Vimeo)</Label>
                {formData.video_urls.map((url: string, index: number) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={url}
                      onChange={(e) => handleVideoUrlChange(index, e.target.value)}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeVideoUrl(index)}
                      disabled={formData.video_urls.length === 1 && index === 0}
                    >
                      <Trash className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button type="button" variant="outline" size="sm" onClick={addVideoUrl} className="mt-2">
                  <Plus className="w-4 h-4 mr-2" /> Agregar otro video
                </Button>
              </div>

              <div className="pt-4 border-t">
                <Label htmlFor="tour_360_url">URL Tour 360° / Matterport</Label>
                <Input
                  id="tour_360_url"
                  value={formData.tour_360_url || ''}
                  onChange={(e) => handleChange('tour_360_url', e.target.value)}
                  placeholder="https://my.matterport.com/show/..."
                  className="mt-1.5"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Imágenes</CardTitle>
            </CardHeader>
             <CardContent>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                    <ImageIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    Sube imágenes de la propiedad
                  </div>
                  <p className="text-xs text-gray-500">
                    Arrastra y suelta o haz clic para seleccionar (Funcionalidad pendiente del módulo de carga)
                  </p>
                </div>
              </div>
              {/* Image grid would go here */}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ==================== CONFIG TAB ==================== */}
        <TabsContent value="config" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estado y Visibilidad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <Label>Publicado</Label>
                  <p className="text-sm text-muted-foreground">Visible para todos en el sitio web</p>
                </div>
                <Checkbox
                  checked={formData.published}
                  onCheckedChange={(checked) => handleChange('published', checked)}
                />
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-0.5">
                  <Label>Destacado</Label>
                  <p className="text-sm text-muted-foreground">Aparecerá en la sección de destacados</p>
                </div>
                <Checkbox
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleChange('featured', checked)}
                />
              </div>

              <div className="space-y-2">
                <Label>Estado de la Propiedad</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value) => handleChange('status', value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disponible">
                      <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"/> Disponible</span>
                    </SelectItem>
                    <SelectItem value="reservada">
                      <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"/> Reservada</span>
                    </SelectItem>
                    <SelectItem value="vendida">
                      <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-red-500 mr-2"/> Vendida</span>
                    </SelectItem>
                    <SelectItem value="alquilada">
                      <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-blue-500 mr-2"/> Alquilada</span>
                    </SelectItem>
                    <SelectItem value="mantenimiento">
                      <span className="flex items-center"><span className="w-2 h-2 rounded-full bg-gray-500 mr-2"/> Mantenimiento</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO (Posicionamiento)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="meta_title">Meta Título</Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) => handleChange('meta_title', e.target.value)}
                  placeholder="Título para buscadores (Google)"
                />
              </div>
              <div>
                <Label htmlFor="meta_description">Meta Descripción</Label>
                <Textarea
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) => handleChange('meta_description', e.target.value)}
                  rows={3}
                  placeholder="Descripción breve que aparece en los resultados de búsqueda..."
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
}
