import axios from 'axios'
import type { ApiError } from '@/types/api'

const resolveApiBaseUrl = () => {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim()

  if (!raw) {
    return 'http://localhost:5000/api'
  }

  if (/^https?:\/\//i.test(raw)) {
    return raw
  }

  // If protocol is omitted (e.g. "inmobiliariaortizidrovo.com/api"),
  // force HTTPS so axios does not treat it as a relative path.
  return `https://${raw}`
}

const api = axios.create({
  baseURL: resolveApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const apiError: ApiError = {
      success: false,
      error: error.response?.data?.error || 'Error desconocido',
      message: error.response?.data?.message || error.message || 'Ha ocurrido un error',
      statusCode: error.response?.status || 500,
    }

    // Log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', apiError)
    }

    return Promise.reject(apiError)
  }
)

export default api
