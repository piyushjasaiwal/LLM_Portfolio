'use client'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
  const projects = new Array(6).fill(0).map((_, i) => ({ title: `Project ${i + 1}`, desc: 'Sample project description. Replace this text with your real project details.', tags: ['React', 'Node'] }))
  return (
    <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
    </div>
  )
}
