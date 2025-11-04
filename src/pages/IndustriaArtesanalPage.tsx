import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { Download } from "lucide-react";
import { useEffect } from "react";

// Importar imágenes
import ia01 from "@/assets/Libros de tendencia/Industria artesanal/IA-01.jpeg";
import ia02 from "@/assets/Libros de tendencia/Industria artesanal/IA-02.jpeg";
import ia03 from "@/assets/Libros de tendencia/Industria artesanal/IA-03.jpeg";
import ia04 from "@/assets/Libros de tendencia/Industria artesanal/IA-04.jpeg";
import ia05 from "@/assets/Libros de tendencia/Industria artesanal/IA-05.jpeg";
import ia06 from "@/assets/Libros de tendencia/Industria artesanal/IA-06.jpeg";

const IndustriaArtesanalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/La industria artesanal, un espacio para la explotación.pdf";
    link.download = "La-industria-artesanal.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const inspiraciones = [
    { nombre: "Formaje", ubicacion: "Madrid", descripcion: "Comunidad y cultura artesanal" },
    { nombre: "Restaurant Zero", ubicacion: "Estonia", descripcion: "Gastronomía sostenible" },
    { nombre: "Anchoita", ubicacion: "Buenos Aires", descripcion: "Origen local, curaduría gourmet" },
    { nombre: "Quesarte", ubicacion: "Argentina", descripcion: "Educación y catas culturales" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-6 editorial-spacing">
              ALQUIMIA
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-sans editorial-spacing mb-4">
              La industria artesanal
            </p>
            <p className="text-xl text-secondary/70 font-sans italic">
              Quesos Alquimia
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-12"
          >
            {/* Intro */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed editorial-spacing">
                La nueva alquimia del queso artesanal recupera lo auténtico en medio de la producción masiva.
                El consumidor busca sabores con historia, técnicas ancestrales y una conexión emocional con el origen.
              </p>
            </div>

            {/* Imágenes 1 y 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.img
                src={ia01}
                alt="Industria Artesanal 1"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.img
                src={ia02}
                alt="Industria Artesanal 2"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Un nuevo ritual */}
            <div className="bg-primary/5 p-8 md:p-10 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 editorial-spacing">
                Un nuevo ritual
              </h2>
              <p className="text-lg text-foreground/80 font-sans leading-relaxed editorial-spacing">
                El queso deja de ser alimento para convertirse en experiencia cultural y sensorial.
                Cada pieza es un acto de encuentro, donde la autenticidad reemplaza a lo industrial.
              </p>
            </div>

            {/* Imagen 3 - Full width */}
            <motion.img
              src={ia03}
              alt="Industria Artesanal 3"
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Tradición + Innovación */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 editorial-spacing text-center">
                Tradición + Innovación
              </h2>
              <p className="text-lg text-foreground/90 font-sans leading-relaxed editorial-spacing mb-6">
                Una alquimia entre pasado y futuro:
              </p>
              <ul className="space-y-4">
                {[
                  { icon: "🧂", text: "Maduración en cuevas naturales" },
                  { icon: "🥛", text: "Leches alternativas" },
                  { icon: "🌿", text: "Ingredientes locales" }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 text-lg font-sans text-foreground/80"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    {item.text}
                  </motion.li>
                ))}
              </ul>
              <p className="text-lg text-foreground/80 font-sans leading-relaxed editorial-spacing mt-6">
                Cada combinación crea texturas únicas y sabores identitarios.
              </p>
            </div>

            {/* Imágenes 4 y 5 - Asimétrico */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.img
                src={ia04}
                alt="Industria Artesanal 4"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              />
              <motion.img
                src={ia05}
                alt="Industria Artesanal 5"
                className="w-full h-auto rounded-lg shadow-lg md:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Sostenibilidad */}
            <div className="bg-primary/5 p-8 md:p-10 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-6 editorial-spacing">
                Sostenibilidad
              </h2>
              <p className="text-lg text-foreground/80 font-sans leading-relaxed editorial-spacing">
                Producción a pequeña escala, energías renovables y colaboración local.
                Un modelo circular y consciente, donde el valor nace del respeto por el entorno.
              </p>
            </div>

            {/* Imagen 6 - Full width */}
            <motion.img
              src={ia06}
              alt="Industria Artesanal 6"
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Inspiraciones */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 editorial-spacing text-center">
                Inspiraciones
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {inspiraciones.map((lugar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="bg-primary/5 p-6 rounded-lg"
                  >
                    <h3 className="text-xl font-sans font-medium mb-2">
                      {lugar.nombre}
                    </h3>
                    <p className="text-sm text-secondary mb-2 uppercase tracking-wider">
                      {lugar.ubicacion}
                    </p>
                    <p className="text-base text-foreground/70 font-sans">
                      {lugar.descripcion}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Cierre */}
            <div className="text-center space-y-4 py-8">
              <p className="text-2xl md:text-3xl font-serif font-light italic text-foreground/90 editorial-spacing">
                ALQUIMIA es transformación:
              </p>
              <p className="text-lg md:text-xl text-foreground/70 font-sans editorial-spacing">
                del producto al ritual,<br />
                de la materia al valor,<br />
                de lo cotidiano a lo esencial.
              </p>
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex justify-center"
            >
              <button
                onClick={downloadPDF}
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                <span className="font-sans uppercase tracking-widest text-sm">Descargar PDF</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default IndustriaArtesanalPage;
