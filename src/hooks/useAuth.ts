// Authentication hook

'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { User, AuthResponse, LoginCredentials } from '@/types/admin';
import { authStorage, isTokenExpired } from '@/lib/auth';
import api from '@/lib/api';

interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

export function useAuth(): UseAuthReturn {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const token = authStorage.getToken();
    const storedUser = authStorage.getUser();

    if (token && storedUser) {
      // Check if token is expired
      if (isTokenExpired(token)) {
        // Token expired, clear auth
        authStorage.clear();
        setUser(null);
      } else {
        // Valid token, set user
        setUser(storedUser);
      }
    }

    setIsLoading(false);
  }, []);

  // Add token to API requests
  useEffect(() => {
    const token = authStorage.getToken();
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common['Authorization'];
    }
  }, [user]);

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      const response = await api.post<AuthResponse>('/auth/login', credentials);
      const { accessToken, user: userData } = response.data.data;

      // Save to localStorage
      authStorage.setToken(accessToken);
      authStorage.setUser(userData);

      // Set user state
      setUser(userData);

      // Add token to API headers
      api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    } catch (error: any) {
      // Clear any existing auth data on login failure
      authStorage.clear();
      setUser(null);
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    // Clear localStorage
    authStorage.clear();

    // Clear user state
    setUser(null);

    // Remove token from API headers
    delete api.defaults.headers.common['Authorization'];

    // Redirect to login
    router.push('/login');
  }, [router]);

  const updateUser = useCallback((updatedUser: User) => {
    authStorage.setUser(updatedUser);
    setUser(updatedUser);
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
  };
}
