import Cursor from "@/components/Cursor";
import HoverReveal from "@/components/HoverReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
// Temporarily hidden: Cases (Sunrays Medical, Solenyx, etc.)
// import Cases from "@/components/Cases";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import CustomersCarousel from "@/components/CustomersCarousel";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
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
      <Hero />
      <CustomersCarousel />
      <Industries />
      <Services />
      {/* Temporarily hidden: Cases / clients (Sunrays Medical, Solenyx Life Science, etc.) */}
      {/* <Cases /> */}
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <About />
      <Footer />
    </>
  );
}
