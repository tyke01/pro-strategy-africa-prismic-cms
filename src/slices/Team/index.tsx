import { Separator } from "@/components/ui/separator";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `Team`.
 */
export type TeamProps = SliceComponentProps<Content.TeamSlice>;

/**
 * Component for "Team" Slices.
 */
const Team = ({ slice }: TeamProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 px-8"
      id="team"
    >
      <h2
        className="section-title relative font-bold text-5xl capitalize mb-4 w-full text-center"
        data-name="Our Team"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {slice.primary.team_cards.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-lg p-8 w-72 h-[400px]  shadow-2xl relative"
          >
            <PrismicNextImage
              field={member.image}
              className="w-40 h-40 mb-4 relative overflow-hidden rounded-full border-4 border-blue-300 shadow-md object-cover"
            />

            <div className="flex flex-col items-center justify-center bg-white shadow-md px-6 py-7 rounded-md relative">
              <div className="w-4 h-4 bg-white rotate-45 absolute -top-2 inset-18" />
              <h3 className="text-xl font-bold">
                <PrismicText field={member.name} />
              </h3>
              <Separator className="my-2" />
              <div className="text-gray-700 ">
                <PrismicRichText field={member.title} />
              </div>
            </div>
            <span className="absolute bottom-0 h-1 w-full bg-main_secondary rounded-t-full"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;