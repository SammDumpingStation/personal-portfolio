"use client";
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
import { ProjectCardProps } from "@/features/projects/types/project-type";
import { useRouter } from "next/navigation";

export default function ProjectCard({
  project,
  index,
  classname
}: {
  project: ProjectCardProps;
  index: number;
  classname?: string;
}) {
  const router = useRouter();
  return (
    <Card
      key={index}
      className={cn(
        "group relative overflow-hidden transition-all hover:shadow-xl pt-0 hover:-translate-y-2",
        classname
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        {project.images ? (
          <>
            <Image
              src={project.images.light}
              alt={project.title}
              fill
              className={cn(
                "object-cover object-top transition-transform duration-300 scale-105 group-hover:scale-110",
                { "dark:hidden": project.images.dark }
              )}
            />
            {project.images.dark && (
              <Image
                src={project.images.dark}
                alt={project.title}
                fill
                className="object-cover object-top hidden dark:block transition-transform duration-300 scale-105 group-hover:scale-110"
              />
            )}
          </>
        ) : (
          <Skeleton className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        )}
      </div>

      <CardHeader className="">
        <Badge variant="secondary" className="w-fit gap-2">
          <Monitor className="h-4 w-4" />
          {project.organization}
        </Badge>
      </CardHeader>

      <CardContent className="pb-4">
        <h3 className="mb-2 text-xl font-bold text-foreground">
          {project.title}
        </h3>
        <p className="text-muted-foreground min-h-[72px]">{project.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.frontend.map((tech, techIndex) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="text-xs font-normal"
            >
              {tech.title}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="mt-auto">
        <Button
          className="w-full gap-2 "
          onClick={() => router.push(`/projects/${project.id}`)}
        >
          View Details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
}
