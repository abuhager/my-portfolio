export default function FadeIn({
  children,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return <div>{children}</div>;
}
