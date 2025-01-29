import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicText, SliceComponentProps } from "@prismicio/react";


/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 w-full"
    >
      <PrismicNextImage
        field={slice.primary.image}
        alt=""
        className="object-cover w-full"
      />
      <div className="px-8 pt-8">
        <h1 className="text-3xl font-bold mb-8">
          <PrismicText field={slice.primary.heading} />
        </h1>
      </div>
    </section>
  );
};

export default Header;