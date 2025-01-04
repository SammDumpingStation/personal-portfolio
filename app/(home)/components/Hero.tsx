import CTA from "@/components/CTA";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col min-h-[70vh] gap-6">
      <div className=" space-x-2">
        <Badge variant={"outline"}>Product Design</Badge>
        <Badge variant={"outline"}>UI/UX Design</Badge>
        <Badge variant={"outline"}>Web Design</Badge>
      </div>
      <h1 className="h1 text-center">
        <span className="text-ugray-500">Hello! </span>
        Samm Caagbay, Full Stack Web Developer, Based in Philippines
      </h1>
      <p className="p">
        "8+ Years of Experience Designing Stunning Products and Transforming
        Ideas into Reality”
      </p>
      <CTA customLabel="Contact Me" />
    </section>
  );
};

export default Hero;
