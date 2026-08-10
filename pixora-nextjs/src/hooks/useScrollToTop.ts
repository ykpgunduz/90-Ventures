"use client";

import { useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const useScrollToTop = () => {
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    // Instant synchronous scroll reset before browser paint
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    try {
      const { ScrollSmoother } = require("gsap/ScrollSmoother");
      const smoother = ScrollSmoother?.get();
      if (smoother) {
        smoother.scrollTo(0, false); // false = instant jump, no smooth animation
        smoother.scrollTop(0);
      }
    } catch (e) {
      // ignore if GSAP is not initialized
    }
  }, [pathname]);
};

export default useScrollToTop;