import Link from "next/link";
import { navLinks } from "@/data/links";
import { Logo } from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border border-t bg-background text-foreground">
      <div className="container mx-auto py-8">
        <div className="mb-6 flex flex-col items-center">
          <Link href="/" className="mb-4 gap-2 flex items-center">
            <Logo className="w-6 h-6" />
            <span className="text-xl font-semibold">samm.</span>
          </Link>
          <p className="max-w-2xl text-center text-sm text-muted-foreground">
            Full-stack developer specializing in Next.js and modern web
            applications. Turning ideas into functional and beautiful digital
            experiences.  
          </p>
        </div>
        <nav className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="text-sm transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="text-center text-sm text-muted-foreground">
          {new Date().getFullYear()} samm. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
