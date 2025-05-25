import Hero from "@/pages/home/components/Hero";
import GrokSkills from "@/pages/home/components/grok-skills";
import Contact from "@/pages/home/components/contact";
import Footer from "@/pages/home/components/footer";
import Feature from "@/pages/home/components/feature";
import MainSkills from "@/pages/home/components/MainSkills";
import About from "@/pages/home/components/About";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MainSkills />
      <About />
      <Feature />
      <GrokSkills />
      <Contact />
      <Footer />
    </main>
  );
}
