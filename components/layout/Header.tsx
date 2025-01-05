import CTA from "@/components/CTA";
import MobileMenu from "../MobileMenu";

const Header = () => {
  return (
    //px-20 flex justify-between  for big screens
    <header className="w-full z-50 mx-auto flex border-border justify-between max-[1199px]:fixed max-[1199px]:bg-background max-[1199px]:top-0 max-[1199px]:p-6 max-[1199px]:border-b min-[1200px]:border-0 min-[1200px]:px-20 min-[1200px]:mb-10 min-[1200px]:h-[106px]">
      <h1 className="font-bold text-2xl">
        Samm <span className="text-ugray-500">Caag.</span>
      </h1>
      <CTA otherStyles="max-[1199px]:hidden" />
      <MobileMenu />
    </header>
  );
};

export default Header;
