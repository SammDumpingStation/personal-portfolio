import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CodeXml, Palette } from "lucide-react";
import { projectHighlights } from "@/features/projects/data/projects-data";
import ProjectCard from "@/features/projects/components/ProjectCard";
import Link from "next/link";

const Feature = () => {
  return (
    <section className="bg-background antialiased">
      <div className="container mx-auto py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 gap-2 px-4 py-2">
            <Palette className="h-4 w-4 text-primary" />
            Featured Work
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Crafting Digital Solutions
            <span className="text-primary block"> That Deliver Impact</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Building practical, user-focused applications that solve real
            business challenges with modern technology
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size={'lg'} className="gap-2" asChild>
            <Link href="/projects">
              View All Projects <CodeXml className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
