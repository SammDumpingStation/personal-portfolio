import WorkHistoryCard from "../components/WorkHistoryCard";

const WorkHistory = () => {
  return (
    <div className="about-me-container">
      <h3 className="h3">
        Work <span className="text-ugray-500 block">History</span>
      </h3>
      <div className="about-details-container">
        <WorkHistoryCard />
        <WorkHistoryCard />
      </div>
    </div>
  );
};

export default WorkHistory;
