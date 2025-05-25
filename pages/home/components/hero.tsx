import {
  ArrowDownRight,
  Cpu,
  TrendingUp,
  PlayCircle,
  Download,
  Phone,
  LucideDownload,
  ArrowDownToLine,
  BaggageClaim,
  BriefcaseBusiness,
  Dot,
  Circle,
  Plane,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const logos = [
  {
    src: "/logos/shadcn-ui.svg",
    alt: "Shadcn UI logo",
    height: "h-7",
  },
  {
    src: "/logos/vercel.svg",
    alt: "Vercel logo",
    height: "h-8",
  },
  {
    src: "/logos/nextjs.svg",
    alt: "React logo",
    height: "h-7",
  },
  {
    src: "/logos/supabase.svg",
    alt: "Supabase logo",
    height: "h-7",
  },
  {
    src: "/logos/tailwind.svg",
    alt: "Tailwind logo",
    height: "h-4",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex">
      <div className="absolute right-0 top-0 h-full w-3/4 overflow-hidden">
        <div className="absolute right-0 top-0 h-[141%] w-[141%] origin-top-right -rotate-45 transform bg-primary/10" />
      </div>
      <div className="container my-auto mx-auto grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            className="absolute inset-0 m-auto opacity-20 dark:invert lg:block"
          >
            {/* Background Rectangle */}
            <rect width="1920" height="1080" fill="#f2f2f2"></rect>

            {/* Horizontal Lines */}
            {Array.from({ length: 25 }, (_, i) => (
              <line
                key={`horizontal-${i}`}
                y1={20 + i * 40}
                x2="1920"
                y2={20 + i * 40}
                className="stroke-muted-foreground"
                stroke="#b0bec5"
                strokeWidth="0.8"
                strokeDasharray="5 5"
              />
            ))}

            {/* Vertical Lines */}
            {Array.from({ length: 45 }, (_, i) => (
              <line
                key={`vertical-${i}`}
                x1={20 + i * 40}
                y1="0"
                x2={20 + i * 40}
                y2="1080"
                className="stroke-muted-foreground"
                stroke="#b0bec5"
                strokeWidth="0.8"
                strokeDasharray="5 5"
              />
            ))}

            {/* Diagonal Lines from Top-Left to Bottom-Right */}
            {Array.from({ length: 30 }, (_, i) => (
              <line
                key={`diagonal-${i}`}
                x1={-200 + i * 100}
                y1="0"
                x2={200 + i * 100}
                y2="1080"
                stroke="#cfd8dc"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            ))}

            <defs>
              <clipPath id="clip0">
                <rect width="1920" height="1080" fill="#000000"></rect>
              </clipPath>
            </defs>
          </svg>

          <div className="z-10 flex max-w-5xl flex-col gap-6">
            <Badge
              variant="outline"
              className="text-green-500 bg-green-200 border-green-500"
            >
              <Circle fill="currentColor" />
              <span className="text-foreground ml-2">Available for work</span>
            </Badge>
            <div className="">
              <span className="text-3xl font-semibold ml-1">Hi, I am</span>
              <h1 className="mb-6 text-pretty text-4xl font-bold lg:text-6xl">
                Samm Caagbay
                <span className="font-normal block text-4xl text-muted-foreground">
                  A Software Engineer
                </span>
              </h1>
              <p className="text-muted-foreground lg:text-xl max-w-[40ch]">
                Transforming data into actionable insights. Streamline your
                workflow and enhance productivity with cutting-edge AI tools.
              </p>
            </div>
            <div className="mt-8 flex gap-2">
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
              {/* <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Designing Interfaces: A User-Centered Approach"
                width={480}
                height={600}
                className="object-cover"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
