import { ExternalLink, MessageCircle } from 'lucide-react'

const INSTAGRAM_URL =
  'https://www.instagram.com/mzris_ky?igsi=MTRwOW5vZTRlejBwbw=='

const WHATSAPP_URL = 'https://wa.me/6285236936481'

export default function FeedbackCard() {
  return (
    <section className="mt-10 border border-[var(--border)] bg-[var(--surface)] sm:mt-12">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b border-[var(--border)] p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[var(--accent)]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
                Card 03
              </span>
            </div>

            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
              Open conversation
            </span>
          </div>

          <h2 className="mt-12 max-w-md text-[clamp(1.5rem,4vw,2.25rem)] font-medium leading-[1.15] tracking-[-0.045em] text-[var(--text-primary)] lg:mt-20">
            Kalau kalian kecewa dengan buatan saya, nggak apa-apa.
          </h2>
        </div>

        <div className="p-5 sm:p-6 lg:p-8">
          <p className="max-w-xl text-sm leading-7 text-[var(--text-muted)]">
            Silakan konsultasi dengan saya secara gratis.
            Tidak ada biaya apa pun dan saya tidak memungut
            uang kalian sedikit pun. Kalau ada kritik, saran,
            atau sesuatu yang ingin dibicarakan tentang
            Aevora, silakan DM saya secara pribadi.
          </p>

          <div className="mt-8 grid gap-2 sm:grid-cols-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-12 items-center justify-between border border-[var(--border)] px-4 transition-[background-color,border-color] duration-200 hover:border-[var(--accent)] hover:bg-[var(--background)]"
            >
              <span className="flex items-center gap-3">
                <ExternalLink
                  size={16}
                  strokeWidth={1.6}
                  className="text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent)]"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--text-primary)]">
                  Instagram
                </span>
              </span>

              <span className="text-xs text-[var(--text-muted)]">
                →
              </span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-12 items-center justify-between border border-[var(--border)] px-4 transition-[background-color,border-color] duration-200 hover:border-[var(--accent)] hover:bg-[var(--background)]"
            >
              <span className="flex items-center gap-3">
                <MessageCircle
                  size={16}
                  strokeWidth={1.6}
                  className="text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent)]"
                />

                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--text-primary)]">
                  WhatsApp
                </span>
              </span>

              <span className="text-xs text-[var(--text-muted)]">
                →
              </span>
            </a>
          </div>

          <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            Private message · Free consultation
          </p>
        </div>
      </div>
    </section>
  )
}
