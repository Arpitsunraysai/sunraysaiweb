import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | Sunrays AI",
  description:
    "Book a free consultation with Sunrays AI. Tell us about your project and a senior lead will get back to you within 24 hours.",
};

export default function BookConsultationPage() {
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
      <main className="pt-28">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
