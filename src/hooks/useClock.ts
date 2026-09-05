import { useEffect, useState } from 'react'
import { getCurrentTime } from '../features/clock/clock'

export function useClock() {
  const [now, setNow] = useState<Date>(getCurrentTime)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(getCurrentTime())
    }, 1000)

    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return now
}
