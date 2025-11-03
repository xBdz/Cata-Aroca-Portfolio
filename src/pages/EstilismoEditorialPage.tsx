import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ImageGallery from "@/components/ImageGallery";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import SecretGallery from "@/components/SecretGallery";
import ClueHuntIndicator from "@/components/ClueHuntIndicator";
import { useClueHunt } from "@/hooks/useClueHunt";
import { motion } from "framer-motion";

// Importar imágenes de Estilismo
import est56 from "@/assets/Estilismo/56.png";
import est57 from "@/assets/Estilismo/57.png";
import est58 from "@/assets/Estilismo/58.png";
import est59 from "@/assets/Estilismo/59.png";
import est60 from "@/assets/Estilismo/60.png";
import est61 from "@/assets/Estilismo/61.png";
import est62 from "@/assets/Estilismo/62.png";
import est63 from "@/assets/Estilismo/63.png";
import est64 from "@/assets/Estilismo/64.png";
import est65 from "@/assets/Estilismo/65.png";

const images = [
  { src: est56, alt: "Estilismo Editorial 1" },
  { src: est57, alt: "Estilismo Editorial 2" },
  { src: est58, alt: "Estilismo Editorial 3" },
  { src: est59, alt: "Estilismo Editorial 4" },
  { src: est60, alt: "Estilismo Editorial 5" },
  { src: est61, alt: "Estilismo Editorial 6" },
  { src: est62, alt: "Estilismo Editorial 7" },
  { src: est63, alt: "Estilismo Editorial 8" },
  { src: est64, alt: "Estilismo Editorial 9" },
  { src: est65, alt: "Estilismo Editorial 10" },
];

const EstilismoEditorialPage = () => {
  const { isGalleryUnlocked } = useClueHunt();
  const [showGallery, setShowGallery] = useState(false);
  const [isImageGalleryOpen, setIsImageGalleryOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-24">
        <section className="py-20 px-6 bg-background">
          <div className="container mx-auto max-w-7xl">
            {/* Header - Formato igual a About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 editorial-spacing">
                Estilismo Editorial
              </h1>
              <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing leading-relaxed mb-8">
                Construcción de narrativas visuales a través de la moda
              </p>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-secondary/90 font-sans editorial-spacing leading-relaxed">
                  Cada producción editorial es una oportunidad para contar historias a través de la ropa, los accesorios y la composición visual. Mi enfoque busca equilibrar la estética contemporánea con propuestas conceptuales que desafían las convenciones tradicionales del styling.
                </p>
              </div>
            </motion.div>

            {/* CTA para abrir galería */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center mb-20"
            >
              <button
                onClick={() => setIsImageGalleryOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
              >
                <span className="font-sans uppercase tracking-widest text-sm">
                  Ver Galería Completa
                </span>
                <span className="text-lg">→</span>
              </button>
            </motion.div>

            {/* Grid de preview de imágenes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {images.slice(0, 8).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  className="aspect-[3/4] overflow-hidden bg-card cursor-pointer group"
                  onClick={() => setIsImageGalleryOpen(true)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
      
      {isGalleryUnlocked && (
        <ClueHuntIndicator onShowGallery={() => setShowGallery(true)} />
      )}
      
      {showGallery && <SecretGallery onClose={() => setShowGallery(false)} />}
      
      {isImageGalleryOpen && (
        <ImageGallery
          images={images}
          isOpen={isImageGalleryOpen}
          onClose={() => setIsImageGalleryOpen(false)}
        />
      )}
    </div>
  );
};

export default EstilismoEditorialPage;
