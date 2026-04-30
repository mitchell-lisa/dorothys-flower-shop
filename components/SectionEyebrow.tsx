export function SectionEyebrow({
  plate,
  children,
}: {
  plate?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <FloralMark />
      <div className="caption">
        {plate ? `${plate} — ` : ""}
        {children}
      </div>
    </div>
  );
}

export function FloralMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`w-8 h-8 text-ink/70 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="3.2" fill="currentColor" />
      <ellipse cx="32" cy="18" rx="4" ry="9" />
      <ellipse cx="32" cy="46" rx="4" ry="9" />
      <ellipse cx="18" cy="32" rx="9" ry="4" />
      <ellipse cx="46" cy="32" rx="9" ry="4" />
      <ellipse
        cx="22"
        cy="22"
        rx="9"
        ry="3.5"
        transform="rotate(-45 22 22)"
      />
      <ellipse
        cx="42"
        cy="22"
        rx="9"
        ry="3.5"
        transform="rotate(45 42 22)"
      />
      <ellipse
        cx="22"
        cy="42"
        rx="9"
        ry="3.5"
        transform="rotate(45 22 42)"
      />
      <ellipse
        cx="42"
        cy="42"
        rx="9"
        ry="3.5"
        transform="rotate(-45 42 42)"
      />
    </svg>
  );
}

export function FloralRule() {
  return (
    <div className="flex items-center justify-center gap-4 my-12 text-ink/40">
      <div className="hairline w-24" />
      <FloralMark className="w-5 h-5" />
      <div className="hairline w-24" />
    </div>
  );
}
