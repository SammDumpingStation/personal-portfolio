import Hero from "@/components/Hero";
import badgeData from "@/lib/badge-data";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="">
      <Hero
        title="My Design"
        highlightedTitle="Portfolio"
        subtitle="Explore the apps, websites, and digital products I've crafted for businesses and startups"
        badges={badgeData.skillTags}
        otherStyles="min-h-[400px]"
      />
    </section>
  );
};

export default Portfolio;
