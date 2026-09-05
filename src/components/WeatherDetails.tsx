import { Droplets, Wind } from 'lucide-react'
import type { WeatherData } from '../types/weather'
import {
  formatHumidity,
  formatUpdatedAt,
  formatWind,
} from '../utils/dataLanguage'
import DataLabel from './ui/DataLabel'

interface WeatherDetailsProps {
  weather: WeatherData | null
}

export default function WeatherDetails({
  weather,
}: WeatherDetailsProps) {
  if (!weather) return null

  return (
    <section className="grid grid-cols-2 border-b border-[var(--border)] sm:grid-cols-4">
      <div className="min-w-0 border-r border-[var(--border)] py-5 pr-4 sm:py-6 sm:pr-6">
        <DataLabel>
          <span className="flex items-center gap-2">
            <Droplets size={13} strokeWidth={1.6} />
            Humidity
          </span>
        </DataLabel>

        <p className="mt-3 text-lg font-medium tabular-nums text-[var(--text-primary)] sm:text-xl">
          {formatHumidity(weather.humidity)}
        </p>
      </div>

      <div className="min-w-0 py-5 pl-4 sm:border-r sm:border-[var(--border)] sm:px-6 sm:py-6">
        <DataLabel>
          <span className="flex items-center gap-2">
            <Wind size={13} strokeWidth={1.6} />
            Wind
          </span>
        </DataLabel>

        <p className="mt-3 text-lg font-medium tabular-nums text-[var(--text-primary)] sm:text-xl">
          {formatWind(weather.windSpeed)}
        </p>
      </div>

      <div className="min-w-0 border-r border-[var(--border)] py-5 pr-4 sm:border-r-0 sm:px-6 sm:py-6">
        <DataLabel>Day / night</DataLabel>

        <p className="mt-3 text-xs font-medium text-[var(--text-primary)] sm:text-sm">
          {weather.isDay ? 'Daylight' : 'Night'}
        </p>
      </div>

      <div className="min-w-0 py-5 pl-4 sm:pl-6 sm:py-6">
        <DataLabel>Updated</DataLabel>

        <p className="mt-3 font-mono text-xs tabular-nums text-[var(--text-primary)] sm:text-sm">
          {formatUpdatedAt(weather.updatedAt)}
        </p>
      </div>
    </section>
  )
}
