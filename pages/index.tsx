import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howitworks";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center bg-white w-screen overflow-x-hidden`} >
      <Header/>
      <Hero/>
      <HowItWorks/>
      <Features/>
      <Testimonials/>
      <Footer/>
    </main>
  );
}
