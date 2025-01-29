import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { FaCalendar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

/**
 * Props for `EventsBanner`.
 */
export type EventsBannerProps = SliceComponentProps<Content.EventsBannerSlice>;

/**
 * Component for "EventsBanner" Slices.
 */

const EventsBanner = async ({ slice }: EventsBannerProps): Promise<React.JSX.Element> => {

  const client = createClient();

  const events = await Promise.all(
    slice.primary.event_card.map(async (item) => {
      if (isFilled.contentRelationship(item.event)) {
        return await client.getByID<Content.EventCardDocument>(
          item.event.id
        );
      }
    })
  );
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24 min-h-screen w-full px-8 "
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {slice.primary.card.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-600"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {item.counter}
            </div>
            <div className="text-gray-600">
              <PrismicRichText field={item.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        {slice.primary.tag.map((item, index) => (
          <Badge
            key={index}
            variant="outline"
            className="border-blue-600 text-blue-600"
          >
            {item.tag_text}{" "}
          </Badge>
        ))}
      </div>

      <div>
      {events.map(
            (event, index) =>
              event && (
                <Card key={index} className="shadow-md border border-gray-200">
                  <CardHeader className="border-b pb-4">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-blue-600 text-white">
                        <PrismicText field={event.data.event_badge} />
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-600 text-blue-600"
                      >
                        <PrismicText field={event.data.event_duration} />
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl font-semibold mt-6">
                      <PrismicText field={event.data.event_title} />
                    </CardTitle>

                    <CardDescription className="mt-6 text-gray-700 text-justify">
                      <PrismicText field={event.data.event_body} />
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <FaCalendar className="w-5 h-5 text-blue-600" />
                        <span>
                          <PrismicRichText field={event.data.event_dates} />
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MdOutlineLocationOn className="w-5 h-5 text-blue-600" />
                        <span>
                          <PrismicRichText field={event.data.event_location} />
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold text-blue-600">
                        <PrismicText field={event.data.event_fees_title} />
                      </h4>
                      <div>
                        Attendance:{" "}
                        <PrismicRichText
                          field={event.data.event_fees_attendance}
                        />
                      </div>
                      <div>
                        Workbook:{" "}
                        <PrismicRichText
                          field={event.data.event_fees_workbook}
                        />
                      </div>
                    </div>

                    <CardFooter className="border-t pt-4 flex justify-start">
                      <Button
                        size="lg"
                        className="bg-blue-600 text-white hover:bg-blue-700"
                        asChild
                      >
                        <PrismicNextLink field={event.data.event_signup_link} />
                      </Button>
                    </CardFooter>
                  </CardContent>
                  
                </Card>
              )
          )}
      </div>
    </section>
  );
};

export default EventsBanner;