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
    <header className="w-full  z-50 mx-auto  border-border max-lg:fixed max-lg:bg-background max-lg:top-0 max-lg:p-6 max-lg:border-b lg:border-0 lg:px-20 lg:mb-10 lg:min-h-[106px]">
      <div className="flex  justify-between w-full">
        <h1 className="font-bold text-2xl">
          Samm <span className="text-ugray-500">Caag.</span>
        </h1>
        <CTA otherStyles="max-lg:hidden" />
        <div className="lg:hidden">
          <Button
            className="lg:hidden"
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
        <div className="flex flex-col p-10 pb-0 gap-6 lg:hidden">
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
