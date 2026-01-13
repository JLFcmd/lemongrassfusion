const { GoogleGenerativeAI } = require("@google/generative-ai");

// Allow CORS for local testing and production
const adjustCors = (res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
};

// Import Menu Data (We need a way to read it on server)
// Since menu.js is client-side with 'window', we'll simulate the data here or read it via fs if better.
// For simplicity in Vercel Serverless, let's paste the structured data structure or require it if it was a module.
// Strategy: Client sends relevant context or we hardcode the simplified JSON here for the bot to read.
// Better Strategy: The frontend sends the menu data context? No, too heavy.
// We will duplicate the critical data here for the backend to use as context.
// In a real app, this would come from a database.

const MENU_CONTEXT = [
    { name: "Balsamic Chicken Fillet", ingredients: "Pollo, tomate, rúcula, vinagre balsámico", allergens: "Sulfitos", category: "Brunch" },
    { name: "Chicken Fillet Sweet Potato", ingredients: "Pollo, boniato, brócoli, salsa peri peri", allergens: "Sulfitos", category: "Brunch" },
    { name: "Chicken Cakes", ingredients: "Pollo, zanahoria, calabacín, cebolla, huevo", allergens: "Huevo", category: "Brunch" },
    { name: "Chicken Fillet Fries", ingredients: "Pollo, patata, lechuga, tomate", allergens: "Ninguno", category: "Brunch" },
    { name: "Beef Teriyaki Rice", ingredients: "Ternera, arroz, salsa teriyaki, verduras", allergens: "Soja, Gluten", category: "Brunch" },
    { name: "Chicken Wrap Special", ingredients: "Pollo, tortilla trigo, verduras, salsa", allergens: "Gluten", category: "Brunch" },
    { name: "Quinoa Salmon", ingredients: "Quinoa, salmón, verduras, limón", allergens: "Pescado", category: "Brunch" },
    { name: "Desayuno Grande", ingredients: "Bacon, huevos, salchicha, baked beans, tostada", allergens: "Gluten, Huevo", category: "Desayunos" },
    { name: "Desayuno Mediano", ingredients: "Bacon, huevo, salchicha, tostada", allergens: "Gluten, Huevo", category: "Desayunos" },
    { name: "Desayuno Turco", ingredients: "Salchicha, espinaca, aguacate, queso feta, tostada", allergens: "Lácteos, Gluten", category: "Desayunos" },
    { name: "Tostada Aguacate Pochado", ingredients: "Pan, aguacate, huevo pochado, salmón", allergens: "Gluten, Huevo, Pescado", category: "Especials" },
    { name: "Pancakes Nutella", ingredients: "Harina, huevo, leche, nutella, plátano", allergens: "Gluten, Huevo, Lácteos, Frutos secos", category: "Pancakes" },
    { name: "Mollete Mixto", ingredients: "Pan, jamón, queso", allergens: "Gluten, Lácteos", category: "Molletes" },
    // Simplified list for token efficiency, can be expanded
];

module.exports = async (req, res) => {
    adjustCors(res);

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        let body = req.body;

        // Handle stringified body (sometimes happens in Vercel)
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                console.error("Failed to parse body string:", body);
                return res.status(400).json({ error: 'Invalid JSON body' });
            }
        }

        // Safety check for body existence
        if (!body || !body.message) {
            return res.status(400).json({ error: 'Missing "message" in request body' });
        }

        const { message } = body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error("API Key not found in environment variables");
            return res.status(500).json({ error: 'Server configuration error: Missing API Key' });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        // Use gemini-1.5-flash which is the current standard (faster and free tier friendly)
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Actúa como un camarero experto y amable del restaurante "Lemongrass Fusion".
        
        Tu tarea es ayudar al cliente a elegir qué comer basándote SOLO en la siguiente carta de menú.
        Si el cliente pregunta por alérgenos, sé muy estricto y cuidadoso.
        Si preguntan por algo que no está en la lista, di amablemente que no lo tenemos.
        Sé breve, conciso y sugerente. Por favor, sé muy amable.

        CARTA DEL RESTAURANTE (Datos técnicos):
        ${JSON.stringify(MENU_CONTEXT)}

        PREGUNTA DEL CLIENTE:
        "${message}"

        RESPUESTA DEL CAMARERO:
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        // Check for candidates
        const text = response.text();

        res.status(200).json({ reply: text });

    } catch (error) {
        console.error('Gemini API Error Full:', error);
        res.status(500).json({ error: 'Error procesando tu solicitud: ' + error.message });
    }
};
