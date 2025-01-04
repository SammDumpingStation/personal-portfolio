import Image from "next/image";
import Hero from "./components/Hero";
import { ScreenSlider } from "./components/ScreenSlider";
import Companies from "./components/Companies";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScreenSlider />
      <Companies />
    </main>
  );
}
