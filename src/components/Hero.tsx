import { Eye } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import logoCatalina from "@/assets/logo-catalina.png";
import { useClueHunt } from "@/hooks/useClueHunt";

const Hero = () => {
  const { foundClues, findClue } = useClueHunt();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.7)",
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="fade-in">
          <img
            src={logoCatalina}
            alt="Catalina Aroca"
            className="h-32 md:h-48 w-auto mx-auto mb-8 opacity-90"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-background mb-6 editorial-spacing">
            Fashion Stylist & Creative Director
          </h1>
          <p className="text-lg md:text-xl text-background/90 font-sans max-w-2xl mx-auto editorial-spacing">
            Estilismo editorial, fashion films y proyectos conceptuales que exploran la moda como lenguaje visual
          </p>

          {!foundClues.includes("hero") && (
            <button
              onClick={() => findClue("hero")}
              className="absolute bottom-8 right-8 opacity-30 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-background"
              aria-label="Hidden clue"
            >
              <Eye size={20} className="text-background" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
