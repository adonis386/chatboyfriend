# 🚀 Guía de Despliegue en Vercel

Esta aplicación está completamente preparada para funcionar en Vercel. Sigue estos pasos:

## Pasos Rápidos

### 1. Preparar el código (Ya hecho ✅)
- ✅ API Routes creadas en `/api/`
- ✅ Frontend configurado
- ✅ `vercel.json` configurado

### 2. Subir a GitHub (Si aún no lo has hecho)

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 3. Desplegar en Vercel

#### Opción A: Desde el Dashboard (Más fácil)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "Add New Project"
3. Importa tu repositorio `chatboyfriend` de GitHub
4. **IMPORTANTE**: Ve a "Environment Variables" y agrega:
   - Nombre: `GEMINI_API_KEY`
   
   - Aplica a: Production, Preview, Development ✅
5. Haz clic en "Deploy"

#### Opción B: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Cuando pregunte por variables de entorno:
# GEMINI_API_KEY = AIzaSyBLn9FIzkwq8Ia4PyM6WqEKtUDcKsLyyiM
```

### 4. ¡Listo!

Tu aplicación estará disponible en:
- `https://tu-proyecto.vercel.app`

## Estructura en Vercel

```
/api/chat.js      → /api/chat (POST)
/api/reset.js     → /api/reset (POST)
/client/          → Frontend React (se construye automáticamente)
```

## Características en Vercel

✅ **Serverless Functions**: Cada API route es una función serverless
✅ **Auto-scaling**: Se escala automáticamente según la demanda
✅ **CDN Global**: El frontend se sirve desde una CDN mundial
✅ **HTTPS Automático**: SSL/TLS configurado automáticamente
✅ **Deploy Preview**: Cada PR genera un preview automático

## Limitaciones del Plan Gratuito

- Timeout de funciones: 10 segundos (suficiente para Gemini)
- Ancho de banda: 100GB/mes
- Builds: 6000 minutos/mes

## Troubleshooting

### Error: "GEMINI_API_KEY is not defined"
→ Asegúrate de agregar la variable de entorno en el dashboard de Vercel

### Error: "Function timeout"
→ Las respuestas de Gemini pueden tardar. Considera upgrade a Pro (60s timeout)

### Error: "Module not found"
→ Verifica que todas las dependencias estén en `package.json`

## Verificación Post-Deploy

1. ✅ Abre tu URL de Vercel
2. ✅ Verifica que el frontend carga correctamente
3. ✅ Envía un mensaje de prueba
4. ✅ Verifica que Jaylene responde

---

¡Listo para desplegar! 🎉
