import { useClock } from '../hooks/useClock'
import { formatTime } from '../features/clock/clock'

export default function Clock() {
  const now = useClock()
  const time = formatTime(now)
  const [hours, minutes, seconds] = time.split(':')

  const progress = (Number(seconds) / 60) * 100

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

  return (
    <div className="select-none">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--text-muted)] sm:text-[9px]">
          Current time
        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)] sm:text-[9px]">
          {timezone.replace('_', ' ')}
        </span>
      </div>

      <time
        dateTime={now.toISOString()}
        className="mt-5 block whitespace-nowrap text-[clamp(4rem,20vw,10rem)] font-medium leading-[0.78] tracking-[-0.09em] text-[var(--text-primary)] tabular-nums sm:mt-6 sm:text-[clamp(4.5rem,21vw,10rem)]"
      >
        <span>{hours}</span>
        <span className="mx-[0.035em] text-[var(--accent)] transition-colors duration-500">
          :
        </span>
        <span>{minutes}</span>
      </time>

      <div className="mt-6 flex max-w-xl items-center gap-3 sm:mt-7">
        <div className="relative h-px flex-1 overflow-hidden bg-[var(--border)]">
          <div
            className="absolute inset-y-0 left-0 bg-[var(--accent)] transition-[width] duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <time
          dateTime={now.toISOString()}
          className="shrink-0 font-mono text-[9px] tracking-[0.16em] text-[var(--text-muted)] sm:text-[10px]"
        >
          {seconds} SEC
        </time>
      </div>
    </div>
  )
}
