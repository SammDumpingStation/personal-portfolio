import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import skillSets from "@/lib/skill-sets";

const SkillSetCard = () => {
  return (
    <div className="space-y-4">
      <h6 className="card-title">Product Design</h6>
      <Card className="p-4 flex flex-wrap gap-4">
        {skillSets.productDesign.map((data) => (
          <Badge key={data.id} variant={"outline"} className="min-w-fit">
            {data.title}
          </Badge>
        ))}
      </Card>
    </div>
  );
};

export default SkillSetCard;
