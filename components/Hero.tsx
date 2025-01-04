import clsx from "clsx";
import CTA from "./CTA";
import { Badge } from "./ui/badge";

type HeroProps = {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  badges?: string | { id: number; title: string }[];
  otherStyles?: string 
};

const Hero = ({ title, highlightedTitle, subtitle, badges, otherStyles }: HeroProps) => {
  const DynamicBadges = ({
    badges,
  }: {
    badges?: string | { id: number; title: string }[];
  }) => {
    if (Array.isArray(badges)) {
      return (
        <>
          {badges.map((item) => (
            <Badge variant="outline" key={item.id}>
              {item.title}
            </Badge>
          ))}
        </>
      );
    } else {
      return (
        <Badge variant={"outline"}>Crafting Experiences That Matter</Badge>
      );
    }
  };

  return (
    <div className={clsx('main-container', otherStyles)}>
      <div className="space-x-2">
        <DynamicBadges badges={badges} />
      </div>
      <h1 className="h1 text-center">
        <span className="text-ugray-500">{title}</span> {highlightedTitle}
      </h1>
      <p className="p text-center">{subtitle}</p>
      <CTA customLabel="Contact Me" />
    </div>
  );
};

export default Hero;
