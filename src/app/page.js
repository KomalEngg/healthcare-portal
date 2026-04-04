import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <> 
    <Navbar />
  <HeroSection />
  <ExploreSection />
  <ProductSection />
 <Contact/>
  <Footer/>
  </>
  );
}