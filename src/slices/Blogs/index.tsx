import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { FaLocationArrow } from "react-icons/fa";

/**
 * Props for `Blogs`.
 */
export type BlogsProps = SliceComponentProps<Content.BlogsSlice>;

/**
 * Component for "Blogs" Slices.
 */
const Blogs = ({ slice }: BlogsProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 pt-16"
      id="blogs"
    >
      <h2
        className="section-title relative font-bold text-5xl capitalize mb-4 w-full text-center"
        data-name="blogs"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="space-y-8">
        {slice.primary.blog_cards.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:justify-between rounded-lg shadow-xl overflow-hidden ${
              index % 2 === 0
                ? "md:flex-row-reverse bg-gradient-to-r from-blue-500/90 to-green-400/90 text-white"
                : "bg-gradient-to-r from-[#7b2cbf]/90 to-[#00b4d8]/90 text-white"
            }`}
          >
            <PrismicNextImage
              field={item.image}
              width={300}
              height={200}
              alt=""
              className={`object-cover w-[400px] md:w-[550px] md:h-[350px] ${
                index % 2 === 0 ? "rounded-bl-6xl" : "rounded-br-6xl"
              }`}
            />

            <div className="flex flex-col justify-center p-6 md:p-8 w-full md:w-1/2">
              <h3
                className="text-3xl  capitalize font-bold mb-4 section-title relative"
                data-name={item.title}
              >
                <PrismicText field={item.title} />
              </h3>
              <div className="text-lg mb-6">
                <PrismicRichText field={item.body} />
              </div>

              <PrismicNextLink
                field={item.link}
                className="mt-8 flex items-center gap-3 px-4 py-2 rounded-lg text-white text-lg font-semibold bg-main_secondary hover:bg-main_secondary/90 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-main_secondary/50 w-fit"
              >
                <span>{item.link.text}</span> <FaLocationArrow />
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;