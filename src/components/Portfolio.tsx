import { Eye } from "lucide-react";
import stylingImage from "@/assets/portfolio-styling.jpg";
import trendsImage from "@/assets/portfolio-trends.jpg";
import filmsImage from "@/assets/portfolio-films.jpg";
import conceptualImage from "@/assets/portfolio-conceptual.jpg";
import { useClueHunt } from "@/hooks/useClueHunt";

const portfolioCategories = [
  {
    id: "styling",
    title: "Estilismo",
    image: stylingImage,
    description: "Editorial y comercial para revistas, marcas y campañas de moda",
  },
  {
    id: "trends",
    title: "Libros de tendencia",
    image: trendsImage,
    description: "Investigación de tendencias, paletas y forecasting estacional",
  },
  {
    id: "films",
    title: "Fashion films",
    image: filmsImage,
    description: "Dirección creativa y estilismo para narrativas visuales en movimiento",
  },
  {
    id: "conceptual",
    title: "Proyectos conceptuales",
    image: conceptualImage,
    description: "Exploraciones artísticas que desafían los límites de la moda",
  },
];

const Portfolio = () => {
  const { foundClues, findClue } = useClueHunt();

  return (
    <section id="portfolio" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-4 editorial-spacing">
            Portfolio
          </h2>
          <p className="text-lg text-secondary font-sans max-w-2xl mx-auto editorial-spacing">
            Una selección de trabajos que documentan mi visión creativa
          </p>

          {!foundClues.includes("portfolio") && (
            <button
              onClick={() => findClue("portfolio")}
              className="absolute -right-4 top-0 opacity-20 hover:opacity-100 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Hidden clue"
            >
              <Eye size={18} className="text-secondary" />
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {portfolioCategories.map((category, index) => (
            <div
              key={category.id}
              className="group hover-lift fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden bg-card aspect-[4/5] mb-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif mb-2 editorial-spacing">
                {category.title}
              </h3>
              <p className="text-secondary font-sans editorial-spacing text-sm md:text-base">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
