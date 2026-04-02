import About from "@/components/ui/About";
import Advantages from "@/components/ui/Advantages";
import Form from "@/components/ui/Form";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Services from "@/components/ui/Services";
import Slider from "@/components/ui/Slider";


export default function Home() {
  return (
  <main className=" flex flex-col min-h-screen max-w-7xl overflow-hidden bg-[#F5F4EC] mx-auto shadow-2xl/90">
    <Header /> 
    <Hero />
    <Services />
    <About />
    <Advantages />
    <Slider />
    <Form />
  </main>
  );
}
