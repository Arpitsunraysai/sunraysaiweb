import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { DetailContent } from "@/lib/content/types";
import ContactForm from "@/components/ContactForm";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface DetailPageProps {
  data: DetailContent;
  backHref: string;
  backLabel: string;
  eyebrow?: string;
}

export default function DetailPage({ data, backHref, backLabel, eyebrow }: DetailPageProps) {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className="pt-32 min-h-screen bg-white relative">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors mb-16 group cursor-none"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {backLabel}
          </Link>

          <span className="text-indigo-600 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-4 block">
            {eyebrow || data.category}
            {data.vertical ? ` — ${data.vertical}` : ""}
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-slate-900">
            {data.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mb-16">
            {data.tagline}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-200 py-12 mb-20 bg-slate-50 px-6 md:px-10 rounded-2xl ring-1 ring-slate-100">
            {data.metrics.map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="block text-indigo-600 font-display text-3xl md:text-4xl font-black mb-2 tracking-tighter">
                  {m.value}
                </span>
                <span className="block text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <section className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-slate-900">
              Overview
            </h2>
            <div className="space-y-6">
              {data.overview.map((p, i) => (
                <p key={i} className="text-lg text-slate-500 font-light leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-20">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-slate-900">
              What We Deliver
            </h2>
            <ul className="space-y-4">
              {data.capabilities.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span className="mt-1 shrink-0 w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-lg text-slate-600 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-slate-900">
                Our Approach
              </h2>
              <ol className="space-y-6">
                {data.approach.map((step, i) => (
                  <li key={step} className="flex gap-5">
                    <span className="font-mono text-indigo-600 text-sm font-black tracking-widest shrink-0 pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-950 text-white rounded-[2rem] p-8 md:p-10 h-full">
                <h3 className="font-display text-2xl font-bold uppercase tracking-tighter mb-6">
                  Technology Stack
                </h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                  Representative technologies we deploy for {data.title.toLowerCase()} engagements—selected for reliability at enterprise scale.
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-slate-900">
              Why Leaders Choose Sunrays AI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <p className="text-slate-600 font-light leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-16 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border-t border-slate-100 pt-12">
            <p className="text-slate-400 font-light max-w-md">
              Ready to explore how {data.title} can move your roadmap forward?
            </p>
            <Link
              href="/book-consultation"
              className="gravity-btn inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-full transition-all"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
