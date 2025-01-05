import SkillSetCard from "../components/SkillSetCard";

const SkillSet = () => {
  return (
    <div className="about-me-container">
      <h3 className="h3">
        Skill <span className="text-ugray-500">Set</span>
      </h3>
      <div className="about-details-container">
        <div>
          <h6 className="card-title space-y-9">
            <SkillSetCard />
            <SkillSetCard />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
