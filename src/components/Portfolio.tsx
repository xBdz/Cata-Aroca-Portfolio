import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import ImageGallery from "./ImageGallery";
import { useClueHunt } from "@/hooks/useClueHunt";
import { useLanguage } from "@/contexts/LanguageContext";
import logoSymbol from "@/assets/Logo/logo-symbol.png";

// Importar imágenes de portada
import portadaEstilismo from "@/assets/Estilismo/portada-estilismo.png";
import portadaFilms from "@/assets/Fashion Films/Films-Portada.png";
import portadaProyectos from "@/assets/Proyectos conceptuales/portada-proyectos.png";
import portadaTrends from "@/assets/Libros de tendencia/Libros-de-tendencia-portada.png";

// Importar imágenes de Estilismo
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
import est66 from "@/assets/Estilismo/66.png";
import est67 from "@/assets/Estilismo/67.png";
import est68 from "@/assets/Estilismo/68.png";
import est69 from "@/assets/Estilismo/69.png";
import est70 from "@/assets/Estilismo/70.png";
import est71 from "@/assets/Estilismo/71.png";
import est72 from "@/assets/Estilismo/72.png";
import est73 from "@/assets/Estilismo/73.png";
import est74 from "@/assets/Estilismo/74.png";
import est75 from "@/assets/Estilismo/75.png";
import est76 from "@/assets/Estilismo/76.png";
import est77 from "@/assets/Estilismo/77.png";
import est78 from "@/assets/Estilismo/78.png";

// Importar imágenes de Proyectos Conceptuales
import pc25 from "@/assets/Proyectos conceptuales/25.png";
import pc26 from "@/assets/Proyectos conceptuales/26.png";
import pc27 from "@/assets/Proyectos conceptuales/27.png";
import pc28 from "@/assets/Proyectos conceptuales/28.png";
import pc29 from "@/assets/Proyectos conceptuales/29.png";
import pc30 from "@/assets/Proyectos conceptuales/30.png";
import pc31 from "@/assets/Proyectos conceptuales/31.png";
import pc32 from "@/assets/Proyectos conceptuales/32.png";
import pc33 from "@/assets/Proyectos conceptuales/33.png";
import pc34 from "@/assets/Proyectos conceptuales/34.png";
import pc35 from "@/assets/Proyectos conceptuales/35.png";
import pc36 from "@/assets/Proyectos conceptuales/36.png";
import pc37 from "@/assets/Proyectos conceptuales/37.png";
import pc38 from "@/assets/Proyectos conceptuales/38.png";
import pc39 from "@/assets/Proyectos conceptuales/39.png";
import pc40 from "@/assets/Proyectos conceptuales/40.png";
import pc41 from "@/assets/Proyectos conceptuales/41.png";
import pc42 from "@/assets/Proyectos conceptuales/42.png";
import pc43 from "@/assets/Proyectos conceptuales/43.png";
import pc44 from "@/assets/Proyectos conceptuales/44.png";
import pc45 from "@/assets/Proyectos conceptuales/45.png";

