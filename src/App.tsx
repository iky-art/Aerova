import { useEffect, useState } from 'react'
import Header from './components/Header'
import Calendar from './components/Calendar'
import Clock from './components/Clock'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import FeedbackCard from './components/FeedbackCard'
import OwnerNotice from './components/OwnerNotice'
import CreatorNote from './components/CreatorNote'
import { useGeolocation } from './hooks/useGeolocation'
import { useWeather } from './hooks/useWeather'
import { reverseGeocode } from './services/openMeteo'
import { getWeatherAtmosphere } from './utils/weatherAtmosphere'

type Theme = 'dark' | 'light'

const DEFAULT_ACCENT = '#8B5CF6'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (
      (localStorage.getItem('aevora-theme') as Theme) ||
      'dark'
    )
  })

  const [accent, setAccent] = useState(
    () => localStorage.getItem('aevora-accent') || DEFAULT_ACCENT,
  )

  const [locationName, setLocationName] = useState('Surabaya')
  const [country, setCountry] = useState('Indonesia')
  const [noticeStep, setNoticeStep] = useState<1 | 2 | 0>(1)

  const {
    coordinates,
    loading: locationLoading,
  } = useGeolocation()

  const {
    weather,
    loading: weatherLoading,
    refreshing,
    error,
    refresh,
  } = useWeather(coordinates)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('aevora-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--accent',
      accent,
    )

    localStorage.setItem('aevora-accent', accent)
  }, [accent])

  useEffect(() => {
    let cancelled = false

    async function loadLocation() {
      try {
        const result = await reverseGeocode(coordinates)

        if (!cancelled) {
          setLocationName(result.name)
          setCountry(result.country)
        }
      } catch {
        // Keep fallback location.
      }
    }

    loadLocation()

    return () => {
      cancelled = true
    }
  }, [coordinates])

  const atmosphere = weather
    ? getWeatherAtmosphere(
        weather.weatherCode,
        weather.isDay,
      )
    : 'night'

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'dark' ? 'light' : 'dark',
    )
  }

  return (
    <>
      <main
        data-atmosphere={atmosphere}
        className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--text-primary)] transition-colors duration-500"
      >
        <div className="mx-auto min-h-screen w-full max-w-[1180px] px-4 py-5 sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-16">
          <Header
            theme={theme}
            accent={accent}
            onToggleTheme={toggleTheme}
            onAccentChange={setAccent}
          />

          <section className="mt-16 sm:mt-28 lg:mt-36 xl:mt-40">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px]">
                Local time
              </p>

              <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)] sm:block">
                Live
              </span>
            </div>

            <div className="mt-5 sm:mt-6">
              <Clock />
            </div>

            <div className="mt-5 sm:mt-6">
              <Calendar />
            </div>
          </section>

          <WeatherCard
            weather={weather}
            location={locationName}
            country={country}
            loading={locationLoading || weatherLoading}
            refreshing={refreshing}
            onRefresh={() => refresh(true)}
          />

          <WeatherDetails weather={weather} />

          <FeedbackCard />

          {error && (
            <p className="mt-5 text-xs leading-5 text-[var(--text-muted)]">
              {error}
            </p>
          )}

          <section className="mt-16 border-t border-[var(--border)] pt-6 sm:mt-16 lg:mt-24">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--accent)] sm:text-[10px]">
                Document
              </span>

              <span className="h-px flex-1 bg-[var(--border)]" />
            </div>

            <div className="mt-5 max-w-2xl">
              <p className="text-sm leading-6 text-[var(--text-muted)] sm:leading-7">
                Aevora tidak sepenuhnya real-time. Kami
                menggunakan layanan dan data yang tersedia
                secara publik tanpa backend milik sendiri dan
                tanpa API key tersembunyi. Data cuaca berasal
                dari sumber eksternal dan dapat memiliki waktu
                pembaruan yang berbeda.
              </p>

              <p className="mt-4 text-sm leading-6 text-[var(--text-muted)] sm:leading-7">
                Kami tidak mengklaim memiliki atau menghasilkan
                data cuaca tersebut. Aevora hanya mengolah dan
                menampilkan data yang tersedia melalui layanan
                yang digunakan. Tidak ada janji bahwa setiap
                informasi akan selalu diperbarui secara langsung.
              </p>
            </div>
          </section>

          <footer className="mt-16 flex flex-col gap-3 border-t border-[var(--border)] pb-5 pt-5 text-[9px] uppercase tracking-[0.12em] text-[var(--text-muted)] sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
            <span>Aevora / Weather & time</span>
            <span>Open source project</span>
          </footer>
        </div>
      </main>

      {noticeStep === 1 && (
        <OwnerNotice onClose={() => setNoticeStep(2)} />
      )}

      {noticeStep === 2 && (
        <CreatorNote onClose={() => setNoticeStep(0)} />
      )}
    </>
  )
}

export default App
