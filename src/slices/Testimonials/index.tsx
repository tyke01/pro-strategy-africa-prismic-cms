import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { PiQuotes } from "react-icons/pi";
import { Separator } from "@/components/ui/separator";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): React.JSX.Element => {
  // Define a color mapping for consistent brand colors
  const testimonialColors = [
    "bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600",
    "bg-gradient-to-r from-green-500 via-green-400 to-green-500",
    // Add more colors if needed, they'll cycle if more testimonials exist
    "bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600",
  ];

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 py-16 bg-main_primary/20"
    >
      <h2
        className="section-title relative font-bold text-4xl
         md:text-5xl capitalize mb-12 w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-orange-600"
        data-name="testimonials"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left side */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
            <PrismicText field={slice.primary.title} />
          </h3>
          <div className="text-gray-700 mb-6">
            <PrismicRichText field={slice.primary.body} />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 flex flex-col items-center space-y-8 relative">
          {slice.primary.testimonial_card.map((item, index) => (
            <div
              key={index}
              className={`
                ${testimonialColors[index % testimonialColors.length]}
                p-6 rounded-md max-w-lg w-full 
                shadow-lg transform transition-transform hover:-translate-y-2
                ${index === 1 ? "lg:relative lg:-left-10" : ""}
              `}
            >
              <PiQuotes className="text-4xl text-white opacity-60" />
              <p className="text-white text-lg leading-relaxed">
                {/* {item.quote} */}
                <PrismicText field={item.testimonial} />
              </p>
              <Separator className="mt-4 bg-white/50" />
              <span className="flex items-center gap-4 justify-end mt-4 text-right text-white font-bold">
                {/* — {item.author} */}
                —<PrismicRichText field={item.name} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;