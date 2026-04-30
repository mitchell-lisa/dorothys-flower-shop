export function SectionEyebrow({
  plate,
  children,
}: {
  plate?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="caption">
        {plate ? `${plate} — ` : ""}
        {children}
      </div>
    </div>
  );
}

export function HairlineRule() {
  return (
    <div className="flex items-center justify-center my-12">
      <div className="hairline w-48" />
    </div>
  );
}
