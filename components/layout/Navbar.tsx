"use client";
import { Card } from "@/components/ui/card";
import NavLink from "../NavLink";

const Navbar = () => {
  return (
    <nav className="hidden lg:inline lg:fixed top-[50px] z-50 left-1/2 -translate-x-1/2">
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
