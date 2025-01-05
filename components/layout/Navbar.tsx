"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = { href: string; title: string };
const Navbar = () => {
  const pathname = usePathname();
  const NavLink = ({ href, title }: NavLinkProps) => (
    <Link
      className={clsx(
        "hover:text-base hover:font-bold [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1)] transition-all duration-300",
        pathname === href
          ? "text-ugray-600 dark:text-ugray-200 font-bold text-base"
          : "text-ugray-400 dark:text-ugray-300 font-medium text-sm"
      )}
      href={href}
    >
      {title}
    </Link>
  );
  return (
    <nav className="hidden min-[1200px]:inline lg:fixed top-[50px] z-50 left-1/2 -translate-x-1/2">
      <Card className="flex items-center w-[455px] px-5 justify-around h-[56px]  rounded-full">
        <NavLink href="/" title="Home" />
        <NavLink href="/portfolio" title="Portfolio" />
        <NavLink href="/about" title="About Me" />
        <NavLink href="/contact" title="Contact" />
      </Card>
    </nav>
  );
};

export default Navbar;
