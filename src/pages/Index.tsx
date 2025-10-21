import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import FashionFilms from "@/components/FashionFilms";
import SecretHuntSection from "@/components/SecretHuntSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SecretGallery from "@/components/SecretGallery";
import ClueHuntIndicator from "@/components/ClueHuntIndicator";
import SectionDivider from "@/components/SectionDivider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import SplashScreen from "@/components/SplashScreen";
// import LanguageToggle from "@/components/LanguageToggle"; // Descomentar para activar i18n

const Index = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <SplashScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
      <ScrollProgress />
      {/* <LanguageToggle /> */} {/* Descomentar para activar i18n */}
      <Navigation />
      <main>
        <Hero />
        <SectionDivider variant="line" />
        <Portfolio />
        <SectionDivider variant="symbol" />
        <FashionFilms />
        <SectionDivider variant="line" />
        <SecretHuntSection />
        <SectionDivider />
        <About />
        <SectionDivider variant="line" />
        <Contact />
      </main>
      <Footer />
      
      <ClueHuntIndicator onShowGallery={() => setShowGallery(true)} />
      <ScrollToTop />
      
      {showGallery && <SecretGallery onClose={() => setShowGallery(false)} />}
      </div>
    </>
  );
};

export default Index;
