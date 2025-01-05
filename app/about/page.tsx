import Hero from "@/components/layout/Hero";
import badgeData from "@/lib/badge-data";
import MyJourney from "./sections/MyJourney";
import WorkHistory from "./sections/WorkHistory";
import EducationAndCourses from "./sections/EducationAndCourses";
import SkillSet from "./sections/SkillSet";

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
      <section className="min-h-[2461px] flex flex-col items-center ">
        <MyJourney />
        <WorkHistory />
        <EducationAndCourses />
        <SkillSet />
      </section>
    </section>
  );
};

export default AboutMe;
