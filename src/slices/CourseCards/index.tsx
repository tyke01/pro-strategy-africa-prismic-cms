import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

/**
 * Props for `CourseCards`.
 */
export type CourseCardsProps = SliceComponentProps<Content.CourseCardsSlice>;

/**
 * Component for "CourseCards" Slices.
 */

const CourseCards = ({ slice }: CourseCardsProps): React.JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-8 pb-16 "
    >
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {slice.primary.course_cards.map((item, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                <PrismicText field={item.title} />
              </CardTitle>
            </CardHeader>
            <Separator className="my-2" />
            <CardContent>
              <CardDescription className="flex items-center gap-2">
                Course Code:
                <PrismicRichText field={item.code} />
              </CardDescription>
              <Separator className="my-2" />
              <CardDescription>
                <PrismicRichText field={item.description} />
              </CardDescription>
            </CardContent>
            <CardFooter>
              <p  className="mt-4 text-gray-500 flex items-center gap-2">
              Duration: <PrismicText field={item.duration} />
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseCards;