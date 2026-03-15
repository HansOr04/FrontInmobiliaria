import axios from 'axios'
import type { ApiResponse, ApiError } from '@/types/api'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
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
