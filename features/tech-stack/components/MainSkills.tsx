import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Button } from "@/components/ui/button";
import { CodeXml } from "lucide-react";
import { logos } from "@/features/tech-stack/data/logos-data";
import Link from "next/link";

export default function MainSkills() {
  return (
    <section className="py-32">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-20 md:flex-row md:justify-between ">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-pretty text-2xl font-bold lg:text-4xl">
              My Tech Stack 
            </h2>
            <p className="mt-2 text-muted-foreground min-w-max">
              Technologies I&apos;m currently working with
            </p>
            <Button variant="outline" className="mt-6 !w-full" size={"lg"} icon={CodeXml} iconPlacement="right" effect={'expandIcon'}>
              <Link href="/about-me">View All</Link>
            </Button>
          </div>
          <HoverEffect items={logos} />
        </div>
      </div>
    </section>
  );
}
