"use client";
import { Card, CardTitle } from "@/components/ui/card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
const logos = [
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
    id: "logo-3",
    title: "Typescript",
    image: "/logos/typescript-small.svg",
  },
  {
    id: "logo-4",
    title: "Shadcn UI",
    image: "/logos/shadcn-ui-small.svg",
  },
  { id: "logo-5", title: "Express", image: "/logos/express-small.svg" },
  { id: "logo-6", title: "Supabase", image: "/logos/supabase-small.svg" },
  { id: "logo-7", title: "MongoDB", image: "/logos/mongodb-small.svg" },
  { id: "logo-8", title: "Mongoose", image: "/logos/mongoose-small.svg" },
];

export default function Logo6() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20 md:flex-row md:justify-between ">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-pretty text-2xl font-bold lg:text-4xl">
              My Tech Stack
            </h2>
            <p className="mt-2 text-muted-foreground min-w-max">
              Technologies I'm currently working with
            </p>
            <Button variant="outline" className="mt-6 !w-full" size={"lg"}>
              View All
              <CodeXml className="h-4 w-4" />
            </Button>
          </div>
          <HoverEffect items={logos} />
        </div>
      </div>
    </section>
  );
}
