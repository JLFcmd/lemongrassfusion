# 🏯 Lemongrass Fusion - Official Website

![Lemongrass Fusion Banner](https://img.shields.io/badge/Status-Production%20Ready-success) ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel) ![AI Powered](https://img.shields.io/badge/AI-Powered%20by%20Gemini-blue?logo=google)

Bienvenido al repositorio oficial de la web de **Lemongrass Fusion**, un restaurante que combina la tradición asiática con la frescura mediterránea.

Esta web destaca por su **diseño premium (Glassmorphism)** y su integración con **Inteligencia Artificial** para ayudar a los clientes.

---

## ✨ Características Principales

### 🎨 Diseño & UX
- **Glassmorphism UI**: Paneles translúcidos de cristal esmerilado, fondos dinámicos y sombras suaves.
- **Animaciones Suaves**: Efecto de "burbujas" en la intro y transiciones fluidas entre secciones.
- **Carta Interactiva**: 
    - Grid de productos con tarjetas limpias.
    - Sidebar lateral de filtros (con checkboxes de diseño exclusivo).
    - Carga de datos optimizada (JSON embebido).
- **Responsive**: Adaptado perfectamente a móviles, tablets y escritorio.

### 🤖 ThaiChat Bot (AI Powered)
Un asistente virtual integrado que actúa como camarero experto.
- **RAG (Retrieval Augmented Generation)**: El bot "lee" la carta del restaurante en tiempo real.
- **Experto en Alérgenos**: Responde dudas sobre gluten, lactosa, trazas, etc. con total precisión.
- **Tecnología**: Google Gemini API + Vercel Serverless Functions.

---

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3 (Variables, Flexbox/Grid), JavaScript (ES6+).
- **Backend**: Node.js (Serverless Functions).
- **AI Engine**: Google Generative AI (Gemini Pro).
- **Deploy**: Vercel.

---

## 🚀 Instalación y Despliegue

### 1. Clonar y Probar en Local
Si quieres probar la web en tu ordenador:

```bash
# 1. Instalar dependencias (para el backend)
npm install

# 2. Configurar la API Key
# Crea un archivo .env y añade: GEMINI_API_KEY=tu_clave_aqui

# 3. Arrancar el servidor local (necesitas Vercel CLI o similar)
vercel dev
```

*Nota: La parte visual de la web (HTML/CSS) funciona simplemente abriendo `index.html`, pero el chatbot requiere el servidor.*

### 2. Despliegue en Vercel (Recomendado)
Para subir la web a producción:

1.  Abre [Vercel](https://vercel.com) e inicia sesión.
2.  Importa este repositorio.
3.  En la configuración del proyecto (**Settings > Environment Variables**), añade:
    *   **Key**: `GROQ_API_KEY`
    *   **Value**: `gsk_...` (Tu clave de Groq Cloud).
4.  ¡Listo! Vercel detectará automáticamente `api/chat.js` y `package.json`.

---

## 📂 Estructura del Proyecto

```
/
├── api/                # Backend (Serverless Functions)
│   └── chat.js         # Lógica del Chatbot con Gemini
├── assets/
│   ├── css/            # Estilos (Glassmorphism, Layout, Chat)
│   ├── js/             # Lógica (Frontend, Menu, Filtros)
│   └── images/         # Recursos gráficos y fotos de platos
├── data/               # (Backup) Datos originales en JSON
├── index.html          # Página de Inicio
├── menu.html           # Carta Digital Interactiva
├── package.json        # Dependencias de Node.js
└── README.md           # Documentación
```

---

## 📝 Créditos
Desarrollado por JGP con ❤️ para Lemongrass Fusion.
*Estilo Visual*: Glassmorphism / Dark Gourmet Theme.
