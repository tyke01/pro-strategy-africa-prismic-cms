import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col px-8 py-16 gap-12"
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <h1 className="text-4xl md:text-7xl font-extrabold text-center md:text-left text-main_primary">
          <PrismicText field={slice.primary.heading} />
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-green-400 text-white">
          <PrismicNextImage
            field={slice.primary.mission_image}
            className="rounded-full shadow-md"
            height={160}
            width={160}
            alt=""
          />
          <div className="lg:w-[550px] xl:w-[600px] pr-4">
            <h3 className="font-bold text-5xl mb-4">
              <PrismicText field={slice.primary.mission_title} />
            </h3>
            <div className="text-xl leading-relaxed font-bold uppercase">
              <PrismicRichText field={slice.primary.mission_body} />
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 rounded-lg 
      shadow-lg bg-gradient-to-r from-orange-400 to-orange-700 text-white lg:w-[700px]"
      >
        <div className="lg:w-[550px] xl:w-[600px] pl-4 order-2 md:order-1">
          <h3 className="font-bold text-5xl mb-4">
            <PrismicText field={slice.primary.vision_title} />
          </h3>
          <div className="text-xl leading-relaxed font-bold uppercase">
            <PrismicRichText field={slice.primary.vision_body} />
          </div>
        </div>
        <PrismicNextImage
          field={slice.primary.vision_image}
          className="rounded-full shadow-md order-1 md:order-2 object-cover"
          height={160}
          width={160}
          alt=""
        />
      </div>
    </section>
  );
};

export default About;