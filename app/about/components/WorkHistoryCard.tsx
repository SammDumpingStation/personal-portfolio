import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const WorkHistoryCard = () => {
  return (
    <Card className="p-5 flex  gap-5">
      <Image
        src={"/company-logos/sample-logo.png"}
        width={60}
        height={60}
        alt="Sample Logo"
        className="max-h-[60px]"
      />
      <div className="space-y-[14px]">
        <div>
          <h6 className="card-title">Company Name</h6>
          <span className="card-subtitle">Senior Web Designer</span>
        </div>
        <div className="border-border border-b pb-[14px]">
          <span className="card-date">March 2024 - Present</span>
          <p className="card-p">
            I play a pivotal role in shaping the product checkout experience and
            developing the EPOS mobile app. My responsibilities include
            integrating third-party plugins, as well as structuring and
            maintaining the comprehensive design system to ensure a seamless
            user interface across platforms.
          </p>
        </div>
        <div className="space-x-4">
          <Badge variant={"outline"}>Fintech</Badge>
          <Badge variant={"outline"}>Full-time</Badge>
          <Badge variant={"outline"}>Philippines</Badge>
        </div>
      </div>
    </Card>
  );
};

export default WorkHistoryCard;
