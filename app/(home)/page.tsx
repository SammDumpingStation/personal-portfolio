import Image from "next/image";
import Hero from "./components/Hero";
import { ScreenSlider } from "./components/ScreenSlider";
import Companies from "./components/Companies";
import Approach from "./components/Approach";
import Passion from "./components/Passion";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScreenSlider />
      <Companies />
      <Approach />
      <Passion />
    </main>
  );
}
