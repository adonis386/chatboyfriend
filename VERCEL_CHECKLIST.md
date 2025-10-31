# ✅ Checklist para Deploy en Vercel

## Antes de Desplegar

- [x] ✅ API routes creadas en `/api/chat.js` y `/api/reset.js`
- [x] ✅ `vercel.json` configurado correctamente
- [x] ✅ Frontend en `/client` con Vite
- [x] ✅ Dependencias listadas en `package.json` (root y client)

## Pasos para Desplegar

### 1. Subir código a GitHub
```bash
git add .
git commit -m "Ready for Vercel - Novio Virtual para Jaylene"
git push origin main
```

### 2. En Vercel Dashboard

1. **Nuevo Proyecto**:
   - Ve a [vercel.com](https://vercel.com)
   - "Add New Project"
   - Importa `chatboyfriend` desde GitHub

2. **Configuración del Proyecto**:
   - **Framework Preset**: Other (o déjalo en auto-detect)
   - **Root Directory**: `./` (raíz del proyecto)
   - **Build Command**: `cd client && npm install && npm run build` (o déjalo en auto)
   - **Output Directory**: `client/dist`
   - **Install Command**: `npm install && cd client && npm install`

3. **Variables de Entorno** ⚠️ IMPORTANTE:
   - Ve a "Environment Variables"
   - Agrega:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: `AIzaSyBLn9FIzkwq8Ia4PyM6WqEKtUDcKsLyyiM`
     - Marca todas las opciones: ✅ Production, ✅ Preview, ✅ Development

4. **Deploy**:
   - Haz clic en "Deploy"
   - Espera a que termine el build (puede tardar 2-3 minutos)

### 3. Verificar que Funciona

Una vez desplegado, deberías ver:
- ✅ La interfaz carga correctamente
- ✅ El header dice "Tu Novio Virtual"
- ✅ Puedes enviar un mensaje
- ✅ El bot responde como novio virtual

## Si hay Errores

### Error: "Module not found: @google/generative-ai"
**Solución**: Las dependencias deben instalarse en la raíz también. Verifica que:
- El `package.json` raíz tiene `@google/generative-ai`
- El build command instala dependencias del root

### Error: "GEMINI_API_KEY is not defined"
**Solución**: 
- Verifica que agregaste la variable en el dashboard
- Asegúrate de aplicarla a Production, Preview y Development
- Vuelve a hacer deploy después de agregar la variable

### Error: "Function timeout"
**Solución**: 
- Las respuestas de Gemini pueden tardar
- El plan gratuito tiene 10 segundos de timeout
- Si es muy lento, considera upgrade a Pro (60s)

### Error: "Build failed"
**Solución**: 
- Verifica que `node_modules` está en `.gitignore`
- Asegúrate de que todos los archivos necesarios estén en GitHub
- Revisa los logs de build en Vercel

## Estructura en Vercel

```
/api/chat.js     → Serverless function
/api/reset.js    → Serverless function
/client/         → Frontend React (build a client/dist)
```

## URLs

Después del deploy tendrás:
- **Production**: `https://tu-proyecto.vercel.app`
- **Preview URLs**: Una por cada push/PR

---

¡Todo listo para desplegar! 🚀
