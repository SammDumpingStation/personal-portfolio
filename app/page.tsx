import Image from "next/image";
import Hero from "./components/Hero";
import { ScreenSlider } from "./components/ScreenSlider";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScreenSlider />
    </main>
  );
}
