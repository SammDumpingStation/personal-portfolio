import { Button } from "./ui/button";
import Github from "./Github";
import clsx from "clsx";

type ButtonProps = {
  customLabel?: string;
  icon?: boolean;
  otherStyles?: string;
};

const CTA = ({
  customLabel = "Get in Touch",
  icon = true,
  otherStyles,
}: ButtonProps) => {
  return (
    <>
      <Button
        variant={"outline"}
        size={"custom"}
        className={clsx(
          "rounded-full w-[204px] h-[56px] space-x-1 text-ugray-700 dark:text-ugray-50",
          otherStyles
        )}
      >
        {icon && <Github />}
        <span className="text-base">{customLabel}</span>
      </Button>
    </>
  );
};

export default CTA;
