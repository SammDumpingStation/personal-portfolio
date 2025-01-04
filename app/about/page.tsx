import Hero from "@/components/Hero";
import badgeData from "@/lib/badge-data";

const AboutMe = () => {
  return (
    <section className="">
      <Hero
        title="Samm"
        highlightedTitle="Caagbay"
        subtitle="Whether you're looking to discuss a new project, seek advice, or
        collaborate, I'm always excited to connect and explore new
        possibilities."
        otherStyles="min-h-[660px]"
        profilePicture={true}
        badges={badgeData.skillTags}
      />
    </section>
  );
};

export default AboutMe;
