/**
 * Hand-drawn ink medallions used as placeholders for the value cameos.
 * Each is a different specimen flower silhouette inside a hairline circle,
 * sitting on a halftone-toned cream field. They will be replaced with real
 * scanned catalog medallions over time, but kept consistent in scale + frame.
 */

type MedallionProps = {
  flower: "rose" | "gladiolus" | "carnation" | "lily" | "geranium";
  size?: "seal" | "plate";
  className?: string;
};

const sizeClass = {
  seal: "w-32 h-32",
  plate: "w-56 h-56",
};

export function MedallionMark({
  flower,
  size = "plate",
  className = "",
}: MedallionProps) {
  return (
    <div
      className={[
        "plate-frame medallion rounded-full overflow-hidden",
        "ring-1 ring-ink/40 shadow-[0_2px_0_rgba(43,29,20,0.12)]",
        "bg-linen relative",
        sizeClass[size],
        className,
      ].join(" ")}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full plate-img"
      >
        <defs>
          <radialGradient id="medGrad" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#EADFC8" />
            <stop offset="100%" stopColor="#B8A98E" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#medGrad)" />
        <g
          fill="none"
          stroke="#2B1D14"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.9"
        >
          {flower === "rose" && <Rose />}
          {flower === "gladiolus" && <Gladiolus />}
          {flower === "carnation" && <Carnation />}
          {flower === "lily" && <Lily />}
          {flower === "geranium" && <Geranium />}
        </g>
      </svg>
    </div>
  );
}

function Rose() {
  return (
    <g transform="translate(100 105)">
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse
          key={r}
          cx="0"
          cy="-22"
          rx="14"
          ry="22"
          transform={`rotate(${r})`}
          fill="rgba(43,29,20,0.10)"
        />
      ))}
      {[30, 90, 150, 210, 270, 330].map((r) => (
        <ellipse
          key={r}
          cx="0"
          cy="-12"
          rx="10"
          ry="16"
          transform={`rotate(${r})`}
          fill="rgba(43,29,20,0.16)"
        />
      ))}
      <circle r="8" fill="rgba(43,29,20,0.30)" />
      <path
        d="M 0 35 Q -6 50 -14 60"
        stroke="#2B1D14"
        fill="none"
      />
      <path d="M -14 60 q -8 -2 -14 -10" />
      <path d="M 0 35 q 8 14 18 18" />
    </g>
  );
}

function Gladiolus() {
  return (
    <g transform="translate(100 100)">
      <path d="M 0 70 L 0 -70" />
      {[-55, -35, -15, 5, 25, 45].map((y, i) => (
        <g key={y}>
          <path
            d={`M 0 ${y} q -${18 - i * 2} -4 -${22 - i * 2} -10`}
            fill="rgba(43,29,20,0.14)"
            stroke="#2B1D14"
          />
          <path
            d={`M 0 ${y} q ${18 - i * 2} -4 ${22 - i * 2} -10`}
            fill="rgba(43,29,20,0.14)"
            stroke="#2B1D14"
          />
        </g>
      ))}
    </g>
  );
}

function Carnation() {
  return (
    <g transform="translate(100 105)">
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 18;
        const r = 36;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        return (
          <path
            key={i}
            d={`M 0 0 Q ${x * 0.4} ${y * 0.4} ${x} ${y}`}
            fill="rgba(43,29,20,0.10)"
          />
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12 + 0.2;
        const r = 22;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        return (
          <ellipse
            key={i}
            cx={x}
            cy={y}
            rx="6"
            ry="3"
            transform={`rotate(${(a * 180) / Math.PI} ${x} ${y})`}
            fill="rgba(43,29,20,0.18)"
          />
        );
      })}
      <circle r="6" fill="rgba(43,29,20,0.35)" />
      <path d="M 0 36 Q 4 50 -2 64" />
    </g>
  );
}

function Lily() {
  return (
    <g transform="translate(100 105)">
      {[0, 72, 144, 216, 288].map((r) => (
        <path
          key={r}
          d="M 0 0 Q -8 -22 -4 -50 Q 0 -56 4 -50 Q 8 -22 0 0 Z"
          transform={`rotate(${r})`}
          fill="rgba(43,29,20,0.10)"
          stroke="#2B1D14"
        />
      ))}
      {[36, 108, 180, 252, 324].map((r) => (
        <path
          key={r}
          d="M 0 0 Q -6 -16 -2 -36 Q 0 -40 2 -36 Q 6 -16 0 0 Z"
          transform={`rotate(${r})`}
          fill="rgba(43,29,20,0.18)"
        />
      ))}
      <circle r="4" fill="rgba(43,29,20,0.45)" />
      {[-4, -2, 0, 2, 4].map((dx) => (
        <line
          key={dx}
          x1={dx}
          y1="-2"
          x2={dx * 2}
          y2="-12"
          stroke="#2B1D14"
        />
      ))}
    </g>
  );
}

function Geranium() {
  return (
    <g transform="translate(100 100)">
      {[
        [-30, -18, 12],
        [10, -28, 12],
        [30, 4, 12],
        [-12, 14, 12],
        [-2, -8, 14],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          {Array.from({ length: 6 }).map((_, k) => {
            const a = (k * Math.PI * 2) / 6;
            return (
              <circle
                key={k}
                cx={Math.cos(a) * 5}
                cy={Math.sin(a) * 5}
                r="4"
                fill="rgba(43,29,20,0.18)"
              />
            );
          })}
          <circle r="2" fill="rgba(43,29,20,0.4)" />
        </g>
      ))}
      <path
        d="M 0 60 Q -6 30 -10 10"
        fill="none"
        stroke="#2B1D14"
      />
      <path
        d="M 0 60 Q 8 30 16 10"
        fill="none"
        stroke="#2B1D14"
      />
    </g>
  );
}
