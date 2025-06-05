import React from "react";
import { projectHighlights } from "@/features/projects/data/projects-data";
import ProjectCard from "@/features/projects/components/ProjectCard";
export default function Projects() {
  return (
    <main className="lg:mt-24 container mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          Project Showcase
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Here are some of the projects I've worked on
        </p>
      </div>
      <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {projectHighlights.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
