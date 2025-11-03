import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: typeof contentItems[0] | typeof infoItems[0]) => {
    setIsMobileMenuOpen(false);
    
    if (item.isRoute) {
      // Navegar a ruta separada
      navigate(item.href);
    } else {
      // Si estamos en una página diferente, primero ir al home
      if (location.pathname !== "/") {
        navigate("/");
        // Esperar a que cargue y luego hacer scroll
        setTimeout(() => {
          const element = document.getElementById(item.href.replace("#", ""));
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Scroll normal en la misma página
        const element = document.getElementById(item.href.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const librosSubmenu = [
    { name: "Anzuelo Emocional", href: "/libros-tendencia/anzuelo-emocional", isRoute: true },
    { name: "Segmento Preadolescente", href: "/libros-tendencia/segmento-preadolescente", isRoute: true },
    { name: "La Industria Artesanal", href: "/libros-tendencia/industria-artesanal", isRoute: true },
  ];

  const contentItems = [
    { name: "Estilismo Editorial", href: "/estilismo-editorial", isRoute: true },
    { name: "Proyectos Conceptuales", href: "/proyectos-conceptuales", isRoute: true },
    { name: t("nav.libros"), href: "/libros-tendencia", isRoute: true, hasSubmenu: true },
    { name: t("nav.films"), href: "/fashion-films", isRoute: true },
    { name: "Investigaciones", href: "/investigaciones", isRoute: true },
  ];

  const infoItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: t("nav.about"), href: "#about", isRoute: false },
    { name: t("nav.contact"), href: "#contact", isRoute: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md border-b border-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 py-6">
        {/* Desktop Menu - Contenido izquierda, Info derecha */}
        <div className="hidden md:flex items-center justify-between">
          {/* Contenido Creativo - Izquierda */}
          <div className="flex items-center gap-6 lg:gap-8">
            {contentItems.map((item, index) => (
              item.hasSubmenu ? (
                <div key={index} className="relative group/dropdown">
                  <button
                    onClick={() => handleNavigation(item)}
                    className="text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors duration-300 relative group whitespace-nowrap"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300"></span>
                  </button>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-200">
                    <div className="bg-background border border-foreground/10 shadow-lg rounded-md overflow-hidden min-w-[220px]">
                      {librosSubmenu.map((libro, libroIndex) => (
                        <button
                          key={libroIndex}
                          onClick={() => handleNavigation(libro)}
                          className="block w-full text-left px-4 py-3 text-xs uppercase tracking-wider font-sans text-secondary hover:bg-primary/5 hover:text-foreground transition-colors"
                        >
                          {libro.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className="text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors duration-300 relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            ))}
          </div>

          {/* About y Contact - Derecha */}
          <div className="flex items-center gap-8 lg:gap-10">
            {infoItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-accent p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-foreground/10 pt-6">
            {/* Info Items - Arriba */}
            <div className="space-y-5 mb-8 pb-8 border-b border-foreground/10">
              {infoItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Content Items - Abajo */}
            <div className="space-y-5">
              {contentItems.map((item, index) => (
                item.hasSubmenu ? (
                  <div key={index} className="space-y-3">
                    <button
                      onClick={() => handleNavigation(item)}
                      className="block w-full text-left text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </button>
                    {/* Submenu para móvil */}
                    <div className="pl-4 space-y-2 border-l border-foreground/20">
                      {librosSubmenu.map((libro, libroIndex) => (
                        <button
                          key={libroIndex}
                          onClick={() => handleNavigation(libro)}
                          className="block w-full text-left text-xs uppercase tracking-wider font-sans text-secondary/70 hover:text-foreground transition-colors"
                        >
                          {libro.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item)}
                    className="block w-full text-left text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
