import clsx from "clsx";
import CTA from "./CTA";
import { Badge } from "./ui/badge";
import Image from "next/image";

type HeroProps = {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  badges?: string | { id: number; title: string }[];
  profilePicture?: boolean;
  otherStyles?: string;
};

const Hero = ({
  title,
  highlightedTitle,
  subtitle,
  badges,
  profilePicture = false,
  otherStyles,
}: HeroProps) => {
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
    <div className={clsx("main-container", otherStyles)}>
      {profilePicture && (
        <div className="profile-shadows  rounded-full">
          <Image
            src={"/images/portfolio-profile.png"}
            width={290}
            height={290}
            alt="Portfolio Profile Picture"
          />
        </div>
      )}
      <div
        className={clsx("space-y-4 mb-[27px]", profilePicture && "mt-[27px]")}
      >
        <div className="space-x-2 text-center">
          <DynamicBadges badges={badges} />
        </div>
        <h1 className="h1 text-center">
          <span className="text-ugray-500">{title}</span> {highlightedTitle}
        </h1>
        <p className="p text-center">{subtitle}</p>
      </div>
      <CTA customLabel="Contact Me" />
    </div>
  );
};

export default Hero;
