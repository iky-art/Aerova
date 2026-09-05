export interface WeatherData {
  temperature: number
  apparentTemperature: number
  humidity: number
  windSpeed: number
  weatherCode: number
  isDay: number
  sunrise: string
  sunset: string
  updatedAt: string
}

export interface WeatherResponse {
  current: {
    temperature_2m: number
    relative_humidity_2m: number
    apparent_temperature: number
    weather_code: number
    wind_speed_10m: number
    is_day: number
  }
  daily: {
    sunrise: string[]
    sunset: string[]
  }
}
