import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
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
    <section id="contact" className="py-24 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 editorial-spacing">
            Contacto
          </h2>
          <p className="text-lg text-secondary font-sans max-w-2xl mx-auto editorial-spacing">
            ¿Tenés un proyecto en mente? Me encantaría conocer tu idea
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-sans mb-2 text-foreground">
              Nombre
            </label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-background border-border focus:ring-accent"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-sans mb-2 text-foreground">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-background border-border focus:ring-accent"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-sans mb-2 text-foreground">
              Mensaje
            </label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full bg-background border-border focus:ring-accent resize-none"
              placeholder="Contame sobre tu proyecto..."
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans py-6 text-base editorial-spacing"
          >
            Enviar mensaje
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
