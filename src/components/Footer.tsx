import { Instagram, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="py-16 px-6 bg-foreground text-background border-t border-background/10">
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif font-light mb-4 tracking-wider">
              CATALINA AROCA
            </h3>
            <p className="text-sm text-background/70 font-sans leading-relaxed">
              Estilismo editorial • Producción de moda • Asesoría creativa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans mb-6 text-background/60">
              Navegación
            </h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block text-sm font-sans text-background/80 hover:text-background transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("libros-tendencia")}
                className="block text-sm font-sans text-background/80 hover:text-background transition-colors"
              >
                Libros de Tendencia
              </button>
              <button
                onClick={() => scrollToSection("fashion-films")}
                className="block text-sm font-sans text-background/80 hover:text-background transition-colors"
              >
                Fashion Films
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm font-sans text-background/80 hover:text-background transition-colors"
              >
                Sobre mí
              </button>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans mb-6 text-background/60">
              Contacto
            </h4>
            <div className="space-y-4 mb-6">
              <a 
                href="mailto:catalina@aroca.com" 
                className="flex items-center gap-2 text-sm font-sans text-background/80 hover:text-background transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                catalina@aroca.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/catalinaaroca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/in/catalinaaroca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-sans text-background/60 tracking-wide">
              © {new Date().getFullYear()} Catalina Aroca. {t("footer.rights")}.
            </p>
            <p className="text-xs font-sans text-background/60 tracking-wide">
              {t("footer.location")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
