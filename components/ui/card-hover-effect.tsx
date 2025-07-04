"use client";
import { Logo } from "@/features/tech-stack/types/logos-type";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: Logo[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 justify-between w-full sm:grid-cols-3 md:grid-cols-4",
        {"md:grid-cols-2": pathname !== "/"},
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="text-center items-center flex justify-center">
            <Image
              src={item.image}
              alt={`${item.title} Logo`}
              width={200}
              height={48}
              
              className={cn("h-12 mx-auto max-w-fit", item.invert && "dark:invert")}
            />
            <CardTitle className="text-foreground">{item.title}</CardTitle>
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-card border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 transition-colors",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
