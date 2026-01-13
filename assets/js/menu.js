// Menu Rendering Logic
// GLOBAL DATA (Enriched for AI Chatbot)

const MENU_DATA = [
    {
        "category": "Entrantes / Starters",
        "items": [
            { "id": "1", "name": "Satay Gai", "price": "7.00", "description": "Pinchitos de pollo marinado con hierbas aromáticas, salsa de cacahuete y pepino.", "ingredients": ["Pollo", "cacahuetes", "leche de coco", "curry", "azúcar", "vinagre", "pepino", "ajo"], "allergens": ["Cacahuetes", "Soja"] },
            { "id": "2", "name": "Satay Goong", "price": "8.00", "description": "Pinchitos de gambas marinadas, salsa de cacahuete y pepino.", "ingredients": ["Gambas", "cacahuetes", "leche de coco", "curry", "pepino", "ajo"], "allergens": ["Crustáceos", "Cacahuetes", "Soja"] },
            { "id": "3", "name": "Poa Pia Thod (Spring Rolls)", "price": "7.00", "description": "Rollitos de primavera con salsa dulce de chile.", "ingredients": ["Zanahoria", "col", "cebolla", "fideos de arroz", "papel de arroz"], "allergens": ["Soja", "Gluten (trazas)"] },
            { "id": "4", "name": "Samosa", "price": "7.00", "description": "Triángulo relleno de pollo picado, patata y verduras.", "ingredients": ["Pollo", "patata", "zanahoria", "guisantes", "especias"], "allergens": ["Gluten (trazas)"] },
            { "id": "5", "name": "Tao Hoo Thod", "price": "7.50", "description": "Tofu frito con salsa chile dulce y cacahuetes.", "ingredients": ["Tofu", "cacahuetes", "salsa dulce de chile", "ajo"], "allergens": ["Soja", "Cacahuetes"] },
            { "id": "6", "name": "Thod Mann Plaa (Fish Cake)", "price": "7.50", "description": "Pastelitos de pescado especiados con pepino y cacahuetes.", "ingredients": ["Pescado blanco", "huevo", "curry rojo", "judías verdes", "pepino", "cacahuetes"], "allergens": ["Pescado", "Huevo", "Cacahuetes"] },
            { "id": "7", "name": "Entradas Mixtas (2 Pers)", "price": "19.50", "description": "Tabla variada: Satay, Spring Rolls, Fish Cake, etc.", "ingredients": ["Combinación de entrantes anteriores"], "allergens": ["Crustáceos", "Pescado", "Cacahuetes", "Soja", "Huevo", "Gluten"] }
        ]
    },
    {
        "category": "Sopas / Soups",
        "items": [
            { "id": "8", "name": "Tom Yum Hed", "price": "8.00", "description": "Sopa de champiñones picante y ácida.", "ingredients": ["Champiñones", "hierba limón", "lima kaffir", "chile", "zumo de lima"], "allergens": [] },
            { "id": "9", "name": "Tom Kha Hed", "price": "8.00", "description": "Sopa de champiñones con leche de coco.", "ingredients": ["Champiñones", "leche de coco", "galangal", "hierba limón"], "allergens": [] },
            { "id": "10", "name": "Tom Yam Goong", "price": "9.00", "description": "Sopa tradicional picante con gambas.", "ingredients": ["Gambas", "champiñones", "tomate", "chile", "hierba limón"], "allergens": ["Crustáceos"] },
            { "id": "11", "name": "Tom Kha Goong", "price": "9.00", "description": "Sopa de coco con gambas.", "ingredients": ["Gambas", "leche de coco", "galangal", "hierba limón"], "allergens": ["Crustáceos"] },
            { "id": "12", "name": "Tom Yam Gai", "price": "8.50", "description": "Sopa tradicional picante con pollo.", "ingredients": ["Pollo", "champiñones", "chile", "lima"], "allergens": [] },
            { "id": "13", "name": "Tom Kha Gai", "price": "8.50", "description": "Sopa de pollo con leche de coco.", "ingredients": ["Pollo", "leche de coco", "galangal", "hierba limón"], "allergens": [] }
        ]
    },
    {
        "category": "Ensaladas / Salads",
        "items": [
            { "id": "14", "name": "Som Tam", "price": "12.50", "description": "Ensalada de papaya verde.", "ingredients": ["Papaya verde", "tomate cherry", "judías verdes", "ajo", "chile", "lima"], "allergens": [] },
            { "id": "15", "name": "Laab Salmon", "price": "10.50", "description": "Ensalada fresca de salmón.", "ingredients": ["Salmón", "lima", "cilantro", "menta", "cebolla roja"], "allergens": ["Pescado"] },
            { "id": "16", "name": "Laab Gai", "price": "11.00", "description": "Ensalada de pollo picado.", "ingredients": ["Pollo", "hierbas frescas", "lima", "chile"], "allergens": [] },
            { "id": "17", "name": "Pra Goong", "price": "13.50", "description": "Ensalada picante de gambas.", "ingredients": ["Gambas", "hierba limón", "chile", "lima kaffir"], "allergens": ["Crustáceos"] },
            { "id": "18", "name": "Yam Woon Sen", "price": "13.50", "description": "Ensalada con fideos transparentes.", "ingredients": ["Fideos de arroz", "gambas", "pollo", "champiñones"], "allergens": ["Crustáceos"] }
        ]
    },
    {
        "category": "Pollo o Ternera / Chicken or Beef",
        "description": "Elige tu proteína: Pollo o Ternera",
        "items": [
            { "id": "19", "name": "Kaeng Panang", "price": "Consultar", "description": "Curry Panang rico y cremoso.", "ingredients": ["Leche de coco", "curry panang", "cacahuetes"], "allergens": ["Cacahuetes"] },
            { "id": "20", "name": "Kaeng Massaman", "price": "Consultar", "description": "Curry Massaman suave con patatas.", "ingredients": ["Patatas", "leche de coco", "cacahuetes", "salsa tamarindo"], "allergens": ["Cacahuetes"] },
            { "id": "21", "name": "Kaeng Phed (Red Curry)", "price": "Consultar", "description": "Curry rojo con berenjena.", "ingredients": ["Leche de coco", "curry rojo", "berenjena", "albahaca"], "allergens": [] },
            { "id": "22", "name": "Phad Khing", "price": "Consultar", "description": "Salteado con jengibre.", "ingredients": ["Jengibre", "cebollino", "salsa de soja", "setas"], "allergens": ["Soja"] },
            { "id": "23", "name": "Phad Kapraw", "price": "Consultar", "description": "Salteado picante con albahaca.", "ingredients": ["Albahaca tailandesa", "chile", "ajo", "judías"], "allergens": [] },
            { "id": "24", "name": "Phad Med Mamuang", "price": "Consultar", "description": "Salteado con anacardos.", "ingredients": ["Anacardos", "cebolla", "pimiento", "salsa especial"], "allergens": ["Frutos secos"] },
            { "id": "25", "name": "Kaeng Karee (Yellow Curry)", "price": "Consultar", "description": "Curry amarillo suave.", "ingredients": ["Leche de coco", "curry amarillo", "patatas", "cebolla"], "allergens": [] },
            { "id": "26", "name": "Kae Par (Jungle Curry)", "price": "Consultar", "description": "Curry rojo estilo selva (sin leche de coco).", "ingredients": ["Verduras mixtas", "curry rojo", "especias", "chile"], "allergens": [] },
            { "id": "27", "name": "Kaeng Kaew Whan (Green Curry)", "price": "Consultar", "description": "Curry verde aromático.", "ingredients": ["Leche de coco", "curry verde", "bambú", "albahaca"], "allergens": [] }
        ]
    },
    {
        "category": "Cordero / Lamb",
        "items": [
            { "id": "28", "name": "Kae Kratheam", "price": "Consultar", "description": "Cordero al ajo y pimienta.", "ingredients": ["Cordero", "ajo", "pimienta negra", "cilantro"], "allergens": [] },
            { "id": "29", "name": "Kaeng Karee Kae", "price": "Consultar", "description": "Cordero en curry amarillo.", "ingredients": ["Cordero", "leche de coco", "patatas", "curry amarillo"], "allergens": [] },
            { "id": "30", "name": "Massaman Kae", "price": "Consultar", "description": "Cordero Massaman tradicional.", "ingredients": ["Cordero", "leche de coco", "patatas", "cacahuetes"], "allergens": ["Cacahuetes"] },
            { "id": "31", "name": "Kapraw Kae", "price": "Consultar", "description": "Cordero con albahaca picante.", "ingredients": ["Cordero", "albahaca", "chile", "judías verdes"], "allergens": [] }
        ]
    },
    {
        "category": "Pato / Duck",
        "items": [
            { "id": "32", "name": "Ped Laad Prik", "price": "Consultar", "description": "Pato con salsa dulce de chile.", "ingredients": ["Pato", "salsa dulce de chile", "albahaca"], "allergens": ["Soja"] },
            { "id": "33", "name": "Ped Krob Lemongrass", "price": "Consultar", "description": "Pato crujiente estilo Lemongrass.", "ingredients": ["Pato", "verduras salteadas", "hierba limón", "salsa especial"], "allergens": ["Soja"] },
            { "id": "34", "name": "Ped Kratheam", "price": "Consultar", "description": "Pato al ajo y pimienta.", "ingredients": ["Pato", "ajo", "pimienta"], "allergens": [] },
            { "id": "35", "name": "Ped Pad Pak", "price": "Consultar", "description": "Pato salteado con verduras.", "ingredients": ["Pato", "verduras frescas", "salsa de soja"], "allergens": ["Soja"] },
            { "id": "36", "name": "Ped Wine Daeng", "price": "Consultar", "description": "Pato al vino tinto.", "ingredients": ["Pato", "vino tinto", "especias"], "allergens": ["Sulfitos"] },
            { "id": "37", "name": "Kaeng Phed Ped Yang", "price": "Consultar", "description": "Curry rojo de pato asado.", "ingredients": ["Pato", "leche de coco", "curry rojo", "bambú", "lichi", "piña"], "allergens": [] }
        ]
    },
    {
        "category": "Pescado y Marisco / Fish & Seafood",
        "items": [
            { "id": "38", "name": "Gambas al Curry", "price": "Consultar", "description": "Gambas en salsa de curry variada.", "ingredients": ["Gambas", "curry", "leche de coco", "verduras"], "allergens": ["Crustáceos"] },
            { "id": "47", "name": "Chu-Chee Pla", "price": "Consultar", "description": "Dorada en curry rojo seco.", "ingredients": ["Dorada (pescado)", "curry rojo", "leche de coco", "lima kaffir"], "allergens": ["Pescado"] }
        ]
    },
    {
        "category": "Arroces y Tallarines / Rice & Noodles",
        "items": [
            { "id": "48", "name": "Khao Phad Pak", "price": "Consultar", "description": "Arroz frito con verduras.", "ingredients": ["Arroz", "verduras mixtas", "soja"], "allergens": ["Soja"] },
            { "id": "49", "name": "Kao Souy", "price": "3.00", "description": "Arroz Jazmín blanco.", "ingredients": ["Arroz jazmín"], "allergens": [] },
            { "id": "50", "name": "Kao Maan Kati", "price": "3.50", "description": "Arroz con leche de coco.", "ingredients": ["Arroz jazmín", "leche de coco", "sésamo"], "allergens": ["Sésamo (posible)"] },
            { "id": "51", "name": "Sticky Rice", "price": "3.50", "description": "Arroz glutinoso tradicional.", "ingredients": ["Arroz glutinoso"], "allergens": [] },
            { "id": "52", "name": "Fried Rice with Eggs", "price": "Consultar", "description": "Arroz frito con huevo.", "ingredients": ["Arroz", "huevo", "cebollino"], "allergens": ["Huevo"] },
            { "id": "53", "name": "Pineapple Fried Rice", "price": "Consultar", "description": "Arroz frito con pollo y piña.", "ingredients": ["Arroz", "pollo", "piña", "huevo", "pasas", "anacardos"], "allergens": ["Huevo", "Frutos secos"] },
            { "id": "54", "name": "Phad Thai Gai", "price": "Consultar", "description": "Fideos de arroz con pollo (Clásico).", "ingredients": ["Fideos de arroz", "pollo", "huevo", "cacahuetes", "brotes de soja", "tamarindo"], "allergens": ["Huevo", "Cacahuetes", "Soja"] },
            { "id": "55", "name": "Phad Thai Goong Sod", "price": "Consultar", "description": "Fideos de arroz con gambas.", "ingredients": ["Fideos de arroz", "gambas", "huevo", "cacahuetes", "tamarindo"], "allergens": ["Crustáceos", "Huevo", "Cacahuetes"] },
            { "id": "56", "name": "Phad See Ew Gai", "price": "Consultar", "description": "Fideos de arroz anchos con pollo.", "ingredients": ["Fideos de arroz", "pollo", "verduras", "salsa de soja oscura"], "allergens": ["Soja"] },
            { "id": "57", "name": "Phad See Ew Goong", "price": "Consultar", "description": "Fideos de arroz anchos con gambas.", "ingredients": ["Fideos de arroz", "gambas", "verduras", "salsa de soja"], "allergens": ["Crustáceos", "Soja"] },
            { "id": "58", "name": "Guey Taew Phad Khi Mao", "price": "Consultar", "description": "Fideos picantes 'borrachos'.", "ingredients": ["Fideos de arroz", "pollo", "chile", "albahaca", "pimienta fresca"], "allergens": ["Soja"] },
            { "id": "60", "name": "Chips / Patatas Fritas", "price": "4.00", "description": "Ración de patatas fritas.", "ingredients": ["Patata", "aceite vegetal", "sal"], "allergens": [] }
        ]
    }
];

