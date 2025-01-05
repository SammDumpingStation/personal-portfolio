"use client";

import CTA from "@/components/CTA";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import NavLink from "../NavLink";
const Header = () => {
  const [showLink, setShowLink] = useState(false);

  return (
    //px-20 flex justify-between  for big screens
    <header className="w-full z-50 mx-auto  border-border max-[1199px]:fixed max-[1199px]:bg-background max-[1199px]:top-0 max-[1199px]:p-6 max-[1199px]:border-b min-[1200px]:border-0 min-[1200px]:px-20 min-[1200px]:mb-10 min-[1200px]:min-h-[106px]">
      <div className="flex  justify-between">
        <h1 className="font-bold text-2xl">
          Samm <span className="text-ugray-500">Caag.</span>
        </h1>
        <CTA otherStyles="max-[1199px]:hidden" />
        <div>
          <Button
            className="min-[1200px]:hidden"
            variant={"outline"}
            size={"icon"}
            onClick={() => setShowLink((prev) => !prev)}
          >
            {!showLink ? (
              <Menu className="h-6 w-6" />
            ) : (
              <X className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {showLink && (
        <div className="flex flex-col p-10 pb-0 gap-6 min-[1200px]:hidden">
          <NavLink href="/" title="Home" />
          <NavLink href="/portfolio" title="Portfolio" />
          <NavLink href="/about" title="About Me" />
          <NavLink href="/contact" title="Contact" />
          <CTA otherStyles="w-full" />
        </div>
      )}
    </header>
  );
};

export default Header;
