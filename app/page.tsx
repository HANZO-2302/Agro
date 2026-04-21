import About from "@/components/ui/About";
import Advantages from "@/components/ui/Advantages";
import FAQSection from "@/components/ui/FAQSection";
import Footer from "@/components/ui/Footer";
import Form from "@/components/ui/Form";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import NewsSection from "@/components/ui/NewsSection";
import Services from "@/components/ui/Services";
import Slider from "@/components/ui/Slider";
// import SmoothProvider from "@/components/ui/SmoothProvider";

export default function Home() {
  return (
    // {/* <SmoothProvider> */}
    <div className=" flex flex-col min-h-screen max-w-7xl overflow-hidden bg-[#F5F4EC] mx-auto shadow-2xl/90">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="advantages">
        <Advantages />
      </section>
      <section id="slider">
        <Slider />
      </section>
      <section id="form">
        <Form />
      </section>
      <section id="news">
        <NewsSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
    // {/* </SmoothProvider> */}
  );
}
