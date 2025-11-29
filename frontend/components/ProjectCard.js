'use client'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} className="p-4 card hover-pop">
      <div className="font-semibold">{project.title}</div>
      <div className="text-gray-600 mt-1">{project.desc}</div>
      <div className="mt-3 flex gap-2 flex-wrap text-sm">
        {project.tags.map((t, i) => <span key={i} className="px-2 py-1 rounded-full border text-gray-600">{t}</span>)}
      </div>
    </motion.div>
  )
}
