"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    author: "Dr. Ravi Kapoor",
    title: "CITY IMAGING SERVICES",
    quote: "Sunrays AI fundamentally re-architected how we handle extreme imaging payloads. Their predictive maintenance AI has reduced our downtime to near zero.",
    image: "https://res.cloudinary.com/daxgernib/image/upload/v1728904047/Sunrays%20Web/oda91evqttm0ug4y63nk.jpg",
  },
  {
    author: "Dr. Anju Unnikrishnan",
    title: "Sree Narayana Institute of Medical Sciences",
    quote: "From initial ERP wireframing to fully containerized multi-tenant deployment, the Sunrays AI team shipped months ahead of schedule.",
    image: "https://res.cloudinary.com/daxgernib/image/upload/v1728904047/Sunrays%20Web/zajngscrltcodmdp68cu.jpg",
  },
  {
    author: "Dr Prakash Chandwani",
    title: "CKS Hospital",
    quote: "The custom medical imaging pipeline delivered by Sunrays AI is a masterpiece of software engineering. Radical speed and precision from day one.",
    image: "https://res.cloudinary.com/daxgernib/image/upload/v1728904047/Sunrays%20Web/sz1cjv7owitu7emlvwpf.webp",
  },
  {
    author: "Dr. Rajnish Pandey",
    title: "ARADHYA HOSPITAL",
    quote: "Partnering with Sunrays AI allowed us to scale our diagnostic throughput by 300% through their distributed GPU processing architecture.",
    image: "https://res.cloudinary.com/daxgernib/image/upload/v1728904048/Sunrays%20Web/aptfh7yaus7vs5nlxt9u.jpg",
  },
  {
    author: "Dr. Rahul Saini",
    title: "SRK Hospital",
    quote: "The transition to a cloud-native imaging ecosystem was seamless thanks to Sunrays AI. Their deep tech expertise is unparalleled in the field.",
    image: "https://res.cloudinary.com/daxgernib/image/upload/v1728904052/Sunrays%20Web/q0bqbkatxmgdt5jeo68m.jpg",
  }
];

// Replicate extensively to enable virtually infinite native scroll
const CLONED_TESTIMONIALS = Array(15).fill(TESTIMONIALS).flat();

