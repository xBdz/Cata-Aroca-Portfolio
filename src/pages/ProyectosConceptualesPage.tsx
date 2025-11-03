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

// Importar imágenes de Proyectos Conceptuales
import pc25 from "@/assets/Proyectos conceptuales/25.png";
import pc26 from "@/assets/Proyectos conceptuales/26.png";
import pc27 from "@/assets/Proyectos conceptuales/27.png";
import pc28 from "@/assets/Proyectos conceptuales/28.png";
import pc29 from "@/assets/Proyectos conceptuales/29.png";
import pc30 from "@/assets/Proyectos conceptuales/30.png";
import pc31 from "@/assets/Proyectos conceptuales/31.png";
import pc32 from "@/assets/Proyectos conceptuales/32.png";
import pc33 from "@/assets/Proyectos conceptuales/33.png";
import pc34 from "@/assets/Proyectos conceptuales/34.png";
import pc35 from "@/assets/Proyectos conceptuales/35.png";
import pc36 from "@/assets/Proyectos conceptuales/36.png";
import pc37 from "@/assets/Proyectos conceptuales/37.png";
import pc38 from "@/assets/Proyectos conceptuales/38.png";
import pc39 from "@/assets/Proyectos conceptuales/39.png";
import pc40 from "@/assets/Proyectos conceptuales/40.png";
import pc41 from "@/assets/Proyectos conceptuales/41.png";
import pc42 from "@/assets/Proyectos conceptuales/42.png";
import pc43 from "@/assets/Proyectos conceptuales/43.png";
import pc44 from "@/assets/Proyectos conceptuales/44.png";
import pc45 from "@/assets/Proyectos conceptuales/45.png";

const images = [
  { src: pc25, alt: "Proyecto conceptual 1" },
  { src: pc26, alt: "Proyecto conceptual 2" },
  { src: pc27, alt: "Proyecto conceptual 3" },
  { src: pc28, alt: "Proyecto conceptual 4" },
  { src: pc29, alt: "Proyecto conceptual 5" },
  { src: pc30, alt: "Proyecto conceptual 6" },
  { src: pc31, alt: "Proyecto conceptual 7" },
  { src: pc32, alt: "Proyecto conceptual 8" },
  { src: pc33, alt: "Proyecto conceptual 9" },
  { src: pc34, alt: "Proyecto conceptual 10" },
  { src: pc35, alt: "Proyecto conceptual 11" },
  { src: pc36, alt: "Proyecto conceptual 12" },
  { src: pc37, alt: "Proyecto conceptual 13" },
  { src: pc38, alt: "Proyecto conceptual 14" },
  { src: pc39, alt: "Proyecto conceptual 15" },
  { src: pc40, alt: "Proyecto conceptual 16" },
  { src: pc41, alt: "Proyecto conceptual 17" },
  { src: pc42, alt: "Proyecto conceptual 18" },
  { src: pc43, alt: "Proyecto conceptual 19" },
  { src: pc44, alt: "Proyecto conceptual 20" },
  { src: pc45, alt: "Proyecto conceptual 21" },
];

const ProyectosConceptualesPage = () => {
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
                Proyectos Conceptuales
              </h1>
              <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing leading-relaxed mb-8">
                Exploraciones creativas que trascienden lo convencional
              </p>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-secondary/90 font-sans editorial-spacing leading-relaxed">
                  Estos proyectos representan experimentaciones que integran moda, arte y conceptos filosóficos. Cada propuesta busca generar un diálogo entre la indumentaria como medio expresivo y las inquietudes contemporáneas sobre identidad, consumo y representación.
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

export default ProyectosConceptualesPage;
