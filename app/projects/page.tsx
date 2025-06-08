import React from "react";
import { projectsCards } from "@/features/projects/data/projects-data";
import ProjectCard from "@/features/projects/components/ProjectCard";
import ProjectList from "@/features/projects/components/ProjectList";

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
      <ProjectList />
    </main>
  );
}
