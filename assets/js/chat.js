document.addEventListener('DOMContentLoaded', () => {
    // Inject HTML structure if not present
    if (!document.getElementById('lemongrass-chat-widget')) {
        const widget = document.createElement('div');
        widget.id = 'lemongrass-chat-widget';
        widget.className = 'chat-widget';
        widget.innerHTML = `
            <button class="chat-toggle-btn" id="chat-toggle">
                <i class="fas fa-comment-dots"></i>
            </button>
            <div class="chat-window" id="chat-window">
                <div class="chat-header">
                    <h3>Lemongrass AI 🤖</h3>
                    <i class="fas fa-times" id="chat-close" style="cursor: pointer;"></i>
                </div>
                <div class="chat-messages" id="chat-messages">
                    <div class="message bot">
                        ¡Hola! Soy tu asistente virtual. 🍛<br>
                        Pregúntame sobre ingredientes, alérgenos o recomendaciones.
                    </div>
                </div>
                <div class="typing-indicator" id="chat-typing">Escribiendo...</div>
                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="Escribe tu pregunta...">
                    <button class="chat-send-btn" id="chat-send"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
    }

    // Logic
    const toggleBtn = document.getElementById('chat-toggle');
    const closeBtn = document.getElementById('chat-close');
    const chatWindow = document.getElementById('chat-window');
    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    const typingIndicator = document.getElementById('chat-typing');

    // Toggle
    const toggleChat = () => chatWindow.classList.toggle('open');
    toggleBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Send Message
    const sendMessage = async () => {
        const text = input.value.trim();
        if (!text) return;

        // User Message
        appendMessage(text, 'user');
        input.value = '';

        // Bot Thinking
        typingIndicator.style.display = 'block';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            // Call Vercel API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });

            const data = await response.json();
            typingIndicator.style.display = 'none';

            if (data.reply) {
                appendMessage(data.reply, 'bot');
            } else if (data.error) {
                appendMessage('⚠️ Error del sistema: ' + data.error, 'bot');
            } else {
                appendMessage('Lo siento, el servidor no ha devuelto respuesta.', 'bot');
            }

        } catch (error) {
            console.error("Chat Error Details:", error);
            typingIndicator.style.display = 'none';
            appendMessage('Error de conexión: ' + error.message, 'bot');
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function appendMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.innerHTML = text.replace(/\n/g, '<br>'); // Simple formatting
        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});
