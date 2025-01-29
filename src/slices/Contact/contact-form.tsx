"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { FaSearchLocation } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

const ContactForm = () => {
  const form = useForm();
  return (
    
      <div className="flex flex-col lg:flex-row shadow-xl">
        {/* Left side - Contact Form */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0  p-8 bg-main_secondary rounded-l-lg ">
          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Your message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-white hover:bg-gray-200 font-bold text-main_primary w-full"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
        {/* Right side - Company Details & Map */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 lg:pl-12 p-8 rounded-r-lg">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-700">Get in Touch</h2>
            <p className="text-gray-700">
              We would love to hear from you! Here are our contact details:
            </p>
            <div className="flex items-center gap-5">
              <FaPhoneVolume className="text-white text-2xl bg-main_secondary w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col items-start">
                <h3 className="text-sm font-bold text-gray-700">Phone</h3>
                <p className="text-gray-600">+254702034103 — +254700756660</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <IoMdMailUnread className="text-white text-2xl bg-main_secondary w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col items-start">
                <h3 className="text-sm font-bold text-gray-700">Email</h3>
                <p className="text-gray-600">info@prostrategyafrica.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <FaSearchLocation className="text-white text-2xl bg-main_secondary w-10 h-10 p-2 rounded-full" />
              <div className="flex flex-col items-start">
                <h3 className="text-sm font-bold text-gray-700">Location</h3>
                <p className="text-gray-600">Keystone Park, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.3889197068474!2d36.78954867267526!3d-1.269388398718533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f175b490065a1%3A0x8bc9972d35c8c318!2sKeystone%20Park!5e1!3m2!1sen!2ske!4v1724483658980!5m2!1sen!2ske"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="map"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
  );
};

export default ContactForm;