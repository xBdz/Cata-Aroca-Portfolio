import { Gem } from "lucide-react";
import { useClueHunt } from "@/hooks/useClueHunt";
import { motion, AnimatePresence } from "framer-motion";

interface ClueHuntIndicatorProps {
  onShowGallery: () => void;
}

const ClueHuntIndicator = ({ onShowGallery }: ClueHuntIndicatorProps) => {
  const { foundClues, isGalleryUnlocked } = useClueHunt();

  if (foundClues.length === 0) return null;

  const scrollToSecretSection = () => {
    const element = document.getElementById("secret-hunt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={isGalleryUnlocked ? onShowGallery : scrollToSecretSection}
        className="fixed bottom-6 left-6 z-40 bg-foreground/90 backdrop-blur-sm text-background p-3 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-3">
          {/* Icon */}
          <motion.div
            animate={{
              scale: isGalleryUnlocked ? [1, 1.2, 1] : 1,
              rotate: isGalleryUnlocked ? [0, 10, -10, 0] : 0,
            }}
            transition={{
              duration: 1.2,
              repeat: isGalleryUnlocked ? Infinity : 0,
              ease: "easeInOut",
            }}
          >
            <Gem 
              className={`w-5 h-5 ${
                isGalleryUnlocked ? 'text-background' : 'text-background/70'
              }`} 
            />
          </motion.div>

          {/* Progress dots */}
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  foundClues.length > i 
                    ? 'bg-background scale-100' 
                    : 'bg-background/30 scale-75'
                }`}
              />
            ))}
          </div>

          {/* Text hint on hover */}
          <div className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300">
            <p className="text-xs font-sans whitespace-nowrap text-background/90 ml-2">
              {isGalleryUnlocked ? 'Ver galería' : 'Ver progreso'}
            </p>
          </div>
        </div>
      </motion.button>
    </AnimatePresence>
  );
};

export default ClueHuntIndicator;
