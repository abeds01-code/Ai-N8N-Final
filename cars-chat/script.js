import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

createChat({
    webhookUrl: 'http://localhost:5678/webhook/e4d21949-c59d-4d5f-bd14-8efb3781fa22/chat',
    target: '#n8n-chat',
    mode: 'fullscreen',
    showWelcomeScreen: false,
    initialMessages: [
        'שלום! אני עוזר המידע שלכם בנושא רכבים. כיצד אוכל לעזור?'
    ]
});