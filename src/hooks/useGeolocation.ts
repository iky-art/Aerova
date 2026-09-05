import { useCallback, useEffect, useState } from 'react'
import type { Coordinates } from '../types/location'

const DEFAULT_LOCATION: Coordinates = {
  latitude: -7.2575,
  longitude: 112.7521,
}

export function useGeolocation() {
  const [coordinates, setCoordinates] =
    useState<Coordinates>(DEFAULT_LOCATION)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Browser tidak mendukung lokasi.')
      setLoading(false)
      return
    }

    setLoading(true)

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })

        setError(null)
        setLoading(false)
      },
      () => {
        setError('Izin lokasi tidak diberikan. Menggunakan lokasi default.')
        setLoading(false)
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      },
    )
  }, [])

  useEffect(() => {
    requestLocation()
  }, [requestLocation])

  return {
    coordinates,
    loading,
    error,
    requestLocation,
  }
}
