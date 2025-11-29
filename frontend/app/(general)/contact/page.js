'use client'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <h1 className="text-3xl font-semibold">How To Reach Me</h1>

      <div className="mt-6 p-4 card flex flex-col gap-4">
        {/* Email */}
        <a
          href="mailto:piyushjasaiwal@gmail.com"
          className="flex items-center gap-3 p-3 rounded-md border hover:bg-gray-100 text-gray-700"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
          <span>piyushjasaiwal@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/piyush-jasaiwal/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-md border hover:bg-gray-100 text-gray-700"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
          <span>linkedin.com/in/piyush-jasaiwal</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/piyushjasaiwal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-md border hover:bg-gray-100 text-gray-700"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
          <span>github.com/piyushjasaiwal</span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/im.piyushjasaiwal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-md border hover:bg-gray-100 text-gray-700"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
          <span>@im.piyushjasaiwal</span>
        </a>
      </div>
    </motion.div>
  )
}