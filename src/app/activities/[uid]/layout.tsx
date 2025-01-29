
import type { Metadata } from "next";

import "../../globals.css";
import CoursesNavbar from "@/components/courses-navbar";



export const metadata: Metadata = {
  title: "Pro Strategy Africa - Activities",
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
        <CoursesNavbar />
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}