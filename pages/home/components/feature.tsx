import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Monitor, CodeXml } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ProjectHighlight {
  organization: string;
  projectTitle: string;
  projectSummary: string;
  techStack: string[];
  imageUrl?: string;
  imageUrlDark?: string;
}

const projectHighlights: ProjectHighlight[] = [
  {
    organization: "Five Star Finance Inc.",
    projectTitle: "STELLA",
    projectSummary:
      "A comprehensive lending system for AFP retirees, streamlining loan applications and benefit disbursements",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    imageUrl: "/images/stella-light.webp",
    imageUrlDark: "/images/stella-dark.webp",
  },
  {
    organization: "Application Development",
    projectTitle: "Food Sentinel",
    projectSummary:
      "Full-stack platform for managing catering services with real-time order tracking and payment processing",
    techStack: ["Next.js", "Express", "MongoDB", "WebSocket"],
    imageUrl: "/images/food-sentinel-light.webp",
    imageUrlDark: "/images/food-sentinel-dark.webp",
  },
  {
    organization: "Software Engineering",
    projectTitle: "KOSHI",
    projectSummary:
      "Award-winning mobile application helping users find their ideal vehicle match (2nd place in competition)",
    techStack: ["React Native", "Firebase"],
    imageUrl: "/images/koshi.webp",
  },
];

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
                      src={project.imageUrlDark!}
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            View All Projects
            <CodeXml className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
