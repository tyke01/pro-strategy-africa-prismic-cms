
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


  
const CoursesNavbar = async () => {

  const client = createClient();

  const settings = await client.getSingle("settings");

  const icons = {
    LinkedIn: <FaLinkedin />,
    Instagram: <FaInstagram />,
    Twitter: <FaXTwitter />,
    Facebook: <FaFacebook />,
  };

  return (
    <nav className="w-full flex justify-between items-center border-b border-gray-300 bg-white/30 backdrop-blur-lg px-8 
    gap-12 fixed top-0 z-30 py-2">
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={120}
            height={120}
            alt="logo"
            className="w-24 object-cover"
          />
        </Link>
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button className="text-main_secondary hover:text-white hover:bg-main_secondary" variant={"outline"} asChild>
          <Link href="/#courses">Home</Link>
        </Button>
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
    </nav>
  )
}

export default CoursesNavbar