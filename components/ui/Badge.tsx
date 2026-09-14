export default function Badge({
  label,
  inverse = false,
}: {
  label: string;
  inverse?: boolean;
}) {
  return <span className={inverse ? 'badge badge--inverse' : 'badge'}>{label}</span>;
}
