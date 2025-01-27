import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { FaLocationArrow } from "react-icons/fa";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): React.JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative w-full h-[100vh] flex items-center"
    >
      {/* Enhanced Gradient Overlay to soften the AI-generated look */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white  via-white/70 to-white/30 -z-[10]" />

      <div className="container mx-auto px-4 md:px-12 lg:px-16 xl:px-24 flex flex-col items-start justify-center h-full">
        <div className="w-full md:w-1/2 text-left">
          <PrismicNextImage
            field={slice.primary.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover blur-[1px] -z-[12]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-left space-y-2">
            <div className="text-main_primary">
              <PrismicText field={slice.primary.heading1} />
            </div>
            
            <div className="text-main_secondary relative group">
              <PrismicText field={slice.primary.heading2} />
              <svg
                className="absolute bottom-[-10px] left-0 w-full overflow-visible"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,20 Q100,-10 200,20"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-main_secondary stroke-current animate-drawCurve origin-left transition-all duration-1000 ease-out"
                />
              </svg>
            </div>
            <div className="text-main_primary">
              <PrismicText field={slice.primary.heading3} />
            </div>
          </h1>
          <div className="text-lg md:text-lg font-medium text-main_primary mt-4 tracking-tight text-left">
            <PrismicRichText field={slice.primary.body} />
          </div>
        </div>
        <PrismicNextLink
          field={slice.primary.button}
          className="mt-8 flex items-center gap-3 px-4 py-3 rounded-lg text-white text-lg font-semibold bg-main_secondary hover:bg-main_secondary/90 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-main_secondary/50"
        >
          <span> {slice.primary.button.text}</span>
          <FaLocationArrow />
        </PrismicNextLink>
      </div>
    </div>
  );
};

export default Hero;