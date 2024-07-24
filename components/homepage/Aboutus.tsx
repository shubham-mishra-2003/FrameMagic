"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-2/5 lg:w-2/5 p-4">
              <div
                className={`h-0 ${resolvedTheme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-300"} aspect-w-1 aspect-h-1 rounded-lg animate-pulse`}
              />
            </div>
            <div className="w-full md:w-3/5 lg:w-3/5 p-4">
              <div
                className={`h-8 ${resolvedTheme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-300"} rounded mb-4 animate-pulse`}
              />
              <div
                className={`h-6 ${resolvedTheme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-300"} rounded mb-4 animate-pulse`}
              />
              <div
                className={`h-6 ${resolvedTheme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-300"} rounded mb-4 animate-pulse`}
              />
              <div
                className={`h-6 ${resolvedTheme === "dark"
                  ? "bg-gray-700"
                  : "bg-gray-300"} rounded mb-4 animate-pulse`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div
          className={`${resolvedTheme == "dark"
            ? "bg-slate-800 shadow-black shadow-xl"
            : "bg-slate-100 shadow-slate-300 shadow-inner"} border rounded-xl flex flex-wrap py-5`}
        >
          <div className="w-full md:w-2/5 lg:w-2/5 p-2">
            <Image
              className="items-center justify-center transform transition-transform duration-300 hover:scale-105"
              src="/logo.png"
              alt="LOGO"
              width={500}
              height={400}
            />
          </div>
          <div className="backdrop:w-full md:w-3/5 lg:w-3/5 p-4">
            <h2
              className={`text-3xl font-semibold mb-4 ${resolvedTheme === "dark"
                ? "text-white"
                : "text-black"} text-center`}
            >
              About Us
            </h2>
            <p
              className={`text-lg mb-4 ${resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-700"}`}
            >
              We are three B.Tech CSE students who love to create perfect and
              groundbreaking things.
            </p>
            <p
              className={`text-lg mb-4 ${resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-700"}`}
            >
              We started out with a common goal: to use tech to build tools that
              can change how we work with digital images. Our know-how and focus
              on top-notch work help us to do better than people expect and to
              build strong bonds with those who use our tools. Everything we
              make - from fixing up images and filling in parts to taking out
              objects changing their colors, and getting rid of backgrounds -
              shows how much we care about doing great work and always trying to
              make things perfect.
            </p>
            <p
              className={`text-lg mb-4 ${resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-700"}`}
            >
              We love what we do, and this pushes us to keep testing whatis
              possible. We think there is something special about changing a
              picture making it come alive, and improving it beyond what you had
              imagine. We have made our tools easy to use so anyone can get
              amazing results even if they do not know much about tech. Come
              along with us on this thrilling adventure as we team up to do
              great work. We are here to help turn your creative ideas into
              reality, one picture at a time.
            </p>
            <p
              className={`text-lg mb-4 ${resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-700"}`}
            >
              Do not hesitate to get in touch and find out how we can work
              together to reach your goals and make something special.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
