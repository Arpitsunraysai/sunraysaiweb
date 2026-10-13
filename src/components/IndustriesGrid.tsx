"use client";
import React from "react";
import Link from "next/link";
import { 
  ShoppingCart, Monitor, Truck, Factory, 
  Coins, Activity, Box, Building2, 
  Zap, GraduationCap, Globe
} from "lucide-react";
import { industryHref } from "@/lib/content/slugs";

const industries = [
  {
    title: "Retail & E-commerce",
    description: "Transforming customer journeys with AI-driven personalization and high-performance checkout systems.",
    icon: <ShoppingCart className="w-8 h-8" />,
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "IT & Telecom",
    description: "Next-gen network management and cloud-native architectures for the world's largest carriers.",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-indigo-500/20 to-purple-500/20"
  },
  {
    title: "Automotive",
    description: "Engineering digital twins and embedded systems for the future of autonomous mobility.",
    icon: <Truck className="w-8 h-8" />,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Manufacturing",
    description: "Industrial IoT solutions and predictive maintenance systems for smart factories.",
    icon: <Factory className="w-8 h-8" />,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    title: "Finance & Banking",
    description: "Secure, scalable fintech ecosystems and blockchain-enabled transaction protocols.",
    icon: <Coins className="w-8 h-8" />,
    color: "from-amber-500/20 to-orange-500/20"
  },
  {
    title: "Healthcare",
    description: "HIPAA-compliant platforms and medical imaging analysis driven by advanced machine learning.",
    icon: <Activity className="w-8 h-8" />,
    color: "from-rose-500/20 to-pink-500/20"
  },
  {
    title: "Logistics",
    description: "Real-time supply chain visibility and automated warehouse orchestration systems.",
    icon: <Box className="w-8 h-8" />,
    color: "from-cyan-500/20 to-blue-500/20"
  },
  {
    title: "Real Estate",
    description: "Proptech solutions for property management and immersive VR-driven real estate marketing.",
    icon: <Building2 className="w-8 h-8" />,
    color: "from-slate-500/20 to-zinc-500/20"
  },
  {
    title: "Energy & Utilities",
    description: "Smart grid management and renewable energy monitoring systems for a sustainable future.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Education",
    description: "Scalable E-learning platforms and adaptive learning systems for global institutions.",
    icon: <GraduationCap className="w-8 h-8" />,
    color: "from-indigo-500/20 to-sky-500/20"
  },
  {
    title: "Public Sector",
    description: "Digital government initiatives and citizen-centric platforms with military-grade security.",
    icon: <Globe className="w-8 h-8" />,
    color: "from-blue-500/20 to-slate-500/20"
  }
];

export default function IndustriesGrid() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link 
              key={industry.title}
              href={industryHref(industry.title)}
              className="industry-card group relative p-8 rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden cursor-none no-underline text-inherit block h-auto min-h-[280px]"
            >
              <div className="scan-line absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                <div className="text-indigo-600">
                  {industry.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-indigo-600 transition-colors uppercase italic font-playfair lowercase">
                {industry.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed font-light">
                {industry.description}
              </p>

              <div className="absolute top-0 right-0 w-12 h-12 bg-indigo-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
