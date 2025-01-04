import Image from "next/image";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

const PortfolioCard = () => {
  return (
    <Card className="min-h-[660px] py-6 px-[18px] flex flex-col gap-4">
      <Card className="p-[10px]">
        <Image
          src={"/images/luxbrew.png"}
          width={441}
          height={375}
          alt="Luxbrew"
        />
      </Card>
      <div className="border-b border-ugray-200 space-y-4 pb-4">
        <h5 className="h5">
          KASO - <span className="text-ugray-500">YC Combinator Platform </span>
        </h5>
        <p className=" text-ugray-500 ">
          Kaso YC (formerly ElKaso) is an online B2B platform that facilitates
          order processing and communication between restaurants and suppliers.
        </p>
      </div>
      <div className="space-x-4">
        <Badge variant={'outline'} className="bg-background">KASO</Badge>
        <Badge variant={'outline'} className="bg-background">FoodTech</Badge>
        <Badge variant={'outline'} className="bg-background">YC Combinator</Badge>
      </div>
    </Card>
  );
};

export default PortfolioCard;
