import { X } from "lucide-react";
import { useEffect } from "react";
import secretGalleryImage from "@/assets/secret-gallery.jpg";

interface SecretGalleryProps {
  onClose: () => void;
}

const SecretGallery = ({ onClose }: SecretGalleryProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-accent/95 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-accent-foreground hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent-foreground"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <div className="max-w-6xl w-full space-y-8 animate-in slide-in-from-bottom duration-500">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent-foreground editorial-spacing">
            Galería secreta
          </h2>
          <p className="text-lg text-accent-foreground/80 font-sans max-w-2xl mx-auto editorial-spacing">
            Has descubierto la colección oculta — imágenes experimentales y proyectos personales
          </p>
        </div>

        <div className="aspect-video overflow-hidden bg-background/10">
          <img
            src={secretGalleryImage}
            alt="Secret Gallery"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-center text-sm text-accent-foreground/60 font-sans italic">
          "La moda es el reflejo de lo invisible" — Galería en construcción
        </p>
      </div>
    </div>
  );
};

export default SecretGallery;
