// Authentication utilities

import { User } from '@/types/admin';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const authStorage = {
  getToken: (): string | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(TOKEN_KEY);
  },

  setToken: (token: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(TOKEN_KEY, token);
  },

  removeToken: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(TOKEN_KEY);
  },

  getUser: (): User | null => {
    if (typeof window === 'undefined') return null;
    const userJson = localStorage.getItem(USER_KEY);
    if (!userJson) return null;

    try {
      return JSON.parse(userJson) as User;
    } catch {
      return null;
    }
  },

  setUser: (user: User): void => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  removeUser: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(USER_KEY);
  },

  clear: (): void => {
    authStorage.removeToken();
    authStorage.removeUser();
  },

  isAuthenticated: (): boolean => {
    return !!authStorage.getToken() && !!authStorage.getUser();
  },
};

export const formatUserRole = (role: string): string => {
  const roleMap: Record<string, string> = {
    super_admin: 'Super Administrador',
    admin: 'Administrador',
    agent: 'Agente',
    receptionist: 'Recepcionista',
    accountant: 'Contador',
  };
  return roleMap[role] || role;
};

export const getUserInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

export const isTokenExpired = (token: string): boolean => {
  try {
    // JWT tokens have 3 parts separated by dots
    const parts = token.split('.');
    if (parts.length !== 3) return true;

    // Decode the payload (second part)
    const payload = JSON.parse(atob(parts[1]));

    // Check if token has expiration
    if (!payload.exp) return false;

    // Check if expired (exp is in seconds, Date.now() is in milliseconds)
    return payload.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};
