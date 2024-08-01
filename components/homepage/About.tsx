import { Star } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const points = [
    "Restore old and damaged images",
    "Resize images without losing quality Remove unwanted objects seamlessly",
    "Remove unwanted objects seamlessly",
    "Recolor objects with precision",
    "Remove backgrounds effortlessly"
  ];

  const { resolvedTheme } = useTheme();

  return (
    <div
      id="about"
      className="min-h-screen flex justify-center items-center flex-col gap-5 pt-20"
    >
      <h1 className="font-bold text-start w-full text-4xl">About</h1>
      <h1 className="text-xl w-full text-start font-bold">
        Experience the future of image editing.
      </h1>
      <div className="md:flex-row w-full flex flex-col gap-10 justify-center items-center">
        {resolvedTheme == "dark"
          ? <div className="w-fit md:w-full flex justify-center items-center border-2 rounded-lg p-1">
              <Image
                src="/aboutSection-dark.png"
                alt="about"
                height={300}
                width={900}
                className="w-full hidden sm:flex rounded-lg"
              />
              <Image
                src="/aboutSection-phone-dark.png"
                alt="about"
                height={300}
                width={300}
                className="w-60 sm:hidden"
              />
            </div>
          : <div className="w-fit md:w-full flex justify-center items-center border-2 rounded-lg p-1">
              <Image
                src="/aboutSection-light.png"
                alt="about"
                height={300}
                width={900}
                className="w-full hidden sm:flex rounded-lg"
              />
              <Image
                src="/aboutSection-phone-light.png"
                alt="about"
                height={300}
                width={300}
                className="w-60 sm:hidden"
              />
            </div>}
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-[14px] sm:text-lg font-semibold">
            Welcome to FrameMagic, your one-stop solution for all your image
            editing needs! Whether you&apos;re a professional photographer, a
            hobbyist, or someone looking to enhance personal photos, our
            advanced tools are designed to help you achieve stunning results
            with ease. Dive into a world where creativity meets technology.
          </h2>
          <ul className="list-disc px-5 mt-2">
            {points.map((points, index) =>
              <li className="text-sm sm:text-lg" key={index}>
                {points}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Link
          href="/login"
          className="w-fit p-4 bg-blue-500 rounded-full font-semibold text-slate-100 flex gap-3 justify-center items-center text-sm md:text-lg"
        >
          <Star width={20} height={20} />
          Get started today and transform your images like never before.
        </Link>
      </div>
    </div>
  );
};

export default About;
