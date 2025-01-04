import { Button } from "./ui/button";
import Github from "./Github";

const CTA = ({ customLabel = "Get in Touch" }: { customLabel?: string }) => {
  return (
    <>
      <Button
        variant={"outline"}
        size={"custom"}
        className="rounded-full w-[204px] h-[56px] space-x-1 text-ugray-700 dark:text-ugray-50"
      >
        <Github />
        <span className="text-sm">{customLabel}</span>
      </Button>
    </>
  );
};

export default CTA;
