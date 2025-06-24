"use client";

import { useEffect } from "react";
import useScrollTracking from "./hooks/useScrollTracking";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({
  children,
}: AnalyticsProviderProps) {
  // Enable scroll tracking
  useScrollTracking();

  useEffect(() => {
    // Track initial page load
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return <>{children}</>;
}
