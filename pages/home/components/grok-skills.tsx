import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users } from "lucide-react";

const skillsData = [
  {
    name: "JavaScript",
    icon: <Code className="h-6 w-6" />,
    description: "Proficient in building dynamic web apps.",
  },
  {
    name: "HTML/CSS",
    icon: <Code className="h-6 w-6" />,
    description: "Skilled in creating responsive layouts.",
  },
  {
    name: "React",
    icon: <Code className="h-6 w-6" />,
    description: "Experienced with React for UI development.",
  },
  {
    name: "Communication",
    icon: <Users className="h-6 w-6" />,
    description: "Clear and effective communicator.",
  },
  {
    name: "Problem-Solving",
    icon: <Users className="h-6 w-6" />,
    description: "Strong analytical and creative skills.",
  },
  {
    name: "Teamwork",
    icon: <Users className="h-6 w-6" />,
    description: "Collaborative in team environments.",
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              className="bg-gray-50 shadow-sm rounded-md hover:bg-blue-50 hover:scale-105 transition-transform duration-200"
            >
              <CardHeader className="flex items-center justify-center">
                {skill.icon}
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-lg font-bold text-gray-800">
                  {skill.name}
                </CardTitle>
                <p className="text-base text-gray-600 mt-2">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
