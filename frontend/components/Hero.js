import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.99 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 card h-full flex flex-col justify-between"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
        {/* Left content */}
        <div className="flex flex-col gap-14 flex-1">
          <h1 className="text-2xl font-bold">
            Hi, I’m Piyush — Backend Engineer & ML Enthusiast
          </h1>
          <p className="text-gray-600">
            I build scalable systems, AI agents, and developer tools. This is a
            portfolio + dashboard hybrid with an embedded chat iframe connected
            to your LLM backend.
          </p>

          {/* Buttons */}
          <div className="flex gap-3">
            <a
              className="px-4 py-2 rounded-md bg-[var(--accent)] text-white"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="px-4 py-2 rounded-md border text-gray-700"
              href="/contact"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right avatar */}
        <div className="hidden md:flex items-center justify-center flex-shrink-0">
          <div className="w-36 h-36 bg-white rounded-full shadow-md flex items-center justify-center">
            <span className="text-lg font-medium text-gray-600">P</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
