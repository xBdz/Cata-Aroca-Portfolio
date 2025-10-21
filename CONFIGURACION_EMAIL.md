# 📧 Configuración de EmailJS para el Formulario de Contacto

## 🚀 Pasos para Configurar EmailJS

### 1. Crear Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Crea tu cuenta (puedes usar Google, GitHub o email)
4. **Plan gratuito:** 200 emails/mes (suficiente para un portfolio)

### 2. Configurar el Servicio de Email

1. Una vez dentro, ve a **"Email Services"** en el menú lateral
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado para uso personal)
   - Outlook
   - Yahoo
   - O cualquier otro
4. Conecta tu cuenta de email (catalinaaroca@gmail.com)
5. Copia el **Service ID** que aparece (ejemplo: `service_abc123`)

### 3. Crear Template de Email

1. Ve a **"Email Templates"** en el menú lateral
2. Haz clic en **"Create New Template"**
3. Configura el template:

#### **Subject (Asunto):**
```
Nuevo mensaje de contacto de {{from_name}}
```

#### **Content (Contenido):**
```
Has recibido un nuevo mensaje desde tu portfolio:

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de tu portfolio.
```

#### **From Email:**
- Usa tu email: `catalinaaroca@gmail.com`

#### **To Email:**
- Usa: `{{to_email}}` (se llenará automáticamente con tu email)

4. Haz clic en **"Save"**
5. Copia el **Template ID** (ejemplo: `template_xyz789`)

### 4. Obtener Public Key

1. Ve a **"Account"** en el menú lateral
2. Busca la sección **"API Keys"**
3. Copia tu **Public Key** (ejemplo: `abcXYZ123_456`)

### 5. Configurar Variables de Entorno

1. En la raíz del proyecto, crea un archivo `.env` (NO `.env.example`)
2. Copia y pega esto, reemplazando con tus valores:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abcXYZ123_456
```

⚠️ **IMPORTANTE:** El archivo `.env` está en `.gitignore`, así que NO se subirá a GitHub (es seguro)

### 6. Reiniciar el Servidor de Desarrollo

Después de crear el archivo `.env`:

```bash
# Detén el servidor (Ctrl+C)
# Vuelve a iniciar
npm run dev
```

### 7. Probar el Formulario

1. Ve a la sección de contacto en tu portfolio
2. Llena el formulario con datos de prueba
3. Haz clic en "Enviar mensaje"
4. Deberías recibir el email en `catalinaaroca@gmail.com`

## 🔒 Seguridad

- ✅ Las credenciales están en `.env` (no se suben a GitHub)
- ✅ EmailJS tiene protección anti-spam incorporada
- ✅ El Public Key es seguro de exponer en el frontend
- ✅ Solo tú recibes los emails (a catalinaaroca@gmail.com)

## 🎨 Personalización del Template

Puedes personalizar el template de email en EmailJS con:

- **HTML personalizado** (colores, logos, etc.)
- **Auto-reply** (respuesta automática al remitente)
- **CC/BCC** (copias a otros emails)

## 📊 Monitoreo

En el dashboard de EmailJS puedes ver:
- Emails enviados
- Tasa de éxito/error
- Límite mensual usado

## ⚠️ Troubleshooting

### "EmailJS no está configurado correctamente"
- Verifica que el archivo `.env` existe
- Verifica que las variables empiezan con `VITE_`
- Reinicia el servidor de desarrollo

### "Error al enviar el mensaje"
- Verifica que los IDs son correctos
- Revisa la consola del navegador para más detalles
- Verifica que no superaste el límite mensual (200/mes)

### Gmail bloquea los emails
- Ve a la configuración de Gmail
- Permite "aplicaciones menos seguras" o usa "App Password"
- EmailJS te guiará en este proceso

## 🚀 Deployment (Vercel/Netlify)

Cuando hagas deploy, agrega las variables de entorno en:

**Vercel:**
1. Project Settings → Environment Variables
2. Agrega las 3 variables con sus valores

**Netlify:**
1. Site Settings → Environment Variables
2. Agrega las 3 variables con sus valores

---

¿Necesitas ayuda? Revisa la [documentación de EmailJS](https://www.emailjs.com/docs/)
