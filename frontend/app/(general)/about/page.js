'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <h1 className="text-3xl font-semibold">About Me</h1>
      <p className="mt-4 text-gray-600">
        Hi — I'm Piyush, a Software Engineer with a knack for building AI agents using LLMs and over 2 years of experience designing scalable backend systems at Atlassian. My work spans cloud‑native architectures, large‑scale data migrations, and automation. I’m proficient in Java, Python, AWS, and microservices, with demonstrated expertise in building reliable tooling, optimizing performance, and enhancing monitoring for enterprise‑scale systems. Passionate about solving complex engineering problems, mentoring peers, and driving productivity through automation and clean code.
      </p>

      <section className="mt-8">
        <h2 className="text-xl font-medium">Experience Timeline</h2>
        <div className="mt-4 space-y-4">
          <div className="p-4 card hover-pop">
            <div className="text-sm text-gray-500">2023 — Present</div>
            <div className="font-semibold">Software Engineer - Atlassian</div>
            <div className="text-gray-600 mt-1">Working to develop the backend for migration microservice to facilitate transfer of billing data for customers from legacy to new system.</div>
          </div>
          <div className="p-4 card hover-pop">
            <div className="text-sm text-gray-500">2022</div>
            <div className="font-semibold">Software Engineer Intern - Atlassian</div>
            <div className="text-gray-600 mt-1">Worked with the commerce team in invoice migration department towards improving performance of Payment Method Migration.</div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
