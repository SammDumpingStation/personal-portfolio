import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  ExternalLink,
  Github,
  Globe,
  Palette,
  TrafficCone,
  Users,
  Zap,
} from "lucide-react";
import { projects } from "@/features/projects/data/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ProjectImageCarousel from "@/features/projects/components/ProjectImageCarousel";
import CTA from "@/components/CTA";

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.find((project) => project.id === id);

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
        <p className="sub-heading">{project?.subtitle}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">
          <Button
            size="lg"
            variant={project.liveDemoLink ? "default" : "secondary"}
            disabled={!project.liveDemoLink}
            className={cn("gap-2 cursor-pointer", {
              "cursor-not-allowed": !project.liveDemoLink,
            })}
            asChild={!!project.liveDemoLink}
          >
            {project.liveDemoLink ? (
              <Link href={project.liveDemoLink} target="_blank">
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </Link>
            ) : (
              <>
                <TrafficCone className="h-4 w-4" />
                Live Demo Coming Soon
              </>
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
        <div className="w-24 h-1 mx-auto rounded-full bg-primary"></div>
      </div>
    );
  };

  const ProjectDetails = () => {
    return (
      <section className="section-container">
        {/* Technologies Used */}
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
                  {project.overview.goal.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="size-2 rounded-full bg-primary" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <section className="space-y-8">
            <Card>
              <CardContent>
                <h2 className="mb-4 text-2xl font-bold">Background</h2>
                <p className="text-muted-foreground">
                  {project.overview.background}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h2 className="mb-4 text-2xl font-bold">The challenge</h2>
                <p className="text-muted-foreground">
                  {project.overview.challenge}
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
        {/* <Card>
                <CardHeader>
                  <CardTitle>Technologies Used</CardTitle>
                  <CardDescription>
                    Modern tech stack for optimal performance and developer
                    experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech.id} variant="secondary">
                        {tech.title}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
      </section>
    );
  };

  const FeaturesSection = () => {
    return (
      <section className="section-container">
        <SectionHeader title="Key Features" />
        <div
          className={cn("grid  gap-6 md:grid-cols-3", {
            "md:grid-cols-2": project.features.length > 3,
          })}
        >
          {project.features.map(({ icon: Icon, title, description }, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  <Icon />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">{description}</p>
              </CardContent>
            </Card>
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
          {/* Carousel Screenshots */}
          <section className="section-container">
            <SectionHeader title="Screenshots" />
            <ProjectImageCarousel gallery={project.gallery} />
          </section>

          {/* Footer */}
          <CTA />
        </div>
      </div>
    </main>
  );
}
