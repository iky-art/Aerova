import { useCallback, useEffect, useState } from 'react'
import { getWeather } from '../services/openMeteo'
import type { Coordinates } from '../types/location'
import type { WeatherData } from '../types/weather'

const REFRESH_INTERVAL = 5 * 60 * 1000

export function useWeather(coordinates: Coordinates) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(async (silent = false) => {
    if (silent) {
      setRefreshing(true)
    } else {
      setLoading(true)
    }

    try {
      const data = await getWeather(coordinates)

      setWeather(data)
      setError(null)
    } catch {
      setError('Data cuaca tidak dapat diperbarui.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [coordinates])

  useEffect(() => {
    refresh()

    const interval = window.setInterval(() => {
      refresh(true)
    }, REFRESH_INTERVAL)

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        refresh(true)
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [refresh])

  return {
    weather,
    loading,
    refreshing,
    error,
    refresh,
  }
}
