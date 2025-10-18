import logoSymbol from "@/assets/logo-symbol.png";

const TIFSection = () => {
  return (
    <section id="tif" className="py-24 px-6 bg-primary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <img
            src={logoSymbol}
            alt="TIF Symbol"
            className="h-24 md:h-32 w-auto mx-auto mb-8 opacity-80"
          />
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 editorial-spacing">
            TIF
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing leading-relaxed">
            Trabajo Integrador Final — Un proyecto que sintetiza estilismo, investigación de tendencias,
            narrativa audiovisual y conceptualización artística en una propuesta cohesiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-serif editorial-spacing">Investigación</h3>
            <p className="text-secondary font-sans text-sm editorial-spacing">
              Análisis profundo de tendencias, referencias culturales y contexto histórico
            </p>
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-serif editorial-spacing">Ejecución</h3>
            <p className="text-secondary font-sans text-sm editorial-spacing">
              Estilismo, dirección creativa y producción de contenido editorial
            </p>
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-2xl font-serif editorial-spacing">Narrativa</h3>
            <p className="text-secondary font-sans text-sm editorial-spacing">
              Construcción de un discurso visual coherente y memorable
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-sans italic">
            * El proyecto TIF integra elementos de todas las categorías del portfolio en una obra completa
          </p>
        </div>
      </div>
    </section>
  );
};

export default TIFSection;
