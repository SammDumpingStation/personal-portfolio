import icons from "@/lib/icons";
import Image from "next/image";

const ToolBox = () => {
  return (
    <section className="min-h-[530px] bg-ugray-50 flex flex-col items-center justify-around">
      <div className="text-center space-y-6">
        <h2 className="h2">
          Design & Development <span className="text-ugray-500">Toolbox</span>
        </h2>
        <p className="p">
          A comprehensive suite of tools that I use to design, prototype, and
          bring ideas to life
        </p>
      </div>
      <div className="min-h-[230px] lg:w-[924px] flex gap-5 lg:gap-11 flex-wrap justify-center">
        {icons.development.map((icon) => (
          <Image
            src={icon.url}
            width={96}
            height={96}
            alt="icons"
            key={icon.id}
            className="max-h-24"
          />
        ))}
      </div>
    </section>
  );
};

export default ToolBox;
