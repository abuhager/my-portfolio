interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <p className="
      text-[var(--cyan)] text-[11px] font-medium
      uppercase tracking-[0.12em] font-sans
      mb-3
    ">
      {text}
    </p>
  );
}