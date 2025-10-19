# 📝 Notas de Deployment - Portfolio Catalina Aroca

## ✅ Cambios Implementados

### 🎨 Hero Section Renovada
- **Logos reales** integrados (CATALINA + AROCA)
- **Frases rotativas** que muestran conceptos clave cada 4 segundos
- **Animaciones elegantes** con Framer Motion
- **CTA claro** ("Explorar portfolio")
- **Diseño minimalista** con patrón sutil de fondo

### 🖼️ Portfolio con Galerías Reales
- **Estilismo**: 23 imágenes en galería lightbox
- **Proyectos Conceptuales**: 21 imágenes en galería lightbox
- **Click en portadas** abre galería completa con navegación
- **Contador de imágenes** visible en cada categoría

### 📚 Libros de Tendencia
- **3 PDFs** descargables desde el sitio:
  - Anzuelo Emocional (10 MB)
  - La Industria Artesanal (85 MB)
  - Segmento Preadolescente (65 MB)
- **Botones de descarga** directa
- **Portadas visuales** (actualizables)

### 🎬 Fashion Films
- **3 videos de YouTube** embedidos (links de ejemplo - REEMPLAZAR)
- **Thumbnails automáticos** desde YouTube
- **Click abre en nueva pestaña**
- **Diseño moderno** con overlay de play button

### 🎯 TIF Section
- **10 imágenes** de la sección TIFF en galería
- **Logo símbolo** integrado
- **Portada grande** con call to action

### 🧭 Navegación Actualizada
- Links a todas las nuevas secciones
- Responsive mobile menu
- Smooth scroll entre secciones

---

## 🚨 ACCIONES REQUERIDAS

### 1. Instalar Dependencias
```bash
npm install
```

Esto instalará las nuevas dependencias:
- `framer-motion@^11.11.17` - Animaciones
- `react-photo-view@^1.2.6` - Lightbox (ya no se usa, puedes removerla si quieres)

### 2. Actualizar Links de YouTube
En `src/components/FashionFilms.tsx` (líneas 7-23), reemplazar:

```typescript
const fashionFilms = [
  {
    id: 1,
    title: "Fashion Film #1", // Cambiar título
    description: "...", // Cambiar descripción
    youtubeId: "dQw4w9WgXcQ", // ⚠️ REEMPLAZAR con ID real
    thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`,
  },
  // ... hacer lo mismo con los otros 2 videos
];
```

**¿Cómo obtener el YouTube ID?**
- URL de ejemplo: `https://www.youtube.com/watch?v=ABC123xyz`
- El ID es: `ABC123xyz` (después de `v=`)

### 3. Actualizar Portadas de Libros (Opcional)
En `src/components/LibrosTendencia.tsx` (línea 6), reemplaza `portadaEstilismo` con imágenes específicas:

```typescript
import portadaAnzuelo from "@/assets/..."; // Tu imagen
import portadaIndustria from "@/assets/..."; // Tu imagen
import portadaPreadolescente from "@/assets/..."; // Tu imagen
```

Y actualiza el array `trendBooks` con las portadas correctas.

### 4. Verificar Nombres de Carpetas en Assets
Asegúrate de que las carpetas tengan exactamente estos nombres:
- `src/assets/Logo/`
- `src/assets/Estilismo/`
- `src/assets/Fashion Films/`
- `src/assets/Proyectos conceptuales/`
- `src/assets/TIFF/`
- `src/assets/Palabras y frases importantes/`
- `src/assets/Libros de tendencia/` (PDF ya movidos a `public/pdfs/`)

---

## 🎨 Frases Importantes Integradas

Las siguientes frases se muestran en el Hero en rotación automática:
1. "quieres ver mis proyectos?"
2. "no hay límites para la creación y el diseño"
3. "¿qué hago?"
4. "Primeras respuestas a una pregunta que sigue abierta"

**Otras frases disponibles** en `src/assets/Palabras y frases importantes/`:
- PRODUCTORA (imagen 15.png)
- Varias más pueden integrarse en About, Footer o Easter Egg

---

## 🚀 Testing Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará en http://localhost:8080
```

### Checklist de Testing:
- [ ] Hero muestra logos correctamente
- [ ] Frases rotan cada 4 segundos
- [ ] Click en "Explorar portfolio" hace scroll
- [ ] Galerías de Estilismo y Proyectos abren correctamente
- [ ] PDFs se descargan al hacer click
- [ ] Videos de Fashion Films abren en YouTube
- [ ] Navegación mobile funciona
- [ ] TIF gallery abre correctamente

---

## 📦 Deploy en Vercel

### Opción 1: GitHub + Vercel
1. Subir proyecto a GitHub
2. Importar en Vercel
3. Deploy automático

### Opción 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

**Importante**: Los PDFs (160MB total) se incluirán en el build. Vercel soporta hasta 250MB por deployment en plan gratuito.

---

## 🎯 Próximos Pasos Sugeridos

### Inmediatos:
1. Reemplazar links de YouTube con videos reales
2. Actualizar portadas de Libros si tienes imágenes específicas
3. Testear en mobile

### A Futuro:
1. **Optimizar imágenes**: Las PNGs son muy pesadas (algunos >7MB)
   ```bash
   # Usar sharp o imagemin para convertir a WebP
   npm install -D vite-plugin-imagemin
   ```

2. **Agregar más frases**: Las imágenes en "Palabras y frases importantes" pueden usarse en:
   - Sección About
   - Footer con frases motivacionales
   - Como rewards en el Easter Egg

3. **Mejorar About Section**: Actualizar con info real y foto

4. **Formulario de contacto funcional**: Integrar EmailJS o similar

5. **Analytics**: Agregar Google Analytics o Plausible

---

## 📄 Archivos Importantes

- `src/components/Hero.tsx` - Hero con frases rotativas
- `src/components/Portfolio.tsx` - Grid de portfolio con galerías
- `src/components/FashionFilms.tsx` - Videos de YouTube
- `src/components/LibrosTendencia.tsx` - PDFs descargables
- `src/components/TIFSection.tsx` - Galería TIF
- `src/components/ImageGallery.tsx` - Modal lightbox reutilizable
- `public/pdfs/` - Los 3 PDFs
- `vercel.json` - Configuración de deployment

---

## 🐛 Troubleshooting

**Error: "Cannot find module"**
→ Ejecutar `npm install`

**Imágenes no cargan**
→ Verificar nombres exactos de archivos y carpetas (case-sensitive)

**Videos no abren**
→ Actualizar `youtubeId` con IDs reales

**PDFs no descargan**
→ Verificar que estén en `public/pdfs/` exactamente con esos nombres

---

## ✨ Características Implementadas

- ✅ Hero animado con frases rotativas
- ✅ Portfolio con 4 secciones
- ✅ Galerías lightbox (Estilismo, Conceptual, TIF)
- ✅ Fashion Films con YouTube embeds
- ✅ Libros de Tendencia descargables
- ✅ Navegación completa y responsive
- ✅ Animaciones con Framer Motion
- ✅ Easter Egg mantienen (galería secreta)
- ✅ Configurado para Vercel
- ✅ Referencias a Lovable removidas

---

**Versión**: 2.0
**Última actualización**: Octubre 2025
**Estado**: Listo para testing y deploy
