import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Code,
  Layout,
  Database,
} from "lucide-react";
import { Logo } from "./Logo";
import { Card } from "./ui/card";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative bg-background section-container">
      {/* New SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-muted"
        >
          <path
            d="M0 400C0 400 300 100 720 100C1140 100 1440 400 1440 400V800H0V400Z"
            fill="currentColor"
            fillOpacity="0.05"
          />
          <circle
            cx="720"
            cy="400"
            r="300"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
          <line
            x1="0"
            y1="400"
            x2="1440"
            y2="400"
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="grid grid-cols-1 gap-8 rounded-2xl border bg-card p-8 shadow-lg md:p-12 lg:grid-cols-2 lg:p-16">
          {/* Left Column */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold tracking-tight md:text-4xl">
              Transform Your Vision into Reality
              <span className="mt-4 block section-underline mx-0"></span>
            </h3>

            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  icon: <Code className="size-5" />,
                  text: "Full-Stack Development",
                },
                {
                  icon: <Zap className="size-5" />,
                  text: "Real-Time Solutions",
                },
                {
                  icon: <Shield className="size-5" />,
                  text: "Secure Systems",
                },
                {
                  icon: <Layout className="size-5" />,
                  text: "User-Centric Design",
                },
                {
                  icon: <Database className="size-5" />,
                  text: "Efficient Data Management",
                },
                {
                  icon: <TrendingUp className="size-5" />,
                  text: "Continuous Growth and Improvement",
                },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex group items-center gap-4 rounded-lg  p-4 transition-colors  border"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full btn-style btn-tilt-group">
                    {item.icon}
                  </span>
                  <span className="text-base font-medium text-foreground">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-center space-y-6 rounded-lg border bg-accent p-6">
            <Card className="border p-10">
              <Logo />
            </Card>
            <Button
              className="group !px-8 py-6 text-base font-medium"
              asChild
              icon={ArrowRight}
              iconPlacement="right"
              effect={"expandIcon"}
            >
              <Link href={"/contact"}>
                Let&apos;s Build Your Next Big Idea
              </Link>
            </Button>
            <p className="text-center text-sm text-muted-foreground lg:text-right">
              Partner with a Developer Trusted by Clients and Teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
