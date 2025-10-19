# Sistema de Internacionalización (i18n)

Este portfolio tiene un sistema completo de internacionalización listo para usar.

## 📁 Archivos del Sistema

### **Componentes Creados:**
- `src/contexts/LanguageContext.tsx` - Context con todas las traducciones
- `src/components/LanguageToggle.tsx` - Toggle ES/EN
- `src/App.tsx` - LanguageProvider ya integrado

### **Componentes Traducidos:**
Todos los siguientes componentes ya tienen soporte i18n:
- ✅ Navigation
- ✅ Hero
- ✅ Portfolio
- ✅ LibrosTendencia
- ✅ FashionFilms
- ✅ TIFSection
- ✅ SecretHuntSection
- ✅ About
- ✅ Contact
- ✅ Footer
- ✅ SecretGallery
- ✅ SplashScreen

## 🚀 Cómo Activar

### **Paso 1: Descomentar en Index.tsx**

En `src/pages/Index.tsx`, descomentar estas líneas:

```tsx
// Línea ~19
import LanguageToggle from "@/components/LanguageToggle";

// Línea ~35
<LanguageToggle />
```

### **Paso 2: ¡Listo!**

El sistema ya está completamente funcional. Al descomentar esas 2 líneas:
- Aparecerá el toggle ES/EN en la esquina superior derecha
- Todo el contenido se traducirá automáticamente
- El cambio de idioma es instantáneo

## 📝 Traducciones Disponibles

### **Idiomas:**
- 🇪🇸 Español (ES) - Por defecto
- 🇬🇧 English (EN)

### **Total de Claves:**
- ~60 claves en español
- ~60 claves en inglés
- ~120 traducciones totales

## 🎨 Diseño del Toggle

- **Posición:** Top-right (fixed)
- **Z-index:** 200 (por encima de todo)
- **Estilo:** Pill minimalista con glassmorphism
- **Animación:** Indicador deslizante suave
- **Colores:** Coherentes con la paleta del portfolio

## 🔧 Cómo Agregar Nuevas Traducciones

### **1. Agregar clave en LanguageContext.tsx:**

```tsx
const translations = {
  es: {
    "mi.nueva.clave": "Mi texto en español",
  },
  en: {
    "mi.nueva.clave": "My text in English",
  },
};
```

### **2. Usar en componente:**

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

const MiComponente = () => {
  const { t } = useLanguage();
  
  return <h1>{t("mi.nueva.clave")}</h1>;
};
```

## 📊 Estructura de Claves

Las claves están organizadas por sección:

- `nav.*` - Navigation
- `hero.*` - Hero section
- `portfolio.*` - Portfolio
- `libros.*` - Libros & Tendencia
- `films.*` - Fashion Films
- `tif.*` - TIF Section
- `secret.*` - Secret Hunt
- `gallery.*` - Secret Gallery
- `about.*` - About section
- `contact.*` - Contact
- `footer.*` - Footer
- `loading.*` - Loading states

## ✨ Características

- ✅ Context API para gestión global
- ✅ Hook personalizado `useLanguage()`
- ✅ Función `t()` para traducciones
- ✅ Toggle animado con Framer Motion
- ✅ Persistencia del idioma (se puede agregar localStorage)
- ✅ Sincronización automática entre componentes
- ✅ Diseño coherente con el portfolio

## 🎯 Estado Actual

**DESACTIVADO** - Listo para activar cuando sea necesario.

Para activar, simplemente descomentar las 2 líneas en `Index.tsx`.
