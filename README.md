# Celcius Voice Assistant  
> Intelligent Voice Assistant with Semantic Analysis

## 🎙️ Overview  
Celcius Voice Assistant is a modern, AI-powered voice interface that not only listens and responds, but also analyzes **intent** and **sentiment**, enabling natural, human-like interactions.  
Built with a sleek front-end, a smart backend, and ready to be customised for your own voice-driven experiences.

## 🚀 Features  
- Voice input and speech-to-text for natural interaction.  
- Semantic intent recognition — understand *what* the user wants.  
- Sentiment analysis — understand *how* the user feels.  
- Responsive UI with intuitive feedback (listening, processing, responding).  
- Modular architecture: easy to plug in new commands, skills or AI models.  
- Built with modern tech: TypeScript, Vite, Tailwind CSS, etc.  
- Hosted demo available at: [celcius-voice-assistant.vercel.app](https://celcius-voice-assistant.vercel.app) :contentReference[oaicite:1]{index=1}

## 🧱 Architecture  
- **Frontend**: Located in `src/app`, built with Vite and TypeScript. :contentReference[oaicite:2]{index=2}  
- **Backend**: Located in `src/convex` (or `convex` folder) — logic for voice commands, semantic analysis and state. :contentReference[oaicite:3]{index=3}  
- Shared configuration files such as `tsconfig.json`, `tailwind.config.js` ensure code quality and styling consistency. :contentReference[oaicite:4]{index=4}

## 🔧 Getting Started  
### Prerequisites  
- Node.js (v16+ recommended)  
- Yarn or npm  
- Microphone access to test voice features  

### Installation  
```bash
# Clone this repository
git clone https://github.com/Aditya-singh-AI/Celcius-Voice-Assistant.git
cd Celcius-Voice-Assistant

# Install dependencies
yarn install
# or
npm install

# Start the development server (frontend + backend)
yarn dev
# or
npm run dev

```
🛠 Usage & Customisation

Add new voice commands: Define new intents & responses in the backend logic.

Change UI styles: Update Tailwind CSS classes, tailwind.config.js, and component styles.

Swap AI model: If you’d like to experiment with different NLU/NLP backends, this project is structured to be extensible.

Deploy: Use services like Vercel, Netlify or other cloud platforms to go live.

📁 Project Structure
```
/
├─ app/                # Frontend application (Vite + TS + Tailwind)
├─ convex/             # Backend logic and API routes
├─ Celcius.png         # Logo / branding image
├─ README.md           # This file
├─ package.json
├─ tsconfig.json
└─ …                  # other config files
```
📌 Why “Celcius”?

The name “Celcius” (a playful take on Celsius) is inspired by the idea of bringing warmth and intelligence into human-machine interaction via voice. The assistant aims to feel natural, responsive and attuned to users’ tone and mood.

❤️ Contributing

Contributions are highly welcome! If you’d like to add features, fix bugs, or improve documentation:

Fork the repository

Create a new branch (git checkout -b feature/YourFeature)

Commit your changes (git commit -m "Add awesome feature")

Push to the branch (git push origin feature/YourFeature)

Open a Pull Request

Please ensure your code conforms to existing styles and that all new functionality is documented.


