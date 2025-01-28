import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import Carousel from "./carousel";

/**
 * Props for `PartnersAndClients`.
 */
export type PartnersAndClientsProps =
  SliceComponentProps<Content.PartnersAndClientsSlice>;

/**
 * Component for "PartnersAndClients" Slices.
 */
const PartnersAndClients = ({
  slice,
}: PartnersAndClientsProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 pt-16"
      id="partners"
    >
      <h2
        className="section-title relative font-bold text-5xl capitalize mb-4 w-full text-center"
        data-name="our partners and clients"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div className="mb-20 bg-white w-5/6 mx-auto px-6 py-12 rounded-md shadow-xl">
        <Carousel slice={slice}/>
      </div>
    </section>
  );
};

export default PartnersAndClients;