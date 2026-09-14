export default function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[var(--line)] bg-white/[0.025] px-3 py-1.5 text-[12px] font-medium text-[var(--muted)]">
      {label}
    </span>
  );
}
