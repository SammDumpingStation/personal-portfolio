import Image from "next/image";
import CTA from "@/components/CTA";

const Footer = () => {
  return (
    <footer className=" bg-ugray-25 px-4">
      <div className="h-[500px] w-full max-w-[1036px] mx-auto flex flex-col items-center justify-around">
        <h1 className="font-bold text-2xl">
          Samm <span className="text-ugray-500">Caag.</span>
        </h1>
        <h4 className="h4">Let&apos;s Stay Connected</h4>
        <p className="p text-center">
          Interested in discussing design, sharing ideas, or exploring
          innovations in product design? Feel free to reach out—let&apos;s keep the
          conversation going.
        </p>
        <CTA />
        <div className="border-t border-ugray-200 pt-10 items-center gap-4 flex max-md:flex-col  md:justify-between w-full">
          <span>© 2024 Gridbox. All rights reserved.</span>
          <div className="flex gap-6">
            <Image
              src={"/icons/twitter.svg"}
              width={24}
              height={24}
              alt="Twitter"
            />
            <Image
              src={"/icons/linkedin.svg"}
              width={24}
              height={24}
              alt="LinkedIn"
            />
            <Image
              src={"/icons/figma.svg"}
              width={24}
              height={24}
              alt="Figma"
            />
            <Image
              src={"/icons/dribbler.svg"}
              width={24}
              height={24}
              alt="Dribller"
            />
            <Image
              src={"/icons/instagram.svg"}
              width={24}
              height={24}
              alt="Instagram"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
