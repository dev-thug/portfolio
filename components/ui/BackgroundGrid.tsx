interface BackgroundGridProps {
  opacity?: string;
  darkOpacity?: string;
  size?: number;
}

export default function BackgroundGrid({
  opacity = "0.02",
  darkOpacity = "0.05",
  size = 24,
}: BackgroundGridProps) {
  return (
    <div
      className={`absolute inset-0 opacity-[${opacity}] dark:opacity-[${darkOpacity}]`}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)",
          backgroundSize: `${size}px ${size}px`,
        }}
      />
    </div>
  );
}
