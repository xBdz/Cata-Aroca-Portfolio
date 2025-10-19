import { motion } from "framer-motion";
import { Download, FileText, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Portada temporal - puedes reemplazarla con una imagen específica para cada libro
import portadaEstilismo from "@/assets/Estilismo/portada-estilismo.png";

const trendBooks = [
  {
    id: 1,
    title: "Anzuelo Emocional",
    description: "Investigación sobre estrategias emocionales en la construcción de narrativas de moda y su impacto en el consumidor contemporáneo.",
    pdfPath: "/pdfs/Anzuelo-emocional.pdf",
    size: "10 MB",
    coverImage: portadaEstilismo, // Reemplazar con imagen específica
    year: "2024",
  },
  {
    id: 2,
    title: "La Industria Artesanal: Un Espacio para la Explotación",
    description: "Análisis crítico de las dinámicas laborales en la producción artesanal de moda y sus implicaciones éticas en la industria actual.",
    pdfPath: "/pdfs/La industria artesanal, un espacio para la explotación.pdf",
    size: "85 MB",
    coverImage: portadaEstilismo, // Reemplazar con imagen específica
    year: "2024",
  },
  {
    id: 3,
    title: "Segmento Preadolescente",
    description: "Estudio de tendencias y comportamientos de consumo en el mercado preadolescente, explorando identidad y pertenencia a través de la moda.",
    pdfPath: "/pdfs/Segemento-preadolescente.pdf",
    size: "65 MB",
    coverImage: portadaEstilismo, // Reemplazar con imagen específica
    year: "2024",
  },
];

const LibrosTendencia = () => {
  const { t } = useLanguage();
  const downloadPDF = (pdfPath: string, title: string) => {
    // Crear elemento <a> temporal para descargar
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="libros-tendencia" className="py-32 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-10 h-10 text-secondary" strokeWidth={1} />
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 editorial-spacing">
              {t("libros.title")}
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl editorial-spacing leading-relaxed">
            {t("libros.description")}
          </p>
        </motion.div>

        {/* Grid de libros */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {trendBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              {/* Portada del libro */}
              <div className="relative aspect-[3/4] overflow-hidden bg-card mb-6 shadow-lg">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8">
                  <FileText size={48} className="text-background mb-4" strokeWidth={1.5} />
                  <p className="text-background font-sans text-sm uppercase tracking-widest">Disponible para descarga</p>
                </div>
              </div>

              {/* Información del libro */}
              <div className="space-y-4">
                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest font-sans text-secondary/60">
                  <span>{book.year}</span>
                  <span>•</span>
                  <span>{book.size}</span>
                </div>

                {/* Título */}
                <h3 className="text-2xl md:text-3xl font-serif font-light editorial-spacing leading-tight group-hover:text-secondary transition-colors">
                  {book.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-foreground/20"></div>

                {/* Descripción */}
                <p className="text-secondary/80 font-sans text-sm editorial-spacing leading-relaxed">
                  {book.description}
                </p>

                {/* Botón de descarga */}
                <button
                  onClick={() => downloadPDF(book.pdfPath, book.title)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 group/btn mt-6"
                >
                  <Download size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                  <span className="font-sans uppercase tracking-widest text-xs">Descargar PDF</span>
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-foreground/10 text-center"
        >
          <p className="text-sm text-secondary/60 font-sans tracking-wide">
            Todos los libros están disponibles para descarga gratuita • Formato PDF
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LibrosTendencia;
