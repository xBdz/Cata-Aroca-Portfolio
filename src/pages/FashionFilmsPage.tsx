import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FashionFilms from "@/components/FashionFilms";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import ClueHuntIndicator from "@/components/ClueHuntIndicator";
import SecretGallery from "@/components/SecretGallery";
import { useClueHunt } from "@/hooks/useClueHunt";
import { useState } from "react";

const FashionFilmsPage = () => {
  const { isGalleryUnlocked } = useClueHunt();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-20">
        <FashionFilms />
      </main>

      <Footer />
      <ScrollToTop />
      
      {isGalleryUnlocked && (
        <ClueHuntIndicator onShowGallery={() => setIsGalleryOpen(true)} />
      )}
      
      {isGalleryOpen && (
        <SecretGallery onClose={() => setIsGalleryOpen(false)} />
      )}
    </div>
  );
};

export default FashionFilmsPage;
