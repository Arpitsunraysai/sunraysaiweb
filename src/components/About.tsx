"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const label = document.querySelector("#about .parallax-text");
    if (label) {
      gsap.fromTo(
        label,
        { x: "100%" },
        {
          x: "-100%",
          scrollTrigger: {
            trigger: label,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" className="py-32 bg-slate-50 relative overflow-hidden">
      <span className="vol-label parallax-text text-slate-200">EST. 2014</span>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
        <div className="lg:col-span-8">
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-12 leading-[0.95] text-slate-900">
            We Engineer <br /> Digital{" "}
            <span className="text-indigo-600 block mt-2">Resilience.</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl">
            Operating since 2014, Sunrays AI architectures resilience into every
            line of code. We are the partner for high-load digital transformations.
          </p>
        </div>
      </div>
    </section>
  );
}
