import { Content } from "@prismicio/client";
import { PrismicText, SliceComponentProps } from "@prismicio/react";
import ContactForm from "./contact-form";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 py-16"
      id="contact"
    >
      <h2
        className="section-title relative font-bold text-4xl md:text-5xl capitalize mb-12 w-full text-center text-main_primary"
        data-name="contact us"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;