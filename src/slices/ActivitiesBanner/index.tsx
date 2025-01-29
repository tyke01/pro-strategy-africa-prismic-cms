import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ActivitiesBanner`.
 */
export type ActivitiesBannerProps =
  SliceComponentProps<Content.ActivitiesBannerSlice>;

/**
 * Component for "ActivitiesBanner" Slices.
 */
const ActivitiesBanner = ({
  slice,
}: ActivitiesBannerProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 py-32 flex flex-col gap-16"
    >
      <div className="relative w-full h-[600px]">
        <PrismicNextImage
          field={slice.primary.image}
          className="rounded-lg shadow-lg object-cover w-full h-full"
          alt=""
        />
        <div
          className={cn(
            "absolute inset-0  flex items-center justify-center opacity-75",
            slice.variation === "default" && " bg-gradient-to-r from-orange-500 via-orange-400 to-orange-700",
            slice.variation === "training" && "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-700 ",
            slice.variation === "online" && "bg-gradient-to-r from-green-500 via-green-400 to-green-700 "
          )}
        >
          <h2 className="text-4xl font-bold text-white text-center">
            <PrismicText field={slice.primary.heading} />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesBanner;