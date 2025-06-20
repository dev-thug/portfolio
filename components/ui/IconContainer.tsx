import { ReactNode, CSSProperties } from "react";

interface IconContainerProps {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  gradient: string;
  className?: string;
  hoverScale?: boolean;
}

const sizeStyles = {
  sm: {
    width: "48px",
    height: "48px",
    borderRadius: "12px",
  },
  md: {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
  },
  lg: {
    width: "80px",
    height: "80px",
    borderRadius: "24px",
  },
};

export default function IconContainer({
  icon,
  size = "md",
  gradient,
  className = "",
  hoverScale = true,
}: IconContainerProps) {
  const containerStyle: CSSProperties = {
    ...sizeStyles[size],
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    transition: hoverScale ? "transform 0.3s ease" : undefined,
  };

  return (
    <div
      className={`bg-gradient-to-r ${gradient} ${
        hoverScale ? "group-hover:scale-110" : ""
      } ${className}`}
      style={containerStyle}
    >
      {icon}
    </div>
  );
}
