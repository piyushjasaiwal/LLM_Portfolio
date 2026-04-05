'use client'
import { motion } from 'framer-motion'

// ✅ JSON data (easy to extend later)
const researchPapers = [
]

export default function ResearchPapers() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="max-w-3xl mx-auto"
    >
      {/* Heading */}
      <h1 className="text-4xl font-bold tracking-tight">Research Papers</h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed">
        Deep dives into system design, distributed systems, backend architecture, and AI/LLMs—featuring
        a collection of research papers I’ve studied in the past as well as those I’m currently exploring
        to deepen my understanding.
      </p>

      {/* Papers List */}
      <ul className="mt-8 space-y-3 list-disc list-inside">
        {researchPapers.map((paper, index) => (
          <li key={index}>
            <a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 visited:text-blue-600 hover:text-blue-800 underline underline-offset-4 transition"
            >
              {paper.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}