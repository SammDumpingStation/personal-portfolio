import Image from "next/image";
import { ScreenSlider } from "./sections/ScreenSlider";
import Companies from "./sections/Companies";
import Approach from "./sections/Approach";
import Passion from "./sections/Passion";
import Portfolio from "../../components/Portfolio";
import ToolBox from "../../components/ToolBox";
import Snapshots from "../../components/Snapshots";
import Hero from "@/components/layout/Hero";
import badgeData from "@/lib/badge-data";

export default function Home() {
  return (
    <main>
      <Hero
        title="Hello!"
        highlightedTitle="Samm Caagbay, Full Stack Web Developer, Based in Philippines"
        subtitle="8+ Years of Experience Designing Stunning Products and Transforming Ideas into Reality"
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
