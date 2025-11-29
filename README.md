# LLM Portfolio

An interactive portfolio website powered by LLM technology, featuring an AI chat assistant that acts as a digital twin to represent the portfolio owner professionally.

## 🚀 Features

- **Modern Portfolio Website**: Beautiful Next.js frontend showcasing projects, about, and contact information
- **AI Chat Assistant**: Interactive chat interface powered by Groq's Llama 3.1 model
- **Digital Twin Technology**: AI assistant that authentically represents the portfolio owner using contextual information
- **Conversation Management**: Automatic conversation saving and session management
- **Push Notifications**: Integration with Pushover for instant notifications when visitors express interest

## 📁 Project Structure

```
LLM_portfolio/
├── backend/          # FastAPI backend service
│   ├── data/        # Context data (resume, facts, style, etc.)
│   ├── memory/      # Saved conversation sessions
│   ├── chat_app.py  # Main chat application logic
│   ├── main.py      # FastAPI server entry point
│   └── requirements.txt
│
└── frontend/        # Next.js frontend application
    ├── app/         # Next.js app router pages
    ├── components/  # React components
    └── public/      # Static assets
```

## 🛠️ Tech Stack

### Backend
- **FastAPI**: Modern, fast web framework for building APIs
- **Groq API**: High-performance LLM inference with Llama 3.1 8B Instant
- **Python 3.13+**: Backend programming language
- **Uvicorn**: ASGI server for FastAPI

### Frontend
- **Next.js 14**: React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **React Icons**: Icon library

## 📋 Prerequisites

- **Python 3.13+** (for backend)
- **Node.js 18+** and npm (for frontend)
- **Groq API Key** (for LLM chat functionality)
- **Pushover API credentials** (optional, for notifications)

## 🔧 Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the `backend/` directory with the following variables:
```env
GROQ_API_KEY=your_groq_api_key_here
PUSHOVER_TOKEN=your_pushover_token_here  # Optional
PUSHOVER_USER=your_pushover_user_here    # Optional
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Running the Application

### Start the Backend Server

From the `backend/` directory:

```bash
# Using uvicorn directly
uvicorn main:app --reload --port 8000

# Or using Python
python -m uvicorn main:app --reload --port 8000
```

The backend API will be available at `http://localhost:8000`

### Start the Frontend Development Server

From the `frontend/` directory:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Production Build

**Backend:**
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

**Frontend:**
```bash
npm run build
npm start
```

## 🔌 API Endpoints

### Backend API

- `POST /health` - Health check endpoint
- `POST /chat` - Chat endpoint that accepts messages and returns AI responses
  - Request body: `{ "message": "your message here" }`
  - Response: `{ "response": "AI response here" }`

## ⚙️ Configuration

### Backend Context

The AI assistant is configured through files in the `backend/data/` directory:
- `facts.json`: Basic information about the portfolio owner
- `summary.txt`: Summary notes about background and experience
- `resume.pdf`: Resume document
- `style.txt`: Communication style preferences

Update these files to customize the AI assistant's behavior and knowledge.

### Frontend Configuration

Update the frontend configuration in:
- `frontend/app/`: Page components and layouts
- `frontend/components/`: Reusable React components
- `frontend/public/`: Static assets (images, etc.)

## 🔐 Environment Variables

Required environment variables for the backend:

- `GROQ_API_KEY`: Your Groq API key (required)
- `PUSHOVER_TOKEN`: Pushover app token (optional, for notifications)
- `PUSHOVER_USER`: Pushover user key (optional, for notifications)

## 📝 Features in Detail

### AI Chat Assistant

- Uses Groq's Llama 3.1 8B Instant model for fast inference
- Maintains conversation history during the session
- Implements message limits (configurable in `chat_app.py`)
- Automatically saves conversations to the `memory/` directory
- Can send push notifications when visitors express interest in connecting

### Conversation Management

- Each chat session is assigned a unique UUID
- Conversations are saved as JSON files in `backend/memory/`
- Session history is maintained per conversation

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use this as a template for your own portfolio, feel free to fork and customize it to your needs.

## 📄 License

This project is for personal use. Please respect the original author's work if you use this as inspiration.

## 🐛 Troubleshooting

### Backend Issues

- **CORS Errors**: Make sure the frontend URL is included in `allow_origins` in `main.py` for production
- **API Key Errors**: Verify your `GROQ_API_KEY` is set correctly in the `.env` file
- **Port Conflicts**: Change the port in the uvicorn command if port 8000 is already in use

### Frontend Issues

- **Build Errors**: Run `npm install` again to ensure all dependencies are installed
- **API Connection**: Verify the backend URL matches your backend server address
- **Port Conflicts**: Next.js will automatically use port 3001 if 3000 is unavailable

## 📚 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Groq API Documentation](https://console.groq.com/docs)

---

Built with ❤️ using FastAPI, Next.js, and Groq AI

