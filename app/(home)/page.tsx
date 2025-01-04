import Image from "next/image";
import { ScreenSlider } from "./components/ScreenSlider";
import Companies from "./components/Companies";
import Approach from "./components/Approach";
import Passion from "./components/Passion";
import Portfolio from "./components/Portfolio";
import ToolBox from "./components/ToolBox";
import Snapshots from "./components/Snapshots";
import Hero from "@/components/Hero";
import badgeData from "@/lib/badge-data";

export default function Home() {
  return (
    <main>
      <Hero
        title="Hello!"
        highlightedTitle="Samm Caagbay, Full Stack Web Developer, Based in Philippines"
        subtitle="8+ Years of Experience Designing Stunning Products and Transforming
        Ideas into Reality"
        otherStyles="min-h-[475px]"
        badges={badgeData.skillTags}
      />
      <ScreenSlider />
      <Companies />
      <Approach />
      <Passion />
      <Portfolio />
      <ToolBox />
      <Snapshots />
    </main>
  );
}
