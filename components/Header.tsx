import CTA from "./CTA";

const Header = () => {
  return (
    <header className="px-20 flex justify-between pt-[50px] pb-[68px]">
      <h1 className="font-bold text-2xl">
        Samm <span className="text-ugray-500">Caag.</span>
      </h1>
      <CTA />
    </header>
  );
};

export default Header;
