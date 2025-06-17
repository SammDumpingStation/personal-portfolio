import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Download,
  Sparkles,
  Trophy,
  Heart,
  Zap,
  Check,
  LucideIcon,
  CodeXml,
  Send,
} from "lucide-react";
import Image from "next/image";
import {
  interestIcons,
  personalInfo,
} from "@/features/personal-info/data/personal-info-data";
import CTA from "@/components/CTA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { techStack } from "@/features/tech-stack/data/logos-data";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import IconEffects from "@/components/IconEffects";
import Link from "next/link";

export default function AboutMe() {
  const SectionHeader = ({
    icon: Icon,
    title,
  }: {
    icon: LucideIcon;
    title: string;
  }) => {
    return (
      <CardTitle className="flex items-center gap-4 p-0">
        <div className="w-12 h-12 rounded-full border flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
      </CardTitle>
    );
  };

  const QuickInfo = ({
    icon: Icon,
    title,
    link,
  }: {
    icon: LucideIcon;
    title: string;
    link: string;
  }) => {
    return (
      <div className="flex items-center gap-4 text-sm group hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
        <IconEffects
          icon={Icon}
          className="min-h-10 min-w-10"
          iconSize="sm:size-5"
        />
        <Link
          href={link}
          className="group-hover:underline group-hover:font-medium"
        >
          {title}
        </Link>
      </div>
    );
  };

  const StickyProfileCard = () => {
    return (
      <div className="lg:col-span-1">
        <Card className="sticky top-24 backdrop-blur-sm">
          <CardContent className="p-8">
            {/*  Profile Photo */}
            <div className="relative mb-8 group">
              <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-800 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                  <Image
                    src={personalInfo.imageUrl}
                    alt={personalInfo.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full border border-card dark:border-muted-foreground flex items-center justify-center shadow-lg animate-bounce">
                <span className="text-xl" role="img" aria-label="Waving hand">
                  👋
                </span>
              </div>
            </div>

            {/*  Name and Title */}
            <div className=" mb-8 space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold text-center">
                {personalInfo.name}
              </h2>
              <p className=" font-medium text-lg text-center">
                {personalInfo.title}
              </p>
              <div className="w-16 h-0.5 bg-zinc-400 dark:bg-zinc-600 mx-auto rounded-full"></div>
            </div>

            {/*  Quick Info */}
            <div className="space-y-4 mb-8 p-6 ">
              <QuickInfo
                icon={MapPin}
                title={personalInfo.location}
                link={personalInfo.links.gmaps}
              />
              <QuickInfo
                icon={Calendar}
                title={personalInfo.experience}
                link={personalInfo.links.github}
              />
              <QuickInfo
                icon={GraduationCap}
                title={personalInfo.education}
                link={personalInfo.links.school}
              />
            </div>

            {/*  Action Buttons */}
            <div className="space-y-4">
              <Button
                className="w-full h-12  font-semibold hover transition-all duration-200"
                size="lg"
                icon={Send}
                iconPlacement="right"
                effect={"expandIcon"}
              >
                Let&apos;s Talk
              </Button>
              <Button
                variant="outline"
                className="w-full h-12   font-semibold transition-all duration-200"
                size="lg"
                icon={Download}
                iconPlacement="right"
                effect={"expandIcon"}
              >
                Download CVA
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const BioSection = () => {
    return (
      <Card className="p-6 sm:p-10">
        <SectionHeader icon={Heart} title="My Story" />
        <CardContent className="p-0">
          <div className="space-y-6  leading-relaxed">
            <p className="">{personalInfo.bio}</p>
            <p className="">{personalInfo.extendedBio}</p>
          </div>
        </CardContent>
      </Card>
    );
  };

  const tabs = [
    {
      name: "Frontend",
      value: "frontend",
    },
    {
      name: "Backend",
      value: "backend",
    },
    {
      name: "Mobile",
      value: "mobile",
    },
    {
      name: "Infrastructure",
      value: "infrastructure",
    },
  ];

  const TechStack = () => {
    return (
      <Card className=" p-6 sm:p-10 overflow-hidden">
        <SectionHeader icon={CodeXml} title="Tech Stack" />
        <CardContent className="p-0 ">
          <Tabs defaultValue={tabs[0].value} className="w-full ">
            <TabsList className="p-0 h-auto w-full bg-background gap-1 mb-6">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground cursor-pointer"
                >
                  <h3 className="">{tab.name}</h3>
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <HoverEffect
                  items={techStack[tab.value as keyof typeof techStack]}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    );
  };

  const Achievements = () => {
    return (
      <Card className="p-6 sm:p-10">
        <SectionHeader icon={Trophy} title="Key Achievements" />
        <CardContent className="p-0">
          <div className="grid sm:grid-cols-2 gap-6">
            {personalInfo.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl  transition-all duration-200 group"
              >
                <div className="p-2 border border-green-500 rounded-full flex items-center justify-center">
                  <Check className="text-green-500 " />
                </div>
                <span className="text-sm lg:text-base  leading-relaxed font-medium">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };

  const Interests = () => {
    return (
      <Card className="p-6 sm:p-10">
        <SectionHeader icon={Zap} title="When I'm Not Coding" />
        <CardContent className="p-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {personalInfo.interests.map((interest, index) => {
              const IconComponent =
                interestIcons[interest as keyof typeof interestIcons] || Code;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl  border  transition-all duration-300 group cursor-default"
                >
                  <IconEffects
                    icon={IconComponent}
                    iconSize="sm:size-8"
                    className="min-w-16 min-h-16"
                  />
                  {/* <HoverEffect items={personalInfo.interests} /> */}
                  <span className="text-sm lg:text-base font-semibold text-center  group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">
                    {interest}
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  };

  const FunFact = ({ number, title }: { number: string; title: string }) => {
    return (
      <div className="text-center group cursor-default">
        <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-200">
          {number}
        </div>
        <div className="text-sm lg:text-base  font-medium group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
          {title}
        </div>
      </div>
    );
  };

  const FunFacts = () => {
    return (
      <Card className="p-6 sm:p-10">
        <SectionHeader icon={Sparkles} title="Fun Facts" />
        <CardContent className="p-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FunFact number="100+" title="Cups of coffee enjoyed" />
            <FunFact number="8+" title="Projects delivered" />
            <FunFact number="10+" title="Technologies mastered" />
            <FunFact number="50+" title="Anime watched" />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <main className="container mx-auto px-4">
      {/*  Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="text-center mb-12">
          <h2 className="heading">About Me</h2>
          <p className="sub-heading">
            Discover the developer behind innovative solutions
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left Column  */}
        <StickyProfileCard />

        {/* Right Column*/}
        <div className="lg:col-span-2 space-y-8">
          <BioSection />

          <TechStack />

          <Achievements />

          {/*  Interests */}
          <Interests />

          {/*  Fun Facts */}
          <FunFacts />
        </div>
      </div>
      <CTA />
    </main>
  );
}
