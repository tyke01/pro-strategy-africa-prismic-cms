import { Content } from "@prismicio/client";
import {
  PrismicText,
  SliceComponentProps
} from "@prismicio/react";
import SwiperSection from "./swiper";

/**
 * Props for `Activities`.
 */
export type ActivitiesProps = SliceComponentProps<Content.ActivitiesSlice>;

/**
 * Component for "Activities" Slices.
 */
const Activities = ({ slice }: ActivitiesProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className=" pt-16 p-4 flex flex-col items-center justify-center"
      id="activities"
    >
      <h2
        className="section-title relative font-bold text-4xl capitalize mb-4 w-full text-center"
        data-name="Activities"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>

      <SwiperSection slice={slice} />

    </section>
  );
};

export default Activities;