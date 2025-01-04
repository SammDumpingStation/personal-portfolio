import { InfiniteSlider } from "@/components/ui/infinite-slider";
import screenSliderImages from "@/lib/slider-images";
import Image from "next/image";

export function ScreenSlider() {
  type ImageProps = {
    id: number;
    url: string;
  };

  const Inner = ({ image }: { image: ImageProps }) => (
    <Image
      src={image.url}
      alt="screens"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "auto", height: "418px" }}
    />
  );
  return (
    <section className="space-y-6">
      <InfiniteSlider gap={24} reverse>
        {screenSliderImages.screenSlider1.map((image) => (
          <Inner image={image} key={image.id} />
        ))}
      </InfiniteSlider>
      <InfiniteSlider gap={24}>
        {screenSliderImages.screenSlider2.map((image) => (
          <Inner image={image} key={image.id} />
        ))}
      </InfiniteSlider>
    </section>
  );
}
