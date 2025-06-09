import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Check,
  ChevronRight,
  ExternalLink,
  Palette,
  TrafficCone,
  Users,
  Zap,
} from "lucide-react";
import {
  projects,
  projectsCards,
} from "@/features/projects/data/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectImageCarousel from "@/features/projects/components/ProjectImageCarousel";
import CTA from "@/components/CTA";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import ProjectCard from "@/features/projects/components/ProjectCard";

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);
  const otherProjects = projectsCards
    .filter((project) => project.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  if (!project) {
    return notFound();
  }

  const ProjectHeader = () => {
    return (
      <div className="text-center mb-12">
        {project.isFeatured && (
          <Badge variant="outline" className="mb-4 gap-2 px-4 py-2">
            <Palette className="h-4 w-4 text-primary" />
            Featured Work
          </Badge>
        )}
        <h1 className="heading">{project?.title}</h1>
        <p className="sub-heading text-center">{project?.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">
          <Button
            size="lg"
            variant={project.liveDemoLink ? "default" : "secondary"}
            className={cn("gap-2 cursor-pointer", {
              "cursor-not-allowed": !project.liveDemoLink,
            })}
            icon={project.liveDemoLink ? ExternalLink : TrafficCone}
            iconPlacement="right"
            effect={"expandIcon"}
            asChild={!!project.liveDemoLink}
          >
            {project.liveDemoLink ? (
              <Link href={project.liveDemoLink} target="_blank">
                View Live Demo
              </Link>
            ) : (
              <span>
                Live Demo Coming Soon
              </span>
            )}
          </Button>
        </div>
      </div>
    );
  };

  const ProjectImage = () => {
    return (
      <div className="mb-16 max-w-6xl mx-auto ">
        <Card className="overflow-hidden w-full h-full group p-0">
          {project.images ? (
            <>
              <Image
                src={project.images.light}
                alt={project.title}
                width={2880}
                height={1800}
                className={cn(
                  "object-cover object-top max-h-[730px] transition-transform duration-300 group-hover:scale-105",
                  { "dark:hidden": project.images.dark }
                )}
              />
              {project.images.dark && (
                <Image
                  src={project.images.dark}
                  alt={project.title}
                  width={2880}
                  height={1800}
                  className="object-cover object-top hidden dark:block transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                  <Zap className="h-12 w-12" />
                </div>
                <p className="text-lg font-medium">Project Screenshot</p>
                <p className="text-sm opacity-80">1920 * 1080</p>
              </div>
            </div>
          )}
        </Card>
        <div className="flex justify-between mt-6">
          <div className="flex items-center gap-2 justify-center">
            <Calendar className="h-5 w-5" />
            <h4 className="font-semibold">Timeline:</h4>
            <p className="">{project.timeline}</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <h4 className="font-semibold">Role:</h4>
            <p className="">{project.role}</p>
          </div>
        </div>
      </div>
    );
  };

  const SectionHeader = ({ title }: { title: string }) => {
    return (
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        <div className="section-underline" />
      </div>
    );
  };

  const ProjectDetails = () => {
    return (
      <section className="section-container">
        <SectionHeader title="Project Overview" />
        <div className="grid gap-12 md:grid-cols-2">
          <Card>
            <CardContent>
              <h2 className="mb-6 text-2xl font-bold">Overview</h2>
              <p className="mb-8 text-muted-foreground">
                {project.overview.description}
              </p>
              <div className="">
                <h2 className="mb-6 text-2xl font-bold">Project Goals</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.overview.goal.map((goal, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="text-green-500" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="space-y-8 flex flex-col">
            <Card className="flex-1">
              <CardContent>
                <h2 className="mb-4 text-2xl font-bold">Background</h2>
                <p className="text-muted-foreground">
                  {project.overview.background}
                </p>
              </CardContent>
            </Card>
            <Card className="flex-1">
              <CardContent>
                <h2 className="mb-4 text-2xl font-bold">The Challenge</h2>
                <p className="text-muted-foreground">
                  {project.overview.challenge}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
    );
  };

  const FeaturesSection = () => {
    return (
      <section className="section-container">
        <SectionHeader title="Key Features" />
        <div
          className={cn("grid  gap-6 md:grid-cols-3", {
            "md:grid-cols-2": project.features.length === 4,
          })}
        >
          {project.features.map(({ icon: Icon, title, description }, index) => (
            <Card key={index} className="group">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="btn-tilt-group btn-style w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon />
                  </div>
                  <CardTitle className="text-xl"> {title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="">
                <p className="flex gap-2">
                  <ChevronRight />
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  const ProjectTechStack = () => {
    return (
      <div
        className={cn("grid  md:grid-cols-2 lg:grid-cols-3 gap-4", {
          "lg:grid-cols-2":
            !project.techStack.backend || !project.techStack.infrastructure,
        })}
      >
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold p-4">Frontend</h2>
            <HoverEffect items={project.techStack.frontend} />
          </CardContent>
        </Card>
        {project.techStack.backend && (
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold p-4">Backend</h2>
              <HoverEffect items={project.techStack.backend} />
            </CardContent>
          </Card>
        )}
        {project.techStack.infrastructure && (
          <Card>
            <CardContent>
              <h2 className="text-xl font-semibold p-4">Infrastructure</h2>
              <HoverEffect items={project.techStack.infrastructure} />
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  const OtherProjects = () => {
    return (
      <section className="section-container">
        <SectionHeader title="Other Projects You May Like" />
        <div className="flex max-md:flex-col gap-6 md:overflow-x-scroll">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              classname="md:min-w-[470px]"
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="">
          <ProjectHeader />
          <ProjectImage />
          <ProjectDetails />
          <FeaturesSection />
          {/* Tech Stack */}
          <section className="section-container">
            <SectionHeader title="Technology Stack" />
            <ProjectTechStack />
          </section>

          {/* Carousel Screenshots */}
          <section className="section-container">
            <SectionHeader title="Screenshots" />
            <ProjectImageCarousel gallery={project.gallery} />
          </section>

          {/* Project Recommendations */}
          <OtherProjects />

          {/* CTA */}
          <CTA />
        </div>
      </div>
    </main>
  );
}
