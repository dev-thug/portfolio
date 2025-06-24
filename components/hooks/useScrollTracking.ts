"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth } from "../GoogleAnalytics";

const useScrollTracking = () => {
  const scrollDepthRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track scroll milestones: 25%, 50%, 75%, 90%
      const milestones = [25, 50, 75, 90];

      milestones.forEach((milestone) => {
        if (
          scrollPercent >= milestone &&
          !scrollDepthRef.current.has(milestone)
        ) {
          scrollDepthRef.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);
};

export default useScrollTracking;
