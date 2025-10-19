import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageSkeleton from "./ImageSkeleton";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "video";
  onClick?: () => void;
}

const LazyImage = ({ src, alt, className = "", aspectRatio = "portrait", onClick }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        {!isLoaded && !hasError && (
          <motion.div
            key="skeleton"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <ImageSkeleton aspectRatio={aspectRatio} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.img
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        loading="lazy"
      />

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
          <p className="text-xs text-secondary/60 font-sans">Error al cargar imagen</p>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
