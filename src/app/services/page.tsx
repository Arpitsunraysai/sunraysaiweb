import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesCapabilities from "@/components/ServicesCapabilities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sunrays AI",
  description: "AI integration, custom software, and strategic engineering for ambitious teams.",
};

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      
      <div className="grid-guide max-w-7xl mx-auto hidden md:grid grid-cols-4 px-6 md:px-12">
        <div className="grid-col"></div>
        <div className="grid-col"></div>
        <div className="grid-col"></div>
        <div></div>
      </div>

      <Navbar />
      <ServicesHero />
      <ServicesCapabilities />
      <ContactForm />
      <Footer />
    </>
  );
}
