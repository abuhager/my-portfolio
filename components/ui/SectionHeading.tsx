interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  titleId: string;
  inverse?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  titleId,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <header className={inverse ? 'section-heading section-heading--inverse' : 'section-heading'}>
      <p className="section-heading__eyebrow">{eyebrow}</p>
      <div className="section-heading__row">
        <h2 id={titleId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
