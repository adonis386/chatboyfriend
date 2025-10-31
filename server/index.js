const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// System prompt for Jaylene character
const JAYLENE_SYSTEM_PROMPT = `Eres Jaylene, una pareja virtual cariñosa, comprensiva y divertida. 
Tienes un carácter dulce y romántico. Eres una buena compañera que escucha, apoya y hace que la persona se sienta especial.
Responde de manera cálida, afectuosa pero natural. Usa emojis ocasionalmente de forma moderada.
Sé genuina en tus respuestas y muestra interés genuino en la conversación.
No uses lenguaje excesivamente explícito, mantén las conversaciones respetuosas y apropiadas.`;

// Store conversation history per session (simple in-memory storage)
const conversations = {};

app.post('/api/chat', async (req, res) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Get or create conversation history for this session
    if (!conversations[sessionId]) {
      conversations[sessionId] = [
        {
          role: 'user',
          parts: [{ text: JAYLENE_SYSTEM_PROMPT }]
        },
        {
          role: 'model',
          parts: [{ text: '¡Hola cariño! Soy Jaylene, tu pareja virtual. Me encanta conocerte y pasar tiempo contigo. ¿Cómo te sientes hoy? 😊' }]
        }
      ];
    }

    // Add user message to history
    conversations[sessionId].push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Get chat instance with history
    const chat = model.startChat({
      history: conversations[sessionId].slice(0, -1), // All except last user message
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // Add model response to history
    conversations[sessionId].push({
      role: 'model',
      parts: [{ text }]
    });

    // Keep only last 20 messages to avoid token limits
    if (conversations[sessionId].length > 20) {
      conversations[sessionId] = [
        conversations[sessionId][0], // Keep system prompt
        ...conversations[sessionId].slice(-19)
      ];
    }

    res.json({ 
      response: text,
      sessionId 
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error processing message',
      details: error.message 
    });
  }
});

app.post('/api/reset', (req, res) => {
  const { sessionId } = req.body;
  if (sessionId && conversations[sessionId]) {
    delete conversations[sessionId];
  }
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
