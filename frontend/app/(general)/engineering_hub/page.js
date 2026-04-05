'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      {/* Header */}
      <h1 className="text-3xl font-semibold">Engineering Hub</h1>

      {/* Description */}
      <p className="mt-4 text-gray-600 leading-relaxed text-lg">
        A space where I document and share my journey as an engineer—through research papers,
        technical notes, and practical code explorations.
      </p>

      {/* List */}
      <section className="mt-10 space-y-5">

        <a href="/engineering_hub/research_papers" className="group block">
          <div className="p-5 rounded-xl border bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">📄 Research Papers</h2>
              <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Deep dives into system design, distributed systems, backend architecture, and AI/LLMs—featuring papers I’ve read and those I’m currently exploring.
            </p>
          </div>
        </a>

        <a href="/engineering_hub/dev_notes" className="group block">
          <div className="p-5 rounded-xl border bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">🧠 Developer Notes</h2>
              <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Structured notes on system design and low-level design, covering key concepts, design patterns, and practical insights derived from real-world engineering problems.
            </p>
          </div>
        </a>

        <a href="/engineering_hub/code_archive" className="group block">
          <div className="p-5 rounded-xl border bg-white shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-0.5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">💻 Code Archive</h2>
              <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              A collection of code samples and implementations I’ve built, showcasing practical approaches across backend systems and AI/LLM use cases.
            </p>
          </div>
        </a>

      </section>
    </motion.div>
  )
}