"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Globe, PenTool, Database, Layers } from "lucide-react";
import { ProjectCategory } from "../types/project-type";

type CategoryIconProps = {
  [key: string]: React.ComponentType<{ className?: string }>;
};

// Category icon mapping
const categoryIcons: CategoryIconProps = {
  "Full Stack": Layers,
  Frontend: Code,
  "Web App": Globe,
  Mobile: PenTool,
  Backend: Database,
};

const categories = [
  "All",
  "Full Stack",
  "Frontend",
  "Web App",
  "Mobile",
  "Backend",
];

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  return (
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
            className={`rounded-full px-4 ${isActive ? "" : "hover:bg-muted"}`}
            onClick={() => setActiveCategory(category as ProjectCategory)}
          >
            {IconComponent && <IconComponent className="mr-2 h-4 w-4" />}
            {category}
          </Button>
        );
      })}
    </div>
  );
}
