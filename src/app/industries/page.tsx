import Navbar from "@/components/Navbar";
import IndustriesHero from "@/components/IndustriesHero";
import IndustriesGrid from "@/components/IndustriesGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | Sunrays AI",
  description: "Transforming global market leaders across Retail, IT, Automotive, and Finance.",
};

import HoverReveal from "@/components/HoverReveal";

export default function IndustriesPage() {
  return (
    <>
      <Cursor />
      <HoverReveal />
      
      <div className="grid-guide max-w-7xl mx-auto hidden md:grid grid-cols-4 px-6 md:px-12">
        <div className="grid-col"></div>
        <div className="grid-col"></div>
        <div className="grid-col"></div>
        <div></div>
      </div>

      <Navbar />
      <IndustriesHero />
      <IndustriesGrid />
      <ContactForm />
      <Footer />
    </>
  );
}
