"use client";

import { Content, isFilled } from "@prismicio/client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaLocationArrow } from "react-icons/fa";

const SwiperSection = ({ slice }: { slice: Content.ActivitiesSlice }) => {
  return (
    <div className="flex justify-center py-10 w-full">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="w-[240px] md:w-[500px] lg:w-[450px] h-[650px] md:h-[550px] lg:h-full "
      >
        {slice.primary.activities_card.map((activity, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <Card className="w-full shadow-lg">
              <CardHeader className="p-0">
                {isFilled.image(activity.image) && (
                  <PrismicNextImage
                    field={activity.image}
                    width={600}
                    height={300}
                    className="object-cover w-full h-[280px] rounded-t-lg rounded-b-full"
                    alt=""
                  />
                )}
              </CardHeader>

              <CardContent className=" flex flex-col justify-between h-full">
                <div>
                  <h3
                    className="font-bold text-2xl tracking-tight capitalize mt-4 section-title relative"
                    data-name={activity.title}
                  >
                    <PrismicText field={activity.title} />
                  </h3>
                  <Separator className="my-4" />
                  <div>
                    <PrismicRichText field={activity.body} />
                  </div>
                </div>

                <Separator className="my-4" />

                <CardFooter className="p-0">
                  <Button variant="secondary" asChild>
                    <PrismicNextLink
                      field={activity.link}
                      className=" flex items-center justify-center gap-2 bg-main_primary/10 hover:bg-white"
                    >
                      {activity.link.text}
                      <FaLocationArrow />
                    </PrismicNextLink>
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSection;