import { Eye } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpg";
import { useClueHunt } from "@/hooks/useClueHunt";

const About = () => {
  const { foundClues, findClue } = useClueHunt();

  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden bg-card">
              <img
                src={aboutPortrait}
                alt="Catalina Aroca"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {!foundClues.includes("about") && (
              <button
                onClick={() => findClue("about")}
                className="absolute top-4 right-4 opacity-20 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Hidden clue"
              >
                <Eye size={18} className="text-background" />
              </button>
            )}
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 editorial-spacing">
              Sobre mí
            </h2>
            <p className="text-lg text-secondary font-sans editorial-spacing leading-relaxed">
              Soy Catalina Aroca, estilista de moda y directora creativa especializada en construir
              narrativas visuales que fusionan investigación conceptual con ejecución editorial.
            </p>
            <p className="text-base text-secondary font-sans editorial-spacing leading-relaxed">
              Mi trabajo explora la moda como un lenguaje que articula identidad, cultura y
              transformación. Desde libros de tendencia hasta fashion films, cada proyecto
              es una oportunidad para investigar, experimentar y contar historias visuales
              con intención y cuidado estético.
            </p>
            <p className="text-base text-secondary font-sans editorial-spacing leading-relaxed">
              Formada en dirección de moda y estilismo, colaboro con marcas, revistas y
              proyectos independientes que valoran la mirada autoral y el rigor creativo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
