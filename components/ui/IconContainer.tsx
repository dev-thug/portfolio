import { ReactNode } from "react";

interface IconContainerProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  gradient: string;
  className?: string;
  hoverScale?: boolean;
}

const sizes = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
};

const roundedSizes = {
  sm: "rounded-xl",
  md: "rounded-2xl",
  lg: "rounded-3xl",
};

export default function IconContainer({
  icon,
  size = "md",
  gradient,
  className = "",
  hoverScale = true,
}: IconContainerProps) {
  return (
    <div
      className={`${sizes[size]} ${
        roundedSizes[size]
      } bg-gradient-to-r ${gradient} flex items-center justify-center text-white ${
        hoverScale
          ? "group-hover:scale-110 transition-transform duration-300"
          : ""
      } ${className}`}
    >
      {icon}
    </div>
  );
}
