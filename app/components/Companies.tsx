import { InfiniteSlider } from "@/components/ui/infinite-slider";
import sliderImages from "@/lib/slider-images";
import Image from "next/image";

const Companies = () => {
  return (
    <section className="w-full min-h-[465px]">
      <div className="h-[221px] flex justify-center flex-col">
        <h2 className="h2">Companies I've Worked With</h2>
        <p className="p">
          Helping leading companies innovate and succeed through impactful
          design solutions
        </p>
      </div>
      <InfiniteSlider>
        {sliderImages.screenSlider3.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt="screens"
            width={160}
            height={160}
          />
        ))}
      </InfiniteSlider>
    </section>
  );
};

export default Companies;
