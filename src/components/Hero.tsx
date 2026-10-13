"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Sparkle } from "lucide-react";
import { MeshGradient } from "@paper-design/shaders-react";
import Link from "next/link";

export default function Hero() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
    tl.from("#hero-line", { scaleX: 0, duration: 1 });
    tl.from(
      ".char",
      {
        duration: 1.4,
        opacity: 0,
        rotationX: (i) => (i % 3 === 0 ? 180 : 0),
        rotationY: (i) => (i % 3 === 1 ? 180 : 0),
        y: (i) => (i % 2 === 0 ? 80 : -80),
        scale: (i) => (i % 4 === 0 ? 0 : 1),
        stagger: { each: 0.03, from: "random" },
        ease: "back.out(2)",
      },
      "-=0.6"
    );

    tl.to(
      ".i-star",
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
      "#hero-desc, #hero-cta-area",
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
      "-=1.1"
    );

    // DESCRIPTOR ROTATION
    const descriptors = ["Engineering Excellence", "AI-Driven Systems", "Fortune 500 Trusted"];
    let count = 0;
    const rotateInterval = setInterval(() => {
      count = (count + 1) % descriptors.length;
      const el = document.getElementById("rotate-txt");
      if (el) {
        gsap.to(el, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            el.innerText = descriptors[count];
            gsap.fromTo(
              el,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.4 }
            );
          },
        });
      }
    }, 3500);

    return () => {
      clearInterval(rotateInterval);
      tl.kill();
    };
  }, [mounted]);

  const splitText = (text: string, isSpecial = false) => {
    let starCount = 0;
    return text.split('').map((char, i) => {
      if (char === 'i' && isSpecial && starCount < 2) {
        starCount++;
        return (
          <span key={i} className="char i-special">
            <span className="i-stem">ı</span>
            <Sparkle className="i-star text-indigo-500 w-4 h-4 inline-block align-middle" />
          </span>
        );
      }
      return (
        <span key={i} className="char">
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-white">
      <div className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"]}
              distortion={0.8}
              swirl={0.6}
              grainMixer={0}
              grainOverlay={0}
              speed={0.42}
              offsetX={0.08}
            />
            <div className={`absolute inset-0 pointer-events-none bg-white/20 dark:bg-black/25`} />
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex items-center gap-4 mb-8 overflow-hidden">
          <span className="h-px w-10 bg-indigo-600 origin-left" id="hero-line"></span>
          <div className="overflow-hidden">
            <span
              id="rotate-txt"
              className="text-xs font-mono uppercase tracking-[0.5em] text-indigo-600 block"
            >
              Engineering Excellence
            </span>
          </div>
        </div>

        <h1
          className="hero-title font-display font-extrabold uppercase tracking-tight"
          ref={titleRef}
        >
          <div className="overflow-hidden mb-2">
            <span className="word">{splitText("Smart")}</span>
          </div>
          <div className="overflow-hidden mb-2">
            <span className="word text-hollow">{splitText("Engineering")}</span>
          </div>
          <div>
            <span className="word">{splitText("For")}</span> <span className="word">{splitText("an")}</span>{" "}
            <span className="word font-cursive italic lowercase text-indigo-600 font-light">
              {splitText("AI-driven", true)}
            </span>{" "}
            <span className="word">{splitText("World")}</span>
            <span className="text-indigo-600 word">{splitText(".")}</span>
          </div>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 mt-16 gap-12">
          <div className="md:col-span-5">
            <p
              className="text-xl text-slate-500 font-light leading-relaxed opacity-0"
              id="hero-desc"
            >
              Architecture-first development for global brands. We integrate{" "}
              <span className="text-indigo-600 font-medium">senior experts</span> to
              build resilient digital legacies.
            </p>
            <div
              className="mt-12 flex items-center gap-8 opacity-0"
              id="hero-cta-area"
            >
              <Link
                href="/book-consultation"
                className="gravity-btn bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-widest px-10 py-4 rounded-full transition-shadow"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
