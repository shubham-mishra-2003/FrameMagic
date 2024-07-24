"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import Slide from "./Slide";
import { useTheme } from "next-themes";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${resolvedTheme ===
        "dark"
          ? "text-white"
          : "text-black"}`}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      id="features"
      className={`min-h-screen overflow-hidden ${resolvedTheme === "dark"
        ? "text-white"
        : "text-black"}`}
    >
      <Carousel
        opts={{
          align: "start"
        }}
        className="w-full max-w-screen-xl mx-auto relative"
      >
        <h1 className="text-center font-extrabold text-2xl md:text-4xl mt-14 mb-8">
          Features
        </h1>
        <CarouselContent>
          <CarouselItem className="w-full flex justify-center md:basis-1/2 lg:basis-1/3">
            <Card className="flex flex-col h-full max-w-sm mx-4">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Image
                  className="transform transition-transform duration-300 hover:scale-105"
                  src="/Image Restore.jpg"
                  alt="Image Restore"
                  layout="responsive"
                  width={470}
                  height={500}
                />
                <h3 className="text-lg md:text-xl font-bold mt-4 text-center">
                  Image Restore
                </h3>
                <p className="text-sm md:text-lg font-medium text-center">
                  Bring your old photos back to life with our AI restoration
                  tools.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center md:basis-1/2 lg:basis-1/3">
            <Card className="flex flex-col h-full max-w-sm mx-4">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="relative w-full flex justify-center">
                  <Slide />
                  <h3 className="text-lg md:text-xl font-bold text-center absolute mt-11 py-80 w-full">
                    Generative Fill
                  </h3>
                  <p className="text-sm md:text-lg font-medium text-center absolute mt-2 py-96 w-full">
                    Fill in missing parts of your images with AI-generated
                    content.
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center md:basis-1/2 lg:basis-1/3">
            <Card className="flex flex-col h-full max-w-sm mx-4">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="flex space-x-2 justify-center px-4">
                  <Image
                    className="transform transition-transform duration-300 hover:scale-105"
                    src="/OR1.png"
                    alt="Background 1"
                    layout="intrinsic"
                    width={180}
                    height={400}
                  />
                  <Image
                    className="transform transition-transform duration-300 hover:scale-105"
                    src="/OR2.png"
                    alt="Background 2"
                    layout="intrinsic"
                    width={180}
                    height={400}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mt-4 text-center">
                  Object Remover
                </h3>
                <p className="text-sm md:text-lg font-medium text-center">
                  Remove unwanted objects from your photos seamlessly.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center md:basis-1/2 lg:basis-1/3">
            <Card className="flex flex-col h-full max-w-sm mx-4">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="flex justify-center">
                  <Image
                    className="transform transition-transform duration-300 hover:scale-105"
                    src="/Object Recolor.png"
                    alt="Object Recolor"
                    layout="intrinsic"
                    width={700}
                    height={800}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mt-4 text-center">
                  Object Recolor
                </h3>
                <p className="text-sm md:text-lg font-medium text-center">
                  Change the color of specific objects in your images.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem className="w-full flex justify-center md:basis-1/2 lg:basis-1/3">
            <Card className="flex flex-col h-full max-w-sm mx-4">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="flex justify-center transform transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/BG1.png"
                    alt="Background 1"
                    layout="intrinsic"
                    width={180}
                    height={400}
                  />
                  <Image
                    src="/BG2.png"
                    alt="Background 2"
                    layout="intrinsic"
                    width={180}
                    height={400}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold mt-4 text-center">
                  Background Remove
                </h3>
                <p className="text-sm md:text-lg font-medium text-center">
                  Remove backgrounds from your images effortlessly.
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Cards;
