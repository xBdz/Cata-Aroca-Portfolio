import { motion, AnimatePresence } from "framer-motion";
import { useClueHunt } from "@/hooks/useClueHunt";
import { useLanguage } from "@/contexts/LanguageContext";
import { Lock, Unlock, Eye } from "lucide-react";
import { useState } from "react";
import SecretGallery from "./SecretGallery";
import logoSymbol from "@/assets/Logo/logo-symbol.png";
import logoSymbolBorde from "@/assets/Logo/logo-simbolo-borde.png";
import logoSymbolBordeClaro from "@/assets/Logo/logo-simbolo-borde-claro.png";

const SecretHuntSection = () => {
  const { t } = useLanguage();
  const { foundClues, isGalleryUnlocked, progress } = useClueHunt();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <section id="secret-hunt" className="py-20 px-6 bg-gradient-to-b from-primary/10 to-background relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img src={logoSymbol} alt="Symbol" className="w-full h-full" />
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48"
            animate={{
              rotate: -360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <img src={logoSymbol} alt="Symbol" className="w-full h-full" />
          </motion.div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img src={logoSymbolBorde} alt="Symbol" className="w-12 h-12 opacity-80" />
              </motion.div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 editorial-spacing">
              {t("secret.title")}
            </h2>
            
            {/* Frase clave destacada */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <div className="max-w-3xl mx-auto px-6 py-8 bg-foreground/5 border-l-2 border-secondary relative">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-background border-2 border-secondary rounded-full flex items-center justify-center">
                  <img src={logoSymbolBorde} alt="Symbol" className="w-3 h-3" />
                </div>
                <p className="text-xl md:text-2xl font-serif font-light text-foreground italic leading-relaxed">
                  {t("secret.quote")}
                </p>
              </div>
            </motion.div>
            
            <p className="text-lg md:text-xl text-secondary font-sans max-w-2xl mx-auto editorial-spacing leading-relaxed">
              {t("secret.description")}
            </p>
          </motion.div>

          {/* Progress Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card border border-foreground/10 p-8 md:p-12 shadow-lg">
              {/* Status Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  {isGalleryUnlocked ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="w-16 h-16 rounded-full bg-foreground/10 flex items-center justify-center"
                    >
                      <Unlock className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-secondary" strokeWidth={1.5} />
                    </div>
                  )}
                  <div>
                    <p className="text-xs uppercase tracking-widest font-sans text-secondary mb-1">
                      {t("secret.progress")}
                    </p>
                    <p className="text-3xl font-serif font-light text-foreground">
                      {progress}
                    </p>
                  </div>
                </div>
                
                {/* Symbol indicator */}
                <motion.img
                  src={logoSymbol}
                  alt="Symbol"
                  className="w-12 h-12 opacity-20"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Progress Dots */}
              <div className="mb-8">
                <div className="flex gap-4 mb-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="flex-1"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-foreground"
                          initial={{ width: "0%" }}
                          animate={{
                            width: foundClues.length > i ? "100%" : "0%",
                          }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-secondary/60 font-sans text-center">
                  {t("secret.found")}: {foundClues.length}/3
                </p>
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                {isGalleryUnlocked ? (
                  <motion.div
                    key="unlocked"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="text-center space-y-6"
                  >
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-foreground">
                        {t("secret.unlocked")}
                      </h3>
                      <p className="text-secondary font-sans text-sm md:text-base leading-relaxed">
                        {t("secret.unlockedDescription")}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsGalleryOpen(true)}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group"
                    >
                      <img src={logoSymbolBordeClaro} alt="Symbol" className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span className="font-sans uppercase tracking-widest text-sm">
                        {t("secret.unlock")}
                      </span>
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="locked"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">
                        ¿Cómo funciona?
                      </h3>
                      <p className="text-secondary font-sans text-sm md:text-base leading-relaxed">
                        Explora las diferentes secciones del portfolio y busca los símbolos sutiles escondidos. Encuentra las 3 pistas para revelar la galería secreta.
                      </p>
                    </div>

                    {/* Clues found */}
                    {foundClues.length > 0 && (
                      <div className="pt-6 border-t border-foreground/10">
                        <p className="text-xs uppercase tracking-widest font-sans text-secondary mb-4">
                          Pistas encontradas
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {foundClues.map((clue, index) => (
                            <motion.div
                              key={clue}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full"
                            >
                              <Eye className="w-4 h-4 text-secondary" />
                              <span className="text-xs font-sans text-foreground capitalize">
                                {clue === "hero" ? "Hero" : clue === "portfolio" ? "Portfolio" : "Sobre mí"}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Hint */}
                    <div className="flex items-start gap-3 p-4 bg-foreground/5 rounded-lg">
                      <img src={logoSymbolBorde} alt="Symbol" className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                      <div>
                        <p className="text-xs uppercase tracking-widest font-sans text-secondary mb-1">
                          Pista
                        </p>
                        <p className="text-sm font-sans text-foreground/80 leading-relaxed">
                          Los símbolos son iguales, pero muy sutiles y aparecen con baja opacidad. Pasa el cursor por las esquinas de las secciones principales para descubrirlos. Extra: revisa bien la sección principal y mi biografía.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secret Gallery Modal */}
      {isGalleryOpen && (
        <SecretGallery onClose={() => setIsGalleryOpen(false)} />
      )}
    </>
  );
};

export default SecretHuntSection;
