'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Calendar, Users, DollarSign } from 'lucide-react';
import { Course } from '@/types/admin';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// Mock data
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'NIIF para PYMES',
    slug: 'niif-pymes-feb-2024',
    description: 'Curso completo de Normas Internacionales de Información Financiera para pequeñas y medianas empresas',
    category: 'contable',
    modality: 'virtual',
    status: 'proximo',
    price: 250,
    duration_hours: 40,
    start_date: '2024-02-15T09:00:00',
    end_date: '2024-03-15T18:00:00',
    schedule: 'Lun-Vie 18:00-20:00',
    max_students: 30,
    enrolled_count: 25,
    instructor_name: 'Carlos Méndez, CPA',
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Nómina y Seguridad Social',
    slug: 'nomina-seguridad-social',
    description: 'Gestión de nómina y obligaciones de seguridad social',
    category: 'laboral',
    modality: 'presencial',
    status: 'en_curso',
    price: 180,
    duration_hours: 24,
    start_date: '2024-01-20T14:00:00',
    end_date: '2024-02-10T18:00:00',
    schedule: 'Sáb 14:00-18:00',
    max_students: 25,
    enrolled_count: 18,
    instructor_name: 'María González, Abogada Laboral',
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const getStatusBadge = (status: Course['status']) => {
  switch (status) {
    case 'en_curso':
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">En Curso</Badge>;
    case 'proximo':
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Próximo</Badge>;
    case 'completado':
      return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Completado</Badge>;
    case 'cancelado':
      return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Cancelado</Badge>;
    default:
      return null;
  }
};

const getCategoryLabel = (category: Course['category']) => {
  const labels = {
    contable: 'Contable',
    laboral: 'Laboral',
    tributario: 'Tributario',
    financiero: 'Financiero',
    gestion_financiera: 'Gestión Financiera',
  };
  return labels[category] || category;
};

const getModalityLabel = (modality: Course['modality']) => {
  const labels = {
    presencial: 'Presencial',
    virtual: 'Virtual',
    hibrido: 'Híbrido',
    grabado: 'Grabado',
  };
  return labels[modality] || modality;
};

export default function CoursesPage() {
  const [courses] = useState<Course[]>(mockCourses);

  const activeCourses = courses.filter((c) => c.status === 'en_curso' || c.status === 'proximo');
  const totalEnrolled = courses.reduce((sum, c) => sum + c.enrolled_count, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cursos</h1>
          <p className="text-gray-600 mt-1">
            Gestiona todos los cursos de capacitación
          </p>
        </div>
        <Link href="/admin/cursos/nuevo">
          <Button className="bg-corporate-purple hover:bg-corporate-purple/90">
            <Plus className="w-4 h-4 mr-2" />
            Nuevo Curso
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cursos Activos</p>
                <p className="text-3xl font-bold text-gray-900">{activeCourses.length}</p>
              </div>
              <Calendar className="w-10 h-10 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Inscritos</p>
                <p className="text-3xl font-bold text-gray-900">{totalEnrolled}</p>
              </div>
              <Users className="w-10 h-10 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Cursos</p>
                <p className="text-3xl font-bold text-gray-900">{courses.length}</p>
              </div>
              <DollarSign className="w-10 h-10 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {getStatusBadge(course.status)}
                    <Badge variant="outline">{getCategoryLabel(course.category)}</Badge>
                    <Badge variant="outline">{getModalityLabel(course.modality)}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Inicio</p>
                  <p className="font-medium">
                    {format(new Date(course.start_date), 'dd MMM yyyy', { locale: es })}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Duración</p>
                  <p className="font-medium">{course.duration_hours} horas</p>
                </div>
                <div>
                  <p className="text-gray-500">Precio</p>
                  <p className="font-medium text-green-600">{formatPrice(course.price)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Inscritos</p>
                  <p className="font-medium">
                    {course.enrolled_count}/{course.max_students}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600 mb-1">Instructor</p>
                <p className="font-medium">{course.instructor_name}</p>
              </div>

              <div className="flex gap-2">
                <Link href={`/admin/cursos/${course.id}`} className="flex-1">
                  <Button variant="outline" className="w-full">
                    Ver Detalles
                  </Button>
                </Link>
                <Link href={`/admin/cursos/${course.id}/inscripciones`}>
                  <Button variant="outline">
                    <Users className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No hay cursos registrados</p>
          <Link href="/admin/cursos/nuevo">
            <Button>Crear Primer Curso</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
