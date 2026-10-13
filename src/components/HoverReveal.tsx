"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function HoverReveal() {
  const [src, setSrc] = useState("");

  const urls = [
    "https://sunraysmedical.com",
    "https://danskpharma.in",
    "https://solenyxlifescience.com",
    "https://sunimaging.in"
  ];

  useEffect(() => {
    const reveal = document.getElementById("hover-reveal");
    if (!reveal) return;

    const xTo = gsap.quickTo(reveal, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(reveal, "y", { duration: 0.6, ease: "power3" });

    const onMouseEnter = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const urlTarget = el.getAttribute("data-url");
      if (urlTarget) setSrc(urlTarget);
      
      reveal.style.opacity = "1";
      reveal.style.transform = "translate(-50%, -50%) scale(1)";
    };

    const onMouseMove = (e: Event) => {
      const ev = e as MouseEvent;
      xTo(ev.clientX + 220);
      yTo(ev.clientY);
    };

    const onMouseLeave = () => {
      reveal.style.opacity = "0";
      reveal.style.transform = "translate(-50%, -50%) scale(0.9)";
    };

    const setupListeners = () => {
      const rows = document.querySelectorAll(".case-row");
      rows.forEach((row) => {
        row.addEventListener("mouseenter", onMouseEnter);
        row.addEventListener("mousemove", onMouseMove);
        row.addEventListener("mouseleave", onMouseLeave);
      });
    };

    setTimeout(setupListeners, 100);

    return () => {
      const rows = document.querySelectorAll(".case-row");
      rows.forEach((row) => {
        row.removeEventListener("mouseenter", onMouseEnter);
        row.removeEventListener("mousemove", onMouseMove);
        row.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div id="hover-reveal" className="reveal-box shadow-2xl overflow-hidden bg-white">
      {urls.map((url) => (
        <iframe 
          key={url}
          src={url} 
          className={`absolute top-0 left-0 w-[300%] h-[300%] origin-top-left scale-[0.333] border-none pointer-events-none transition-opacity duration-300 ${src === url ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
          title={`Live Preview ${url}`}
          loading="lazy"
        />
      ))}
    </div>
  );
}
