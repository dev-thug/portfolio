"use client";

import { ReactNode, CSSProperties } from "react";

type BadgeGroupAlignment = "start" | "center" | "end" | "between" | "around";
type BadgeGroupLayout = "horizontal" | "vertical" | "wrap";

interface BadgeGroupProps {
  children: ReactNode;
  alignment?: BadgeGroupAlignment;
  layout?: BadgeGroupLayout;
  gap?: string | number;
  className?: string;
  customStyle?: CSSProperties;
  responsive?: boolean;
}

export default function BadgeGroup({
  children,
  alignment = "start",
  layout = "wrap",
  gap = "12px",
  className = "",
  customStyle = {},
  responsive = true,
}: BadgeGroupProps) {
  const alignmentMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    between: "space-between",
    around: "space-around",
  };

  const getFlexDirection = () => {
    if (layout === "vertical") return "column";
    return "row";
  };

  const getFlexWrap = () => {
    if (layout === "wrap") return "wrap";
    return "nowrap";
  };

  const baseStyle: CSSProperties = {
    display: "flex",
    flexDirection: getFlexDirection(),
    flexWrap: getFlexWrap(),
    justifyContent: alignmentMap[alignment],
    alignItems: layout === "vertical" ? alignmentMap[alignment] : "center",
    gap: typeof gap === "number" ? `${gap}px` : gap,
    ...customStyle,
  };

  // 모바일 반응형 스타일
  const responsiveClassName = responsive
    ? "flex-wrap sm:flex-nowrap justify-center sm:justify-start"
    : "";

  return (
    <div className={`${responsiveClassName} ${className}`} style={baseStyle}>
      {children}
    </div>
  );
}
