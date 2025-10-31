# 💙 Novio Virtual para Jaylene

Una aplicación de chat moderna estilo ChatGPT, donde el bot actúa como un novio virtual cariñoso y atento para Jaylene. Utiliza la API de Gemini de Google para proporcionar conversaciones naturales y afectuosas.

## 🚀 Características

- 💬 Interfaz de chat moderna y atractiva
- 🤖 Integración con Gemini API
- 💙 Personalidad de novio virtual atento y cariñoso
- 📱 Diseño responsive
- 🔄 Historial de conversación
- ✨ Animaciones suaves

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Instala las dependencias del proyecto:

```bash
npm run install-all
```

Esto instalará las dependencias tanto del servidor como del cliente.

## 🎮 Uso

### Desarrollo

Para ejecutar la aplicación en modo desarrollo (frontend y backend simultáneamente):

```bash
npm run dev
```

Esto iniciará:
- Backend en `http://localhost:3001`
- Frontend en `http://localhost:3000`

### Producción

Para construir y ejecutar en producción:

```bash
# Construir el frontend
npm run build

# Ejecutar solo el servidor
npm run server
```

## 📁 Estructura del Proyecto

```
jaylene-chat/
├── api/
│   ├── chat.js           # API route para Vercel (endpoint /api/chat)
│   └── reset.js          # API route para Vercel (endpoint /api/reset)
├── server/
│   └── index.js          # Servidor Express (solo para desarrollo local)
├── client/
│   ├── src/
│   │   ├── App.jsx       # Componente principal de React
│   │   ├── App.css       # Estilos de la aplicación
│   │   ├── main.jsx      # Punto de entrada de React
│   │   └── index.css     # Estilos globales
│   ├── index.html
│   └── vite.config.js    # Configuración de Vite
├── .env                  # Variables de entorno (API key) - solo local
├── vercel.json           # Configuración para Vercel
├── package.json
└── README.md
```

## 🔑 Configuración

El archivo `.env` contiene tu API key de Gemini:

```
GEMINI_API_KEY=tu_api_key_aqui
PORT=3001
```

**Nota:** Asegúrate de no compartir tu API key públicamente.

## 🎨 Características de la Interfaz

- Diseño moderno con gradientes y efectos glassmorphism
- Animaciones suaves en los mensajes
- Indicador de escritura mientras Jaylene responde
- Timestamps en cada mensaje
- Botón para reiniciar la conversación
- Diseño completamente responsive

## 🤖 Personalidad del Novio Virtual

El bot está programado para ser:
- Atento y cariñoso
- Comprensivo y romántico
- Un buen compañero que escucha y apoya
- Genuino en sus interacciones
- Interesado en conocer a Jaylene mejor

## 🔧 Tecnologías Utilizadas

- **Frontend:** React, Vite, CSS3
- **Backend:** Node.js, Express
- **AI:** Google Gemini API
- **HTTP Client:** Axios

## 📝 Notas

- El bot actúa como novio virtual hablando con Jaylene
- El historial de conversación se mantiene durante la sesión
- Se limita a 20 mensajes para evitar límites de tokens
- Puedes reiniciar la conversación en cualquier momento usando el botón de reinicio

## 🚀 Despliegue en Vercel

La aplicación está lista para desplegarse en Vercel. Sigue estos pasos:

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub** (si aún no lo has hecho):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

2. **Conecta tu repositorio con Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Haz clic en "New Project"
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente la configuración

3. **Configura las variables de entorno**:
   - En la configuración del proyecto en Vercel
   - Ve a "Settings" > "Environment Variables"
   - Agrega: `GEMINI_API_KEY` con tu API key de Gemini
   - Asegúrate de aplicarla a todos los ambientes (Production, Preview, Development)

4. **Despliega**:
   - Vercel construirá y desplegará automáticamente
   - Tu aplicación estará disponible en una URL tipo: `tu-proyecto.vercel.app`

### Opción 2: Despliegue desde CLI

1. **Instala Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Inicia sesión en Vercel**:
   ```bash
   vercel login
   ```

3. **Despliega**:
   ```bash
   vercel
   ```
   
   Sigue las instrucciones y cuando te pregunte por las variables de entorno, agrega `GEMINI_API_KEY`.

### Estructura para Vercel

La aplicación ha sido adaptada para Vercel:
- **API Routes**: Los endpoints están en `/api/chat.js` y `/api/reset.js` como funciones serverless
- **Frontend**: Se construye automáticamente desde `client/` usando Vite
- **Configuración**: El archivo `vercel.json` contiene toda la configuración necesaria

### Notas importantes para Vercel

- ✅ El historial se maneja en el cliente para mantener la aplicación stateless
- ✅ Las funciones serverless tienen un timeout de 10 segundos (gratis) o 60 segundos (Pro)
- ✅ CORS está configurado automáticamente
- ✅ El archivo `.env` local NO se sube a Vercel (usa variables de entorno en el dashboard)

## 📄 Licencia

MIT

---

Hecho con 💙 para Jaylene
