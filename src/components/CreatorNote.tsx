import { X } from 'lucide-react'

interface CreatorNoteProps {
  onClose: () => void
}

export default function CreatorNote({
  onClose,
}: CreatorNoteProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[var(--background)]/80 px-4 py-6 backdrop-blur-[2px] sm:items-center sm:py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="creator-note-title"
    >
      <div className="w-full max-w-lg border border-[var(--border)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[var(--accent)]" />

            <p
              id="creator-note-title"
              className="font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]"
            >
              A note from Iky
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup pesan"
            className="flex h-9 w-9 items-center justify-center text-[var(--text-muted)] transition-colors duration-200 hover:bg-[var(--background)] hover:text-[var(--text-primary)] active:scale-95"
          >
            <X size={16} strokeWidth={1.6} />
          </button>
        </div>

        <div className="px-5 py-7 sm:px-6 sm:py-8">
          <p className="text-[clamp(1.15rem,5vw,1.45rem)] font-medium leading-[1.35] tracking-[-0.025em] text-[var(--text-primary)]">
            Mohon maaf, Kak, Bang, Pak, Bu.
          </p>

          <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--text-muted)]">
            <p>
              Saya hanya seorang pelajar yang sedang
              bermimpi dan mencoba menjadi programmer.
            </p>

            <p>
              Saya belum bisa membuat versi desktop Aevora
              100% sempurna, tetapi saya akan terus belajar
              dan berusaha untuk terus memperbaruinya.
            </p>

            <p>
              Sisanya, saya serahkan kepada kalian untuk
              menikmati dan menilai Aevora.
            </p>
          </div>

          <div className="mt-8 border-t border-[var(--border)] pt-5">
            <p className="text-sm text-[var(--text-muted)]">
              Salam hangat,
            </p>

            <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
              Iky
            </p>
          </div>
        </div>

        <div className="border-t border-[var(--border)] px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full border border-[var(--border)] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-primary)] transition-[background-color,border-color,color] duration-200 hover:border-[var(--accent)] hover:bg-[var(--background)] hover:text-[var(--accent)] active:scale-[0.99]"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  )
}
