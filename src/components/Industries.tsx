"use client";

import Link from "next/link";
import { ShoppingBag, Network, Zap, Factory, Landmark, Building2, Palmtree, PlayCircle } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { industryHref } from "@/lib/content/slugs";

const domains = [
  {
    title: "Retail & E-com",
    description: "B2C platforms, loyalty systems, and specialized CRM ecosystems for global retail leaders.",
    icon: ShoppingBag,
  },
  {
    title: "IT & Telecom",
    description: "Large-scale internal platforms and strategic leadership for infrastructure providers.",
    icon: Network,
  },
  {
    title: "Automotive",
    description: "Dealer management networks and high-precision tracking for manufacturers.",
    icon: Zap,
  },
  {
    title: "Manufacturing",
    description: "Resilient systems for supply chain transparency and industrial automation control.",
    icon: Factory,
  },
  {
    title: "Finance",
    description: "Fintech platforms, secure banking, and high-frequency trading architectures.",
    icon: Landmark,
  },
  {
    title: "Real Estate",
    description: "Proptech solutions and global property management ecosystems for global developers.",
    icon: Building2,
  },
  {
    title: "Travel",
    description: "Online booking engines and guest experience platforms for hospitality leaders.",
    icon: Palmtree,
  },
  {
    title: "Media",
    description: "High-load CMS systems and data-driven ad-tech ecosystems for publishers.",
    icon: PlayCircle,
  },
];

export default function Industries() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const label = document.querySelector("#industries .parallax-text");
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
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      <span className="vol-label parallax-text">VOL. 01</span>
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <span className="text-indigo-600 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-3 block">
          — Specialization
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter">
          Core <span className="italic font-cursive lowercase text-slate-300">Domains</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="industry-grid">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <Link
                key={domain.title}
                href={industryHref(domain.title)}
                className="industry-card shadow-sm cursor-none no-underline text-inherit block"
              >
                <div className="scan-line"></div>
                <div className="mb-6">
                  <div className="p-2 bg-indigo-50 inline-block rounded-md">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
                <div className="min-h-[50px]">
                  <h3 className="text-xl font-bold uppercase tracking-tight">{domain.title}</h3>
                </div>
                <p className="text-slate-500 font-light leading-relaxed text-sm mt-2">
                  {domain.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
