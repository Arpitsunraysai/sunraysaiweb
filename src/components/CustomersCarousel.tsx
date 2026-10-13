const LOGOS = [
  { name: "TechNova", type: "text", style: "font-display font-medium text-2xl tracking-tight" },
  { name: "Canwinn", url: "/bnwlogos/canwinn.png", type: "image" },
  { name: "Acme Corp", type: "text", style: "font-serif font-black italic text-2xl" },
  { name: "CKS", url: "/bnwlogos/cks.png", type: "image" },
  { name: "Global IO", type: "text", style: "font-sans font-black text-2xl uppercase tracking-tighter" },
  { name: "Dansk Pharma", url: "/bnwlogos/danskpharma.png", type: "image" },
  { name: "Synergy", type: "text", style: "font-mono font-bold text-2xl" },
  { name: "Pinkstar", url: "/bnwlogos/pinkstar.png", type: "image" },
  { name: "QUANTUM", type: "text", style: "font-display font-normal text-2xl tracking-widest" },
  { name: "Sun Imaging", url: "/bnwlogos/sunimaging.png", type: "image" },
  { name: "Vortex Systems", type: "text", style: "font-display font-bold text-2xl" },
  { name: "Sunrays", url: "/bnwlogos/sunrays.png", type: "image" }
];

export default function CustomersCarousel() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-8 relative overflow-hidden">
      <div className="w-full flex overflow-hidden mask-gradient opacity-60 hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center grayscale brightness-0 opacity-50 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300">
              {logo.type === "image" ? (
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-8 md:h-10 w-auto object-contain max-w-[140px]" 
                />
              ) : (
                <span className={`${logo.style} text-slate-500`}>
                  {logo.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
