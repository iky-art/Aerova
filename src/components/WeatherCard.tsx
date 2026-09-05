import { MapPin, RefreshCw } from 'lucide-react'
import type { WeatherData } from '../types/weather'
import { getWeatherDescription } from '../utils/weatherCode'

interface WeatherCardProps {
  weather: WeatherData | null
  location: string
  country: string
  loading: boolean
  refreshing: boolean
  onRefresh: () => void
}

function formatHour(value: string) {
  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(value))
}

export default function WeatherCard({
  weather,
  location,
  country,
  loading,
  refreshing,
  onRefresh,
}: WeatherCardProps) {
  if (loading && !weather) {
    return (
      <section className="mt-20 border-y border-[var(--border)] py-8 lg:mt-24">
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Weather data
            </p>

            <div className="mt-4 h-px w-36 overflow-hidden bg-[var(--border)]">
              <div className="h-full w-1/2 animate-[loading-line_1.4s_ease-in-out_infinite] bg-[var(--accent)]" />
            </div>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
            AEVORA
          </span>
        </div>
      </section>
    )
  }

  if (!weather) return null

  const description = getWeatherDescription(
    weather.weatherCode,
    weather.isDay,
  )

  const WeatherIcon = description.icon

  return (
    <section className="mt-20 border-y border-[var(--border)] lg:mt-24">
      <div className="grid gap-8 py-7 sm:grid-cols-[1fr_auto] sm:items-center lg:gap-16 lg:py-9">
        <div>
          <div className="flex items-center gap-2">
            <MapPin
              size={13}
              strokeWidth={1.6}
              className="text-[var(--accent)]"
            />

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Observed location
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="text-xl font-medium tracking-[-0.035em] text-[var(--text-primary)] lg:text-2xl">
              {location}
            </h2>

            <span className="text-sm text-[var(--text-muted)]">
              {country}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onRefresh}
          disabled={refreshing}
          aria-label="Perbarui data cuaca"
          title="Perbarui data cuaca"
          className="flex h-9 w-9 items-center justify-center justify-self-start rounded-full text-[var(--text-muted)] transition-[background-color,color,transform] duration-200 hover:bg-[var(--surface)] hover:text-[var(--text-primary)] active:scale-90 disabled:cursor-default sm:justify-self-end"
        >
          <RefreshCw
            size={15}
            strokeWidth={1.6}
            className={refreshing ? 'animate-spin' : ''}
          />
        </button>
      </div>

      <div className="grid border-t border-[var(--border)] py-8 sm:grid-cols-[1fr_auto] sm:items-end lg:py-10">
        <div>
          <div className="flex items-end gap-4">
            <WeatherIcon
              size={34}
              strokeWidth={1.25}
              className="mb-2 text-[var(--accent)] transition-colors duration-500"
            />

            <span
              key={`${weather.temperature}-${weather.weatherCode}`}
              className="animate-[weather-number_450ms_ease-out]"
            >
              <span className="text-[clamp(4.5rem,18vw,7.5rem)] font-medium leading-[0.78] tracking-[-0.09em] text-[var(--text-primary)] tabular-nums">
                {Math.round(weather.temperature)}°
              </span>
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--text-primary)]">
              {description.label}
            </p>

            <span className="h-1 w-1 bg-[var(--accent)]" />

            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {weather.isDay ? 'Daylight' : 'Night'}
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 sm:mt-0 sm:flex sm:gap-10">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Feels like
            </p>

            <p className="mt-2 text-lg font-medium tabular-nums text-[var(--text-primary)]">
              {Math.round(weather.apparentTemperature)}°
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Sunrise
            </p>

            <p className="mt-2 text-sm font-medium tabular-nums text-[var(--text-primary)]">
              {formatHour(weather.sunrise)}
            </p>
          </div>

          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Sunset
            </p>

            <p className="mt-2 text-sm font-medium tabular-nums text-[var(--text-primary)]">
              {formatHour(weather.sunset)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
