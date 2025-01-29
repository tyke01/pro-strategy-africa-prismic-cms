import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicText,
  SliceComponentProps
} from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = ({ slice }: CtaProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8"
    >
      <div className="mt-12 text-center pb-12">
        <h3 className="text-lg font-semibold mb-4">
          <PrismicText field={slice.primary.title} />
        </h3>
        <PrismicNextLink
          field={slice.primary.link}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        />
      </div>
    </section>
  );
};

export default Cta;