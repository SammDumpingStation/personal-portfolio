import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Coffee,
  Camera,
  Music,
  Gamepad2,
  Download,
  Mail,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  // Personal information - easily customizable
  const personalInfo = {
    name: "Alex Johnson",
    title: "Full-Stack Developer & UI/UX Designer",
    location: "San Francisco, CA",
    experience: "3+ Years",
    education: "Computer Science, UC Berkeley",
    bio: "I&apos;m a passionate full-stack developer with a keen eye for design and user experience. I love creating digital solutions that not only function flawlessly but also delight users. When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or capturing moments through photography.",
    extendedBio:
      "My journey in tech started during college when I built my first web application for a local nonprofit. Since then, I&apos;ve worked with startups and established companies, helping them bring their digital visions to life. I believe in writing clean, maintainable code and creating intuitive user interfaces that solve real-world problems.",
    interests: [
      "Photography",
      "Coffee Brewing",
      "Music Production",
      "Gaming",
      "Hiking",
      "Open Source",
    ],
    achievements: [
      "Led development of 5+ web applications",
      "Contributed to 10+ open-source projects",
      "Mentored 15+ junior developers",
      "Speaker at 3 tech conferences",
    ],
  };

  const interestIcons = {
    Photography: Camera,
    "Coffee Brewing": Coffee,
    "Music Production": Music,
    Gaming: Gamepad2,
    Hiking: MapPin,
    "Open Source": ExternalLink,
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-slate-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Photo and Quick Info */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                {/* Profile Photo */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                    <Image
                      src="/placeholder.svg?height=192&width=192"
                      alt={personalInfo.name}
                      className="w-full h-full rounded-full object-cover bg-white"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-sm font-bold">👋</span>
                  </div>
                </div>

                {/* Name and Title */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{personalInfo.experience} Experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span>{personalInfo.education}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio Section */}
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-4">My Story</h4>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>{personalInfo.bio}</p>
                  <p>{personalInfo.extendedBio}</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6">Key Achievements</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {personalInfo.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interests & Hobbies */}
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6">
                  When I&apos;m Not Coding
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {personalInfo.interests.map((interest, index) => {
                    const IconComponent =
                      interestIcons[interest as keyof typeof interestIcons] ||
                      Coffee;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group cursor-default"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-sm font-medium text-center">
                          {interest}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Fun Facts */}
            <Card>
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6">Fun Facts</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Cups of coffee consumed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Technologies mastered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      3
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Countries visited for work
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
