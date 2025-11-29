'use client'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid() {
  const projects = [
    {
      title: "Better Assistant",
      desc: "An AI-powered assistant, capable of answering questions using the latest information from the web and generate well curated and summarised responses.",
      tags: ["Python", "RAG", "LLM"],
      github: "https://github.com/piyushjasaiwal/BetterAssistant",
      image: "/projects/better_assistant.png"
    },
    {
      title: "Apni Tesla",
      desc: "A Convolutional Neural Network that predicts steering wheel angles from images to enable safe driving with minimal error.",
      tags: ["Python", "CNN", "Machine Learning"],
      github: "https://github.com/piyushjasaiwal/Apni-Tesla",
      image: "/projects/apni_tesla.png"
    },
    {
      title: "Math Garden",
      desc: "A playgarden website created using which prompts a math problem to the user and detect the number written using a Convunational Neural Network.",
      tags: ["CNN", "HTML", "CSS", "Javascript"],
      github: "https://github.com/piyushjasaiwal/Math-Garden",
      image: "/projects/math_garden.png"
    }
  ];

  return (
    <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((p, idx) => (
        <ProjectCard key={idx} project={p} />
      ))}
    </div>
  )
}

