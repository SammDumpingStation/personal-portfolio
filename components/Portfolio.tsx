import CTA from "@/components/CTA";
import PortfolioCard from "@/components/PortfolioCard";
import { Card } from "@/components/ui/card";

const Portfolio = () => {
  return (
    <section className="min-h-[1072px] flex flex-col justify-around items-center">
      <div className="text-center">
        <h2 className="h2">Portfolio</h2>
        <p className="p">Check Out What I've Been Working Lately!</p>
      </div>
      <div className="min-h-[660px] flex gap-6 w-full max-w-[1018px]">
        <PortfolioCard />
        <PortfolioCard />
      </div>
      <CTA customLabel="View All" icon={false} />
    </section>
  );
};

export default Portfolio;
