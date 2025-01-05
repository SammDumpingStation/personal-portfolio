import CTA from "@/components/CTA";
import Image from "next/image";

const Passion = () => {
  return (
    <section className="min-h-[680px] bg-foreground flex max-lg:flex-col justify-around items-center">
      <Image
        src={"/images/profile-small.png"}
        height={560}
        width={480}
        alt="Profile Picture"
        className="max-h-[560px]"
      />
      <div className="flex flex-col justify-center gap-10 h-[560px] w-full max-w-[400px] max-lg:items-center px-4">
        <h2 className="h3 text-start text-background">
          A Passion for Design and Innovation
        </h2>
        <p className="font-medium text-[18px] text-background max-lg:text-center">
          With over 8 years of experience, I&apos;ve had the opportunity to lead
          and scale multiple platforms, transforming innovative ideas into fully
          operational products. From working with a YC-backed startup to
          developing platforms that have generated $20 million in revenue and
          attracted over 10,000 users
        </p>
        <CTA customLabel="Learn More" icon={false} />
      </div>
    </section>
  );
};

export default Passion;
