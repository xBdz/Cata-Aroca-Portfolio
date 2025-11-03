import { useState } from "react";
import { motion } from "framer-motion";
import logoSymbol from "@/assets/Logo/logo-symbol.png";
import ImageGallery from "./ImageGallery";
import { Eye, Grid3x3, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Importar imágenes de Investigaciones
import portadaTIF from "@/assets/TIFF/portada-TIFF.png";
import tif46 from "@/assets/TIFF/46.png";
import tif47 from "@/assets/TIFF/47.png";
import tif48 from "@/assets/TIFF/48.png";
import tif49 from "@/assets/TIFF/49.png";
import tif50 from "@/assets/TIFF/50.png";
import tif51 from "@/assets/TIFF/51.png";
import tif52 from "@/assets/TIFF/52.png";
import tif53 from "@/assets/TIFF/53.png";
import tif54 from "@/assets/TIFF/54.png";
import tif55 from "@/assets/TIFF/55.png";

const investigacionesImages = [
  { src: tif46, alt: "Investigación 1" },
  { src: tif47, alt: "Investigación 2" },
  { src: tif48, alt: "Investigación 3" },
  { src: tif49, alt: "Investigación 4" },
  { src: tif50, alt: "Investigación 5" },
  { src: tif51, alt: "Investigación 6" },
  { src: tif52, alt: "Investigación 7" },
  { src: tif53, alt: "Investigación 8" },
  { src: tif54, alt: "Investigación 9" },
  { src: tif55, alt: "Investigación 10" },
];

const TIFSection = () => {
  const { t } = useLanguage();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section id="investigaciones" className="py-20 px-6 bg-primary/20 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <motion.img
          src={logoSymbol}
          alt="Background Symbol"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-auto"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{ opacity: 0.05, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ duration: 20, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 editorial-spacing">
            Investigaciones
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing leading-relaxed mb-8">
            Análisis profundo de tendencias y cultura visual
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-secondary/90 font-sans editorial-spacing leading-relaxed">
              Proyectos de investigación que exploran la intersección entre moda, sociedad y cultura contemporánea. Cada trabajo representa un análisis riguroso de fenómenos visuales, tendencias emergentes y su impacto en el panorama creativo actual.
            </p>
          </div>
          <div className="w-24 h-px bg-foreground/20 mx-auto"></div>
        </motion.div>

        {/* Pilares del proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-24"
        >
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <Eye className="w-8 h-8 text-secondary" strokeWidth={1} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-light editorial-spacing">Investigación</h3>
            <p className="text-secondary/80 font-sans text-base editorial-spacing leading-relaxed">
              Análisis profundo de tendencias, referencias culturales y contexto histórico que fundamentan la propuesta creativa.
            </p>
          </div>
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <Grid3x3 className="w-8 h-8 text-secondary" strokeWidth={1} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-light editorial-spacing">Ejecución</h3>
            <p className="text-secondary/80 font-sans text-base editorial-spacing leading-relaxed">
              Estilismo, dirección creativa y producción de contenido editorial con atención al detalle y rigor estético.
            </p>
          </div>
          <div className="text-center space-y-4 group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
              <BookOpen className="w-8 h-8 text-secondary" strokeWidth={1} />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-light editorial-spacing">Narrativa</h3>
            <p className="text-secondary/80 font-sans text-base editorial-spacing leading-relaxed">
              Construcción de un discurso visual coherente que comunica identidad, emoción y concepto de manera memorable.
            </p>
          </div>
        </motion.div>

        {/* Portada del TIF con click para abrir galería */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div 
            className="relative aspect-[16/10] overflow-hidden bg-card shadow-2xl cursor-pointer group"
            onClick={() => setIsGalleryOpen(true)}
          >
            <img
              src={portadaTIF}
              alt="TIF Project Cover"
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                <div className="bg-background/95 backdrop-blur-sm px-8 py-6 rounded-lg text-center">
                  <Grid3x3 className="w-12 h-12 mx-auto mb-4 text-foreground" strokeWidth={1.5} />
                  <p className="text-foreground text-lg font-sans mb-2">
                    Ver galería completa
                  </p>
                  <span className="font-sans uppercase tracking-widest text-sm">{t("tif.cta")}</span>
                  <p className="text-secondary text-sm uppercase tracking-widest">
                    {investigacionesImages.length} imágenes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="mt-8 text-center">
            <p className="text-sm text-secondary/70 font-sans italic leading-relaxed max-w-2xl mx-auto">
            </p>
          </div>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <ImageGallery
        images={investigacionesImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
};

export default TIFSection;
