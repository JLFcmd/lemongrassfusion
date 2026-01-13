const Groq = require("groq-sdk");

// Allow CORS
const adjustCors = (res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );
};

// Menu Context (Duplicated from frontend for simplicity)
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
        // Robust Body Parsing
        let body = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                return res.status(400).json({ error: 'Invalid JSON body' });
            }
        }
        if (!body || !body.message) {
            return res.status(400).json({ error: 'Missing "message" in request body' });
        }

        const { message } = body;
        const apiKey = process.env.GROQ_API_KEY;

        if (!apiKey) {
            console.error("GROQ_API_KEY missing");
            return res.status(500).json({ error: 'Server Config Error: Missing GROQ_API_KEY' });
        }

        const groq = new Groq({ apiKey: apiKey });

        const systemPrompt = `
        Eres un camarero experto de "Lemongrass Fusion".
        Usa estos datos de la carta para recomendar y responder dudas sobre alérgenos:
        ${JSON.stringify(MENU_CONTEXT)}
        
        Reglas:
        1. Sé amable y breve.
        2. Si preguntan por alérgenos, revisa la lista escrupulosamente.
        3. Si no está en la lista, di que no lo tenemos.
        `;

        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: message }
            ],
            model: "llama3-8b-8192", // Super fast and free
            temperature: 0.5,
            max_tokens: 200,
        });

        const reply = completion.choices[0]?.message?.content || "Lo siento, no he podido pensar una respuesta.";

        res.status(200).json({ reply: reply });

    } catch (error) {
        console.error('Groq API Error:', error);
        res.status(500).json({ error: 'Error del servidor: ' + error.message });
    }
};
