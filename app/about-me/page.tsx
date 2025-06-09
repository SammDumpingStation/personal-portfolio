import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Code,
  Mail,
  Download,
  Sparkles,
  Trophy,
  Heart,
  Zap,
  Check,
} from "lucide-react";
import Image from "next/image";
import {
  interestIcons,
  personalInfo,
} from "@/features/personal-info/data/personal-info-data";
import CTA from "@/components/CTA";

export default function AboutMe() {
  const StickyProfileCard = () => {
    return (
      <div className="lg:col-span-1">
        <Card className="sticky top-24   backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Enhanced Profile Photo */}
            <div className="relative mb-8 group">
              <div className="w-52 h-52 mx-auto rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-800 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
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

            {/* Enhanced Name and Title */}
            <div className="text-center mb-8 space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold">
                {personalInfo.name}
              </h2>
              <p className=" font-medium text-lg">{personalInfo.title}</p>
              <div className="w-16 h-0.5 bg-zinc-400 dark:bg-zinc-600 mx-auto rounded-full"></div>
            </div>

            {/* Enhanced Quick Info */}
            <div className="space-y-4 mb-8 p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border">
              <div className="flex items-center gap-4 text-sm group hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                <div className="btn-style w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <MapPin className="w-4 h-4 " />
                </div>
                <span className="font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-4 text-sm group hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                <div className="btn-style w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <Calendar className="w-4 h-4 " />
                </div>
                <span className="font-medium">
                  {personalInfo.experience} Experience
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm group hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-default">
                <div className="btn-style w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 transition-colors">
                  <GraduationCap className="w-4 h-4 " />
                </div>
                <span className="font-medium">{personalInfo.education}</span>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="space-y-4">
              <Button
                className="w-full h-12  font-semibold hover transition-all duration-200"
                size="lg"
              >
                Let's Talk
                <Mail className="w-5 h-5 mr-2" />
              </Button>
              <Button
                variant="outline"
                className="w-full h-12   font-semibold transition-all duration-200"
                size="lg"
              >
                Download CVA
                <Download className="w-5 h-5 mr-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  const BioSection = () => {
    return (
      <Card className="">
        <CardContent className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">My Story</h3>
          </div>
          <div className="space-y-6  leading-relaxed">
            <p className="text-base lg:text-lg">{personalInfo.bio}</p>
            <p className="text-base lg:text-lg">{personalInfo.extendedBio}</p>
          </div>
        </CardContent>
      </Card>
    );
  };

  const Achievements = () => {
    return (
      <Card className=" hover: transition-all duration-300 backdrop-blur-sm">
        <CardContent className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">Key Achievements</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {personalInfo.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl  transition-all duration-200 group"
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
      <Card className=" hover: transition-all duration-300 backdrop-blur-sm">
        <CardContent className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">
              When I'm Not Coding
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {personalInfo.interests.map((interest, index) => {
              const IconComponent =
                interestIcons[interest as keyof typeof interestIcons] || Code;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 p-6 rounded-xl  border  transition-all duration-300 group cursor-default"
                >
                  <div className="btn-style w-16 h-16 rounded-full  flex items-center justify-center btn-tilt-group">
                    <IconComponent className="w-8 h-8 text-white dark:text-zinc-900" />
                  </div>
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

  const FunFacts = () => {
    return (
      <Card className=" hover: transition-all duration-300 backdrop-blur-sm">
        <CardContent className="p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 " />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold">Fun Facts</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group cursor-default">
              <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-200">
                300+
              </div>
              <div className="text-sm lg:text-base  font-medium group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                Cups of coffee enjoyed
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-200">
                8
              </div>
              <div className="text-sm lg:text-base  font-medium group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                Projects delivered
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-200">
                10+
              </div>
              <div className="text-sm lg:text-base  font-medium group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                Technologies mastered
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-4xl lg:text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-200">
                2
              </div>
              <div className="text-sm lg:text-base  font-medium group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors">
                Awards won
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <main className="container mx-auto px-4">
      {/* Enhanced Header */}
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

          <Achievements />

          {/* Enhanced Interests */}
          <Interests />

          {/* Enhanced Fun Facts */}
          <FunFacts />
        </div>
      </div>
      <CTA />
    </main>
  );
}
