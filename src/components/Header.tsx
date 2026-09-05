import { Moon, Palette, Sun } from 'lucide-react'

interface HeaderProps {
  theme: 'dark' | 'light'
  accent: string
  onToggleTheme: () => void
  onAccentChange: (accent: string) => void
}

const accents = [
  '#8B5CF6',
  '#06B6D4',
  '#22C55E',
  '#F59E0B',
  '#F43F5E',
]

export default function Header({
  theme,
  accent,
  onToggleTheme,
  onAccentChange,
}: HeaderProps) {
  return (
    <header className="border-b border-[var(--border)] pb-5 lg:pb-6">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 shrink-0 bg-[var(--accent)] transition-colors duration-500"
            />

            <span className="text-[15px] font-semibold tracking-[-0.035em] text-[var(--text-primary)]">
              Aevora
            </span>
          </div>

          <p className="mt-1.5 pl-[18px] font-mono text-[8px] uppercase tracking-[0.17em] text-[var(--text-muted)] sm:text-[9px]">
            Weather / Time
          </p>
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 lg:flex">
            {accents.map((color) => {
              const active = accent === color

              return (
                <button
                  key={color}
                  type="button"
                  aria-label={`Pilih warna ${color}`}
                  aria-pressed={active}
                  onClick={() => onAccentChange(color)}
                  className={`h-7 w-7 rounded-full p-1 transition-[opacity,transform,box-shadow] duration-200 ${
                    active
                      ? 'ring-1 ring-[var(--accent)] ring-offset-2 ring-offset-[var(--background)]'
                      : 'opacity-35 hover:scale-110 hover:opacity-100'
                  }`}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{ backgroundColor: color }}
                  />
                </button>
              )
            })}

            <span className="mx-2 h-4 w-px bg-[var(--border)]" />
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Aktifkan mode terang'
                : 'Aktifkan mode gelap'
            }
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition-[background-color,color,transform] duration-200 hover:bg-[var(--surface)] hover:text-[var(--text-primary)] active:scale-90"
          >
            {theme === 'dark' ? (
              <Sun size={16} strokeWidth={1.7} />
            ) : (
              <Moon size={16} strokeWidth={1.7} />
            )}
          </button>

          <button
            type="button"
            aria-label="Ganti warna aksen"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] transition-[background-color,color,transform] duration-200 hover:bg-[var(--surface)] hover:text-[var(--text-primary)] active:scale-90 lg:hidden"
            onClick={() => {
              const index = accents.indexOf(accent)
              const next = accents[(index + 1) % accents.length]

              onAccentChange(next)
            }}
          >
            <Palette size={16} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </header>
  )
}
