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

  const handleNavigation = (item: typeof navItems[0]) => {
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

  const navItems = [
    { name: t("nav.portfolio"), href: "#portfolio", isRoute: false },
    { name: t("nav.libros"), href: "/libros-tendencia", isRoute: true },
    { name: t("nav.films"), href: "/fashion-films", isRoute: true },
    { name: t("nav.tif"), href: "/tif", isRoute: true },
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
        {/* Desktop Menu - Centrado */}
        <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item)}
              className="text-sm uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
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
          <div className="md:hidden mt-6 pb-6 space-y-5 border-t border-foreground/10 pt-6">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item)}
                className="block w-full text-left text-xs uppercase tracking-widest font-sans text-secondary hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
