interface DataLabelProps {
  children: React.ReactNode
}

export default function DataLabel({
  children,
}: DataLabelProps) {
  return (
    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
      {children}
    </span>
  )
}
