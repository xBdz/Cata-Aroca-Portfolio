import { useState, useEffect } from "react";
import { Eye, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logoCatalina from "@/assets/Logo/logo-catalina.png";
import logoAroca from "@/assets/Logo/logo-aroca.png";
import logoSymbol from "@/assets/Logo/logo-symbol.png";
import { useClueHunt } from "@/hooks/useClueHunt";
import { useLanguage } from "@/contexts/LanguageContext";

// Frases que flotan en el fondo
const floatingPhrases = [
  "No hay límites para la creación y el diseño",
  "PRODUCTORA",
  "ORGANIZADORA",
  "DISEÑADORA",
  "ASESORA",
  "ESTILISTA",
  "Moda como lenguaje",
  "Narrativas visuales",
  "Estilismo editorial",
];

// Tipos de movimiento para las frases
const movementTypes = [
  'horizontal',      // Izquierda a derecha
  'horizontalReverse', // Derecha a izquierda
  'vertical',        // Abajo a arriba
  'diagonalUp',      // Diagonal ascendente
  'diagonalDown',    // Diagonal descendente
];

// Generar posiciones y movimientos aleatorios para las frases
const generateRandomPositions = () => {
  return floatingPhrases.map((_, index) => {
    const movementType = movementTypes[index % movementTypes.length];
    
    // Posiciones iniciales según tipo de movimiento
    let startX, startY, endX, endY;
    
    switch(movementType) {
      case 'horizontal':
        startX = '-20%';
        startY = `${10 + Math.random() * 80}%`;
        endX = '120%';
        endY = startY;
        break;
      case 'horizontalReverse':
        startX = '120%';
        startY = `${10 + Math.random() * 80}%`;
        endX = '-20%';
        endY = startY;
        break;
      case 'vertical':
        startX = `${10 + Math.random() * 80}%`;
        startY = '110%';
        endX = startX;
        endY = '-10%';
        break;
      case 'diagonalUp':
        startX = '-20%';
        startY = '110%';
        endX = '120%';
        endY = '-10%';
        break;
      case 'diagonalDown':
        startX = '-20%';
        startY = '-10%';
        endX = '120%';
        endY = '110%';
        break;
      default:
        startX = '-20%';
        startY = '50%';
        endX = '120%';
        endY = '50%';
    }
    
    return {
      movementType,
      startX,
      startY,
      endX,
      endY,
      delay: Math.random() * 4,
      duration: 10 + Math.random() * 8, // 10-18 segundos
    };
  });
};

const Hero = () => {
  const { findClue, foundClues } = useClueHunt();
  const { t } = useLanguage();
  const [positions] = useState(() => generateRandomPositions());

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Frases flotantes en el fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingPhrases.map((phrase, index) => {
          const pos = positions[index];
          
          // Convertir porcentajes a valores numéricos para x e y
          const startXNum = parseFloat(pos.startX);
          const startYNum = parseFloat(pos.startY);
          const endXNum = parseFloat(pos.endX);
          const endYNum = parseFloat(pos.endY);
          
          return (
            <motion.div
              key={index}
              className="absolute font-serif text-xl md:text-3xl lg:text-4xl whitespace-nowrap text-secondary/25"
              style={{
                left: 0,
                top: 0,
              }}
              initial={{ 
                opacity: 0,
                x: `${startXNum}vw`,
                y: `${startYNum}vh`,
              }}
              animate={{ 
                opacity: [0.2, 0.5, 0.2],
                x: `${endXNum}vw`,
                y: `${endYNum}vh`,
              }}
              transition={{
                duration: pos.duration,
                delay: pos.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {phrase}
            </motion.div>
          );
        })}
      </div>

      {/* Contenedor principal con logos */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto">
        {/* Grid de logos: AROCA izquierda, SÍMBOLO centro, CATALINA derecha */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-center mb-16">
          {/* Logo CATALINA - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-end order-1 md:order-1"
          >
            <img
              src={logoCatalina}
              alt="Catalina"
              className="h-28 md:h-36 lg:h-44 xl:h-48 w-auto"
            />
          </motion.div>

          {/* Logo SÍMBOLO - Centro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center order-2 md:order-2"
          >
            <img
              src={logoSymbol}
              alt="Symbol"
              className="h-32 md:h-40 lg:h-48 xl:h-52 w-auto"
            />
          </motion.div>

          {/* Logo AROCA - Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center md:justify-start order-3"
          >
            <img
              src={logoAroca}
              alt="Aroca"
              className="h-28 md:h-36 lg:h-44 xl:h-48 w-auto"
            />
          </motion.div>
        </div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-base md:text-lg lg:text-xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing mb-12"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            onClick={scrollToPortfolio}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          >
            <span className="font-sans editorial-spacing text-sm md:text-base">{t("hero.cta")}</span>
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>

        {/* Pista oculta - Símbolo */}
        {!foundClues.includes("hero") && (
          <motion.button
            onClick={() => findClue("hero")}
            className="absolute bottom-8 right-8 focus:outline-none group cursor-pointer"
            aria-label="Símbolo oculto"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.2, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Difuminado colorido de fondo */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-amber-400/30 to-orange-400/30 blur-xl rounded-full scale-150" />
              <img
                src={logoSymbol}
                alt="Hidden symbol"
                className="relative w-8 h-8 opacity-60 brightness-110 saturate-150"
                style={{ filter: 'hue-rotate(20deg)' }}
              />
            </div>
          </motion.button>
        )}
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <ChevronDown size={24} className="text-secondary" />
      </motion.div>
    </section>
  );
};

export default Hero;