const LOGOS = [
  { name: "Canwinn", url: "/bnwlogos/canwinn.png", type: "image" },
  { name: "CKS", url: "/bnwlogos/cks.png", type: "image" },
  { name: "TechNova", type: "text", style: "font-display font-medium text-2xl tracking-tight" },
  
  { name: "Dansk Pharma", url: "/bnwlogos/danskpharma.png", type: "image" },
  { name: "Pinkstar", url: "/bnwlogos/pinkstar.png", type: "image" },
  { name: "Acme Corp", type: "text", style: "font-serif font-black italic text-2xl" },
  
  { name: "Sun Imaging", url: "/bnwlogos/sunimaging.png", type: "image" },
  { name: "Sunrays", url: "/bnwlogos/sunrays.png", type: "image" },
  { name: "Global IO", type: "text", style: "font-sans font-black text-2xl uppercase tracking-tighter" },
  
  { 
    name: "DR. G. VISWANATHAN", 
    url: "https://res.cloudinary.com/daxgernib/image/upload/v1728970437/Sunrays%20Web/n2ej06ma2lqb1whoqplh.png",
    type: "image"
  },
  { 
    name: "MEDALL", 
    url: "https://res.cloudinary.com/daxgernib/image/upload/v1728970436/Sunrays%20Web/u8gkwgol6db02p13jjud.png",
    type: "image"
  },
  { name: "Synergy", type: "text", style: "font-mono font-bold text-2xl" },
  
  { 
    name: "Must & More", 
    url: "https://res.cloudinary.com/daxgernib/image/upload/v1728970436/Sunrays%20Web/aghnpiuekaw1ar8bgccy.png",
    type: "image"
  },
  { 
    name: "Dr. B. Lal", 
    url: "https://res.cloudinary.com/daxgernib/image/upload/v1728970436/Sunrays%20Web/en9dtwt7kutmhbe7cdrf.webp",
    type: "image"
  },
  { name: "QUANTUM", type: "text", style: "font-display font-normal text-2xl tracking-widest" },
  
  { 
    name: "CITY IMAGING", 
    url: "https://res.cloudinary.com/daxgernib/image/upload/v1728984958/Sunrays%20Web/l9efygyk2zdkeljpicon.png",
    type: "image"
  },
  { 
    name: "SNIMS", 
    url: "https://res.cloudinary.com/daxgernib/image/upload/v1728984959/Sunrays%20Web/nejuomyvo08mnxr6bxru.png",
    type: "image"
  },
  { name: "Vortex Systems", type: "text", style: "font-display font-bold text-2xl" }
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current && trackRef.current.children.length > 0) {
         const cardWidth = trackRef.current.children[0].clientWidth;
         
         // If nearing the end of cloned items, snap back instantly to start
         if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth - trackRef.current.clientWidth - 500) {
           trackRef.current.scrollTo({ left: 0, behavior: 'instant' });
         } else {
           trackRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
         }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    if (trackRef.current) {
      if (trackRef.current.scrollLeft <= 0) {
        // approximate jump to middle
        trackRef.current.scrollTo({ left: trackRef.current.scrollWidth / 2, behavior: 'instant' });
      }
      const cardWidth = trackRef.current.children[0].clientWidth;
      trackRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const next = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0].clientWidth;
      trackRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="bg-[#f3f4f6] rounded-[3rem] p-8 md:p-12 relative overflow-hidden flex flex-col">
          
          <div className="flex flex-col lg:flex-row w-full mb-8 lg:mb-12 gap-8 lg:gap-12">
            
            {/* Left Column Text Layer */}
            <div className="w-full lg:w-[35%] flex flex-col z-20 shrink-0">
              <span className="text-gray-400 font-sans font-bold text-xs tracking-widest uppercase mb-4 block">
                CLIENTS
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold font-sans text-gray-900 leading-[1.1] tracking-tight mb-8">
                What people say<br className="hidden lg:block"/>about us?
              </h2>
              
              <div className="flex items-center gap-3 mt-auto hidden lg:flex pb-2">
                <button 
                  onClick={prev} 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={next} 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column (Carousel Block) - The exact clipping bounds */}
            <div className="flex-1 w-full overflow-hidden relative z-10 lg:-mr-12">
              <div 
                ref={trackRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-6 pt-2 pl-1 pr-12"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {CLONED_TESTIMONIALS.map((t, idx) => (
                  <div 
                    key={idx} 
                    className="w-[85%] md:w-[70%] lg:w-[450px] shrink-0 snap-start bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gray-200 rounded-full overflow-hidden shrink-0">
                        <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg leading-tight">{t.author}</h4>
                        <p className="text-gray-500 text-sm mt-1">{t.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-900 text-[1.05rem] leading-relaxed pb-2">
                      {t.quote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-3 mt-4 lg:hidden">
                <button 
                  onClick={prev} 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={next} 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
            </div>

          </div>

          {/* Marquee area */}
          <div 
            className="w-full relative pt-10 mt-auto overflow-hidden opacity-60 z-10 border-t border-gray-200/50"
            style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            <div className="flex items-center gap-24 animate-marquee whitespace-nowrap w-max">
              {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                 <div key={i} className="flex items-center grayscale brightness-0 opacity-40 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300">
                   {logo.type === "image" ? (
                     <img 
                       src={logo.url} 
                       alt={logo.name} 
                       className="h-9 md:h-11 w-auto object-contain max-w-[150px]" 
                     />
                   ) : (
                     <span className={`${logo.style} text-gray-500`}>
                       {logo.name}
                     </span>
                   )}
                 </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
