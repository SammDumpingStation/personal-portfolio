import { Card } from "@/components/ui/card";
import Image from "next/image";

const EducationCard = () => {
  return (
    <Card className="p-5 flex flex-col gap-4">
      <div className="flex gap-5">
        <Image
          src={"/company-logos/sample-logo.png"}
          width={60}
          height={60}
          alt="Sample Logo"
          className="max-h-[60px]"
        />
        <div className="border-border border-b pb-[14px]">
          <h6 className="card-title">
            University of Science and Technology of Southern Philippines
          </h6>
          <span className="card-subtitle">
            Bachelor of Science in Information Technology
          </span>
        </div>
      </div>
      <div className="">
        <span className="card-date">March 2024 - Present</span>
        <p className="card-p">
          Completed a BA Certificate in Graphic Design and applied arts at
          international university.
        </p>
      </div>
    </Card>
  );
};

export default EducationCard;
