import Image from "next/image";
import { Button } from "./ui/button";

const CTA = ({ customLabel = "Get in Touch" }: { customLabel?: string }) => {
  return (
    <Button
      variant={"outline"}
      size={"custom"}
      className="rounded-full py-4 px-10 space-x-1 text-ugray-700 dark:text-ugray-300"
    >
      <Image
        src={"/icons/github.svg"}
        width={20}
        height={20}
        className="text-ugray-700 dark:text-ugray-300"
        alt="Github Logo Grey"
      />
      <span className="text-sm">{customLabel}</span>
    </Button>
  );
};

export default CTA;
