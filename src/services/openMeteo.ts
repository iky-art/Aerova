import type { Coordinates } from '../types/location'
import type { WeatherData, WeatherResponse } from '../types/weather'

const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast'

export async function getWeather(
  coordinates: Coordinates,
): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: String(coordinates.latitude),
    longitude: String(coordinates.longitude),
    current:
      'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,is_day',
    daily: 'sunrise,sunset',
    timezone: 'auto',
    forecast_days: '1',
  })

  const response = await fetch(`${WEATHER_URL}?${params}`)

  if (!response.ok) {
    throw new Error('Gagal mengambil data cuaca.')
  }

  const data = (await response.json()) as WeatherResponse

  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
    isDay: data.current.is_day,
    sunrise: data.daily.sunrise[0],
    sunset: data.daily.sunset[0],
    updatedAt: new Date().toISOString(),
  }
}

export async function reverseGeocode(
  coordinates: Coordinates,
): Promise<{ name: string; country: string }> {
  const params = new URLSearchParams({
    latitude: String(coordinates.latitude),
    longitude: String(coordinates.longitude),
    count: '1',
    language: 'id',
    format: 'json',
  })

  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/reverse?${params}`,
  )

  if (!response.ok) {
    throw new Error('Lokasi tidak dapat ditemukan.')
  }

  const data = await response.json()

  const result = data.results?.[0]

  return {
    name: result?.name ?? 'Lokasi Anda',
    country: result?.country ?? 'Indonesia',
  }
}
