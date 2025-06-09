import MainSkills from "@/features/tech-stack/components/MainSkills";
import AboutMe from "@/features/personal-info/components/AboutMe";
import Feature from "@/features/projects/components/Feature";
import Contact from "@/features/personal-info/components/ContactPage";
import Hero from "@/features/personal-info/components/Hero";

export default function Home() {
  return (
    <main className="lg:!mt-0">
      <Hero />
      <MainSkills />
      <AboutMe />
      <Feature />
      <Contact />
    </main>
  );
}
