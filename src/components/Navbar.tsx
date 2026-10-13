"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
        <div className="w-full max-w-7xl glass-nav rounded-full px-6 py-4 flex items-center justify-between shadow-sm pointer-events-auto transition-all duration-300">
          <div className="flex items-center gap-10 pl-4">
            <Link href="/" onClick={closeMenu} className="cursor-none flex items-center -my-32 -ml-14 shrink-0">
              <img
                src="/sunraysai.png"
                alt="Sunrays AI"
                className="h-44 md:h-60 w-auto object-contain -translate-y-[2px]"
              />
            </Link>
            <div className="hidden lg:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-black text-slate-500">
              <Link href="/services" className="hover:text-indigo-600 transition-colors cursor-none">Services</Link>
              <Link href="/solutions" className="hover:text-indigo-600 transition-colors cursor-none">Solutions</Link>
              <Link href="/industries" className="hover:text-indigo-600 transition-colors cursor-none">Industries</Link>
              {/* Temporarily hidden with Cases section */}
              {/* <Link href="/#cases" className="hover:text-indigo-600 transition-colors cursor-none">Portfolio</Link> */}
              <Link href="/#about" className="hover:text-indigo-600 transition-colors cursor-none">About</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/book-consultation"
              onClick={closeMenu}
              className="hidden md:block gravity-btn bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full transition-all"
            >
              Book Consultation
            </Link>
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-3 rounded-full bg-slate-100 text-slate-900 hover:bg-indigo-600 hover:text-white transition-all duration-300 z-50 pointer-events-auto"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 ease-expo ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden flex flex-col pt-32 px-12 pb-12`}
      >
        <div className="flex flex-col gap-8 text-4xl font-display font-bold uppercase tracking-tighter">
          <Link href="/services" onClick={closeMenu} className="hover:text-indigo-600 transition-colors">Services</Link>
          <Link href="/solutions" onClick={closeMenu} className="hover:text-indigo-600 transition-colors">Solutions</Link>
          <Link href="/industries" onClick={closeMenu} className="hover:text-indigo-600 transition-colors">Industries</Link>
          {/* Temporarily hidden with Cases section */}
          {/* <Link href="/#cases" onClick={closeMenu} className="hover:text-indigo-600 transition-colors">Portfolio</Link> */}
          <Link href="/#about" onClick={closeMenu} className="hover:text-indigo-600 transition-colors">About</Link>
        </div>

        <div className="mt-auto flex flex-col gap-8 pt-12 border-t border-slate-100">
          <Link
            href="/book-consultation"
            onClick={closeMenu}
            className="w-full py-6 bg-slate-950 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-600 transition-all text-center"
          >
            Book Consultation
          </Link>
          
          <div className="flex flex-col gap-2 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            <span>© 2026 SUNRAYS AI</span>
            <span>AI & Software Engineering</span>
          </div>
        </div>
      </div>
    </>
  );
}
