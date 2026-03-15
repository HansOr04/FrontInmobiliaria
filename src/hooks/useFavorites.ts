'use client'

import { useState, useEffect } from 'react'

const FAVORITES_KEY = 'ortiz-idrovo-favorites'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(FAVORITES_KEY)
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (error) {
        console.error('Error loading favorites:', error)
        setFavorites([])
      }
    }
    setIsLoaded(true)
  }, [])

  const toggleFavorite = (propertyId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(propertyId)
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]

      localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites))
      return newFavorites
    })
  }

  const isFavorite = (propertyId: string) => favorites.includes(propertyId)

  const clearFavorites = () => {
    setFavorites([])
    localStorage.removeItem(FAVORITES_KEY)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    isLoaded,
    count: favorites.length,
  }
}
