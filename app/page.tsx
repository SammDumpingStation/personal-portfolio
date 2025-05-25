import Hero from "@/pages/home/components/Hero";
import MainSkills from "@/pages/home/components/MainSkills";
import AboutMe from "@/pages/home/components/AboutMe";
import Feature from "@/pages/home/components/Feature";
import Contact from "@/pages/home/components/Contact";
import Footer from "@/pages/home/components/Footer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <MainSkills />
      <AboutMe />
      <Feature />
      <Contact />
      <Footer />
    </main>
  );
}
