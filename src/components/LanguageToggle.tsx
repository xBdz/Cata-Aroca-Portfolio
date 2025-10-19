import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-[200] pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 bg-background/90 backdrop-blur-md border border-foreground/20 rounded-full p-1 shadow-lg"
      >
        <button
          onClick={() => setLanguage("es")}
          className={`
            relative px-3 py-1.5 text-xs font-sans uppercase tracking-widest transition-all duration-300
            ${language === "es" ? "text-background" : "text-foreground/60 hover:text-foreground"}
          `}
        >
          {language === "es" && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 bg-foreground rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">ES</span>
        </button>

        <button
          onClick={() => setLanguage("en")}
          className={`
            relative px-3 py-1.5 text-xs font-sans uppercase tracking-widest transition-all duration-300
            ${language === "en" ? "text-background" : "text-foreground/60 hover:text-foreground"}
          `}
        >
          {language === "en" && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 bg-foreground rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">EN</span>
        </button>
      </motion.div>
    </div>
  );
};

export default LanguageToggle;
