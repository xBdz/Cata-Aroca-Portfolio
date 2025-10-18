import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAroca from "@/assets/logo-aroca.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Home"
          >
            <img src={logoAroca} alt="Catalina Aroca" className="h-8 md:h-10 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-sm font-sans editorial-spacing text-secondary hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("tif")}
              className="text-sm font-sans editorial-spacing text-secondary hover:text-foreground transition-colors"
            >
              TIF
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-sans editorial-spacing text-secondary hover:text-foreground transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-sans editorial-spacing text-foreground hover:text-accent transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left text-sm font-sans editorial-spacing text-secondary hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("tif")}
              className="block w-full text-left text-sm font-sans editorial-spacing text-secondary hover:text-foreground transition-colors"
            >
              TIF
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sm font-sans editorial-spacing text-secondary hover:text-foreground transition-colors"
            >
              Sobre mí
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-sm font-sans editorial-spacing text-foreground hover:text-accent transition-colors"
            >
              Contacto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
