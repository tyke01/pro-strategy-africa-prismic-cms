import Link from "next/link";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import { createClient } from "@/prismicio";
import { FaPhoneVolume, FaSearchLocation } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { Separator } from "./ui/separator";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer 
      id="footer" 
      className="w-full text-white bg-main_secondary overflow-hidden"
    >
      {/* Gradient Overlay */}
      
      
      <div className="container mx-auto px-6 md:px-10 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Description */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">
              PRO STRATEGY AFRICA
            </h2>
            <Separator className="bg-white/50 w-1/3 h-1" />
            <p className="text-white/80 leading-relaxed">
              Africa&apos;s leading platform for Digital Transformation and Soft
              Skills, empowering learners to unlock cutting-edge tools and 
              prepare for the future of work.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide">Quick Links</h3>
            <Separator className="bg-white/50 w-1/4 h-1" />
            <nav className="flex flex-col space-y-2">
              {settings.data.navigation.map((item) => (
                <Link
                  key={item.link.text}
                  href={item.link.link_type}
                  className="text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  {item.link.text}
                  <div className="h-0.5 bg-white scale-x-0 group-hover:scale-x-[30%] transition-transform origin-left"></div>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide">Contact Us</h3>
            <Separator className="bg-white/50 w-1/4 h-1" />
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneVolume className="text-xl" />
                <div>
                  <p className="text-white/80">+254 702 034 103</p>
                  <p className="text-white/80">+254 700 756 660</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdMailUnread className="text-xl" />
                <span className="text-white/80">info@prostrategyafrica.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaSearchLocation className="text-xl" />
                <span className="text-white/80">
                  Keystone Park, Nairobi, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide">Connect With Us</h3>
            <Separator className="bg-white/50 w-1/4 h-1" />
            <div className="flex flex-col space-y-3">
              {[
                { 
                  icon: AiFillLinkedin, 
                  name: "LinkedIn", 
                  href: "https://www.linkedin.com/company/pro-strategy-africa/",
                  hoverColor: "hover:text-blue-400"
                },
                { 
                  icon: AiFillInstagram, 
                  name: "Instagram", 
                  href: "https://www.instagram.com/prostrategyafrica?igsh=MWY0NjFkejNwa2J4bA==",
                  hoverColor: "hover:text-pink-300"
                },
                { 
                  icon: AiFillTwitterCircle, 
                  name: "X", 
                  href: "https://x.com/ProStrategyAfri?t=oDUOdA4VSyVvFJNY90YwTw&s=09",
                  hoverColor: "hover:text-blue-200"
                },
                { 
                  icon: BsFacebook, 
                  name: "Facebook", 
                  href: "https://www.facebook.com/profile.php?id=61561809931629&mibextid=ZbWKwL",
                  hoverColor: "hover:text-blue-400"
                }
              ].map(({ icon: Icon, name, href, hoverColor }) => (
                <Link
                  key={name}
                  href={href}
                  target="_blank"
                  className={`flex items-center space-x-2 ${hoverColor} transition-colors duration-300 group`}
                >
                  <Icon className="text-xl group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 group-hover:text-white">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="py-6 text-center">
        <div className="bg-main_secondary text-white text-xs flex flex-col md:flex-row gap-4 items-center py-6 px-4 justify-between w-full ">
          <span className="text-sm">
            &copy; {new Date().getFullYear()} PRO STRATEGY AFRICA. All Rights Reserved.
          </span>
          <Link
            href="https://victor-macharia.vercel.app/"
            target="_blank"
            className="text-white hover:text-white text-sm transition-colors duration-300"
          >
            Created by Victor Macharia
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;