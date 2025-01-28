import { Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createClient } from "@/prismicio";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaCalendar } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";

/**
 * Props for `Events`.
 */
export type EventsProps = SliceComponentProps<Content.EventsSlice>;

/**
 * Component for "Events" Slices.
 */
const Events = async ({ slice }: EventsProps): Promise<React.JSX.Element> => {
  const client = createClient();

  const events = await Promise.all(
    slice.primary.event_cards.map(async (item) => {
      if (isFilled.contentRelationship(item.event_cards)) {
        return await client.getByID<Content.EventCardDocument>(
          item.event_cards.id
        );
      }
    })
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="events"
      className="py-16 px-4 "
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <h2
              className="section-title relative font-bold text-5xl capitalize mb-8 w-full text-center"
              data-name="Upcoming Events"
            >
              <PrismicText field={slice.primary.heading} />
            </h2>
            <div className="text-blue-600">
              <PrismicRichText field={slice.primary.description} />
            </div>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <PrismicNextLink
              field={slice.primary.link}
              className="flex items-center gap-4"
            >
              {slice.primary.link.text}
              <BookOpen className="w-6 h-6" />
            </PrismicNextLink>
          </Button>
        </div>
        {/*  */}
        <div className="grid grid-cols-1   gap-8">
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
      </div>
    </section>
  );
};

export default Events;