export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end mb-24 gap-6">
          <h2 className="font-display text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Cases<span className="text-indigo-600">.</span>
          </h2>
          <p className="text-xs font-mono uppercase tracking-[0.5em] text-slate-400 mb-2">
            Projects we are proud of
          </p>
        </div>
        <div className="border-t border-slate-200">
          {[
            { id: "01", title: "Sunrays Image Technology", subtitle: "Medical Imaging ERP", slug: "sunrays-image", url: "https://sunraysmedical.com" },
            { id: "02", title: "Dansk Pharmaceuticals", subtitle: "Healthcare Portal", slug: "dansk-pharma", url: "https://danskpharma.in" },
            { id: "03", title: "Solenyx Life Science", subtitle: "Biotech ERP", slug: "solenyx", url: "https://solenyxlifescience.com" },
            { id: "04", title: "Sun Imaging", subtitle: "Diagnostic Network", slug: "sun-imaging", url: "https://sunimaging.in" }
          ].map((c) => (
            <a href={`/cases/${c.slug}`} key={c.id} className="block relative">
              <div
                className="case-row group py-12 border-b border-slate-200 flex flex-col md:flex-row items-center justify-between hover:pl-12 transition-all duration-700 cursor-none"
                data-url={c.url}
              >
                <div className="flex items-center gap-16 relative z-20">
                  <span className="text-xs font-mono text-slate-300">{c.id}</span>
                  <h3 className="font-display text-4xl md:text-6xl font-bold uppercase group-hover:text-indigo-600 transition-colors">
                    {c.title}
                  </h3>
                </div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-4 md:mt-0">
                  {c.subtitle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
