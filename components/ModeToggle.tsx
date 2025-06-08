"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="default"
      size={"icon"}
      className="fixed bottom-8 right-8 border-0 z-50"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all hidden dark:block" />
      <Moon className="h-[1.2rem] w-[1.2rem] transition-all dark:hidden" />
    </Button>
  );
}
