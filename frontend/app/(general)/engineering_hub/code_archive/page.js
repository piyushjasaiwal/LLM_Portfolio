'use client'
import { motion } from 'framer-motion'

// ✅ JSON data (easy to extend later)
const codeArchive = [
]

export default function CodeArchive() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-3xl mx-auto"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight">Code Archive</h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed">
        A collection of code samples and implementations I’ve built and shared—covering backend systems,
        system design concepts, and AI/LLM-based projects. These examples reflect practical approaches
        to solving real-world engineering problems.
      </p>

      {/* Code List */}
      <ul className="mt-8 space-y-3 list-disc list-inside">
        {codeArchive.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 visited:text-blue-600 hover:text-blue-800 underline underline-offset-4 transition"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}