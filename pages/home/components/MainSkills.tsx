"use client";
import { Card, CardTitle } from "@/components/ui/card";
import Image from "next/image";
const frontendLogos = [
  {
    id: "logo-1",
    title: "Next.js",
    image: "/logos/nextjs-small.svg",
  },
  {
    id: "logo-2",
    title: "TailwindCSS",
    image: "/logos/tailwind-small.svg",
  },
  {
    id: "logo-4",
    title: "Typescript",
    image: "/logos/typescript-small.svg",
  },
  {
    id: "logo-3",
    title: "Shadcn UI",
    image: "/logos/shadcn-ui-small.svg",
  },
];

const backendLogos = [
  
]

export default function Logo6() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-pretty text-2xl font-bold lg:text-4xl">
              My Tech Stack
            </h2>
            <p className="mt-2 text-muted-foreground">
              Technologies I'm currently working with
            </p>
          </div>
          <div className="md:w-2/3 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {frontendLogos.map((logo) => (
                <Card
                  key={logo.id}
                  className="flex items-center justify-center shadow-none"
                >
                  <Image
                    src={logo.image}
                    alt={`${logo.title} Logo`}
                    width={200}
                    height={48}
                    className="h-12 w-auto dark:invert "
                  />
                  <CardTitle>{logo.title}</CardTitle>
                </Card>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
              {frontendLogos.map((logo) => (
                <Card
                  key={logo.id}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={logo.image}
                    alt={`${logo.title} Logo`}
                    width={200}
                    height={48}
                    className="h-12 w-auto dark:invert "
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
