import { X, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSymbolBorde from "@/assets/Logo/logo-simbolo-borde.png";
import logoSymbolBordeClaro from "@/assets/Logo/logo-simbolo-borde-claro.png";

// ID del video de YouTube
const YOUTUBE_VIDEO_ID = "4kASvKplfqc";

interface SecretGalleryProps {
  onClose: () => void;
}

const SecretGallery = ({ onClose }: SecretGalleryProps) => {
  const { t } = useLanguage();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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
          {!showVideo ? (
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
                    <img src={logoSymbolBordeClaro} alt="Symbol" className="w-10 h-10" />
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
                    <img src={logoSymbolBordeClaro} alt="Symbol" className="w-10 h-10" />
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
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-sans uppercase tracking-widest text-sm">
                  Ver Video Exclusivo
                </span>
              </motion.button>
            </motion.div>
          ) : (
            /* Video de YouTube */
            <motion.div
              key="video"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center justify-center gap-6 px-4 py-8"
            >
              {/* Video container */}
              <div className="relative w-full max-w-4xl" style={{ aspectRatio: '9/16', maxHeight: '70vh' }}>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-orange-500/20 blur-3xl -z-10" />
                
                {/* YouTube iframe */}
                <iframe
                  className="w-full h-full rounded-lg shadow-2xl"
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Video Exclusivo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Info badge */}
              <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <img src={logoSymbolBorde} alt="Symbol" className="w-4 h-4" />
                <span className="text-white/90 text-sm font-sans uppercase tracking-widest">
                  Contenido Exclusivo Desbloqueado
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
