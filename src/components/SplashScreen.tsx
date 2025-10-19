import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoSymbol from "@/assets/Logo/logo-symbol.png";
import { useLanguage } from "@/contexts/LanguageContext";

interface SplashScreenProps {
  onLoadingComplete: () => void;
}

const SplashScreen = ({ onLoadingComplete }: SplashScreenProps) => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simular carga progresiva
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
    >
      {/* Logo con animación */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-12"
      >
        <motion.img
          src={logoSymbol}
          alt="Logo"
          className="w-24 h-24 md:w-32 md:h-32"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Nombre */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-serif font-light text-foreground editorial-spacing mb-2">
          Catalina Aroca
        </h1>
        <p className="text-sm md:text-base text-secondary font-sans uppercase tracking-widest">
          {t("hero.subtitle")}
        </p>
      </motion.div>

      {/* Barra de progreso */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "200px", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative h-1 bg-foreground/10 rounded-full overflow-hidden"
      >
        <motion.div
          className="absolute inset-y-0 left-0 bg-foreground rounded-full"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Porcentaje */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-xs text-secondary/60 font-sans"
      >
        {progress}%
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
