"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [canUseCustomCursor, setCanUseCustomCursor] = useState(false);

  useEffect(() => {
    // Only enable on devices that have a fine pointer (e.g. mouse, not touch)
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanUseCustomCursor(isHoverable);
  }, []);

  useEffect(() => {
    if (!canUseCustomCursor) return;

    const cur = document.getElementById("cur");
    const curRing = document.getElementById("curRing");
    if (!cur || !curRing) return;

    // Apply class to body to hide default cursor ONLY when this component is active
    document.body.classList.add("custom-cursor-active");

    let mx = 0, my = 0, rx = 0, ry = 0;
    let isHover = false;
    let scaleDot = 1;
    let scaleRing = 1;
    let requestRef: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animCursor = () => {
      // Smooth interpolation for ring position
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;

      // Smooth interpolation for scale (replaces CSS transitions)
      const targetScaleDot = isHover ? 0 : 1;
      const targetScaleRing = isHover ? 1.55 : 1;
      scaleDot += (targetScaleDot - scaleDot) * 0.2;
      scaleRing += (targetScaleRing - scaleRing) * 0.2;

      // GPU Accelerated Transforms (No reflows/repaints = Zero lag)
      cur.style.transform = `translate3d(${mx - 5}px, ${my - 5}px, 0) scale(${scaleDot})`;
      curRing.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0) scale(${scaleRing})`;
      
      requestRef = requestAnimationFrame(animCursor);
    };

    // Event delegation for highly optimized hover detection
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .skill-card, .proj-card, .svc-card")) {
        isHover = true;
      } else {
        isHover = false;
      }
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    
    // Initial position fix to prevent flying in from top-left
    setTimeout(() => {
      rx = mx;
      ry = my;
    }, 50);

    requestRef = requestAnimationFrame(animCursor);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(requestRef);
    };
  }, [canUseCustomCursor]);

  if (!canUseCustomCursor) return null;

  return (
    <>
      <div className="cursor" id="cur" style={{ top: 0, left: 0 }}></div>
      <div className="cursor-ring" id="curRing" style={{ top: 0, left: 0 }}></div>
    </>
  );
}
