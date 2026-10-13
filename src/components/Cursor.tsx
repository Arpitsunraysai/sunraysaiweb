"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    let mouseX = 0,
      mouseY = 0,
      cursorX = 0,
      cursorY = 0;
      
    let animationFrameId: number;
    let gravityElements: HTMLElement[] = [];

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    const animateCursor = () => {
      let targetX = mouseX,
        targetY = mouseY;
      
      gravityElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - mouseX;
        const dy = centerY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 180) {
          const pull = Math.pow(1 - dist / 180, 2.5) * 1.1;
          targetX += dx * pull;
          targetY += dy * pull;
          gsap.set(el, { x: -dx * 0.03, y: -dy * 0.03 });
        } else {
          gsap.set(el, { x: 0, y: 0 });
        }
      });
      
      cursorX += (targetX - cursorX) * 0.18;
      cursorY += (targetY - cursorY) * 0.18;
      
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      
      animationFrameId = requestAnimationFrame(animateCursor);
    };
    
    animateCursor();

    const addCursorLarge = () => cursor.classList.add("cursor-large");
    const removeCursorLarge = () => cursor.classList.remove("cursor-large");
    const addCursorText = () => cursor.classList.add("cursor-text");
    const removeCursorText = () => cursor.classList.remove("cursor-text");

    const setupListeners = () => {
      gravityElements = Array.from(document.querySelectorAll(".gravity-btn")) as HTMLElement[];
      
      document.querySelectorAll("a, button, .industry-card, .case-row").forEach((el) => {
        el.addEventListener("mouseenter", addCursorLarge);
        el.addEventListener("mouseleave", removeCursorLarge);
      });
      document.querySelectorAll("h1, h2").forEach((el) => {
        el.addEventListener("mouseenter", addCursorText);
        el.addEventListener("mouseleave", removeCursorText);
      });
    };

    // Need a tiny delay for React to render children initially
    setTimeout(setupListeners, 100);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      document.querySelectorAll("a, button, .industry-card, .case-row").forEach((el) => {
        el.removeEventListener("mouseenter", addCursorLarge);
        el.removeEventListener("mouseleave", removeCursorLarge);
      });
      document.querySelectorAll("h1, h2").forEach((el) => {
        el.removeEventListener("mouseenter", addCursorText);
        el.removeEventListener("mouseleave", removeCursorText);
      });
    };
  }, []);

  return <div id="cursor"></div>;
}
