import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = caseData[resolvedParams.slug];
  return {
    title: data ? `${data.title} | Sunrays AI` : "Case Study | Sunrays AI",
    description: data?.subtitle || "Architectural software case study.",
  };
}

import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const generateStaticParams = () => {
  return [
    { slug: "sunrays-image" },
    { slug: "dansk-pharma" },
    { slug: "solenyx" },
    { slug: "sun-imaging" },
  ];
};

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  url: string;
  year: string;
  services: string[];
  image: string;
  metrics: Metric[];
  content: React.ReactNode;
}

const caseData: Record<string, CaseStudy> = {
  "sunrays-image": {
    title: "Sunrays Image Technology",
    subtitle: "Medical Imaging ERP & High-Load Architecture",
    url: "https://sunraysmedical.com",
    year: "2024",
    services: ["Web Design", "ERP Development", "Data Migration"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    metrics: [
      { label: "Uptime SLA", value: "99.999%" },
      { label: "Daily Scans", value: "2M+" },
      { label: "Latency", value: "<15ms" },
      { label: "Facilities", value: "500+" }
    ],
    content: (
      <>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">The Challenge</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          <a href="https://sunraysmedical.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-200">Sunrays Image Technology</a> required a robust, highly resilient diagnostic network ERP to manage millions of medical images generated daily. The legacy systems were brittle and unable to handle the high-throughput synchronization required by tier-1 hospitals. 
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">Our Approach</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          We architected a decentralized cloud-native medical imaging ERP built on a highly-available <strong>Kubernetes</strong> cluster. The backend leverages <strong>Node.js</strong> microservices with <strong>Redis</strong> for ultra-fast caching of intensive diagnostic queries. This bespoke, infinitely scalable database infrastructure guarantees zero-latency image retrieval.
        </p>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          Concurrently, we built a sleek, ultra-fast modern web application using <strong>Next.js</strong> and <strong>React</strong> for their customer-facing portal. We designed a clean, intuitive UI that doctors could use without friction, radically transforming traditional clinical software standards.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">The Outcome</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          A seamless, compliant (HIPAA/GDPR), and blazing-fast data platform that transformed how hospitals interacted with their diagnostic networks. Over 500+ diagnostic facilities now sync their imaging data securely, empowered by a world-class UI that reduced onboarding time by 80%.
        </p>
      </>
    )
  },
  "dansk-pharma": {
    title: "Dansk Pharmaceuticals",
    subtitle: "Global Healthcare Portal",
    url: "https://danskpharma.in",
    year: "2023",
    services: ["Web Design", "B2B Portal Development", "Supply Chain Architecture"],
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=2000",
    metrics: [
      { label: "Distributors", value: "10,000+" },
      { label: "Orders/Day", value: "50k" },
      { label: "Compliance", value: "100%" },
      { label: "API Speed", value: "45ms" }
    ],
    content: (
      <>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">The Vision</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          <a href="https://danskpharma.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-200">Dansk Pharmaceuticals</a> approached us to digitally transform their vast B2B operations. They needed a portal capable of handling high-volume pharmaceutical supply chain tracking while maintaining a pristine, premium corporate identity on the web.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">Implementation</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          We built an integrated web solution that combined a modern, responsive web design using <strong>Next.js</strong> with a heavy-duty backend ERP logic powered by <strong>NestJS</strong> and <strong>PostgreSQL</strong>. The system tracks pharmaceutical batches, automates rigorous regulatory compliance reporting, and provides distributors with an intuitive, visually stunning dashboard. Our implementation utilizes <strong>Docker</strong> containers orchestration to ensure 99.999% uptime globally.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">The Result</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          Distributor onboarding time was reduced by 70%. The new portal successfully processes thousands of daily logistical endpoints and stands as a best-in-class example of pharmaceutical enterprise web design and robust software architecture.
        </p>
      </>
    )
  },
  "solenyx": {
    title: "Solenyx Life Science",
    subtitle: "Biotech ERP & Research Lifecycle Management",
    url: "https://solenyxlifescience.com",
    year: "2024",
    services: ["ERP Development", "UI/UX Design", "Custom Workflows"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
    metrics: [
      { label: "Data Pipelines", value: "120+" },
      { label: "PBs Stored", value: "4.5 PB" },
      { label: "Redundancy", value: "Active" },
      { label: "Uptime", value: "100%" }
    ],
    content: (
      <>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">Context</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          For <a href="https://solenyxlifescience.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-200">Solenyx Life Science</a>, the priority was accelerating biotech research pipelines through software. Their existing monolithic software was slowing down critical R&D operations and the interface was heavily outdated.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">The Architecture</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          We designed a bespoke Biotech ERP with a micro-frontend architecture using <strong>React</strong> and <strong>Tailwind CSS</strong>, mapping 1:1 with their internal laboratory and business administration workflows. The backend relies on a highly scalable <strong>GraphQL</strong> API orchestrated via <strong>AWS Fargate</strong>. Paired with a stunning, Swiss-modernist web design overhaul, the interface made complex data orchestration feel incredibly fluid and accessible.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">Value Delivered</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          Total digitization of their research lifecycle. The Solenyx ERP now orchestrates their operations with zero downtime, ensuring data integrity across global biotech hubs while serving as a powerful visual testament to their modern brand approach.
        </p>
      </>
    )
  },
  "sun-imaging": {
    title: "Sun Imaging",
    subtitle: "High-Load Diagnostic Network Architecture",
    url: "https://sunimaging.in",
    year: "2022",
    services: ["High-Load Systems", "Brand Web Design", "API Support"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000",
    metrics: [
      { label: "Endpoints", value: "1,200" },
      { label: "Load Growth", value: "10x" },
      { label: "Sync Latency", value: "10ms" },
      { label: "Reliability", value: "99.9%" }
    ],
    content: (
      <>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">The Challenge</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          <a href="https://sunimaging.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4 decoration-indigo-200">Sun Imaging&apos;s</a> rapid expansion meant their aging software architecture could not sustain the sudden influx of decentralized diagnostic appointments and real-time medical data uploads. Their corporate website also required a fresh, trust-building web design.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">Our Engineering</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          We implemented a microservices-based API middleware built in <strong>Go</strong> and <strong>Node.js</strong> to handle appointment orchestration and load-balancing diagnostic routing via <strong>NGINX</strong>. Concurrently, we completely revamped their public-facing web design using <strong>Next.js</strong> edge-rendering, ensuring patients and clinics encountered an elegant, fast, and trustworthy interface optimized for all devices.
        </p>
        <h3 className="font-display text-4xl font-bold uppercase tracking-tighter mb-6 mt-16 text-slate-800">Performance</h3>
        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
          Sun Imaging&apos;s network now handles 10x the previous traffic load without sweating. The seamless integration of their custom ERP routing and striking web design positioned them as the uncontested industry leader in their region.
        </p>
      </>
    )
  }
};

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = caseData[resolvedParams.slug];
  
  if (!data) return notFound();

  return (
    <>
      <Cursor />
      <Navbar />
      <div className="pt-32 min-h-screen bg-bg-light relative">
        <div className="max-w-4xl mx-auto px-6 py-20 pb-32 relative z-10">
          <Link href="/#cases" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-24 group pointer-events-auto cursor-none">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          
          <span className="text-indigo-600 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-4 block">
            {data.year} — {data.services.join(" / ")}
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-slate-900">
            {data.title}
          </h1>
          <a href={data.url} target="_blank" rel="noopener noreferrer" className="inline-block text-xl md:text-3xl text-slate-400 hover:text-indigo-600 font-light transition-colors mb-24 border-b border-transparent hover:border-indigo-600 cursor-none">
            {data.subtitle} ↗
          </a>
          
          {data.image && (
             <div className="w-full h-[40vh] md:h-[65vh] relative mb-24 overflow-hidden rounded-xl shadow-2xl">
                <img src={data.image} alt={data.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
             </div>
          )}

          {data.metrics && (
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-200 py-16 mb-24 relative bg-slate-50 p-8 rounded-xl ring-1 ring-slate-100">
                {data.metrics.map((m, i: number) => (
                   <div key={i} className="flex flex-col">
                      <span className="block text-indigo-600 font-display text-4xl md:text-5xl font-black mb-2 tracking-tighter">{m.value}</span>
                      <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest">{m.label}</span>
                   </div>
                ))}
             </div>
          )}

          <div className="border-t border-slate-200 mt-12 pt-24 prose prose-lg prose-indigo w-full max-w-full">
             {data.content}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
