"use client";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 flex items-center justify-between px-4 md:px-[5%] py-3 z-50 w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 border-border/40 shadow-sm"
          : "bg-background/60 backdrop-blur-sm border-transparent"
      )}
    >
      {/* Logo Section */}
      <Link
        href="/"
        className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
      >
        <Logo className="w-6 h-6" />
        <span className="hidden font-bold lg:inline-block">samm.</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Button
            asChild
            key={link.title}
            size="sm"
            variant="ghost"
            className={cn(
              "relative px-4 py-2 rounded-full transition-all duration-200 hover:bg-accent",
              {
                "bg-accent text-accent-foreground":
                  pathname === link.link ||
                  pathname.startsWith(`${link.link}/`),
              }
            )}
          >
            <Link href={link.link}>
              {link.title}
              {(pathname === link.link ||
                pathname.startsWith(`${link.link}/`)) && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
              )}
            </Link>
          </Button>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center gap-3">

        {/* Desktop CTA */}
        <Button className="hidden md:flex rounded-full group px-6 py-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
          Hire Me
          <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <Button
                asChild
                key={link.title}
                variant="ghost"
                className={cn(
                  "justify-start px-4 py-3 rounded-lg transition-all duration-200",
                  {
                    "bg-accent text-accent-foreground":
                      pathname === link.link ||
                      pathname.startsWith(`${link.link}/`),
                  }
                )}
              >
                <Link href={link.link}>{link.title}</Link>
              </Button>
            ))}

            <Button className="mt-4 rounded-full group justify-center">
              Hire Me
              <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
