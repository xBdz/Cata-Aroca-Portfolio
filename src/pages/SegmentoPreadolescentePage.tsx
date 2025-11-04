import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { Download } from "lucide-react";
import { useEffect } from "react";

// Importar imágenes
import sp01 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-01.jpeg";
import sp02 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-02.jpeg";
import sp03 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-03.jpeg";
import sp04 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-04.jpeg";
import sp05 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-05.jpeg";
import sp06 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-06.jpeg";
import sp07 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-07.jpeg";
import sp08 from "@/assets/Libros de tendencia/Segmento preadolescente/SP-08.jpeg";

const SegmentoPreadolescentePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Segemento-preadolescente.pdf";
    link.download = "Segmento-preadolescente.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const microtendencias = [
    {
      title: "APRENDIVERSE",
      icon: "🧠",
      subtitle: "Aprendizaje adaptativo y lúdico",
      description: "El aprendizaje se vuelve orgánico, sensorial e inclusivo. Los preadolescentes aprenden jugando, mezclando tecnología, cuerpo y emoción. La educación se desestructura y se adapta al ritmo de cada uno: curiosidad, movimiento y bienestar son los nuevos motores del conocimiento."
    },
    {
      title: "MEISLAND",
      icon: "🌐",
      subtitle: "Identidad colectiva y tribus digitales",
      description: "El yo se diluye en comunidades de afinidad. Surge una conducta aspiracional donde los referentes, influencers y grupos crean modelos a seguir. La individualidad se redefine en red: la copia se vuelve estilo de vida, y el fanatismo moldea nuevas formas de pertenencia y consumo."
    },
    {
      title: "LIMITLESS",
      icon: "⚡",
      subtitle: "Consumo simbiótico y sin fronteras etarias",
      description: "Los límites entre lo infantil y lo adulto se desdibujan. Los productos y espacios de consumo se vuelven neutros, inclusivos y sofisticados, adaptados a múltiples generaciones. La preadolescencia se fusiona con la adultez, combinando juego, diseño y elegancia en un mismo universo sensorial."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-6 editorial-spacing">
              TRAVESÍA EVOLUTIVA
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-sans editorial-spacing mb-8">
              El océano preadolescente
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-16"
          >
            {/* Intro */}
            <div className="space-y-6 text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed editorial-spacing">
                La preadolescencia (9 a 12 años) es un océano en constante cambio: una etapa fluida, inacabada y libre, donde las identidades se exploran, se deshacen y se reconstruyen.
                Entre el caos y la calma, los jóvenes navegan un proceso de autodescubrimiento donde el "prueba y error" se vuelve parte natural del crecimiento.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed editorial-spacing">
                Esta investigación detecta tres microtendencias estéticas que surgen de esa búsqueda de identidad y expresan cómo los preadolescentes habitan el mundo contemporáneo:
              </p>
            </div>

            {/* Imágenes intro - Grid 3 columnas */}
            <div className="grid md:grid-cols-3 gap-4">
              <motion.img
                src={sp01}
                alt="Segmento Preadolescente 1"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <motion.img
                src={sp02}
                alt="Segmento Preadolescente 2"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              />
              <motion.img
                src={sp03}
                alt="Segmento Preadolescente 3"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Microtendencias */}
            <div className="space-y-12">
              {/* APRENDIVERSE */}
              {microtendencias.slice(0, 1).map((tendencia, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="bg-primary/5 p-8 md:p-12 rounded-lg"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{tendencia.icon}</div>
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-3 editorial-spacing">
                      {tendencia.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary font-sans editorial-spacing">
                      {tendencia.subtitle}
                    </p>
                  </div>
                  <div className="w-16 h-px bg-foreground/20 mx-auto my-6"></div>
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed editorial-spacing">
                    {tendencia.description}
                  </p>
                </motion.div>
              ))}

              {/* Imágenes APRENDIVERSE */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.img
                  src={sp04}
                  alt="Aprendiverse 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
                <motion.img
                  src={sp05}
                  alt="Aprendiverse 2"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                />
              </div>

              {/* MEISLAND */}
              {microtendencias.slice(1, 2).map((tendencia, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-primary/5 p-8 md:p-12 rounded-lg"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{tendencia.icon}</div>
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-3 editorial-spacing">
                      {tendencia.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary font-sans editorial-spacing">
                      {tendencia.subtitle}
                    </p>
                  </div>
                  <div className="w-16 h-px bg-foreground/20 mx-auto my-6"></div>
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed editorial-spacing">
                    {tendencia.description}
                  </p>
                </motion.div>
              ))}

              {/* Imágenes MEISLAND - Asimétrico */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.img
                  src={sp06}
                  alt="Meisland 1"
                  className="w-full h-auto rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                />
                <motion.img
                  src={sp07}
                  alt="Meisland 2"
                  className="w-full h-auto rounded-lg shadow-lg md:col-span-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                />
              </div>

              {/* LIMITLESS */}
              {microtendencias.slice(2, 3).map((tendencia, index) => (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-primary/5 p-8 md:p-12 rounded-lg"
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{tendencia.icon}</div>
                    <h2 className="text-4xl md:text-5xl font-serif font-light mb-3 editorial-spacing">
                      {tendencia.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-secondary font-sans editorial-spacing">
                      {tendencia.subtitle}
                    </p>
                  </div>
                  <div className="w-16 h-px bg-foreground/20 mx-auto my-6"></div>
                  <p className="text-lg text-foreground/80 font-sans leading-relaxed editorial-spacing">
                    {tendencia.description}
                  </p>
                </motion.div>
              ))}

              {/* Imagen final LIMITLESS */}
              <motion.img
                src={sp08}
                alt="Limitless"
                className="w-full h-auto rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
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

export default SegmentoPreadolescentePage;
