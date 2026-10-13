"use client";

import { 
  Box, 
  Hexagon, 
  Layers, 
  Grid as GridIcon, 
  Circle, 
  Flame, 
  Diamond, 
  Disc, 
  Square, 
  BadgeHelp 
} from "lucide-react";

export default function Partners() {
  const row1 = [
    { name: "Google", 
      icon: <div className="font-sans font-bold tracking-tighter text-[1.4rem] grayscale group-hover:grayscale-0 transition-all duration-300">
        <span className="text-white group-hover:text-[#4285F4]">G</span>
        <span className="text-white group-hover:text-[#EA4335]">o</span>
        <span className="text-white group-hover:text-[#FBBC05]">o</span>
        <span className="text-white group-hover:text-[#4285F4]">g</span>
        <span className="text-white group-hover:text-[#34A853]">l</span>
        <span className="text-white group-hover:text-[#EA4335]">e</span>
      </div>, 
      textOnly: true 
    },
    { name: "prismic", icon: <Box className="text-white group-hover:text-indigo-400" size={24} strokeWidth={2}/> },
    { name: "netlify", icon: <Hexagon className="text-white group-hover:text-teal-400" size={24} fill="currentColor" /> },
    { name: "Lattice", icon: <Layers className="text-white group-hover:text-orange-400" size={24} /> },
  ];

  const row2 = [
    { name: "attio", icon: <GridIcon className="text-white group-hover:text-indigo-400" size={24} /> },
    { name: "Clearbit", icon: <Circle className="text-white group-hover:text-blue-400" size={20} fill="currentColor" /> },
    { name: "hotjar", icon: <Flame className="text-white group-hover:text-red-400 border border-transparent" size={22} fill="currentColor" stroke="none" /> },
    { name: "draftbit", icon: <Box className="text-white group-hover:text-indigo-500" size={22} fill="currentColor"/> },
  ];

  const row3 = [
    { name: "Gem", icon: <Diamond className="text-white group-hover:text-blue-400" size={20} fill="currentColor" /> },
    { name: "hopin", icon: <Disc className="text-white group-hover:text-blue-500" size={22} /> },
    { name: "outline", icon: <Square className="text-white group-hover:text-gray-300" size={22} strokeWidth={2.5} /> },
    { name: "Help Scout", icon: <BadgeHelp className="text-white group-hover:text-blue-400" size={24} /> },
  ];

  interface PartnerItem {
    name: string;
    icon: React.ReactNode;
    textOnly?: boolean;
  }

  const renderLogo = (item: PartnerItem, idx: number) => (
    <div key={idx} className="flex items-center justify-center gap-3 p-8 group cursor-default border-b border-r border-slate-800/60 hover:bg-slate-900 transition-all duration-300">
       <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(124,58,237,0)] group-hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
         {!item.textOnly && item.icon}
       </div>
       {item.textOnly ? (
          <div className="opacity-60 group-hover:opacity-100 transition-all duration-300">
             {item.icon}
          </div>
       ) : (
          <span className={`font-display font-medium text-slate-400 group-hover:text-white transition-colors text-lg ${item.name.toLowerCase() === item.name ? 'tracking-tight' : 'tracking-normal'}`}>
            {item.name}
          </span>
       )}
    </div>
  );

  return (
    <section className="py-24 bg-slate-950 relative z-10 overflow-hidden border-t border-slate-900">
      
      {/* Background Volumetric Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-indigo-500/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center w-full gap-16 lg:gap-12">
          
          {/* Left Column Text */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center pr-8 text-center lg:text-left">
             <span className="text-indigo-400 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-4 block opacity-80">
                — Strategic Ecosystem
             </span>
            <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-bold font-display text-white leading-tight tracking-tighter mx-auto lg:mx-0">
              Trusted by Top Tier Innovators
            </h2>
            <p className="mt-6 text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
              Our infrastructure reliably powers leading technology platforms and enterprises, enabling them to scale dynamically.
            </p>
          </div>

          {/* Right Column Grid */}
          <div className="w-full lg:w-[65%] grid grid-cols-2 md:grid-cols-4 border-t border-l border-slate-800/60 bg-slate-950/40 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl relative">
             {[...row1, ...row2, ...row3].map((item, idx) => renderLogo(item, idx))}
             {/* Subdued overlay gradient to give glass effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
