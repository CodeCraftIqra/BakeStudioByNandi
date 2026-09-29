import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import OrderOnline from "@/components/OrderOnline";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#2C180B] flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <WhyUs />
      <Reviews />
      <OrderOnline />
      <LocationContact />
      <Footer />
    </main>
  );
}
