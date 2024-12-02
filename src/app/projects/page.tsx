"use client";

import { useState } from "react";
import { Project, ProjectCard } from "./(components)/project-card";
import { ProjectModal } from "./(components)/project-modal";
import LogoSVG from "@/components/logo";
import Link from "next/link";

export const dynamic = "force-static";

const projectsData = [
  {
    id: 1,
    title: "What-Todo",
    description: "Keep track of tasks and know what todo.",
    image: "/what-todo.png",
    github: "https://github.com/xfn14/cg",
    website: "https://t3-what-todo.vercel.app/",
  },
  {
    id: 2,
    title: "Solar System Simulation",
    description: "Solar System simulation made with OpenGL/GLUT.",
    image: "/sss.png",
    github: "https://github.com/xfn14/cg",
    website: null,
  },
  {
    id: 3,
    title: "Fast Sender Transfer Protocol",
    description: "Java-based app for peer-to-peer file transfers.",
    image: "/fstp.png",
    github: "https://github.com/xfn14/fstp",
    website: null,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <main className="container mx-auto py-12">
        <div className="mb-6 flex items-center justify-center gap-4">
          <Link href={"/"}>
            <LogoSVG className="h-10 w-10 transition-all duration-300 ease-in-out hover:scale-110" />
          </Link>

          <h1 className="text-center text-2xl font-bold text-accent">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </main>
    </>
  );
}
