import { Phone, ArrowDownToLine, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import BackgroundLines from "@/components/BackgroundLines";

/**
 * Hero component renders a prominent section of a webpage that introduces Samm Caagbay,
 * a software engineer. It includes a brief personal introduction, a badge indicating
 * availability for work, and buttons for downloading a CV and contacting Samm.
 * The component also features a placeholder for an image or visual representation.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex">
      <div className="absolute right-0 top-0 h-full w-3/4 overflow-hidden">
        <div className="absolute right-0 top-0 h-[141%] w-[141%] origin-top-right -rotate-45 transform bg-foreground" />
      </div>
      <BackgroundLines />
      <div className="container my-auto mx-auto grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
              <Button size="lg" className="gap-2">
                <ArrowDownToLine />
                Download CVT
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Phone />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
              <Skeleton className="w-full h-[600px] " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
