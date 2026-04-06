'use client'
import { motion } from 'framer-motion'

// ✅ JSON data (easy to extend later)
const devNotes = [
  {
      'title':'Uber - System Design Part 1',
      'link':'https://drive.google.com/file/d/1SV4VQA1B_EKZW4_CA72YdN_yFR-xBXtK/view?usp=sharing'
  }
]

export default function DevNotes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-3xl mx-auto"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight">Developer Notes</h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed">
        A collection of structured notes on system design, low-level design, and core engineering
        concepts. These notes reflect my understanding, learnings, and breakdowns of key topics
        I’ve explored over time.
      </p>

      {/* Notes List */}
      <ul className="mt-8 space-y-3 list-disc list-inside">
        {devNotes.map((note, index) => (
          <li key={index}>
            <a
              href={note.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 visited:text-blue-600 hover:text-blue-800 underline underline-offset-4 transition"
            >
              {note.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}