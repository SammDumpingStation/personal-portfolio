import Image from "next/image";

const Snapshots = () => {
  return (
    <section className="h-[620px] flex flex-col items-center justify-around">
      <div className="text-center space-y-6">
        <h2 className="h2">A Handpicked Snapshots</h2>
        <p className="p">Curated selection of design highlights</p>
      </div>
      <div className="flex gap-11">
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
      </div>
    </section>
  );
};

export default Snapshots;
