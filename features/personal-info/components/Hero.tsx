import { ArrowDownToLine, Circle, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import BackgroundLines from "@/components/BackgroundLines";
import Link from "next/link";
import { personalInfo } from "../data/personal-info-data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex">
      <div className="absolute right-0 top-0 h-full w-3/4 overflow-hidden">
        <div className="absolute right-0 top-0 h-[141%] w-[141%] origin-top-right -rotate-45 transform bg-foreground" />
      </div>
      <BackgroundLines />
      <div className="container !pt-0 my-auto mx-auto grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col">
          <div className="z-10 flex max-w-5xl flex-col gap-6">
            <Badge
              variant="outline"
              className="text-green-500 bg-green-200 dark:bg-green-700 border-green-500 "
            >
              <Circle fill="currentColor" />
              <span className="text-foreground ml-2">Available for work</span>
            </Badge>
            <div className="flex flex-col">
              <span className="text-3xl font-semibold ml-1">Hi, I am</span>
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl mb-6">
                Samm Caagbay
                <span className="font-normal block text-4xl text-muted-foreground">
                  A Software Engineer
                </span>
              </h1>
              <p className="text-muted-foreground lg:text-xl">
                Creating modern web applications that solve real problems. I
                specialize in building efficient, user-friendly software that
                helps businesses grow and succeed.
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <Button
                effect={"expandIcon"}
                icon={ArrowDownToLine}
                iconPlacement="right"
                className="gap-2 min-w-52"
                size={"lg"}
              >
                Download CVT
              </Button>
              <Button
                variant="outline"
                icon={Send}
                effect={"expandIcon"}
                iconPlacement="right"
                className="gap-2 min-w-52"
                size={"lg"}
                asChild
              >
                <Link href={"/contact"}>Let&apos;s Talk</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              {/* <Skeleton className="w-full h-[600px] " /> */}
              <Image
                src={personalInfo.imageUrl}
                alt={personalInfo.name}
                width={200}
                height={200}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
