"use client";
import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between md:px-[5%] py-3 border-grid z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-6">
        <div className="text-foreground flex items-center gap-2">
          <Logo className="w-6 h-6" />
          <span className="hidden font-bold lg:inline-block">samm.</span>
        </div>
      </div>
      <nav className="flex items-center gap-4">
        {navLinks.map((link) => (
          <Button
            asChild
            key={link.title}
            size={"sm"}
            variant={"link"}
            className={cn({
              "underline underline-offset-4": pathname === link.link || pathname.startsWith(`${link.link}/`),
            })}
          >
            <Link href={link.link}>{link.title}</Link>
          </Button>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <ModeToggle />
      </div>
    </header>
  );
}
