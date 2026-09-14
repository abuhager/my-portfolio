export default function SectionLabel({ number, text }: { number: string; text: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
      <span>{number}</span>
      <span className="h-px w-8 bg-[var(--accent)]/50" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}
