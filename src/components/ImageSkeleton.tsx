import { motion } from "framer-motion";

interface ImageSkeletonProps {
  aspectRatio?: "square" | "portrait" | "landscape" | "video";
  className?: string;
}

const ImageSkeleton = ({ aspectRatio = "portrait", className = "" }: ImageSkeletonProps) => {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-video",
    video: "aspect-video",
  };

  return (
    <div className={`relative overflow-hidden bg-foreground/5 ${aspectClasses[aspectRatio]} ${className}`}>
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 bg-foreground/5"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default ImageSkeleton;
