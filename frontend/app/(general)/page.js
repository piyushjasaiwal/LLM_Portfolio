'use client'
import { motion } from 'framer-motion'
import Hero from '../../components/Hero'
import ChatIframe from '../../components/ChatIframe'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-1">
          <Hero />
        </div>
        <div>
          <ChatIframe src="/chat-iframe" />
        </div>
      </div>
    </motion.div>
  )
}