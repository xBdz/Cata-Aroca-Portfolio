import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Videos de ejemplo de YouTube - REEMPLAZAR con los links reales
const fashionFilms = [
  {
    id: 1,
    title: "Fashion Film #1",
    description: "Narrativa visual que explora la transformación de la identidad a través del vestuario y el movimiento.",
    youtubeId: "dQw4w9WgXcQ", // REEMPLAZAR
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
  },
  {
    id: 2,
    title: "Fashion Film #2",
    description: "Pieza audiovisual que fusiona alta costura con expresión contemporánea y storytelling emocional.",
    youtubeId: "9bZkp7q19f0", // REEMPLAZAR
    thumbnail: `https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg`,
  },
  {
    id: 3,
    title: "Fashion Film #3",
    description: "Exploración cinematográfica del vestuario como lenguaje visual y herramienta narrativa.",
    youtubeId: "jNQXAC9IVRw", // REEMPLAZAR
    thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`,
  },
];

const FashionFilms = () => {
  const { t } = useLanguage();
  const openVideo = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank");
  };

  return (
    <section id="fashion-films" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 editorial-spacing">
            {t("films.title")}
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl editorial-spacing leading-relaxed">
            {t("films.description")}
          </p>
        </motion.div>

        {/* Grid de videos */}
        <div className="space-y-16 lg:space-y-24">
          {fashionFilms.map((film, index) => (
            <motion.div
              key={film.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Thumbnail */}
              <div 
                className={`group cursor-pointer ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
                onClick={() => openVideo(film.youtubeId)}
              >
                <div className="relative aspect-video overflow-hidden bg-background">
                  <img
                    src={film.thumbnail}
                    alt={film.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay oscuro */}
                  <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/20 transition-all duration-500" />
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background/95 backdrop-blur-sm p-6 rounded-full transition-all duration-500 group-hover:scale-110 group-hover:bg-background">
                      <Play size={36} className="text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Label "Ver video" */}
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <p className="text-xs uppercase tracking-widest font-sans text-foreground">
                        Ver video
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className={`space-y-6 ${
                index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
              }`}>
                <div>
                  <p className="text-xs uppercase tracking-widest font-sans text-secondary mb-4">
                    Fashion Film {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-serif font-light mb-6 editorial-spacing">
                    {film.title}
                  </h3>
                </div>
                
                <div className="w-16 h-px bg-foreground/20"></div>
                
                <p className="text-lg text-secondary/90 font-sans editorial-spacing leading-relaxed">
                  {film.description}
                </p>

                <button
                  onClick={() => openVideo(film.youtubeId)}
                  className="inline-flex items-center gap-3 text-sm font-sans uppercase tracking-widest text-foreground hover:text-secondary transition-colors group/btn pt-4"
                >
                  <span>Ver en YouTube</span>
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 pt-12 border-t border-foreground/10 text-center"
        >
          <p className="text-sm text-secondary/60 font-sans tracking-wide">
            Los videos se reproducen en YouTube • Click para ver en pantalla completa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FashionFilms;
