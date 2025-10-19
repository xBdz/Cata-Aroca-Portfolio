import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only - no actual sending
    toast.success("Mensaje recibido. Me pondré en contacto pronto.", {
      description: "Gracias por tu interés en colaborar",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 editorial-spacing">
            {t("contact.title")}
          </h2>
          <p className="text-xl md:text-2xl text-secondary font-sans max-w-3xl mx-auto editorial-spacing leading-relaxed">
            {t("contact.description")}
          </p>
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
                className="w-full bg-foreground text-background hover:bg-foreground/90 font-sans py-6 text-sm uppercase tracking-widest transition-all duration-300 hover:tracking-wider"
              >
                Enviar mensaje
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
                href="mailto:catalina@aroca.com" 
                className="text-2xl md:text-3xl font-serif hover:text-secondary transition-colors duration-300 flex items-center gap-3 group"
              >
                <Mail className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                catalina@aroca.com
              </a>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="text-sm uppercase tracking-widest font-sans text-secondary/60 mb-6">
                {t("contact.social")}
              </h3>
              <div className="space-y-4">
                <a 
                  href="https://instagram.com/catalinaaroca" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg font-sans hover:text-secondary transition-colors duration-300 group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  @catalinaaroca
                </a>
                <a 
                  href="https://linkedin.com/in/catalinaaroca" 
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
                {t("contact.location")}
              </h3>
              <p className="text-lg md:text-xl font-sans text-foreground">
                {t("contact.location")} Actualmente disponible para proyectos de estilismo editorial, producción de moda y asesoría creativa.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
