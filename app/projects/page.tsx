import React from "react";
import { projectsCards } from "@/features/projects/data/projects-data";
import ProjectCard from "@/features/projects/components/ProjectCard";
import CategoryFilter from "@/features/projects/components/CategoryFilter";

export default function Projects() {
  return (
    <main className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="heading">Project Showcase</h2>
        <p className="sub-heading">
          Here are some of the projects I&apos;ve worked on
        </p>
      </div>
      {/* Category Filter */}
      <CategoryFilter />
      <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
        {projectsCards.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
