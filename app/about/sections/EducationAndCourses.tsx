import EducationCard from "../components/EducationCard";

const EducationAndCourses = () => {
  return (
    <div className="about-me-container">
      <h3 className="h3">
        Education {" "}
        <span className="lg:block">
          & <span className="text-ugray-500">Courses</span>
        </span>
      </h3>
      <div className="about-details-container">
        <EducationCard />
        <EducationCard />
      </div>
    </div>
  );
};

export default EducationAndCourses;
