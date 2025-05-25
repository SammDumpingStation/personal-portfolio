import { Logo } from "@/components/Logo";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const links = [
    { title: "HOME", link: "/" },
    { title: "ABOUT ME", link: "/about-me" },
    { title: "PROJECTS", link: "/projects" },
    { title: "CONTACT ME", link: "/contact" },
  ];
  return (
    <nav className="flex items-center justify-between md:px-[5%] py-6">
      <div className="text-foreground">
        <Logo className="w-10 h-10" />
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          {links.map((link, index) => (
            <Button
              asChild
              key={link.title}
              className="rounded-full w-32 h-10"
              variant={index === 0 ? "secondary" : "link"}
            >
              <Link href={link.link}>{link.title}</Link>
            </Button>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
