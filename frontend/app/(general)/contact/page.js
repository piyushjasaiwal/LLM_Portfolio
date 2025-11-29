'use client'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
      <h1 className="text-3xl font-semibold">How To Reach Me</h1>
      <p className="mt-4 text-gray-600">Email: example@example.com</p>
      <p className="mt-2 text-gray-600">LinkedIn: linkedin.com/in/yourname</p>
      <div className="mt-6 p-4 card">
        <h2 className="font-semibold">Quick Contact</h2>
        <p className="mt-2 text-gray-600">Or leave a short message on the chat on the home page.</p>
      </div>
    </motion.div>
  )
}
