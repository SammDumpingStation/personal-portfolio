import { Button } from "./ui/button";
import Github from "./Github";

type ButtonProps = {
  customLabel?: string;
  icon?: boolean;
};

const CTA = ({ customLabel = "Get in Touch", icon = true }: ButtonProps) => {
  return (
    <>
      <Button
        variant={"outline"}
        size={"custom"}
        className="rounded-full w-[204px] h-[56px] space-x-1 text-ugray-700 dark:text-ugray-50"
      >
        {icon && <Github />}
        <span className="text-base">{customLabel}</span>
      </Button>
    </>
  );
};

export default CTA;
