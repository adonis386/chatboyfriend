# 💕 Jaylene - Tu Pareja Virtual

Una aplicación de chat moderna estilo ChatGPT, personalizada para interactuar con Jaylene, tu pareja virtual. Utiliza la API de Gemini de Google para proporcionar conversaciones naturales y afectuosas.

## 🚀 Características

- 💬 Interfaz de chat moderna y atractiva
- 🤖 Integración con Gemini API
- 💕 Personalidad única de Jaylene
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
├── server/
│   └── index.js          # Servidor Express con integración Gemini
├── client/
│   ├── src/
│   │   ├── App.jsx       # Componente principal de React
│   │   ├── App.css       # Estilos de la aplicación
│   │   ├── main.jsx      # Punto de entrada de React
│   │   └── index.css     # Estilos globales
│   ├── index.html
│   └── vite.config.js    # Configuración de Vite
├── .env                  # Variables de entorno (API key)
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

## 🤖 Personalidad de Jaylene

Jaylene está programada para ser:
- Cariñosa y comprensiva
- Romántica pero natural
- Una buena compañera que escucha y apoya
- Genuina en sus interacciones

## 🔧 Tecnologías Utilizadas

- **Frontend:** React, Vite, CSS3
- **Backend:** Node.js, Express
- **AI:** Google Gemini API
- **HTTP Client:** Axios

## 📝 Notas

- El historial de conversación se mantiene en memoria durante la sesión
- Se limita a 20 mensajes para evitar límites de tokens
- Puedes reiniciar la conversación en cualquier momento usando el botón de reinicio

## 📄 Licencia

MIT

---

Hecho con 💕 para crear conexiones virtuales especiales
