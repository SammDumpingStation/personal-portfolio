import About14 from "@/pages/home/components/about14";
import Hero10 from "@/pages/home/components/hero";
import GrokSkills from "@/pages/home/components/grok-skills";
import Contact from "@/pages/home/components/contact";
import Footer from "@/pages/home/components/footer";
import Feature from "@/pages/home/components/feature";

export default function Home() {
  return (
    <main className="">
      <Hero10 />
      <About14 />
      <Feature />
      <GrokSkills />
      <Contact />
      <Footer />
    </main>
  );
}
