import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 px-6 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="font-display text-[10vw] font-black uppercase mb-10 tracking-tighter">
          Ready?
        </h2>
        <Link
          href="/book-consultation"
          className="gravity-btn inline-block bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-indigo-600 hover:text-white transition-all shadow-2xl"
        >
          Book Consultation
        </Link>
        <div className="mt-24 flex justify-between pt-12 border-t border-white/10 text-[9px] font-mono tracking-[0.5em] text-slate-700 uppercase gap-8">
          <span>© 2014-2026 Sunrays AI</span>
          <span>BASED IN USA / SINGAPORE / INDIA</span>
        </div>
      </div>
    </footer>
  );
}
