import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

const Snapshots = () => {
  return (
    <section className="h-[620px] flex flex-col items-center justify-around">
      <div className="text-center space-y-6">
        <h2 className="h2">A Handpicked Snapshots</h2>
        <p className="p">Curated selection of design highlights</p>
      </div>
      <div className="w-full">
        <InfiniteSlider gap={24}>
          <Image
            src={"/images/snapshot1.png"}
            width={321}
            height={321}
            alt="Snapshot 1"
          />
          <Image
            src={"/images/snapshot2.png"}
            width={321}
            height={321}
            alt="Snapshot 2"
          />{" "}
          <Image
            src={"/images/snapshot3.png"}
            width={321}
            height={321}
            alt="Snapshot 3"
          />
        </InfiniteSlider>
      </div>
    </section>
  );
};

export default Snapshots;