// 2. RENDERING LOGIC
window.MenuApp = {
    allData: [],

    init: async function () {
        const container = document.getElementById('menu-container');
        if (!container) return; // Not on menu page

        try {
            // Load data synchronously
            this.allData = MENU_DATA;
            this.render(this.allData);

            // Trigger filter init if exists
            if (window.FilterApp) {
                window.FilterApp.init(this.allData);
            }
        } catch (e) {
            console.error('Error rendering menu:', e);
            container.innerHTML = '<p class="error">Error inesperado procesando el menú. ' + e.message + '</p>';
        }
    },

    render: function (data) {
        console.log("Rendering menu with data:", data);
        const container = document.getElementById('menu-container');
        if (!container) return;

        try {
            container.innerHTML = ''; // Clear loading spinner

            data.forEach(category => {
                const catSection = document.createElement('section');
                catSection.className = 'menu-category';

                // Create Title
                const title = document.createElement('h2');
                title.className = 'menu-category-title';
                title.textContent = category.category;

                const grid = document.createElement('div');
                grid.className = 'menu-grid';

                category.items.forEach(item => {
                    const card = document.createElement('article');

                    // Construct safe image path
                    const imageName = item.image ? item.image : (item.id + '.jpg');
                    const imgPath = 'assets/images/dishes/' + imageName;

                    // Smart Fallback Logic (DETERMINISTIC / STABLE)
                    // 1. Get main keyword (e.g. "Chicken")
                    const mainIngredient = item.name.split(' ')[0];

                    // 2. Generate a stable number from the name (Hash)
                    // This ensures "Chicken Fillet" ALWAYS gets the same specific photo, not a random one.
                    let nameHash = 0;
                    for (let i = 0; i < item.name.length; i++) {
                        nameHash = item.name.charCodeAt(i) + ((nameHash << 5) - nameHash);
                    }
                    const lockId = Math.abs(nameHash % 500); // 500 stable variations

                    const fallbackUrl = `https://loremflickr.com/600/400/food,restaurant,${mainIngredient}/all?lock=${lockId}`;

                    card.className = 'menu-item'; // Standard white card
                    card.innerHTML = `
                    <div style="width: 100%; height: 180px; overflow: hidden; border-radius: 4px; margin-bottom: 1rem;">
                        <img src="${imgPath}" 
                             alt="${item.name}" 
                             class="menu-item-image"
                             style="width: 100%; height: 100%; object-fit: cover;" 
                             onerror="this.onerror=null; this.src='${fallbackUrl}';">
                    </div>
                    
                    <span class="category-badge">${category.category}</span>
                    
                    <h3>${item.name}</h3>
                    ${item.subtitle ? `<p class="item-subtitle">${item.subtitle}</p>` : `<p class="item-subtitle">${item.name}</p>`}
                    
                    ${item.description ? `<p class="item-description">${item.description}</p>` : ''}
                    
                    <span class="price">${item.price}€</span>
                `;
                    grid.appendChild(card);
                });

                catSection.appendChild(title);
                if (category.description) {
                    const p = document.createElement('p');
                    p.textContent = category.description;
                    p.style.marginBottom = '1.5rem';
                    catSection.appendChild(p);
                }
                catSection.appendChild(grid);
                container.appendChild(catSection);
            });

        } catch (e) {
            console.error('Error rendering menu:', e);
            container.innerHTML = '<p class="error">Error cargando el menú. Intenta recargar.</p>';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.MenuApp.init();
});
