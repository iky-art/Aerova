import { useClock } from '../hooks/useClock'

export default function Calendar() {
  const now = useClock()

  const weekday = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
  }).format(now)

  const date = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
  }).format(now)

  const month = new Intl.DateTimeFormat('id-ID', {
    month: 'long',
  }).format(now)

  const year = new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
  }).format(now)

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="font-medium capitalize text-[var(--text-primary)]">
        {weekday}
      </span>

      <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />

      <span className="text-[var(--text-muted)]">
        {date} {month} {year}
      </span>
    </div>
  )
}
