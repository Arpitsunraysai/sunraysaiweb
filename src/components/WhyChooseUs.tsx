import { Globe, Users, Zap, Shield } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-32 px-6 md:px-12 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <span className="text-indigo-400 font-mono text-[10px] uppercase font-black tracking-[0.5em] mb-4 block">
          — Unfair Advantage
        </span>
        <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-24 text-white">
          Why Choose Us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-7 bg-slate-950/50 backdrop-blur-xl border border-slate-800 p-10 md:p-14 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute -bottom-8 -right-8 text-[120px] font-display font-black text-slate-800/30 group-hover:text-indigo-900/20 transition-colors pointer-events-none">01</span>
            <Globe className="w-12 h-12 text-indigo-400 mb-8 group-hover:scale-110 transition-transform relative z-10" strokeWidth={1} />
            <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">Global Reach</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg relative z-10">
              Based natively in the USA, Singapore, and India, our asynchronous operations guarantee 24/7 round-the-clock development cycles. Your project literally never stops moving.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-950/50 backdrop-blur-xl border border-slate-800 p-10 md:p-14 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute -bottom-8 -right-8 text-[120px] font-display font-black text-slate-800/30 group-hover:text-indigo-900/20 transition-colors pointer-events-none">02</span>
            <Zap className="w-12 h-12 text-indigo-400 mb-8 group-hover:scale-110 transition-transform relative z-10" strokeWidth={1} />
            <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">Radical Speed</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed relative z-10">
              By utilizing our proprietary cloud-native blueprints and rigorous CI/CD automation, we cut standard enterprise development timelines in half.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-950/50 backdrop-blur-xl border border-slate-800 p-10 md:p-14 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute -bottom-8 -right-8 text-[120px] font-display font-black text-slate-800/30 group-hover:text-indigo-900/20 transition-colors pointer-events-none">03</span>
            <Users className="w-12 h-12 text-indigo-400 mb-8 group-hover:scale-110 transition-transform relative z-10" strokeWidth={1} />
            <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">Elite Talent</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed relative z-10">
              No juniors. You exclusively interface with senior architects who have engineered extreme-load data pipelines handling millions of users.
            </p>
          </div>

          <div className="lg:col-span-7 bg-slate-950/50 backdrop-blur-xl border border-slate-800 p-10 md:p-14 rounded-3xl hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="absolute -bottom-8 -right-8 text-[120px] font-display font-black text-slate-800/30 group-hover:text-indigo-900/20 transition-colors pointer-events-none">04</span>
            <Shield className="w-12 h-12 text-indigo-400 mb-8 group-hover:scale-110 transition-transform relative z-10" strokeWidth={1} />
            <h3 className="text-3xl font-display font-bold text-white mb-4 relative z-10">Future-Proofed</h3>
            <p className="text-lg text-slate-400 font-light leading-relaxed max-w-lg relative z-10">
              We encode systems with infinite horizontal elasticity. We guarantee your infrastructure will never capitulate during sudden traffic spikes or viral load events.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
