"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceHref } from "@/lib/content/slugs";

const purposeServices = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "AI Integration",
    desc: "Implementing LLMs and neural automation to enhance product intelligence.",
    accent: "from-indigo-500/20 to-purple-500/10",
    glow: "group-hover:shadow-indigo-500/20",
    iconColor: "text-indigo-400",
    borderHover: "group-hover:border-indigo-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z" />
      </svg>
    ),
    title: "AI Agent Dev",
    desc: "Building autonomous agents to automate complex multi-step workflows.",
    accent: "from-violet-500/20 to-indigo-500/10",
    glow: "group-hover:shadow-violet-500/20",
    iconColor: "text-violet-400",
    borderHover: "group-hover:border-violet-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "ChatGPT Apps",
    desc: "Developing custom GPT-powered software for customer-facing interfaces.",
    accent: "from-emerald-500/20 to-teal-500/10",
    glow: "group-hover:shadow-emerald-500/20",
    iconColor: "text-emerald-400",
    borderHover: "group-hover:border-emerald-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "CTO as a Service",
    desc: "Strategic technical leadership for startups and digital transformations.",
    accent: "from-amber-500/20 to-orange-500/10",
    glow: "group-hover:shadow-amber-500/20",
    iconColor: "text-amber-400",
    borderHover: "group-hover:border-amber-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.744 3.744 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Software Audit",
    desc: "Comprehensive technical assessment and code review for legacy code.",
    accent: "from-rose-500/20 to-pink-500/10",
    glow: "group-hover:shadow-rose-500/20",
    iconColor: "text-rose-400",
    borderHover: "group-hover:border-rose-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: "Architecture",
    desc: "System design for high-concurrency scale and modular resilience.",
    accent: "from-sky-500/20 to-blue-500/10",
    glow: "group-hover:shadow-sky-500/20",
    iconColor: "text-sky-400",
    borderHover: "group-hover:border-sky-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.7 7.5A2.25 2.25 0 0 0 18.75 6h-1.5a2.25 2.25 0 0 0-2.25 2.25v.375c0 .621-.504 1.125-1.125 1.125h-3.75C9.504 9.75 9 9.246 9 8.625V8.25A2.25 2.25 0 0 0 6.75 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V8.25a2.25 2.25 0 0 0-.3-1.146M11.25 10.5h1.5M11.25 13.5h1.5" />
      </svg>
    ),
    title: "Enterprise Dev",
    desc: "Custom ERP, CRM, and management tools for industry giants.",
    accent: "from-purple-500/20 to-fuchsia-500/10",
    glow: "group-hover:shadow-purple-500/20",
    iconColor: "text-purple-400",
    borderHover: "group-hover:border-purple-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    title: "Dedicated Team",
    desc: "Full-time experts integrated directly into your existing dev flow.",
    accent: "from-teal-500/20 to-cyan-500/10",
    glow: "group-hover:shadow-teal-500/20",
    iconColor: "text-teal-400",
    borderHover: "group-hover:border-teal-500/50",
  },
];

const worktypeServices = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Business Analysis",
    desc: "Detailed requirement gathering and system documentation.",
    accent: "from-amber-500/20 to-orange-500/10",
    glow: "group-hover:shadow-amber-500/20",
    iconColor: "text-amber-400",
    borderHover: "group-hover:border-amber-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "User-centric design systems and pixel-perfect interface development.",
    accent: "from-pink-500/20 to-rose-500/10",
    glow: "group-hover:shadow-pink-500/20",
    iconColor: "text-pink-400",
    borderHover: "group-hover:border-pink-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: "Back-End Dev",
    desc: "High-performance server-side logic and database architecture.",
    accent: "from-indigo-500/20 to-blue-500/10",
    glow: "group-hover:shadow-indigo-500/20",
    iconColor: "text-indigo-400",
    borderHover: "group-hover:border-indigo-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: "Front-End Dev",
    desc: "Interactive web interfaces using modern frameworks like React and Next.js.",
    accent: "from-cyan-500/20 to-sky-500/10",
    glow: "group-hover:shadow-cyan-500/20",
    iconColor: "text-cyan-400",
    borderHover: "group-hover:border-cyan-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
      </svg>
    ),
    title: "QA & Testing",
    desc: "Manual and automated testing ensuring error-free product cycles.",
    accent: "from-emerald-500/20 to-green-500/10",
    glow: "group-hover:shadow-emerald-500/20",
    iconColor: "text-emerald-400",
    borderHover: "group-hover:border-emerald-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
    title: "DevOps",
    desc: "CI/CD pipelines, cloud infrastructure, and security compliance.",
    accent: "from-orange-500/20 to-red-500/10",
    glow: "group-hover:shadow-orange-500/20",
    iconColor: "text-orange-400",
    borderHover: "group-hover:border-orange-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.309 48.309 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Web Design",
    desc: "Visual brand development and landing pages optimized for marketing.",
    accent: "from-violet-500/20 to-purple-500/10",
    glow: "group-hover:shadow-violet-500/20",
    iconColor: "text-violet-400",
    borderHover: "group-hover:border-violet-500/50",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 1 1.652-1.306A9.025 9.025 0 0 1 10.59 1.72M7.288 4.33l4.138 3.448" />
      </svg>
    ),
    title: "Support",
    desc: "Ongoing technical maintenance and rapid product updates.",
    accent: "from-teal-500/20 to-emerald-500/10",
    glow: "group-hover:shadow-teal-500/20",
    iconColor: "text-teal-400",
    borderHover: "group-hover:border-teal-500/50",
  },
];

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  accent: string;
  glow: string;
  iconColor: string;
  borderHover: string;
}

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  return (
    <Link
      href={serviceHref(service.title)}
      className={`group relative rounded-2xl border border-white/8 bg-white/[0.03] backdrop-blur-sm p-6 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${service.glow} hover:bg-white/[0.06] ${service.borderHover} overflow-hidden cursor-none no-underline text-inherit`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Gradient glow background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

      {/* Top-right corner accent dot */}
      <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${service.iconColor} opacity-30 group-hover:opacity-80 transition-opacity duration-300`} style={{ background: 'currentColor' }} />

      {/* Icon */}
      <div className={`relative z-10 flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-white/8 ${service.iconColor} transition-colors duration-300`}>
        {service.icon}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-2">
        <h4 className="text-sm font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
          {service.desc}
        </p>
      </div>

      {/* Bottom line accent */}
      <div className={`absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.accent.replace('/20', '/60').replace('/10', '/30')}`} />
    </Link>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"purpose" | "worktype">("purpose");
  const services = activeTab === "purpose" ? purposeServices : worktypeServices;

  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle radial background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-indigo-600/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-16">
          Services We Provide
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-12 border-b border-white/10 mb-16 pb-4 overflow-x-auto no-scrollbar">
          <button
            className={`tab-btn text-xs font-black uppercase tracking-widest relative py-2 ${
              activeTab === "purpose" ? "active" : "text-slate-600 hover:text-white"
            }`}
            onClick={() => setActiveTab("purpose")}
          >
            By Purpose
          </button>
          <button
            className={`tab-btn text-xs font-black uppercase tracking-widest relative py-2 ${
              activeTab === "worktype" ? "active" : "text-slate-600 hover:text-white"
            }`}
            onClick={() => setActiveTab("worktype")}
          >
            By Work Type
          </button>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
