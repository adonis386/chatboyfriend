const { GoogleGenerativeAI } = require('@google/generative-ai');

// System prompt for virtual boyfriend character
const VIRTUAL_BOYFRIEND_PROMPT = `Eres un novio virtual atento, cariñoso y comprensivo. 
Tienes un carácter dulce y romántico. Eres un buen compañero que escucha, apoya y hace que tu pareja se sienta especial.
Eres conversador, interesante y muestras interés genuino. Usa emojis ocasionalmente de forma moderada.
Responde de manera cálida, afectuosa pero natural. Sé genuino en tus respuestas y muestra interés genuino en la conversación.
No uses lenguaje excesivamente explícito, mantén las conversaciones respetuosas y apropiadas.
Hablas con Jaylene, tu novia, con cariño y respeto.`;

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, sessionId, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Build conversation history
    let conversationHistory = [];
    
    // If no history, initialize with system prompt
    if (history.length === 0) {
      conversationHistory = [
        {
          role: 'user',
          parts: [{ text: VIRTUAL_BOYFRIEND_PROMPT }]
        },
        {
          role: 'model',
          parts: [{ text: '¡Hola mi amor! 😊 Me alegra mucho hablar contigo. ¿Cómo has estado hoy? Quiero saber cómo te sientes.' }]
        }
      ];
    } else {
      // Start with system prompt, then add client history
      conversationHistory = [
        {
          role: 'user',
          parts: [{ text: VIRTUAL_BOYFRIEND_PROMPT }]
        },
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      ];
    }

    // Add current user message
    conversationHistory.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Start chat with history (all except last message)
    const chat = model.startChat({
      history: conversationHistory.slice(0, -1),
    });

    // Send message and get response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // Return response with updated history
    const updatedHistory = [
      ...conversationHistory,
      {
        role: 'model',
        parts: [{ text }]
      }
    ];

    // Keep only last 20 messages to avoid token limits
    const limitedHistory = updatedHistory.length > 20 
      ? [
          updatedHistory[0], // Keep system prompt
          ...updatedHistory.slice(-19)
        ]
      : updatedHistory;

    // Convert back to client format (skip system prompt)
    const clientHistory = limitedHistory
      .slice(2) // Skip system prompt and initial greeting
      .map(msg => ({
        role: msg.role === 'user' ? 'user' : 'assistant',
        content: msg.parts[0].text,
        timestamp: new Date().toISOString()
      }));

    res.json({ 
      response: text,
      history: clientHistory,
      sessionId 
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      error: 'Error processing message',
      details: error.message 
    });
  }
};
