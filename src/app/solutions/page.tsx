import Navbar from "@/components/Navbar";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsCapabilities from "@/components/SolutionsCapabilities";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Sunrays AI",
  description: "Bespoke software ecosystems for global industries and innovative brands.",
};

export default function SolutionsPage() {
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
      <SolutionsHero />
      <SolutionsCapabilities />
      <ContactForm />
      <Footer />
    </>
  );
}
