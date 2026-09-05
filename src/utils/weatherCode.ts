import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Sun,
  Snowflake,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface WeatherDescription {
  label: string
  icon: LucideIcon
}

export function getWeatherDescription(
  code: number,
  isDay = 1,
): WeatherDescription {
  if (code === 0) {
    return {
      label: isDay ? 'Cerah' : 'Malam cerah',
      icon: Sun,
    }
  }

  if ([1, 2].includes(code)) {
    return {
      label: 'Sebagian berawan',
      icon: CloudSun,
    }
  }

  if (code === 3) {
    return {
      label: 'Berawan',
      icon: Cloud,
    }
  }

  if ([45, 48].includes(code)) {
    return {
      label: 'Berkabut',
      icon: CloudFog,
    }
  }

  if ([51, 53, 55].includes(code)) {
    return {
      label: 'Gerimis',
      icon: CloudDrizzle,
    }
  }

  if ([61, 63, 65, 80, 81, 82].includes(code)) {
    return {
      label: 'Hujan',
      icon: CloudRain,
    }
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return {
      label: 'Salju',
      icon: Snowflake,
    }
  }

  if ([95, 96, 99].includes(code)) {
    return {
      label: 'Badai petir',
      icon: CloudLightning,
    }
  }

  return {
    label: 'Kondisi tidak diketahui',
    icon: Cloud,
  }
}
