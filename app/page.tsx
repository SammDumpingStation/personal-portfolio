import MainSkills from "@/features/tech-stack/components/MainSkills";
import AboutMe from "@/features/personal-info/components/AboutMe";
import Feature from "@/features/projects/components/Feature";
import Hero from "@/features/personal-info/components/Hero";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="lg:!mt-0">
      <Hero />
      <MainSkills />
      <AboutMe />
      <Feature />
      <CTA />
    </main>
  );
}
