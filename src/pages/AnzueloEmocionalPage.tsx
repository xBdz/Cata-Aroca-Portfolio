import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import { Download } from "lucide-react";
import { useEffect } from "react";

const AnzueloEmocionalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Anzuelo-emocional.pdf";
    link.download = "Anzuelo-emocional.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              ETERFLUJO
            </h1>
            <p className="text-2xl md:text-3xl text-secondary font-sans editorial-spacing">
              Anzuelo Emocional
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
                ETERFLUJO explora el consumo efímero e intangible propio del universo digital.
                Las marcas dejan atrás lo físico para transformarse en experiencias sensoriales y virtuales, donde el producto se vuelve performance y ficción.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed editorial-spacing">
                En un entorno saturado, lo lúdico actúa como anzuelo emocional, invitando al usuario hiperconectado a "jugar a ser" dentro de espacios efímeros y visualmente vibrantes.
                El deseo nace entre permanencia y disolución, y el consumo se redefine como espectáculo.
              </p>
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Visual Description */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed editorial-spacing">
                Visualmente, la tendencia se expresa con formas geométricas simples, superficies brillantes y colores saturados, generando escenarios inmersivos y teatrales donde el usuario es avatar y espectador.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 font-sans leading-relaxed editorial-spacing">
                El nuevo consumidor busca vivencias únicas más que objetos, inspirado por el pop, el diseño digital y el arte inmersivo: experiencias que duran solo un instante, pero se recuerdan como un sueño.
              </p>
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Key Concepts */}
            <div className="bg-primary/5 p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 editorial-spacing text-center">
                Conceptos Claves
              </h2>
              <ul className="space-y-4">
                {[
                  "Universo intangible",
                  "Ficción coreografiada",
                  "Hábitat fugaz",
                  "Avatar",
                  "Jugar a ser"
                ].map((concept, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 text-lg md:text-xl font-sans text-foreground/80"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    {concept}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="w-24 h-px bg-foreground/20 mx-auto"></div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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

export default AnzueloEmocionalPage;
