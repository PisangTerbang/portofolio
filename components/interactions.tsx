"use client";

import { useEffect } from "react";

export function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cleanups: (() => void)[] = [];

    if (!reduce.matches) {
      const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: "0px 0px -10% 0px" },
      );
      document.documentElement.classList.add("reveal-ready");
      items.forEach((item) => observer.observe(item));
      cleanups.push(() => observer.disconnect());
    }

    if (finePointer.matches && !reduce.matches) {
      let frame = 0;
      let lastEvent: PointerEvent | null = null;
      let tilted: HTMLElement | null = null;

      const resetTilt = (element: HTMLElement | null) => {
        element?.style.setProperty("--rx", "0deg");
        element?.style.setProperty("--ry", "0deg");
      };

      const update = () => {
        frame = 0;
        const event = lastEvent;
        if (!event) return;
        const target = event.target as Element | null;

        const glow = target?.closest<HTMLElement>("[data-spotlight]");
        if (glow) {
          const box = glow.getBoundingClientRect();
          glow.style.setProperty("--mx", `${event.clientX - box.left}px`);
          glow.style.setProperty("--my", `${event.clientY - box.top}px`);
        }

        const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
        if (tilt !== tilted) {
          resetTilt(tilted);
          tilted = tilt;
        }
        if (tilt) {
          const box = tilt.getBoundingClientRect();
          const x = (event.clientX - box.left) / box.width - 0.5;
          const y = (event.clientY - box.top) / box.height - 0.5;
          tilt.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
          tilt.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        }
      };

      const onMove = (event: PointerEvent) => {
        lastEvent = event;
        if (!frame) frame = requestAnimationFrame(update);
      };
      const onLeave = () => {
        resetTilt(tilted);
        tilted = null;
      };

      document.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      cleanups.push(() => {
        cancelAnimationFrame(frame);
        document.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerleave", onLeave);
      });
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
