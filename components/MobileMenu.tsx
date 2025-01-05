"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const MobileMenu = () => {
  return (
    <Button className="navbar-lg:hidden" variant={"outline"} size={"icon"}>
      <Menu className="h-6 w-6" />
    </Button>
  );
};

export default MobileMenu;