const portfolioCategories = [
  {
    id: "styling",
    title: "Estilismo Editorial",
    coverImage: portadaEstilismo,
    description: "Creación de narrativas visuales para revistas, marcas y campañas. Cada producción transforma prendas en historias que comunican identidad y emoción.",
    images: [
      { src: est56, alt: "Estilismo editorial 1" },
      { src: est57, alt: "Estilismo editorial 2" },
      { src: est58, alt: "Estilismo editorial 3" },
      { src: est59, alt: "Estilismo editorial 4" },
      { src: est60, alt: "Estilismo editorial 5" },
      { src: est61, alt: "Estilismo editorial 6" },
      { src: est62, alt: "Estilismo editorial 7" },
      { src: est63, alt: "Estilismo editorial 8" },
      { src: est64, alt: "Estilismo editorial 9" },
      { src: est65, alt: "Estilismo editorial 10" },
      { src: est66, alt: "Estilismo editorial 11" },
      { src: est67, alt: "Estilismo editorial 12" },
      { src: est68, alt: "Estilismo editorial 13" },
      { src: est69, alt: "Estilismo editorial 14" },
      { src: est70, alt: "Estilismo editorial 15" },
      { src: est71, alt: "Estilismo editorial 16" },
      { src: est72, alt: "Estilismo editorial 17" },
      { src: est73, alt: "Estilismo editorial 18" },
      { src: est74, alt: "Estilismo editorial 19" },
      { src: est75, alt: "Estilismo editorial 20" },
      { src: est76, alt: "Estilismo editorial 21" },
      { src: est77, alt: "Estilismo editorial 22" },
      { src: est78, alt: "Estilismo editorial 23" },
    ],
  },
  {
    id: "conceptual",
    title: "Proyectos conceptuales",
    coverImage: portadaProyectos,
    description: "Exploraciones artísticas que desafían los límites de la moda. Propuestas que cuestionan y expanden el lenguaje visual contemporáneo.",
    images: [
      { src: pc25, alt: "Proyecto conceptual 1" },
      { src: pc26, alt: "Proyecto conceptual 2" },
      { src: pc27, alt: "Proyecto conceptual 3" },
      { src: pc28, alt: "Proyecto conceptual 4" },
      { src: pc29, alt: "Proyecto conceptual 5" },
      { src: pc30, alt: "Proyecto conceptual 6" },
      { src: pc31, alt: "Proyecto conceptual 7" },
      { src: pc32, alt: "Proyecto conceptual 8" },
      { src: pc33, alt: "Proyecto conceptual 9" },
      { src: pc34, alt: "Proyecto conceptual 10" },
      { src: pc35, alt: "Proyecto conceptual 11" },
      { src: pc36, alt: "Proyecto conceptual 12" },
      { src: pc37, alt: "Proyecto conceptual 13" },
      { src: pc38, alt: "Proyecto conceptual 14" },
      { src: pc39, alt: "Proyecto conceptual 15" },
      { src: pc40, alt: "Proyecto conceptual 16" },
      { src: pc41, alt: "Proyecto conceptual 17" },
      { src: pc42, alt: "Proyecto conceptual 18" },
      { src: pc43, alt: "Proyecto conceptual 19" },
      { src: pc44, alt: "Proyecto conceptual 20" },
      { src: pc45, alt: "Proyecto conceptual 21" },
    ],
  },
  {
    id: "trends",
    title: "Libros de tendencia",
    coverImage: portadaTrends,
    description: "Investigación profunda de tendencias, paletas cromáticas y forecasting estacional. Análisis que anticipa el futuro de la moda.",
    isLibros: true, // Flag especial para esta sección
  },
  {
    id: "films",
    title: "Fashion films",
    coverImage: portadaFilms,
    description: "Dirección creativa y estilismo para narrativas visuales en movimiento. Moda que cobra vida a través del storytelling audiovisual.",
    isVideos: true, // Flag especial para videos
  },
];

const Portfolio = () => {
  const { t } = useLanguage();
  const { findClue, foundClues } = useClueHunt();
  const [selectedCategory, setSelectedCategory] = useState<typeof portfolioCategories[number] | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleCategoryClick = (category: typeof portfolioCategories[number]) => {
    if (category.isLibros) {
      // Scroll a la sección de libros de tendencia
      const element = document.getElementById("libros-tendencia");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (category.isVideos) {
      // Scroll a la sección de fashion films
      const element = document.getElementById("fashion-films");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (category.images) {
      setSelectedCategory(category);
      setIsGalleryOpen(true);
    }
  };

  return (
    <section id="portfolio" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 relative"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 editorial-spacing">
            {t("portfolio.title")}
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl editorial-spacing leading-relaxed">
            {t("portfolio.description")}
          </p>

          {!foundClues.includes("portfolio") && (
            <motion.button
              onClick={() => findClue("portfolio")}
              className="absolute top-4 right-4 focus:outline-none group cursor-pointer"
              aria-label="Símbolo oculto"
              animate={{
                opacity: [0.6, 0.85, 0.6],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Difuminado colorido de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-cyan-400/30 to-teal-400/30 blur-xl rounded-full scale-150" />
                <img
                  src={logoSymbol}
                  alt="Hidden symbol"
                  className="relative w-8 h-8 opacity-75 brightness-110 saturate-150"
                  style={{ filter: 'hue-rotate(180deg)' }}
                />
              </div>
            </motion.button>
          )}
        </motion.div>

        {/* Grid de categorías */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              {/* Imagen */}
              <div className="relative overflow-hidden bg-card aspect-[3/4] mb-6">
                <img
                  src={category.coverImage}
                  alt={category.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay con icono */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="bg-background p-5 rounded-full">
                      <Plus size={28} className="text-foreground" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                {/* Badge de cantidad */}
                {category.images && (
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-xs uppercase tracking-widest font-sans text-foreground">
                      {category.images.length} {t("portfolio.images")}
                    </p>
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="space-y-3">
                <h3 className="text-3xl md:text-4xl font-serif font-light editorial-spacing group-hover:text-secondary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-secondary/80 font-sans editorial-spacing text-base leading-relaxed">
                  {category.description}
                </p>
                {/* Call to action sutil */}
                <div className="flex items-center gap-2 text-sm font-sans text-foreground/60 group-hover:text-foreground transition-colors pt-2">
                  <span className="uppercase tracking-widest">Explorar</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedCategory && selectedCategory.images && (
        <ImageGallery
          images={selectedCategory.images}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </section>
  );
};

export default Portfolio;
