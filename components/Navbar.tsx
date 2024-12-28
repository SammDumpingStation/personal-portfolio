import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const Navbar = () => {
  return (
    <nav className="fixed top-[50px] left-1/2 -translate-x-1/2">
      <Card className="space-x-12 text-ugray-800 dark:text-ugray-300 font-semibold text-sm px-12 py-[18px] rounded-full">
        <Link href={"/"}>Home</Link>
        <Link href={"/portfolio"}>Portfolio</Link>
        <Link href={"/about-me"}>About Me</Link>
        <Link href={"/contact"}>Contact</Link>
      </Card>
    </nav>
  );
};

export default Navbar;
