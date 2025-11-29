'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="mt-4 text-gray-600">
        Hi — I'm Piyush, a backend software engineer transitioning into ML and AI. This page contains placeholder content you can replace.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-medium">Experience Timeline</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 card hover-pop">
            <div className="text-sm text-gray-500">2023 — Present</div>
            <div className="font-semibold">Senior Backend Engineer — Atlassian</div>
            <div className="text-gray-600 mt-1">Worked on scalable pipelines and infra.</div>
          </div>
          <div className="p-4 card hover-pop">
            <div className="text-sm text-gray-500">2021 — 2023</div>
            <div className="font-semibold">Software Engineer</div>
            <div className="text-gray-600 mt-1">Built APIs and internal tools.</div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
