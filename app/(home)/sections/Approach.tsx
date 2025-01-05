import CTA from "@/components/CTA";
import Image from "next/image";
import React from "react";

const Approach = () => {
  return (
    <section className="flex items-center max-lg:flex-col-reverse lg:justify-around min-h-[680px]">
      <div className="flex flex-col justify-center gap-10 h-[560px] w-[400px] max-lg:items-center">
        <h2 className="h3 text-start">
          Turning Data into <span className="text-ugray-500">Design</span>
        </h2>
        <p className="p max-lg:text-center">
          My approach to product design revolves around data-driven insights,
          ensuring every decision is backed by real user needs and behavior.
        </p>
        <CTA customLabel="Contact Me" />
      </div>
      <Image
        src={"/images/data-into-design.png"}
        width={560}
        height={560}
        className="max-h-[560px]"
        alt="Data into Design"
      />
    </section>
  );
};

export default Approach;
