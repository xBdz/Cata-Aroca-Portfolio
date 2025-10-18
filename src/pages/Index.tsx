import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import TIFSection from "@/components/TIFSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SecretGallery from "@/components/SecretGallery";
import ClueHuntIndicator from "@/components/ClueHuntIndicator";

const Index = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Portfolio />
        <TIFSection />
        <About />
        <Contact />
      </main>
      <Footer />
      
      <ClueHuntIndicator onShowGallery={() => setShowGallery(true)} />
      
      {showGallery && <SecretGallery onClose={() => setShowGallery(false)} />}
    </div>
  );
};

export default Index;
