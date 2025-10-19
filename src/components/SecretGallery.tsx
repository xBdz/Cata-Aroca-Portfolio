import { X, ChevronLeft, ChevronRight, Gem } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Importar imágenes secretas - Estilismo
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

const secretImages = [
  { src: est56, alt: "Estilismo exclusivo 1" },
  { src: est57, alt: "Estilismo exclusivo 2" },
  { src: est58, alt: "Estilismo exclusivo 3" },
  { src: est59, alt: "Estilismo exclusivo 4" },
  { src: est60, alt: "Estilismo exclusivo 5" },
  { src: est61, alt: "Estilismo exclusivo 6" },
  { src: est62, alt: "Estilismo exclusivo 7" },
  { src: est63, alt: "Estilismo exclusivo 8" },
  { src: est64, alt: "Estilismo exclusivo 9" },
  { src: est65, alt: "Estilismo exclusivo 10" },
];

interface SecretGalleryProps {
  onClose: () => void;
}

const SecretGallery = ({ onClose }: SecretGalleryProps) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? secretImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === secretImages.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-black via-neutral-950 to-black backdrop-blur-lg flex items-center justify-center"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/12 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Close button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 text-white/90 hover:text-white hover:bg-white/10 transition-all rounded-full backdrop-blur-sm border border-white/20"
        aria-label="Close gallery"
      >
        <X size={28} />
      </motion.button>

      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          {!showGallery ? (
            /* Pantalla de descripción */
            <motion.div
              key="description"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center space-y-8"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Gem className="w-10 h-10 text-yellow-400" />
                  </motion.div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white editorial-spacing">
                    {t("gallery.title")}
                  </h2>
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Gem className="w-10 h-10 text-yellow-400" />
                  </motion.div>
                </div>
                <p className="text-xl text-white/80 font-sans editorial-spacing mb-8">
                  {t("gallery.subtitle")}
                </p>
              </div>

              {/* Descripción */}
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent" />
                
                <div className="pl-8 pr-4 py-6 text-left">
                  <p className="text-white/80 font-sans text-base md:text-lg leading-relaxed mb-4">
                    {t("gallery.description1")}
                  </p>
                  <p className="text-white/70 font-sans text-sm md:text-base italic leading-relaxed">
                    {t("gallery.description2")}
                  </p>
                </div>
              </div>

              {/* Botón */}
              <motion.button
                onClick={() => setShowGallery(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Gem className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-sans uppercase tracking-widest text-sm">
                  {t("gallery.cta")}
                </span>
              </motion.button>
            </motion.div>
          ) : (
            /* Galería de fotos */
            <motion.div
              key="gallery"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex flex-col items-center justify-center gap-6"
            >
              {/* Image container */}
              <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center">
                {/* Navigation buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-0 md:-left-16 z-50 p-3 text-white/90 hover:text-white hover:bg-white/10 transition-all rounded-full backdrop-blur-sm border border-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-0 md:-right-16 z-50 p-3 text-white/90 hover:text-white hover:bg-white/10 transition-all rounded-full backdrop-blur-sm border border-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} />
                </button>

                {/* Image with animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <div className="relative max-w-full max-h-full">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/15 via-amber-500/15 to-orange-500/15 blur-3xl -z-10" />
                      
                      <img
                        src={secretImages[currentIndex].src}
                        alt={secretImages[currentIndex].alt}
                        className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain shadow-2xl"
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Counter */}
              <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-white/60 text-sm font-sans">
                  {t("gallery.image")}
                </span>
                <span className="text-white text-lg font-serif">
                  {currentIndex + 1} / {secretImages.length}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SecretGallery;
