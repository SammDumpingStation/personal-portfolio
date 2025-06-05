import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProjectProps } from "@/features/projects/types/project-type";

export default function ProjectCard({
  project,
  index,
}: {
  project: ProjectProps;
  index: number;
}) {
  return (
    <Card
      key={index}
      className="group relative overflow-hidden transition-all hover:shadow-xl pt-0"
    >
      <div className="relative aspect-video overflow-hidden">
        {project.imageUrl ? (
          <>
            <Image
              src={project.imageUrl}
              alt={project.projectTitle}
              fill
              className={cn(
                "object-cover transition-transform duration-300 scale-105 group-hover:scale-110",
                { "dark:hidden": project.imageUrlDark }
              )}
            />
            <Image
              src={project.imageUrlDark}
              alt={project.projectTitle}
              fill
              className="object-cover hidden dark:block transition-transform duration-300 scale-105 group-hover:scale-110"
            />
          </>
        ) : (
          <Skeleton className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>

      <CardHeader className="pb-2">
        <Badge variant="secondary" className="w-fit gap-2">
          <Monitor className="h-4 w-4" />
          {project.organization}
        </Badge>
      </CardHeader>

      <CardContent className="pb-4">
        <h3 className="mb-2 text-xl font-bold text-foreground">
          {project.projectTitle}
        </h3>
        <p className="text-muted-foreground min-h-[72px]">
          {project.projectSummary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button className="w-full gap-2 ">
          Showcase
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
