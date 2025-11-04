import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useClueHunt } from "@/hooks/useClueHunt";
import logoSymbolBorde from "@/assets/Logo/logo-simbolo-borde.png";

const Contact = () => {
  const { t } = useLanguage();
  const { findClue, foundClues } = useClueHunt();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Debug: Log para verificar variables (remover en producción)
      console.log("EmailJS Config:", {
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
        hasPublicKey: !!publicKey,
        serviceId: serviceId ? `${serviceId.substring(0, 8)}...` : 'undefined',
      });

      // Verificar que las variables de entorno estén configuradas
      if (!serviceId || !templateId || !publicKey) {
        toast.error("Configuración incompleta", {
          description: "Por favor, contáctame directamente a catalinaaroca@gmail.com",
        });
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      // Enviar email usando EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "catalinaaroca@gmail.com",
        },
        publicKey
      );

      toast.success("¡Mensaje enviado con éxito!", {
        description: "Me pondré en contacto contigo pronto.",
      });
      
      // Limpiar formulario
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast.error("Error al enviar el mensaje", {
        description: "Por favor, intenta nuevamente o contáctame directamente por email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 editorial-spacing">
            {t("contact.title")}
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing leading-relaxed">
            {t("contact.description")}
          </p>

          {/* Logo de búsqueda del tesoro */}
          {!foundClues.includes("contact") && (
            <motion.button
              onClick={() => findClue("contact")}
              className="absolute top-4 right-4 md:top-8 md:right-8 focus:outline-none group cursor-pointer"
              aria-label="Símbolo oculto"
              animate={{
                opacity: [0.6, 0.85, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Difuminado colorido de fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-pink-400/30 to-rose-400/30 blur-xl rounded-full scale-150" />
                <img
                  src={logoSymbolBorde}
                  alt="Hidden symbol"
                  className="relative w-8 h-8 opacity-75"
                />
              </div>
            </motion.button>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest font-sans mb-3 text-secondary">
                  Nombre
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-transparent border-0 border-b border-foreground/20 rounded-none focus:border-foreground focus:ring-0 px-0 py-3 text-lg transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-sans mb-3 text-secondary">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-0 border-b border-foreground/20 rounded-none focus:border-foreground focus:ring-0 px-0 py-3 text-lg transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-sans mb-3 text-secondary">
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-transparent border-0 border-b border-foreground/20 rounded-none focus:border-foreground focus:ring-0 px-0 py-3 text-lg resize-none transition-colors"
                  placeholder="Contame sobre tu proyecto..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-sans py-6 text-sm uppercase tracking-widest transition-all duration-300 hover:tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Email directo */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-sans text-secondary/60 mb-2">
                {t("contact.email")}
              </h3>
              <a 
                href="mailto:catalinaaroca@gmail.com" 
                className="text-2xl md:text-3xl font-serif hover:text-secondary transition-colors duration-300 flex items-center gap-3 group"
              >
                <Mail className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                catalinaaroca@gmail.com
              </a>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-sans text-secondary/60 mb-6">
                {t("contact.social")}
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://www.instagram.com/cata_aroca?igsh=MXhhYmZvajg5aGEyMg%3D%3D&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-sans hover:text-secondary transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  @cata_aroca
                </a>
                <a 
                  href="https://www.linkedin.com/in/catalina-aroca-0458ab1b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-sans hover:text-secondary transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Catalina Aroca
                </a>
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="pt-8 border-t border-foreground/10">
              <h3 className="text-sm uppercase tracking-widest font-sans text-secondary/60 mb-2">
                Buenos Aires, Argentina
              </h3>
              <p className="text-lg md:text-xl font-sans text-foreground">
                Actualmente disponible para proyectos de estilismo editorial, producción de moda y asesoría creativa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
