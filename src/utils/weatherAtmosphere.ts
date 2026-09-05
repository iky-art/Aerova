export type WeatherAtmosphere =
  | 'clear'
  | 'cloudy'
  | 'rain'
  | 'storm'
  | 'fog'
  | 'snow'
  | 'night'

export function getWeatherAtmosphere(
  code: number,
  isDay: number,
): WeatherAtmosphere {
  if (!isDay) {
    return 'night'
  }

  if (code === 0) {
    return 'clear'
  }

  if ([1, 2, 3].includes(code)) {
    return 'cloudy'
  }

  if ([45, 48].includes(code)) {
    return 'fog'
  }

  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
    return 'rain'
  }

  if ([95, 96, 99].includes(code)) {
    return 'storm'
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return 'snow'
  }

  return 'cloudy'
}
