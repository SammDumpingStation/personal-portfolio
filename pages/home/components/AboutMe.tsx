import Image from "next/image";
import { Users, Rocket, Globe, Award, Cpu, ChartBar } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AboutMe() {
  const milestones = [
    {
      icon: Users,
      description:
        "Began my web development journey 2+ years ago, focusing on building practical, user-friendly applications through academic and personal projects.",
    },
    {
      icon: Rocket,
      description:
        "Developed KOSHI, a React Native application that helps users find their perfect car, earning 2nd place in a competitive university competition.",
    },
    {
      icon: Globe,
      description:
        "Contributed to digitizing a university clinic by building the foundation of their management system using Laravel.",
    },
    {
      icon: Award,
      description:
        "Led development of a comprehensive Online Catering Reservation System, implementing web, mobile, and real-time API solutions.",
    },
    {
      icon: Cpu,
      description:
        "Currently developing STELLA, a lending system for AFP retirees, focusing on creating meaningful impact through technology.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 border-b pb-6 md:grid-cols-2 md:gap-16">
          {/* Left Column: Text and Milestones */}

          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
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
                  Transforming business challenges into elegant web solutions. I
                  specialize in Next.js development, creating intuitive digital
                  experiences that bridge the gap between technical excellence
                  and business value.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                As a Next.js developer with 2+ years of hands-on experience, I
                thrive on building applications that make a tangible difference.
                My journey in tech has taught me the power of understanding both
                code and business objectives to create solutions that truly
                serve their purpose. I excel at translating complex requirements
                into clean, efficient applications, with a particular talent for
                modernizing manual processes. What excites me most is seeing how
                the right technology can transform operations and create
                meaningful impact.
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
