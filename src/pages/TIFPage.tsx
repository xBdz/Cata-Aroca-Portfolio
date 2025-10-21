import { useState } from "react";
import Navigation from "@/components/Navigation";
import TIFSection from "@/components/TIFSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import SecretGallery from "@/components/SecretGallery";
import ClueHuntIndicator from "@/components/ClueHuntIndicator";

const TIFPage = () => {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      <main className="pt-24">
        <TIFSection />
      </main>
      <Footer />
      
      <ClueHuntIndicator onShowGallery={() => setShowGallery(true)} />
      <ScrollToTop />
      
      {showGallery && <SecretGallery onClose={() => setShowGallery(false)} />}
    </div>
  );
};

export default TIFPage;
