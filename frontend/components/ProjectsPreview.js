'use client'
import ProjectCard from './ProjectCard'

export default function ProjectsPreview() {
  const projects = [
    { title: 'AI Sales Agent', desc: 'Multi-workflow agent for product, pricing, shipping, and support.', tags: ['AI', 'Agents'] },
    { title: 'LangGraph Workflow', desc: 'Visual orchestration for LLM pipelines.', tags: ['LangGraph', 'AI'] },
    { title: 'Jira Scraper', desc: 'Automation to extract and summarise Jira issues.', tags: ['Python', 'Automation'] }
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold">Selected Projects</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
      </div>
    </div>
  )
}
