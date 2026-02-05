import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SampleMenus from "@/components/SampleMenus";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ServiceAreas from "@/components/ServiceAreas";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SampleMenus />
        <WhyChooseUs />
        <Testimonials />
        <ServiceAreas />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
