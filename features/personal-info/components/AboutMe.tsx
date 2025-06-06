// import Image from "next/image";
import { Users, Rocket, Globe, Award, Cpu } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutMe() {
  const milestones = [
    {
      icon: Users,
      description:
        "Started web development over two years ago, building practical, user-friendly apps through school and personal projects.",
    },
    {
      icon: Rocket,
      description:
        "Built KOSHI, a React Native app to help users find their ideal car, winning 2nd place in a university competition.",
    },
    {
      icon: Globe,
      description:
        "Helped a university clinic go digital by creating the foundation of their management system with Laravel.",
    },
    {
      icon: Award,
      description:
        "Led the creation of an Online Catering Reservation System, building web, mobile, and real-time API features.",
    },
    {
      icon: Cpu,
      description:
        "Working on STELLA, a lending system for AFP retirees, to make a real difference through tech.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b pb-6 md:grid-cols-2 md:gap-16">
          <div className="relative flex ">
            {/* Right Column: Image */}
            <div className="relative flex-1  overflow-hidden rounded-lg">
              <Skeleton className="w-full h-full" />
              {/* <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="TechNova team collaborating"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              /> */}
              <div className="absolute bottom-4 left-4 flex flex-col rounded-lg bg-background p-4 shadow-lg sm:bottom-6 sm:left-6 sm:p-6">
                <span className="text-lg font-semibold sm:text-xl">
                  About Me
                </span>
                <span className="max-w-80 text-sm text-muted-foreground sm:text-base">
                  I turn business challenges into clear, user-friendly web
                  solutions, specializing in Next.js to build digital
                  experiences that balance technical quality with real-world
                  impact.
                </span>
              </div>
            </div>
          </div>

          {/* Left Column: Text and Milestones */}
          <div className="space-y-8 ">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                I&apos;m a Next.js developer with over two years of experience
                building apps that make a real difference. I love turning
                complex ideas into simple, efficient web solutions that help
                businesses grow. By blending my coding skills with an
                understanding of what businesses need, I create user-friendly
                applications, often modernizing old processes. What drives me is
                seeing how the right tech can transform operations and create
                lasting impact.
              </p>
            </div>

            <div className="relative space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex gap-4">
                  <div className="relative group">
                    <div className="flex size-10 items-center justify-center border-primary/30 sm:size-12 rounded-full h-full w-full overflow-hidden bg-card border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-colors ">
                      <milestone.icon className="size-5 text-primary sm:size-6 " />
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
