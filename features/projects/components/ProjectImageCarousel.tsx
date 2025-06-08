"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ProjectImageCarousel({
  gallery,
}: {
  gallery: {
    light: string;
    dark?: string;
  }[];
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [count, setCount] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="py-3">
          {gallery.map((image, index) => (
            <CarouselItem key={index} className={cn("basis-[60%] ", {})}>
              <Card
                className={cn(
                  "transition-transform duration-500 p-0  xl:min-w-[900px] overflow-hidden",
                  {
                    "scale-[0.6]": index !== current - 1,
                  }
                )}
              >
                <>
                  <Image
                    src={image.light}
                    alt={`Images ${index + 1}`}
                    width={2880}
                    height={1800}
                    className={cn(
                      "object-cover object-top max-h-[730px] transition-transform duration-300 group-hover:scale-105",
                      { "dark:hidden": image.dark }
                    )}
                  />
                  {image.dark && (
                    <Image
                      src={image.dark}
                      alt={`Images ${index + 1}`}
                      width={2880}
                      height={1800}
                      className="object-cover object-top hidden dark:block transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="top-[calc(100%+0.5rem)] translate-y-0 left-0 w-12 h-12 "
          size={"custom"}
          variant={"default"}
        />{" "}
        <CarouselNext
          className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full w-12 h-12"
          variant={"default"}
          size={"custom"}
        />{" "}
      </Carousel>{" "}
      <div className="mt-4 flex items-center justify-end gap-2">
        {gallery.map((_, index) => (
          <Button
            variant="outline"
            size={"custom"}
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-10 w-10 rounded-full border-2", {
              "border-primary": current === index + 1,
            })}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}
