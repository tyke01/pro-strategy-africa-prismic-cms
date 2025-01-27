"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
  settings: Content.SettingsDocument;
}

const Navbar = ({ settings }: NavbarProps) => {
  const pathname = usePathname();

  const icons = {
    LinkedIn: <FaLinkedin />,
    Instagram: <FaInstagram />,
    Twitter: <FaXTwitter />,
    Facebook: <FaFacebook />,
  };

  return (
    <nav className="w-full flex justify-between items-center border-b border-gray-300 bg-white/30 backdrop-blur-lg md:py-0 px-8 gap-12 fixed top-0 z-30">
      <Link href="/">
        <Image
          src="/images/logo.png"
          width={120}
          height={120}
          alt="logo"
          className="w-24 md:w-32 object-cover"
        />
      </Link>

      <div className="w-full justify-center hidden md:flex ">
        {settings.data.navigation.map((item) => {
          const isActive =
            pathname === item.link.text ||
            pathname.startsWith(`${item.link.text}/`);
          return (
            <PrismicNextLink
              key={item.link.text}
              field={item.link}
              className={cn(
                "font-medium px-6 py-4 relative group transition-all duration-300",
                {
                  "text-main_secondary bg-main_secondary/10": isActive,
                }
              )}
            >
              {item.link.text}
              <span
                className={cn(
                  "absolute left-0 right-0 bottom-0 h-1 bg-main_secondary rounded-t-md transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
                  {
                    "scale-x-100": isActive,
                  }
                )}
              ></span>
            </PrismicNextLink>
          );
        })}
      </div>

      <div className="hidden md:flex items-end justify-center gap-4 ">
        {settings.data.navicons.map((item) => (
          <PrismicNextLink
            key={item.social_icons}
            field={item.iconlink}
            className="text-xl hover:text-blue-600 transition-colors "
          >
            {item.social_icons && (
              <div className="">{icons[item.social_icons]}</div>
            )}
          </PrismicNextLink>
        ))}
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <FiMenu className="text-4xl" />
          </SheetTrigger>
          <SheetContent className="bg-white px-0 flex flex-col items-start">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="w-full flex flex-col justify-start">
                {settings.data.navigation.map((item) => {
                  const isActive =
                    pathname === item.link.text ||
                    pathname.startsWith(`${item.link.text}/`);
                  return (
                    <SheetClose asChild key={item.link.text}>
                      <Link
                        href={item.link.link_type}
                        className={cn(
                          "text-xl text-start pl-6 pr-32 font-medium py-4 w-full relative transition-all duration-300 ",
                          {
                            "text-main_secondary bg-main_secondary/20":
                              isActive,
                          }
                        )}
                      >
                        <span
                          className={cn(
                            "absolute left-0 top-0 bottom-0 w-1 bg-main_secondary transition-all duration-300 opacity-0",
                            {
                              "opacity-100": isActive,
                            }
                          )}
                        ></span>
                        {item.link.text}
                      </Link>
                    </SheetClose>
                  );
                })}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;