import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Separator } from "@/components/ui/separator";
import { FaLocationArrow } from "react-icons/fa";

/**
 * Props for `Courses`.
 */
export type CoursesProps = SliceComponentProps<Content.CoursesSlice>;

/**
 * Component for "Courses" Slices.
 */
const Courses = ({ slice }: CoursesProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 pt-16 flex flex-col items-center justify-center"
      id="courses"
    >
      <h2
        className="section-title relative font-bold text-3xl capitalize mb-4 w-full text-center"
        data-name="What we offer"
      >
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="grid gap-4 grid-cols-1  lg:grid-cols-2">
        {slice.primary.course_cards.map((item, index) => (
          <Card className="lg:w-[450px] xl:w-[550px]  shadow-lg  " key={index}>
            <CardHeader className="flex items-center justify-center">
              <PrismicNextImage
                field={item.image}
                width={600}
                height={600}
                className="object-cover md:w-[600px] md:h-[400px]"
                alt=""
              />
            </CardHeader>

            <CardContent>
              <h3 className="font-bold text-xl tracking-tight capitalize">
                <PrismicText field={item.title} />
              </h3>
              <Separator className="my-2" />
              <div>
                <PrismicRichText field={item.body} />
              </div>
            </CardContent>

            <CardFooter>
              <PrismicNextLink
                field={item.link}
                className="mt-8 flex items-center gap-3 px-4 py-2 rounded-lg text-white text-lg font-semibold bg-main_secondary hover:bg-main_secondary/90 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-main_secondary/50"
              >
                <span>{item.link.text}</span>
                <FaLocationArrow />
              </PrismicNextLink>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Courses;