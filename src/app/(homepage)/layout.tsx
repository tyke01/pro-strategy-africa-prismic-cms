import type { Metadata } from "next";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";


import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro Strategy Africa",
  description:
    "Unlock your potential with Pro Strategy Africa. Explore our programs and offerings designed to help you succeed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <main>
          <Header />
          {children}
          <Analytics/>
          <Footer />
        </main>
      </body>
    </html>
  );
}
