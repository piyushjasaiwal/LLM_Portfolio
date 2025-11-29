'use client'
import ProjectsGrid from '../../../components/ProjectsGrid'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
      <h1 className="text-3xl font-semibold">My Personal Projects</h1>

      <div className="mt-6">
        <ProjectsGrid />
      </div>
    </motion.div>
  )
}
