export function formatUpdatedAt(value: string): string {
  const date = new Date(value)

  return new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date)
}

export function formatTemperature(value: number): string {
  return `${Math.round(value)}°`
}

export function formatWind(value: number): string {
  return `${Math.round(value)} km/h`
}

export function formatHumidity(value: number): string {
  return `${Math.round(value)}%`
}

export function formatTimezone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone
}
