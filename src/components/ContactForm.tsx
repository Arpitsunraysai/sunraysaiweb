"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "default",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.service === "default") {
      setErrorMessage("Please select a service");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        const fullMessage = data.details ? `${data.error}: ${data.details}` : (data.error || "Something went wrong");
        throw new Error(fullMessage);
      }

      setStatus("success");
      setFormData({ name: "", email: "", service: "default", message: "" });
    } catch (err: unknown) {
      console.error("Submission Error:", err);
      const message = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setErrorMessage(message);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (status === "success") {
    return (
      <section className="py-32 border-t border-slate-100 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center animate-in fade-in zoom-in duration-500">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-600 rounded-full mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-display font-bold uppercase tracking-tight mb-4">Consultation Requested</h3>
          <p className="text-slate-400 max-w-sm mx-auto">
            Thank you. A senior lead will review your details and get in touch within 24 hours.
          </p>
          <button 
            onClick={() => setStatus("idle")}
            className="mt-12 text-sm font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 border-t border-slate-100 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 relative z-10">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8 leading-[0.85]">
            Book a <br />
            <span className="text-indigo-600">Consultation.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Share a bit about your project. A senior lead will reach out within 24 hours to schedule a call.
          </p>
        </div>

        <div className="lg:col-span-7 bg-slate-50 p-12 lg:p-20 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all hover:shadow-md">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-12" onSubmit={handleSubmit}>
            <div className="col-span-1">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1 md:col-span-2 relative">
              <select 
                name="service"
                className="form-input text-slate-400 appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20stroke%3D%22%236366f1%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5rem_1.5rem] bg-[right_1.5rem_center] bg-no-repeat pr-12 cursor-pointer hover:border-indigo-200 transition-colors" 
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option disabled value="default">What do you need help with?</option>
                <option value="ecommerce">E-commerce</option>
                <option value="ai">AI Integration & Agents</option>
                <option value="web">Website / Web App Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="mvp">MVP / Startup Product Build</option>
                <option value="enterprise">Custom Enterprise Software</option>
                <option value="design">UI/UX & Digital Product Design</option>
                <option value="team">Dedicated Development Teams</option>
                <option value="cto">CTO as a Service & Consulting</option>
                <option value="cloud">Cloud & DevOps Infrastructure</option>
                <option value="data">Data Engineering & Analytics</option>
                <option value="finance">Finance & Fintech Solutions</option>
                <option value="healthcare">Healthcare & Life Sciences Tech</option>
                <option value="audit">Software Audit & Optimization</option>
                <option value="support">Maintenance & Ongoing Support</option>
                <option value="other">Other (Describe below)</option>
              </select>
            </div>
            <div className="col-span-1 md:col-span-2">
              <textarea 
                name="message"
                placeholder="Tell us about your project or goals" 
                rows={4} 
                className="form-input"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {status === "error" && (
              <div className="col-span-1 md:col-span-2 text-red-500 text-sm font-medium">
                {errorMessage}
              </div>
            )}

            <div className="col-span-1 md:col-span-2 pt-8 flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`gravity-btn bg-indigo-600 text-white font-black uppercase tracking-widest px-16 py-6 rounded-full shadow-2xl hover:shadow-indigo-200 transition-all cursor-none ${status === "loading" ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === "loading" ? "Sending..." : "Book Consultation"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
