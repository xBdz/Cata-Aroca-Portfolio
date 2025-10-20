import { motion } from "framer-motion";
import logoSymbol from "@/assets/Logo/logo-symbol.png";

interface SectionDividerProps {
  variant?: "default" | "symbol" | "line";
}

const SectionDivider = ({ variant = "default" }: SectionDividerProps) => {
  if (variant === "symbol") {
    return (
      <div className="relative py-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <motion.img
              src={logoSymbol}
              alt="Divider"
              className="w-10 h-10"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="relative py-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent"
          />
        </div>
      </div>
    );
  }

  // Default: symbol with lines
  return (
    <div className="relative py-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-8"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 h-px bg-gradient-to-r from-transparent to-foreground/20"
          />
          
          <motion.img
            src={logoSymbol}
            alt="Divider"
            className="w-8 h-8"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 h-px bg-gradient-to-l from-transparent to-foreground/20"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionDivider;
