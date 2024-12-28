import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-20 flex justify-between pt-[50px] pb-[68px]">
      <h1 className="font-bold text-2xl">
        Samm <span className="text-ugray-500">Caag.</span>
      </h1>
      <Button
        variant={"outline"}
        className="rounded-full py-7 px-9 text-ugray-700"
      >
        <Image
          src={"/icons/github.svg"}
          width={20}
          height={20}
          alt="Github Logo Grey"
        />
        <span className="text-base font-semibold">Get in Touch</span>
      </Button>
    </header>
  );
};

export default Header;
