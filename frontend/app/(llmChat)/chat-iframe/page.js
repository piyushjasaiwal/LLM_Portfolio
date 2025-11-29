'use client'
import { useState, useRef, useEffect } from 'react'

const localResponses = {
  "Show me your projects": "Sure! You can view all my projects here: https://your-portfolio.com/projects",
  "How can I contact you?": "You can reach me at piyushjasaiwal@gmail.com or find my contact info in the \"How to Reach me\" section.",
  "Show me your resume": "You can view my resume using the Resume buttom in the top section"
}

const quickOptions = [
  "Tell me about your experience",
  "Show me your projects",
  "Show me your resume", 
  "How can I contact you?"
]

export default function ChatIframePage() {
  const [messages, setMessages] = useState([
    { id: 1, from: 'bot', text: 'Hello! Send a message to get started.' }
  ])
  const inputRef = useRef(null)

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus()
  }, [])

  async function send(e) {
    e.preventDefault()
    const text = inputRef.current.value.trim()
    if (!text) return

    setMessages(prev => [...prev, { id: Date.now(), from: 'me', text }])
    inputRef.current.value = ''

    try {
      const res = await fetch("process.env.NEXT_PUBLIC_LLM_CHATBOT_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      })

      const data = await res.json()

      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, from: 'bot', text: data.response }
      ])
    } catch (err) {
      console.error(err)
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 2, from: 'bot', text: "Error contacting backend." }
      ])
    }
  }

  async function sendQuickOption(optionText) {
  // Add user message to chat
  setMessages(prev => [...prev, { id: Date.now(), from: 'me', text: optionText }])

  // If it's a local response, skip backend
  if (localResponses[optionText]) {
    setMessages(prev => [
      ...prev,
      { id: Date.now() + 1, from: 'bot', text: localResponses[optionText] }
    ])
    return
  }

  // Otherwise send to backend normally
  try {
    const res = await fetch("process.env.NEXT_PUBLIC_LLM_CHATBOT_API_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: optionText })
    })

    const data = await res.json()

    setMessages(prev => [
      ...prev,
      { id: Date.now() + 2, from: 'bot', text: data.response }
    ])
  } catch (err) {
    console.error(err)
    setMessages(prev => [
      ...prev,
      { id: Date.now() + 3, from: 'bot', text: "Error contacting backend." }
    ])
  }
}

  return (
    <div className="flex flex-col h-full w-full overflow-hidden bg-white p-4">
      
      {/* Chat messages — ONLY THIS should scroll */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-2">
        {messages.map(m => (
          <div key={m.id} className={`mb-1 ${m.from === 'bot' ? 'text-left' : 'text-right'}`}>
            <div className={`inline-block p-3 rounded-md ${m.from === 'bot' ? 'bg-gray-100' : 'bg-[var(--accent)] text-white'}`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Suggestion Buttons */}
      <div className="flex flex-wrap gap-2 mt-3">
        {quickOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => sendQuickOption(opt)}
            className="px-3 py-2 bg-gray-200 rounded-md text-sm hover:bg-gray-300"
          >
            {opt}
          </button>
        ))}
      </div>

      {/* Sticky form at bottom */}
      <form onSubmit={send} className="flex gap-2 mt-3">
        <input
          ref={inputRef}
          className="flex-1 p-2 rounded-md border"
          placeholder="Type a message..."
        />
        <button type="submit" className="px-4 py-2 rounded-md bg-[var(--accent)] text-white">
          Send
        </button>
      </form>
    </div>
  )
}
