export default function BackgroundLines() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1080"
      viewBox="0 0 1920 1080"
      fill="none"
      className="absolute inset-0 m-auto opacity-20 dark:invert lg:block"
    >
      {/* Background Rectangle */}
      <rect width="1920" height="1080" fill="#f2f2f2"></rect>

      {/* Horizontal Lines */}
      {Array.from({ length: 25 }, (_, i) => (
        <line
          key={`horizontal-${i}`}
          y1={20 + i * 40}
          x2="1920"
          y2={20 + i * 40}
          className="stroke-muted-foreground"
          stroke="#b0bec5"
          strokeWidth="0.8"
          strokeDasharray="5 5"
        />
      ))}

      {/* Vertical Lines */}
      {Array.from({ length: 45 }, (_, i) => (
        <line
          key={`vertical-${i}`}
          x1={20 + i * 40}
          y1="0"
          x2={20 + i * 40}
          y2="1080"
          className="stroke-muted-foreground"
          stroke="#b0bec5"
          strokeWidth="0.8"
          strokeDasharray="5 5"
        />
      ))}

      {/* Diagonal Lines from Top-Left to Bottom-Right */}
      {Array.from({ length: 30 }, (_, i) => (
        <line
          key={`diagonal-${i}`}
          x1={-200 + i * 100}
          y1="0"
          x2={200 + i * 100}
          y2="1080"
          stroke="#cfd8dc"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}

      <defs>
        <clipPath id="clip0">
          <rect width="1920" height="1080" fill="#000000"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}
