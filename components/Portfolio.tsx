import CTA from "@/components/CTA";
import PortfolioCard from "@/components/PortfolioCard";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <section className="min-h-[1072px] flex flex-col justify-around items-center space-y-10 py-10">
      <div className="text-center">
        <h2 className="h2">Portfolio</h2>
        <p className="p">Check Out What I've Been Working Lately!</p>
      </div>
      <div className="min-h-[660px] px-4 flex gap-6 w-full max-w-[1018px] max-lg:flex-col max-lg:items-center ">
        <PortfolioCard />
        <PortfolioCard />
      </div>
      <CTA customLabel="View All" icon={false} />
    </section>
  );
};

export default Portfolio;
