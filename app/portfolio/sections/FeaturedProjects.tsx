import PortfolioCard from "@/components/PortfolioCard";
import Snapshots from "@/components/Snapshots";

const FeaturedProjects = () => {
  return (
    <div className="flex flex-col w-full justify-around items-center space-y-10 py-10">
      <h3 className="h3">
        Featured <span className="text-ugray-500">Projects</span>
      </h3>
      <p className="my-journey-p">
        Explore the diverse range of digital products I&apos;ve designed, from
        MVPs to fully developed apps and websites.
      </p>
      <div className="min-h-[660px] px-4 flex  gap-6 w-full max-w-[1018px] max-lg:flex-col max-lg:items-center flex-wrap">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
      <Snapshots />
    </div>
  );
};

export default FeaturedProjects;
