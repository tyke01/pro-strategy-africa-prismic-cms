import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import ActivityGallery from "./activity-gallery";

/**
 * Props for `ActivityContainer`.
 */
export type ActivityContainerProps =
  SliceComponentProps<Content.ActivityContainerSlice>;

/**
 * Component for "ActivityContainer" Slices.
 */
const ActivityContainer = ({
  slice,
}: ActivityContainerProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-1 gap-16 px-8 pb-12"
    >
      <div className="shadow-lg bg-white overflow-hidden flex flex-col gap-8">
        {/* Top Section - Description */}
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-2xl font-bold">
              <PrismicText field={slice.primary.title} />
            </h3>
            <div className="text-gray-600 font-semibold mb-2 flex items-center gap-2">
              Trainer: <PrismicRichText field={slice.primary.trainer} />
            </div>
            <div>
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>

          <PrismicNextImage
            field={slice.primary.image}
            alt=""
            width={500}
            height={400}
            className="w-full h-[400px] object-cover rounded-md"
          />
        </div>
        {/* Bottom Section - Image Slider */}
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-4 text-center w-full">
            Event Gallery
          </h4>

          <ActivityGallery slice={slice} />
        </div>
      </div>
    </section>
  );
};

export default ActivityContainer;