// import Image from "next/image";
import { Users, Rocket, Globe, Award, Cpu, Zap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutMe() {
  const milestones = [
    {
      icon: Users,
      description:
        "Began coding three years ago, creating practical web and mobile apps through academic and personal projects.",
    },
    {
      icon: Rocket,
      description:
        "Developed KOSHI, a React Native app for car buyers, earning 2nd place in a university technopreneurship competition.",
    },
    {
      icon: Globe,
      description:
        "Digitized NBSC's hospital operations by building a Laravel-based management system with role-based access.",
    },
    {
      icon: Zap,
      description:
        "Created Food Sentinel, a real-time catering platform with WebSocket-powered order tracking for web and mobile.",
    },
    {
      icon: Award,
      description:
        "Designed Flicks, a movie ticketing system with a ChatGPT-inspired UI, earning praise for its intuitive design.",
    },
    {
      icon: Cpu,
      description:
        "Leading STELLA, a lending system for AFP retirees, to streamline branch operations with a centralized database.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b pb-6 md:grid-cols-2 md:gap-16">
          <div className="relative flex">
            {/* Right Column: Image */}
            <div className="relative flex-1 overflow-hidden rounded-lg">
              <Skeleton className="w-full h-full" />
              <div className="absolute bottom-4 left-4 flex flex-col rounded-lg bg-background p-4 shadow-lg sm:bottom-6 sm:left-6 sm:p-6">
                <span className="text-lg font-semibold sm:text-xl">
                  About Me
                </span>
                <span className="max-w-80 text-sm text-muted-foreground sm:text-base">
                  I craft web and mobile solutions that simplify complex
                  challenges, using tools like Next.js and Laravel to deliver
                  impactful, user-friendly experiences.
                </span>
              </div>
            </div>
          </div>

          {/* Left Column: Text and Milestones */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                I'm a full-stack developer with three years of experience
                building apps that solve real problems. From modernizing
                hospital systems to creating real-time catering platforms, I
                turn ideas into efficient, user-friendly solutions. My passion
                lies in blending technologies like Next.js, React Native, and
                Laravel with a deep understanding of client needs to deliver
                results that matter. Whether it's streamlining operations or
                crafting intuitive interfaces, I'm driven by the impact tech can
                have on businesses and communities.
              </p>
            </div>

            <div className="relative space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-4 group">
                  <div className="relative ">
                    <div className="flex size-10 items-center justify-center border-primary/30 sm:size-12 rounded-full h-full w-full overflow-hidden btn-tilt-group btn-style">
                      <milestone.icon className="size-5 sm:size-6" />
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="absolute left-1/2 top-12 h-14 w-px -translate-x-1/2 bg-primary/30 sm:top-12" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground sm:text-base min-h-[72px]">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
