"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  BrainCircuit, MessageSquare, Bot, Cable, Search, RefreshCcw, 
  Rocket, Package, ShieldCheck, Globe, Layers, ClipboardCheck, 
  Gauge, Users, Layout, Database, Map as MapIcon, BarChart, 
  Headphones, Frame, CheckCircle, Terminal, TrendingUp, 
  LayoutTemplate, GitMerge, Code, Cloud 
} from "lucide-react";
import { serviceHref } from "@/lib/content/slugs";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const purposeServices: ServiceItem[] = [
  { icon: <BrainCircuit className="w-8 h-8 text-indigo-600 mb-6" />, title: "AI Integration", description: "Implementing LLMs and neural automation to enhance legacy systems." },
  { icon: <MessageSquare className="w-8 h-8 text-indigo-600 mb-6" />, title: "ChatGPT Apps", description: "Custom GPT-powered software development for client-facing interfaces." },
  { icon: <Bot className="w-8 h-8 text-indigo-600 mb-6" />, title: "AI Agent Dev", description: "Building autonomous agents to automate complex enterprise workflows." },
  { icon: <Cable className="w-8 h-8 text-indigo-600 mb-6" />, title: "API Integration", description: "Seamlessly connecting third-party services with high-availability middleware." },
  { icon: <Search className="w-8 h-8 text-indigo-600 mb-6" />, title: "Product Discovery", description: "Requirement analysis and prototype validation before full-scale engineering." },
  { icon: <RefreshCcw className="w-8 h-8 text-indigo-600 mb-6" />, title: "Re-Engineering", description: "Refactoring legacy codebases for modern performance and maintainability." },
  { icon: <Rocket className="w-8 h-8 text-indigo-600 mb-6" />, title: "App Modernization", description: "Migrating on-premise systems to cloud-native, scalable microservices." },
  { icon: <Package className="w-8 h-8 text-indigo-600 mb-6" />, title: "Software Product Dev", description: "End-to-end development of new digital products for ventures." },
  { icon: <ShieldCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "CTO as a Service", description: "Strategic technical oversight for founders requiring architectural leadership." },
  { icon: <Globe className="w-8 h-8 text-indigo-600 mb-6" />, title: "Offshore Dev", description: "High-quality development centers managed by senior local architects." },
  { icon: <Layers className="w-8 h-8 text-indigo-600 mb-6" />, title: "Enterprise Software", description: "Heavy-duty management platforms and specialized ERP solutions." },
  { icon: <ClipboardCheck className="w-8 h-8 text-indigo-600 mb-6" />, title: "Software Audit", description: "Technical due diligence and vulnerability assessment of existing systems." },
  { icon: <Gauge className="w-8 h-8 text-indigo-600 mb-6" />, title: "High-Load Systems", description: "Architecting for millions of requests with zero-latency requirements." },
  { icon: <Users className="w-8 h-8 text-indigo-600 mb-6" />, title: "Dedicated Team", description: "Senior engineers integrated as a seamless extension of your workforce." },
  { icon: <Layout className="w-8 h-8 text-indigo-600 mb-6" />, title: "Software Architecture", description: "Structural blueprinting focusing on modularity, security, and growth." },
  { icon: <Database className="w-8 h-8 text-indigo-600 mb-6" />, title: "Data Migration", description: "Safe orchestration of mission-critical data between ecosystems." },
  { icon: <MapIcon className="w-8 h-8 text-indigo-600 mb-6" />, title: "Mapping Solutions", description: "Advanced GIS and visualization tools for logistics and urban planning." },
];

const worktypeServices: ServiceItem[] = [
  { icon: <BarChart className="w-8 h-8 text-indigo-600 mb-6" />, title: "Business Analysis", description: "Bridging the gap between business objectives and technical roadmaps." },
  { icon: <Headphones className="w-8 h-8 text-indigo-600 mb-6" />, title: "Tech Support", description: "Ongoing maintenance and rapid resolution for production systems." },
  { icon: <Frame className="w-8 h-8 text-indigo-600 mb-6" />, title: "UI/UX Design", description: "Swiss modernist aesthetic focused on clarity and premium interaction." },
  { icon: <CheckCircle className="w-8 h-8 text-indigo-600 mb-6" />, title: "QA & Testing", description: "Automated testing suites ensuring zero-failure deployment cycles." },
  { icon: <Terminal className="w-8 h-8 text-indigo-600 mb-6" />, title: "Back-End Dev", description: "High-performance server logic using Node.js and TypeScript." },
  { icon: <TrendingUp className="w-8 h-8 text-indigo-600 mb-6" />, title: "Digital Transformation", description: "Strategic consulting for companies evolving into the digital future." },
  { icon: <LayoutTemplate className="w-8 h-8 text-indigo-600 mb-6" />, title: "Web Design", description: "Architecting responsive, high-load front-ends for global audiences." },
  { icon: <GitMerge className="w-8 h-8 text-indigo-600 mb-6" />, title: "DevOps", description: "CI/CD automation, cloud orchestration, and structural resilience." },
  { icon: <Code className="w-8 h-8 text-indigo-600 mb-6" />, title: "Front-End Dev", description: "Interactive experiences built with React and Next.js." },
  { icon: <Cloud className="w-8 h-8 text-indigo-600 mb-6" />, title: "Clouds", description: "Management of AWS, Azure, and Google Cloud infrastructures." },
];

function ServiceCard({ item }: { item: ServiceItem }) {
  return (
    <Link href={serviceHref(item.title)} className="service-card cursor-none no-underline text-inherit block">
      <div className="scan-line"></div>
      {item.icon}
      <h4 className="text-lg font-bold uppercase mb-4">{item.title}</h4>
      <p className="text-slate-500 text-sm mt-auto">{item.description}</p>
    </Link>
  );
}

export default function ServicesCapabilities() {
  const [activeTab, setActiveTab] = useState<"purpose" | "worktype">("purpose");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const label = document.querySelector("#services-capabilities .parallax-text");
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

  const services = activeTab === "purpose" ? purposeServices : worktypeServices;

  return (
    <section id="services-capabilities" className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
      <span className="vol-label parallax-text">SOLUTIONS</span>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24">
          <span className="text-indigo-600 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-3 block">
            — Portfolio of Expertise
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter">
            Our <span className="italic font-cursive lowercase text-slate-300">Capabilities</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 border-b border-slate-100 mb-16 pb-4 overflow-x-auto no-scrollbar">
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "purpose" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("purpose")}
          >
            By Strategic Purpose
          </button>
          <button
            className={`tab-btn text-[11px] font-black uppercase tracking-widest relative py-3 whitespace-nowrap ${
              activeTab === "worktype" ? "active" : "text-slate-400 hover:text-indigo-600"
            }`}
            onClick={() => setActiveTab("worktype")}
          >
            By Operational Flow
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <ServiceCard key={`${activeTab}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
