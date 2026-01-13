// Menu Rendering Logic
// GLOBAL DATA (Enriched for AI Chatbot)

const MENU_DATA = [
    {
        "category": "Brunch",
        "items": [
            {
                "name": "Balsamic Chicken Fillet",
                "subtitle": "Con Ensalada De Tomate Y Rucula",
                "price": "7.95",
                "id": "balsamic-chicken-fillet",
                "image": "balsamic-chicken-fillet.jpg",
                "ingredients": ["Pollo", "tomate", "rúcula", "reducción de vinagre balsámico", "aceite de oliva"],
                "allergens": ["Sulfitos"]
            },
            {
                "name": "Chicken Fillet Sweet Mush Potato",
                "subtitle": "Brocoli With Peri Peri Sauce",
                "price": "8.50",
                "id": "chicken-fillet-sweet-mush",
                "image": "chicken-fillet-sweet-mush.jpg",
                "ingredients": ["Pollo", "boniato", "brócoli", "salsa peri peri"],
                "allergens": ["Sulfitos"]
            },
            {
                "name": "Chicken Cakes",
                "subtitle": "Carrots Calabacin Spring Onion Eggs",
                "price": "7.50",
                "id": "chicken-cakes",
                "image": "chicken-cakes.jpg",
                "ingredients": ["Pollo picado", "zanahoria", "calabacín", "cebolla tierna", "huevo"],
                "allergens": ["Huevo"]
            },
            {
                "name": "Chicken Fillet Fries",
                "subtitle": "Sweet Potato Lettuce And Tomato",
                "price": "7.85",
                "id": "chicken-fillet-fries",
                "image": "chicken-fillet-fries.jpg",
                "ingredients": ["Pollo", "patata", "lechuga", "tomate"],
                "allergens": []
            },
            {
                "name": "Beef Teryaki Rice",
                "subtitle": "Lettuce Tomato Mangocucumber Red Onion Spring Onion",
                "price": "8.95",
                "id": "beef-teryaki-rice",
                "image": "beef-teryaki-rice.jpg",
                "ingredients": ["Ternera", "arroz", "salsa teriyaki", "verduras"],
                "allergens": ["Soja", "Gluten"]
            },
            {
                "name": "Chicken Wrap Special",
                "subtitle": "By Chef Served Fries Sweet Potato",
                "price": "7.95",
                "id": "chicken-wrap-special",
                "image": "chicken-wrap-special.jpg",
                "ingredients": ["Pollo", "tortilla de trigo", "verduras", "salsa especial"],
                "allergens": ["Gluten"]
            },
            {
                "name": "Quinoa Salmon",
                "subtitle": "Zuchini, Bell Pepper, Red Onion, Parsley, Garlic Lemon",
                "price": "9.50",
                "id": "quinoa-salmon",
                "image": "quinoa-salmon.jpg",
                "ingredients": ["Quinoa", "salmón", "verduras", "limón"],
                "allergens": ["Pescado"]
            },
            {
                "name": "Quinoa Salad",
                "subtitle": "Zuchini, Bell Pepper, Red Onion, Parsley, Garlic Lemon",
                "price": "9.95",
                "id": "quinoa-salad",
                "image": "quinoa-salad.jpg",
                "ingredients": ["Quinoa", "calabacín", "pimiento", "cebolla", "ajo", "limón"],
                "allergens": []
            }
        ]
    },
    {
        "category": "Desayunos",
        "items": [
            {
                "name": "Desayuno Grande",
                "description": "2 Bacon, 2 Huevos, 2 Salchicha, bakebeans, tomate, champinones, hashbrown y tostada",
                "price": "9.75",
                "id": "desayuno-grande",
                "image": "desayuno-grande.jpg",
                "ingredients": ["Bacon", "huevos", "salchicha", "baked beans", "tomate", "champiñones", "hashbrown", "tostada"],
                "allergens": ["Gluten", "Huevo"]
            },
            {
                "name": "Desayuno Mediano",
                "description": "1 bacon, 1 huevo, 1 salchicha, Bakebeans, Tomate, Champinones y Tostada",
                "price": "6.95",
                "id": "desayuno-mediano",
                "image": "desayuno-mediano.jpg",
                "ingredients": ["Bacon", "huevo", "salchicha", "baked beans", "tomate", "champiñones", "tostada"],
                "allergens": ["Gluten", "Huevo"]
            },
            {
                "name": "Desayuno Turco",
                "description": "Salchicha, Spinaca, Avocado, Quezo Feta Y Tostada",
                "price": "7.50",
                "id": "desayuno-turco",
                "image": "desayuno-turco.jpg",
                "ingredients": ["Salchicha", "espinaca", "aguacate", "queso feta", "tostada"],
                "allergens": ["Lácteos", "Gluten"]
            },
            {
                "name": "Huevos Fritos",
                "description": "Con Sweet",
                "price": "5.00",
                "id": "huevos-fritos",
                "image": "huevos-fritos.jpg",
                "ingredients": ["Huevos", "boniato"],
                "allergens": ["Huevo"]
            }
        ]
    },
    {
        "category": "Special de la Casa",
        "items": [
            {
                "name": "Tostada Aguacate Pochado",
                "description": "Tostada Con Aguacate Huevos Pochado Salmon Ahumado",
                "price": "7.50",
                "id": "tostada-aguacate-pochado",
                "image": "tostada-aguacate-pochado.jpg",
                "ingredients": ["Pan", "aguacate", "huevos pochados", "salmón"],
                "allergens": ["Gluten", "Huevo", "Pescado"]
            },
            {
                "name": "Revuelto Salmon",
                "description": "Huevos Revuelto Con Salmon Ahumado Aguacate Y Tostada",
                "price": "7.50",
                "id": "revuelto-salmon",
                "image": "revuelto-salmon.jpg",
                "ingredients": ["Huevos", "salmón", "aguacate", "tostada"],
                "allergens": ["Gluten", "Huevo", "Pescado"]
            },
            {
                "name": "Huevos Escalpado",
                "description": "Con Salmon Ahumado Salsa Bernesa Y Tostada",
                "price": "8.25",
                "id": "huevos-escalpado",
                "image": "huevos-escalpado.jpg",
                "ingredients": ["Huevos", "salmón", "mantequilla", "yema", "tostada"],
                "allergens": ["Huevo", "Lácteos", "Gluten", "Pescado"]
            }
        ]
    },
    {
        "category": "Café",
        "items": [
            {
                "name": "Cafe Con Leche",
                "price": "1.50",
                "id": "cafe-con-leche",
                "image": "cafe-con-leche.jpg",
                "ingredients": ["Café", "Leche"],
                "allergens": ["Lácteos"]
            },
            {
                "name": "Café Americano",
                "price": "1.50",
                "id": "cafe-americano",
                "image": "cafe-americano.jpg",
                "ingredients": ["Café", "Agua"],
                "allergens": []
            },
            {
                "name": "Café Cortado",
                "price": "1.50",
                "id": "cafe-cortado",
                "image": "cafe-cortado.jpg",
                "ingredients": ["Café", "Leche"],
                "allergens": ["Lácteos"]
            },
            {
                "name": "Expresso",
                "price": "1.40",
                "id": "expresso",
                "image": "expresso.jpg",
                "ingredients": ["Café"],
                "allergens": []
            },
            {
                "name": "Café Solo Double",
                "price": "1.80",
                "id": "cafe-solo-double",
                "image": "cafe-solo-double.jpg",
                "ingredients": ["Café doble"],
                "allergens": []
            },
            {
                "name": "Café Bonbon",
                "price": "2.50",
                "id": "cafe-bonbon",
                "image": "cafe-bonbon.jpg",
                "ingredients": ["Café", "Leche condensada"],
                "allergens": ["Lácteos"]
            },
            {
                "name": "Café Sombra",
                "price": "1.50",
                "id": "cafe-sombra",
                "image": "cafe-sombra.jpg",
                "ingredients": ["Café", "Leche"],
                "allergens": ["Lácteos"]
            },
            {
                "name": "Capuchino",
                "price": "2.20",
                "id": "capuchino",
                "image": "capuchino.jpg",
                "ingredients": ["Café", "Leche", "Espuma"],
                "allergens": ["Lácteos"]
            },
            {
                "name": "Colacao",
                "price": "2.25",
                "id": "colacao",
                "image": "colacao.jpg",
                "ingredients": ["Cacao", "Leche", "Azúcar"],
                "allergens": ["Lácteos"]
            },
            {
                "name": "Irish Coffee",
                "price": "5.50",
                "id": "irish-coffee",
                "image": "irish-coffee.jpg",
                "ingredients": ["Café", "Whisky", "Nata"],
                "allergens": ["Lácteos"]
            }
        ]
    },
    {
        "category": "Tea",
        "items": [
            {
                "name": "Red Thai Cold",
                "price": "4.25",
                "id": "red-thai-cold",
                "image": "red-thai-cold.jpg",
                "ingredients": ["Té rojo", "Hielo"],
                "allergens": []
            },
            {
                "name": "Red Thai Hot",
                "price": "3.00",
                "id": "red-thai-hot",
                "image": "red-thai-hot.jpg",
                "ingredients": ["Té rojo", "Agua caliente"],
                "allergens": []
            },
            {
                "name": "Green Thai Cold",
                "price": "4.25",
                "id": "green-thai-cold",
                "image": "green-thai-cold.jpg",
                "ingredients": ["Té verde", "Hielo"],
                "allergens": []
            },
            {
                "name": "Green Thai Hot",
                "price": "3.00",
                "id": "green-thai-hot",
                "image": "green-thai-hot.jpg",
                "ingredients": ["Té verde", "Agua caliente"],
                "allergens": []
            },
            {
                "name": "Ginger Cold",
                "price": "3.00",
                "id": "ginger-cold",
                "image": "ginger-cold.jpg",
                "ingredients": ["Jengibre", "Hielo"],
                "allergens": []
            },
            {
                "name": "Ginger Hot",
                "price": "3.00",
                "id": "ginger-hot",
                "image": "ginger-hot.jpg",
                "ingredients": ["Jengibre", "Agua caliente"],
                "allergens": []
            }
        ]
    },
    {
        "category": "Pan Cakes",
        "items": [
            {
                "name": "Sirope De Fruta",
                "description": "De Bosque Con Berries",
                "price": "6.95",
                "id": "sirope-fruta",
                "image": "sirope-fruta.jpg",
                "ingredients": ["Harina", "huevo", "leche", "sirope", "frutas del bosque"],
                "allergens": ["Gluten", "Huevo", "Lácteos"]
            },
            {
                "name": "Nutella Platano",
                "description": "Y Miel",
                "price": "5.95",
                "id": "nutella-platano",
                "image": "nutella-platano.jpg",
                "ingredients": ["Harina", "huevo", "leche", "nutella", "plátano"],
                "allergens": ["Gluten", "Huevo", "Lácteos", "Frutos secos"]
            },
            {
                "name": "Con Helado",
                "description": "Y Pistacho",
                "price": "7.50",
                "id": "con-helado",
                "image": "con-helado.jpg",
                "ingredients": ["Harina", "huevo", "leche", "helado", "pistacho"],
                "allergens": ["Gluten", "Huevo", "Lácteos", "Frutos secos"]
            }
        ]
    },
    {
        "category": "Tortilla a Tu Gusto",
        "description": "Base (5.00 €) + Ingredientes",
        "items": [
            {
                "name": "Tortilla Base",
                "price": "5.00",
                "id": "tortilla-base",
                "image": "tortilla-base.jpg",
                "ingredients": ["Huevo"],
                "allergens": ["Huevo"]
            },
            {
                "name": "Ingrediente Extra",
                "description": "Queso Feta, Pavo, Tomate, Champinones, Cebolla, Spinaca, Pimientos, Bacon",
                "price": "+1.00",
                "id": "extra-tortilla",
                "image": "extra-tortilla.jpg",
                "ingredients": ["Opcional: Queso feta, Pavo, Champiñones, Bacon, Cebolla, Tomate, Espinaca, Pimientos"],
                "allergens": ["Lácteos (si lleva queso)"]
            }
        ]
    },
    {
        "category": "Mollete",
        "items": [
            {
                "name": "Tostada Aceite Y Tomate",
                "price": "2.40",
                "id": "mollete-aceite",
                "image": "mollete-aceite.jpg",
                "ingredients": ["Pan", "aceite de oliva", "tomate"],
                "allergens": ["Gluten"]
            },
            {
                "name": "Tostada Mantequilla Y Mermelada",
                "price": "2.50",
                "id": "mollete-mantequilla",
                "image": "mollete-mantequilla.jpg",
                "ingredients": ["Pan", "mantequilla", "mermelada"],
                "allergens": ["Gluten", "Lácteos"]
            },
            {
                "name": "Mixto",
                "price": "3.40",
                "id": "mollete-mixto",
                "image": "mollete-mixto.jpg",
                "ingredients": ["Pan", "jamón", "queso"],
                "allergens": ["Gluten", "Lácteos"]
            },
            {
                "name": "Bacon Y Queso",
                "price": "3.75",
                "id": "mollete-bacon",
                "image": "mollete-bacon.jpg",
                "ingredients": ["Pan", "bacon", "queso"],
                "allergens": ["Gluten", "Lácteos"]
            },
            {
                "name": "Tortilla Francesa",
                "price": "3.60",
                "id": "mollete-francesa",
                "image": "mollete-francesa.jpg",
                "ingredients": ["Pan", "huevo"],
                "allergens": ["Gluten", "Huevo"]
            },
            {
                "name": "Catalana",
                "price": "3.60",
                "id": "mollete-catalana",
                "image": "mollete-catalana.jpg",
                "ingredients": ["Pan", "tomate", "jamón"],
                "allergens": ["Gluten"]
            },
            {
                "name": "Serranito De Pollo",
                "price": "4.25",
                "id": "mollete-serranito",
                "image": "mollete-serranito.jpg",
                "ingredients": ["Pan", "pollo", "pimiento"],
                "allergens": ["Gluten"]
            },
            {
                "name": "Pata Jamon Y Tomate",
                "price": "3.75",
                "id": "mollete-jamon",
                "image": "mollete-jamon.jpg",
                "ingredients": ["Pan", "jamón", "tomate"],
                "allergens": ["Gluten"]
            }
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

                    card.className = 'menu-item'; // Standard white card
                    card.innerHTML = `
                    <div style="width: 100%; height: 180px; overflow: hidden; border-radius: 4px; margin-bottom: 1rem;">
                        <img src="${imgPath}" 
                             alt="${item.name}" 
                             class="menu-item-image"
                             style="width: 100%; height: 100%; object-fit: contain;" 
                             onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=No+Image';">
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
