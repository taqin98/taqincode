"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [canUseCustomCursor, setCanUseCustomCursor] = useState(false);

  useEffect(() => {
    const isHoverable = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanUseCustomCursor(isHoverable);
  }, []);

  useEffect(() => {
    if (!canUseCustomCursor) return;

    const cur = document.getElementById("cur");
    const curRing = document.getElementById("curRing");
    if (!cur || !curRing) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let requestRef: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animCursor = () => {
      cur.style.left = mx - 5 + "px";
      cur.style.top = my - 5 + "px";
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      curRing.style.left = rx - 18 + "px";
      curRing.style.top = ry - 18 + "px";
      requestRef = requestAnimationFrame(animCursor);
    };

    document.addEventListener("mousemove", onMouseMove);
    requestRef = requestAnimationFrame(animCursor);

    const onMouseEnter = () => {
      cur.classList.add("hover");
      curRing.classList.add("hover");
    };

    const onMouseLeave = () => {
      cur.classList.remove("hover");
      curRing.classList.remove("hover");
    };

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, .skill-card, .proj-card, .svc-card").forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    // Use a mutation observer or interval if elements are dynamic,
    // or just call it after a short delay for static elements.
    const observer = new MutationObserver((mutations) => {
      addHoverListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef);
      observer.disconnect();
      // To be completely clean, we should remove event listeners from individual elements,
      // but since they are attached directly, observer handles new ones.
    };
  }, [canUseCustomCursor]);

  if (!canUseCustomCursor) return null;

  return (
    <>
      <div className="cursor" id="cur"></div>
      <div className="cursor-ring" id="curRing"></div>
    </>
  );
}
