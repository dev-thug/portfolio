interface SpacerProps {
  size: "sm" | "md" | "lg" | "xl";
  responsive?: boolean;
}

const spacerSizes = {
  sm: "h-4",
  md: "h-8",
  lg: "h-12",
  xl: "h-16",
};

const responsiveSpacerSizes = {
  sm: "h-2 md:h-4",
  md: "h-4 md:h-8",
  lg: "h-8 md:h-12",
  xl: "h-12 md:h-16",
};

export default function Spacer({ size, responsive = true }: SpacerProps) {
  const className = responsive
    ? responsiveSpacerSizes[size]
    : spacerSizes[size];

  return <div className={className}></div>;
}
