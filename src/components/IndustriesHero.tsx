"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Sparkle } from "lucide-react";

export default function IndustriesHero() {
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !titleRef.current) return;

    const q = gsap.utils.selector(titleRef);
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("#hero-line-industries", { scaleX: 0, duration: 1 });
    tl.from(
      q(".char"),
      {
        duration: 1.4,
        opacity: 0,
        rotationX: (i: number) => (i % 3 === 0 ? 180 : 0),
        rotationY: (i: number) => (i % 3 === 1 ? 180 : 0),
        y: (i: number) => (i % 2 === 0 ? 80 : -80),
        scale: (i: number) => (i % 4 === 0 ? 0 : 1),
        stagger: { each: 0.03, from: "random" },
        ease: "back.out(2)",
      },
      "-=0.6"
    );
    tl.to(
      q(".i-star"),
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        duration: 1,
        stagger: 0.1,
        ease: "elastic.out(1, 0.5)",
      },
      "-=0.8"
    );
    tl.to(
      "#hero-desc-industries",
      { opacity: 1, y: 0, duration: 1 },
      "-=1.1"
    );

    return () => {
        tl.kill();
    };
  }, [mounted]);

  const renderWord = (word: string) => {
    let starCount = 0;
    return word.split("").map((char, i) => {
      if (char === "i" && starCount < 2) {
        starCount++;
        return (
          <span key={i} className="char i-special relative inline-block">
            <span className="i-stem">ı</span>
            <Sparkle className="i-star absolute -top-[0.2em] -right-[0.1em] text-indigo-500 w-[0.4em] h-[0.4em] opacity-0 scale-0" />
          </span>
        );
      }
      return (
        <span key={i} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      );
    });
  };

  return (
    <header className="relative min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden bg-white">
      <div className="noise-overlay opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-4 mb-8 overflow-hidden">
          <span className="h-px w-10 bg-indigo-600 origin-left" id="hero-line-industries"></span>
          <div className="overflow-hidden">
            <span
              className="text-xs font-mono uppercase tracking-[0.5em] text-indigo-600 block"
            >
              Market Presence
            </span>
          </div>
        </div>

        <h1
          className="hero-title font-display font-extrabold uppercase tracking-tight text-slate-900"
          ref={titleRef}
        >
          <div className="overflow-hidden mb-2">
            <span className="word inline-block">{renderWord("Global")}</span>
          </div>
          <div className="overflow-hidden mb-2">
            <span className="word text-hollow inline-block">{renderWord("Industries")}</span>
          </div>
          <div className="flex flex-wrap gap-x-[0.3em]">
            <span className="word inline-block">{renderWord("We")}</span>
            <span className="word font-cursive italic lowercase text-indigo-600 font-light inline-block">
              {renderWord("Transform")}
            </span>
            <span className="text-indigo-600 word inline-block">{renderWord(".")}</span>
          </div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 mt-16 gap-12">
          <div className="md:col-span-5">
            <p
              className="text-xl text-slate-500 font-light leading-relaxed opacity-0"
              id="hero-desc-industries"
            >
              Deep domain expertise crossing borders. We build 
              <span className="text-indigo-600 font-medium italic font-cursive mx-1">architectural</span> 
              legacy software for global market leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient match to other pages */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50/30 to-transparent pointer-events-none -z-1"></div>
    </header>
  );
}
