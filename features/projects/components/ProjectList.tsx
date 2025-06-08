"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Globe, PenTool, Database, Layers } from "lucide-react";
import { ProjectCategory } from "../types/project-type";
import { projectsCards } from "../data/projects-data";
import ProjectCard from "./ProjectCard";
import { Logo } from "@/components/Logo";

type CategoryIconProps = {
  [key: string]: React.ComponentType<{ className?: string }>;
};

// Category icon mapping
const categoryIcons: CategoryIconProps = {
  // "Full Stack": Layers,
  "Web App": Globe,
  Mobile: PenTool,
  Backend: Database,
};

const categories = ["All", "Web App", "Mobile", "Backend"];

export default function ProjectList() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = projectsCards.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          const IconComponent =
            categoryIcons[category as keyof CategoryIconProps];

          return (
            <Button
              key={category}
              variant={isActive ? "default" : "outline"}
              size="sm"
              className={`rounded-full px-4 ${
                isActive ? "" : "hover:bg-muted"
              }`}
              onClick={() => setActiveCategory(category as ProjectCategory)}
            >
              {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
              {category}
            </Button>
          );
        })}
      </div>
      <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3  min-h-[50vh]">
        {filteredProjects.length < 1 ? (
          <div className="md:col-span-2 lg:col-span-3 row-span-2 text-center my-auto">
            <Logo className="mx-auto mb-8" />
            <h1 className="text-3xl font-semibold">No Projects Found</h1>
          </div>
        ) : (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        )}
      </div>
    </>
  );
}
