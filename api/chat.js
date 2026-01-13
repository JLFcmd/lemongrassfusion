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

// Menu Context (Simplified for AI efficiency)
const MENU_CONTEXT = [
    { category: "Entrantes", items: "Satay Gai (Pollo, cacahuetes), Satay Goong (Gambas, cacahuetes), Spring Rolls (Veg, Soja), Samosa (Pollo, gluten), Tofu Frito, Fish Cake (Pescado, huevo)" },
    { category: "Sopas", items: "Tom Yum (Picante, Gambas/Pollo), Tom Kha (Coco, Gambas/Pollo/Setas)" },
    { category: "Ensaladas", items: "Som Tam (Papaya), Laab (Carne picada/Salmon), Yam Woon Sen (Fideos)" },
    { category: "Curries y Carnes (Pollo/Ternera/Pato/Cordero)", items: "Panang (Cacahuetes), Massaman (Patata, Cacahuetes), Curry Rojo, Curry Verde, Curry Amarillo, Salteado Jengibre, Salteado Albahaca (Kapraw), Anacardos (Frutos secos)" },
    { category: "Arroces y Fideos", items: "Pad Thai (Cacahuetes, Huevo), Pad See Ew (Soja), Arroz Frito, Arroz Jazmin, Sticky Rice" },
    { note: "Alérgenos Clave: Cacahuetes en Satay/PadThai/Massaman. Soja en casi todos los salteados. Gluten en rebozados/salsas oscuras. Crustáceos en platos de gambas." }
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
            model: "llama-3.3-70b-versatile", // Current supported model
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
