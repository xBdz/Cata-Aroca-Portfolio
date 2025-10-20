import aboutPortrait from "@/assets/Portrait.png"; 
import { useClueHunt } from "@/hooks/useClueHunt";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import logoSymbol from "@/assets/Logo/logo-symbol.png";

const About = () => {
  const { t } = useLanguage();
  const { foundClues, findClue } = useClueHunt();

  return (
    <section id="about" className="py-20 px-6 bg-card relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light editorial-spacing text-center">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative md:col-span-2 order-2 md:order-1"
          >
            <div className="aspect-[3/4] overflow-hidden bg-background">
              <img
                src={aboutPortrait}
                alt="Catalina Aroca"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {!foundClues.includes("about") && (
              <motion.button
                onClick={() => findClue("about")}
                className="absolute top-4 right-10 focus:outline-none group cursor-pointer"
                aria-label="Símbolo oculto"
                animate={{
                  opacity: [0.6, 0.85, 0.6],
                }}
                transition={{
                  duration: 1.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  {/* Difuminado colorido de fondo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/30 via-rose-400/30 to-purple-400/30 blur-xl rounded-full scale-150" />
                  <img
                    src={logoSymbol}
                    alt="Hidden symbol"
                    className="relative w-8 h-8 opacity-75 brightness-110 saturate-150"
                    style={{ filter: 'hue-rotate(300deg)' }}
                  />
                </div>
              </motion.button>
            )}
          </motion.div>

          {/* Contenido */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 order-1 md:order-2 space-y-8"
          >
            {/* Introducción destacada */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-foreground">
                {t("about.intro")}
              </p>
            </div>

            {/* Divider */}
            <div className="w-16 h-px bg-foreground/20"></div>

            {/* Cuerpo del texto */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-secondary font-sans leading-relaxed mb-6">
                {t("about.background")}
              </p>
              <p className="text-lg md:text-xl text-secondary font-sans leading-relaxed mb-6">
                {t("about.approach")}
              </p>
            </div>

            {/* Especialidades */}
            <div className="pt-8">
              <h3 className="text-xs uppercase tracking-widest font-sans mb-6 text-secondary">
                {t("about.specialties.title")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-base font-sans text-foreground">{t("about.specialties.editorial")}</p>
                  <p className="text-base font-sans text-foreground">{t("about.specialties.creative")}</p>
                  <p className="text-base font-sans text-foreground">{t("about.specialties.production")}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-base font-sans text-foreground">Fashion Films</p>
                  <p className="text-base font-sans text-foreground">Investigación de Tendencias</p>
                  <p className="text-base font-sans text-foreground">Asesoría de Imagen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
