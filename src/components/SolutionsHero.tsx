"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Sparkle } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";

export default function SolutionsHero() {
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !titleRef.current) return;

    const q = gsap.utils.selector(titleRef);
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("#hero-line-solutions", { scaleX: 0, duration: 1 });

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
        ease: "back.out(2.5)",
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

    tl.to("#hero-desc-solutions", { opacity: 1, y: 0, duration: 1 }, "-=1.1");

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
      <div className="noise-overlay"></div>
      {mounted && <ParticleCanvas />}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-4 mb-8 overflow-hidden">
          <span
            className="h-px w-10 bg-indigo-600 origin-left"
            id="hero-line-solutions"
          ></span>
          <div className="overflow-hidden">
            <span
              id="rotate-txt"
              className="text-xs font-mono uppercase tracking-[0.5em] text-indigo-600 block"
            >
              Industry Solutions
            </span>
          </div>
        </div>

        <h1
          className="hero-title font-display font-extrabold uppercase tracking-tight"
          ref={titleRef}
        >
          <div className="overflow-hidden mb-2">
            <span className="word inline-block">{renderWord("Vertical")}</span>
          </div>
          <div className="overflow-hidden mb-2">
            <span className="word text-hollow inline-block">{renderWord("Architectural")}</span>
          </div>
          <div className="flex flex-wrap gap-x-[0.3em]">
            <span className="word inline-block">{renderWord("Industry")}</span>
            <span className="word font-cursive italic lowercase text-indigo-600 font-light inline-block">
              {renderWord("Solutions")}
            </span>
            <span className="text-indigo-600 word inline-block">{renderWord(".")}</span>
          </div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-12">
          <div className="md:col-span-6">
            <p
              className="text-xl text-slate-500 font-light leading-relaxed opacity-0 translate-y-4"
              id="hero-desc-solutions"
            >
              Tailored software ecosystems designed for <span className="text-indigo-600 font-medium">specific industries</span>, 
              balancing <span className="text-indigo-600 font-medium">domain complexity</span> and <span className="text-indigo-600 font-medium">operational excellence</span>.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
