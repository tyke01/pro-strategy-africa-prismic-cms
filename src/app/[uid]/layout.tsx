
import type { Metadata } from "next";

import "../globals.css";
import EventsNavbar from "@/components/events-navbar";


export const metadata: Metadata = {
  title: "Pro Strategy Africa - Events",
  description:
    "Explore a range of professional courses offered by Pro Strategy Africa. Enhance your skills and advance your career with our expertly designed programs in various fields.",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EventsNavbar />
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}