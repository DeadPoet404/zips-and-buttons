export default function Statement({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="statement">
      <span className="label">{label}</span>
      <p>{children}</p>
    </section>
  );
}
