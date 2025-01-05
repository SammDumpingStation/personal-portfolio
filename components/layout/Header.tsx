import CTA from "@/components/CTA";
import MobileMenu from "../MobileMenu";

const Header = () => {
  return (
    //px-20 flex justify-between  for big screens
    <header className="w-full z-50 mx-auto flex border-border justify-between max-navbar-lg:fixed max-navbar-lg:bg-background max-navbar-lg:top-0 max-navbar-lg:p-6 max-navbar-lg:border-b navbar-lg:border-0 navbar-lg:px-20 navbar-lg:mb-10 navbar-lg:h-[106px]">
      <h1 className="font-bold text-2xl">
        Samm <span className="text-ugray-500">Caag.</span>
      </h1>
      <CTA otherStyles="max-navbar-lg:hidden" />
      <MobileMenu />
    </header>
  );
};

export default Header;
