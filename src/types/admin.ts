// Admin panel type definitions

export type UserRole =
  | 'super_admin'    // Full access to everything
  | 'admin'          // Content management, approve testimonials
  | 'agent'          // Create/edit properties, manage assigned leads
  | 'receptionist'   // View properties, manage leads
  | 'accountant';    // Financial reports

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar_url?: string;
  active: boolean;
  last_login: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
    user: User;
  };
  message?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface DashboardStats {
  total_properties: number;
  properties_available: number;
  properties_sold: number;
  properties_rented: number;
  new_leads: number;
  leads_in_progress: number;
  leads_converted: number;
  pending_testimonials: number;
  active_courses: number;
  total_users: number;
}

export interface RecentActivity {
  id: string;
  type: 'property' | 'lead' | 'testimonial' | 'course' | 'user';
  action: 'created' | 'updated' | 'deleted' | 'approved' | 'rejected';
  title: string;
  description?: string;
  user_name: string;
  user_avatar?: string;
  created_at: string;
}

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  read: boolean;
  created_at: string;
  link?: string;
}

// Lead statuses
export type LeadStatus =
  | 'nuevo'           // New
  | 'contactado'      // Contacted
  | 'calificado'      // Qualified
  | 'visita_agendada' // Visit scheduled
  | 'negociacion'     // In negotiation
  | 'convertido'      // Converted
  | 'descartado';     // Discarded

export type LeadPriority = 'baja' | 'media' | 'alta' | 'urgente';

export type LeadSource =
  | 'website'
  | 'facebook'
  | 'instagram'
  | 'whatsapp'
  | 'referral'
  | 'other';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  property_id?: string;
  property_title?: string;
  status: LeadStatus;
  priority: LeadPriority;
  source: LeadSource;
  assigned_to?: string;
  assigned_to_name?: string;
  budget?: number;
  notes?: LeadNote[];
  created_at: string;
  updated_at: string;
}

export interface LeadNote {
  id: string;
  lead_id: string;
  user_id: string;
  user_name: string;
  user_avatar?: string;
  content: string;
  created_at: string;
}

// Testimonial statuses
export type TestimonialStatus = 'pendiente' | 'aprobado' | 'rechazado';

export interface Testimonial {
  id: string;
  name: string;
  email: string;
  rating: number;
  content: string;
  service_type?: string;
  property_id?: string;
  property_title?: string;
  show_name: boolean;
  status: TestimonialStatus;
  rejection_reason?: string;
  reviewed_by?: string;
  reviewed_at?: string;
  created_at: string;
  updated_at: string;
}

// Course types
export type CourseCategory =
  | 'contable'
  | 'laboral'
  | 'tributario'
  | 'financiero'
  | 'gestion_financiera';

export type CourseModality = 'presencial' | 'virtual' | 'hibrido' | 'grabado';

export type CourseStatus = 'proximo' | 'en_curso' | 'completado' | 'cancelado';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: CourseCategory;
  modality: CourseModality;
  status: CourseStatus;
  price: number;
  duration_hours: number;
  start_date: string;
  end_date: string;
  schedule?: string;
  max_students: number;
  enrolled_count: number;
  instructor_name: string;
  instructor_bio?: string;
  syllabus?: string;
  requirements?: string;
  image_url?: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CourseEnrollment {
  id: string;
  course_id: string;
  student_name: string;
  student_email: string;
  student_phone?: string;
  enrollment_date: string;
  payment_status: 'pendiente' | 'pagado' | 'cancelado';
  payment_amount: number;
  certificate_issued: boolean;
  certificate_url?: string;
}

// Property admin specific fields
export interface PropertyAdmin {
  id: string;
  title: string;
  slug: string;
  property_type: string;
  operation_type: string;
  status: 'disponible' | 'vendida' | 'alquilada' | 'reservada';
  price: number;
  city: string;
  neighborhood?: string;
  bedrooms?: number;
  bathrooms?: number;
  area_built?: number;
  main_image?: string;
  featured: boolean;
  published: boolean;
  views: number;
  created_by?: string;
  created_by_name?: string;
  created_at: string;
  updated_at: string;
}

// Report types
export interface PropertyReport {
  total_properties: number;
  by_type: Record<string, number>;
  by_operation: Record<string, number>;
  by_status: Record<string, number>;
  by_city: Record<string, number>;
  total_value: number;
  average_price: number;
}

export interface LeadReport {
  total_leads: number;
  by_status: Record<LeadStatus, number>;
  by_source: Record<LeadSource, number>;
  conversion_rate: number;
  response_time_avg: number;
  leads_by_month: Array<{
    month: string;
    count: number;
  }>;
}

export interface SalesReport {
  total_sales: number;
  total_revenue: number;
  by_property_type: Record<string, { count: number; revenue: number }>;
  by_agent: Array<{
    agent_name: string;
    sales_count: number;
    total_revenue: number;
  }>;
  sales_by_month: Array<{
    month: string;
    count: number;
    revenue: number;
  }>;
}
