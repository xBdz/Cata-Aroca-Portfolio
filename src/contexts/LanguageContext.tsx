import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Traducciones
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.portfolio": "Portfolio",
    "nav.libros": "Libros de tendencia",
    "nav.films": "Fashion Films",
    "nav.tif": "TIF",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Catalina Aroca",
    "hero.subtitle": "Fashion Stylist",
    "hero.description": "Creando narrativas visuales a través del estilismo editorial y la dirección de moda",
    "hero.cta": "Explorar portfolio",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.description": "Una selección curada de trabajos que documentan mi visión creativa y exploración visual en el mundo de la moda",
    "portfolio.editorial": "Editorial",
    "portfolio.styling": "Estilismo",
    "portfolio.campaigns": "Campañas",
    "portfolio.personal": "Proyectos Personales",
    "portfolio.images": "imágenes",

    // Libros de tendencia
    "libros.title": "Libros de tendencia",
    "libros.description": "Análisis de tendencias y referencias visuales que inspiran mi trabajo creativo",

    // Fashion Films
    "films.title": "Fashion Films",
    "films.description": "Proyectos audiovisuales que exploran la moda en movimiento",

    // TIF
    "tif.title": "Trabajo Integrador Final",
    "tif.subtitle": "Proyecto de graduación",
    "tif.description": "Mi proyecto final de carrera, donde desarrollo una propuesta integral de estilismo y dirección creativa",
    "tif.cta": "Ver proyecto completo",

    // Secret Hunt
    "secret.title": "Búsqueda del Tesoro",
    "secret.description": "Encuentra los 3 símbolos de la marca ocultos en el portfolio para desbloquear contenido exclusivo",
    "secret.quote": '"La incertidumbre es una invitación a descubrir hasta dónde se puede llegar."',
    "secret.progress": "Progreso",
    "secret.found": "Encontradas",
    "secret.unlock": "Desbloquear Galería",
    "secret.unlocked": "¡Galería Desbloqueada!",
    "secret.unlockedDescription": "Has encontrado todos los símbolos ocultos. Accede ahora a contenido exclusivo.",
    "secret.clue1": "Primera pista encontrada",
    "secret.clue2": "Segunda pista encontrada",
    "secret.clue3": "Tercera pista encontrada",

    // Secret Gallery
    "gallery.title": "Colección Secreta",
    "gallery.subtitle": "Estilismo editorial exclusivo",
    "gallery.description1": "Esta colección representa el trabajo más personal y experimental de mi portfolio. Piezas que exploran los límites entre la moda, el arte y la narrativa visual.",
    "gallery.description2": "Solo aquellos con un ojo atento para los detalles pueden acceder a estas imágenes, que documentan momentos únicos de creación y exploración estética.",
    "gallery.cta": "Ver Fotos",
    "gallery.image": "Imagen",

    // About
    "about.title": "Sobre mí",
    "about.intro": "Soy una estilista de moda apasionada por crear narrativas visuales que trascienden las tendencias. Mi trabajo se centra en la exploración de identidades a través del vestuario y la dirección creativa.",
    "about.background": "Con formación en diseño de indumentaria y estilismo, he desarrollado proyectos editoriales, campañas publicitarias y producciones audiovisuales que buscan contar historias únicas.",
    "about.approach": "Mi enfoque combina la investigación de tendencias, el análisis cultural y una sensibilidad estética que busca lo extraordinario en lo cotidiano.",
    "about.specialties.title": "Especialidades",
    "about.specialties.editorial": "Estilismo Editorial",
    "about.specialties.creative": "Dirección Creativa",
    "about.specialties.production": "Producción de Moda",

    // Contact
    "contact.title": "Contacto",
    "contact.description": "¿Interesado en colaborar? Estoy disponible para proyectos editoriales, campañas y consultoría de estilismo",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Buenos Aires, Argentina",
    "contact.social": "Sígueme en redes",

    // Footer
    "footer.rights": "Todos los derechos reservados",
    "footer.location": "Buenos Aires, Argentina",

    // Loading
    "loading.progress": "Cargando",
  },
  en: {
    // Navigation
    "nav.portfolio": "Portfolio",
    "nav.libros": "Trend Books",
    "nav.films": "Fashion Films",
    "nav.tif": "TIF",
    "nav.about": "About",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Catalina Aroca",
    "hero.subtitle": "Fashion Stylist",
    "hero.description": "Creating visual narratives through editorial styling and fashion direction",
    "hero.cta": "Explore portfolio",

    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.description": "A curated selection of works documenting my creative vision and visual exploration in the fashion world",
    "portfolio.editorial": "Editorial",
    "portfolio.styling": "Styling",
    "portfolio.campaigns": "Campaigns",
    "portfolio.personal": "Personal Projects",
    "portfolio.images": "images",

    // Libros de tendencia
    "libros.title": "Trend Books",
    "libros.description": "Trend analysis and visual references that inspire my creative work",

    // Fashion Films
    "films.title": "Fashion Films",
    "films.description": "Audiovisual projects exploring fashion in motion",

    // TIF
    "tif.title": "Final Integration Project",
    "tif.subtitle": "Graduation project",
    "tif.description": "My final career project, where I develop a comprehensive proposal for styling and creative direction",
    "tif.cta": "View full project",

    // Secret Hunt
    "secret.title": "Treasure Hunt",
    "secret.description": "Find the 3 hidden symbols in the portfolio to unlock exclusive content",
    "secret.quote": "Details make perfection, and perfection is not a detail",
    "secret.progress": "Progress",
    "secret.found": "Found",
    "secret.unlock": "Unlock Gallery",
    "secret.unlocked": "Gallery Unlocked!",
    "secret.unlockedDescription": "You've found all hidden symbols. Access exclusive content now.",
    "secret.clue1": "First clue found",
    "secret.clue2": "Second clue found",
    "secret.clue3": "Third clue found",

    // Secret Gallery
    "gallery.title": "Secret Collection",
    "gallery.subtitle": "Exclusive editorial styling",
    "gallery.description1": "This collection represents my most personal and experimental work. Pieces that explore the boundaries between fashion, art and visual narrative.",
    "gallery.description2": "Only those with a keen eye for detail can access these images, documenting unique moments of creation and aesthetic exploration.",
    "gallery.cta": "View Photos",
    "gallery.image": "Image",

    // About
    "about.title": "About",
    "about.intro": "I'm a fashion stylist passionate about creating visual narratives that transcend trends. My work focuses on exploring identities through wardrobe and creative direction.",
    "about.background": "With training in fashion design and styling, I've developed editorial projects, advertising campaigns and audiovisual productions that seek to tell unique stories.",
    "about.approach": "My approach combines trend research, cultural analysis and an aesthetic sensibility that seeks the extraordinary in the everyday.",
    "about.specialties.title": "Specialties",
    "about.specialties.editorial": "Editorial Styling",
    "about.specialties.creative": "Creative Direction",
    "about.specialties.production": "Fashion Production",

    // Contact
    "contact.title": "Contact",
    "contact.description": "Interested in collaborating? I'm available for editorial projects, campaigns and styling consultancy",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Buenos Aires, Argentina",
    "contact.social": "Follow me",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.location": "Buenos Aires, Argentina",

    // Loading
    "loading.progress": "Loading",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
