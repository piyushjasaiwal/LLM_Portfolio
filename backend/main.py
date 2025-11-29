from fastapi import FastAPI
from pydantic import BaseModel
from chat_app import Me
from fastapi.middleware.cors import CORSMiddleware

me = Me()
app = FastAPI()
history = []

# Allow requests from your Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development; restrict later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.get("/")
def default_endpoint():
    return "Welcome to the the backend of the LLM portfolio"

@app.post("/health")
def health_check():
    return {"message": "service is up"}

@app.post("/chat")
def chat(request: ChatRequest):
    return {"response": me.chat(message=request.message, history=history)}