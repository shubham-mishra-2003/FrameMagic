"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { plans } from "@/constants";
import Image from "next/image";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center">
            {Array(3).fill("").map((_, index) =>
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div
                  className={`bg-${resolvedTheme === "dark"
                    ? "gray-900"
                    : "white"} rounded-lg shadow-lg p-6 relative overflow-hidden`}
                >
                  <div
                    className={`h-6 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-4 animate-pulse`}
                  />
                  <div
                    className={`h-6 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-4 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-2 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-2 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-2 animate-pulse`}
                  />
                  <div
                    className={`h-4 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded mb-6 animate-pulse`}
                  />
                  <div
                    className={`h-10 bg-${resolvedTheme === "dark"
                      ? "gray-700"
                      : "gray-300"} rounded animate-pulse`}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="pricing"
      className="min-h-screen sm:px-5 md:px-10 flex justify-center items-center"
    >
      <div className="flex w-full flex-col gap-8">
        <h2 className="text-3xl font-bold text-center">Pricing Plans</h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {plans.map((pricing, index) =>
            <div
              key={index}
              className={`border-2 flex flex-col justify-center items-center w-full ${resolvedTheme ===
              "dark"
                ? "bg-slate-800 border-slate-200"
                : "bg-slate-100 border-slate-400"} rounded-xl shadow-2xl p-6 duration-300 hover:scale-105`}
            >
              <Image
                src={pricing.icon}
                alt="pricing icon"
                height={40}
                width={40}
                className={`${resolvedTheme == "dark" && 'invert'} z-0`}
              />
              <div className="flex flex-col justify-center items-center gap-2 m-4">
                <h3 className="text-2xl font-semibold">
                  {pricing.name}
                </h3>
                <h4 className="text-xl font-semibold text-center">
                  {pricing.credits} credits
                </h4>
              </div>
              <ul className="flex flex-col gap-4 items-center w-full px-3">
                {pricing.inclusions.map((points, index) =>
                  <li key={index} className="flex gap-4 justify-start w-full">
                    {points.isIncluded
                      ? <Check className="text-green-500" />
                      : <X className="text-red-500" />}
                    {points.label}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
