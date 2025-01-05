import Hero from "@/components/layout/Hero";
import badgeData from "@/lib/badge-data";
import FeaturedProjects from "./sections/FeaturedProjects";

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
      <FeaturedProjects />
    </section>
  );
};

export default Portfolio;
