import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ServicesSection from "./components/services-section";
import PartnersSection from "./components/partners-section";
import HeroSection from "./components/hero-section";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <Footer />
    </>
  );
}

