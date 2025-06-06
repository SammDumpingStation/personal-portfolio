import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  ExternalLink,
  Github,
  Globe,
  Palette,
  Users,
  Zap,
} from "lucide-react";
import { projects } from "@/features/projects/data/projects-data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Lightning Fast",
      description:
        "Optimized performance with server-side rendering and edge functions",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "User Authentication",
      description:
        "Secure authentication system with role-based access control",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Responsive Design",
      description: "Fully responsive interface that works on all devices",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="">
          {/* Project Header */}
          <div className="text-center mb-12">
            {project.isFeatured && (
              <Badge variant="outline" className="mb-4 gap-2 px-4 py-2">
                <Palette className="h-4 w-4 text-primary" />
                Featured Work
              </Badge>
            )}
            <h1 className="heading">{project?.title}</h1>
            <p className="sub-heading">{project?.subtitle}</p>

            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Live Demo
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="h-4 w-4" />
                View Source Code
              </Button>
            </div> */}
          </div>

          {/* Project Image */}
          <div className="mb-16">
            <Card className="overflow-hidden group max-w-6xl mx-auto p-0">
              {project.images ? (
                <>
                  <Image
                    src={project.images.light}
                    alt={project.title}
                    width={2880}
                    height={1800}
                    className={cn(
                      "object-cover transition-transform duration-300 group-hover:scale-105",
                      { "dark:hidden": project.images.dark }
                    )}
                  />
                  <Image
                    src={project.images.dark}
                    alt={project.title}
                    width={2880}
                    height={1800}
                    className="object-cover hidden dark:block transition-transform duration-300 group-hover:scale-105"
                  />
                </>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                      <Zap className="h-12 w-12" />
                    </div>
                    <p className="text-lg font-medium">Project Screenshot</p>
                    <p className="text-sm opacity-80">1920 * 1080</p>
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Project Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Project Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Timeline
                  </h4>
                  <p className="text-slate-600">
                    March 2024 - May 2024 (3 months)
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Role</h4>
                  <p className="text-slate-600">
                    Full-Stack Developer & UI/UX Designer
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Team Size
                  </h4>
                  <p className="text-slate-600">Solo Project</p>
                </div>
                <Separator />
                {/* <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Status</h4>
                  <Badge variant="default">Live & Maintained</Badge>
                </div> */}
              </CardContent>
            </Card>

            {/* Technologies Used */}
            <Card>
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
            </Card>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <Card className="mb-16">
            <CardHeader>
              <CardTitle>About This Project</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                TaskFlow Pro was born out of the need for a more intuitive and
                powerful project management solution. After experiencing
                frustrations with existing tools, I set out to create a platform
                that combines the best aspects of modern web development with
                user-centered design principles.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The application features a clean, modern interface built with
                React and Next.js, ensuring fast load times and smooth
                interactions. The backend leverages PostgreSQL for reliable data
                storage and Prisma for type-safe database operations.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Key challenges included implementing real-time collaboration
                features, optimizing performance for large datasets, and
                creating an intuitive drag-and-drop interface for task
                management. The solution involved WebSocket integration,
                efficient data pagination, and custom React components with
                smooth animations.
              </p>
            </CardContent>
          </Card>

          {/* Additional Screenshots */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">
              More Screenshots
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users className="h-8 w-8" />
                    </div>
                    <p className="font-medium">Dashboard View</p>
                  </div>
                </div>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-lg flex items-center justify-center">
                      <Globe className="h-8 w-8" />
                    </div>
                    <p className="font-medium">Mobile Interface</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <Card className="text-center bg-slate-900 text-white">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">
                Interested in This Project?
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Feel free to explore the live demo or check out the source code.
                I'm always open to discussing the technical details and design
                decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Try Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-slate-600 text-white hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
