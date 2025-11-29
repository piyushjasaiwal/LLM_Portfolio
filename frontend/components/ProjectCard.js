'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'   // ✅ import Next.js Image

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 card hover-pop flex flex-col gap-2"
    >
      {/* Title */}
      <div className="font-semibold">{project.title}</div>

      {/* Project Image */}
      {project.image && (
        <div className="w-full h-48 relative rounded-md overflow-hidden">
          <Image
            src={project.image}     
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Description */}
      <div className="text-gray-600">{project.desc}</div>

      {/* Tags */}
      <div className="mt-2 flex gap-2 flex-wrap text-sm">
        {project.tags.map((t, i) => (
          <span
            key={i}
            className="px-2 py-1 rounded-full border text-gray-600"
          >
            {t}
          </span>
        ))}
      </div>

      {/* GitHub Link */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center text-sm text-blue-600 hover:underline gap-1 mx-2"
        >
          {/* GitHub logo SVG */}
          <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="inline-block"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 
          2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
          0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
          -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 
          1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
          -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08
          -.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 
          1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 
          2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 
          1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 
          1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 
          8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
          View on GitHub
        </a>
      )}
    </motion.div>
  )
}

