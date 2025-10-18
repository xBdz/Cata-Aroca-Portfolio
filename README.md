# Catalina Aroca - Fashion Portfolio

Portfolio editorial minimalista para estilista de moda Catalina Aroca. Diseño contemporáneo con animaciones sutiles, búsqueda de pistas interactiva y galería secreta desbloqueable.

## 🎨 Características

- **Diseño minimalista editorial**: Inspirado en revistas de alta moda, con mucho aire, grillas limpias y jerarquía tipográfica marcada
- **Paleta de colores**: Beige/crema cálido + negro editorial + grises suaves
- **Tipografía**: Playfair Display (serif) para títulos, Inter (sans-serif) para cuerpo
- **Animaciones sutiles**: Fade-in, hover effects, transiciones fluidas que respetan prefers-reduced-motion
- **Totalmente responsive**: Mobile-first, optimizado para todos los tamaños de pantalla
- **Accesible**: Navegación por teclado, alt texts, focus visible

## 📂 Secciones

1. **Hero/Inicio**: Presentación con logo grande y navegación minimalista
2. **Portfolio**: 4 categorías - Estilismo, Libros de tendencia, Fashion films, Proyectos conceptuales
3. **TIF**: Sección especial que integra elementos de todas las categorías
4. **Sobre mí**: Biografía con imagen y texto editorial
5. **Contacto**: Formulario UI (no envía emails, solo muestra toast)
6. **Footer**: Redes sociales con íconos discretos

## 🔍 Búsqueda de pistas (Easter egg)

El sitio incluye una pequeña "búsqueda del tesoro" interactiva:

- Busca los íconos 👁 ocultos en 3 secciones: Hero, Portfolio y Sobre mí
- Cada pista encontrada se registra y persiste en localStorage
- Al encontrar las 3 pistas, se desbloquea una galería secreta
- Indicador en esquina inferior izquierda muestra progreso
- La galería muestra imágenes experimentales y proyectos personales

## 🖼️ Reemplazar imágenes

Todas las imágenes son placeholders generados. Para reemplazarlas con contenido real:

1. Coloca tus imágenes en `src/assets/`
2. Actualiza las importaciones en los componentes:

```typescript
// En src/components/Portfolio.tsx
import stylingImage from "@/assets/portfolio-styling.jpg";
// Reemplaza con tu imagen
import stylingImage from "@/assets/mi-imagen-estilismo.jpg";
```

### Imágenes requeridas:

- `hero-image.jpg` (1920x1080) - Hero section background
- `logo-aroca.png` - Logo "AROCA" (horizontal)
- `logo-catalina.png` - Logo "CATALINA" (horizontal)
- `logo-symbol.png` - Símbolo/marca personal
- `portfolio-styling.jpg` (1024x1024) - Estilismo
- `portfolio-trends.jpg` (1024x1024) - Libros de tendencia
- `portfolio-films.jpg` (1024x1024) - Fashion films
- `portfolio-conceptual.jpg` (1024x1024) - Proyectos conceptuales
- `about-portrait.jpg` (800x1024) - Foto personal
- `secret-gallery.jpg` (1920x1080) - Galería secreta

## 🚀 Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📦 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Vite
3. Deploy automático en cada push

## 🎨 Personalización del diseño

El sistema de diseño está centralizado en:

- `src/index.css` - Variables CSS (colores, espaciado, animaciones)
- `tailwind.config.ts` - Configuración de Tailwind (fuentes, colores extendidos)

Para cambiar la paleta de colores, edita las variables HSL en `src/index.css`:

```css
:root {
  --primary: 35 30% 88%; /* Beige cálido */
  --accent: 0 0% 10%; /* Negro editorial */
  /* ... */
}
```

## 📱 Redes sociales

Actualiza los links en `src/components/Footer.tsx`:

```typescript
<a href="https://instagram.com/tu-usuario" ...>
```

## 🔧 Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- Lucide React icons
- Sonner (toasts)

## 📄 Licencia

Todos los derechos reservados © 2025 Catalina Aroca

---

Built with ❤️ using Lovable
