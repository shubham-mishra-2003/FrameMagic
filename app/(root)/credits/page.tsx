"use client";

import { Button } from "@/components/ui/button";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { plans } from "@/constants";
import { Check, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import toast from "react-hot-toast";

const BuyCredits = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:p-8 sm:p-7 p-5 size-full ">
      {plans.map((plan, index) =>
        <NeonGradientCard
          key={index}
          className={`flex h-fit p-2 py-5 ${resolvedTheme == "dark"
            ? "bg-slate-800 shadow-inner shadow-black"
            : "bg-slate-200 shadow-inner shadow-slate-400"}`}
        >
          <div className="flex relative flex-col items-center w-full">
            <div className="">
              <Image
                src={plan.icon}
                alt="plans icon"
                width={30}
                height={30}
                className={`w-12 ${resolvedTheme == "dark" ? "invert" : ""}`}
              />
            </div>
            <h1 className="text-2xl font-bold">
              {plan.name}
            </h1>
            <div className="py-10 px-3">
              <ul className="flex flex-col gap-4">
                {plan.inclusions.map((inclusions, index) =>
                  <li
                    key={index}
                    className="flex justify-start items-center w-full gap-3"
                  >
                    {inclusions.isIncluded
                      ? <Check className="text-green-500" />
                      : <X className="text-red-500" />}
                    {inclusions.label}
                  </li>
                )}
              </ul>
            </div>
            <Button
              onClick={() => {
                toast.error(
                  <div className="bg-red-500 text-center flex text-white">
                    We are currently not accepting payments
                  </div>,
                  {
                    style: {
                      border: "3px solid #ffffff",
                      padding: "16px",
                      color: "#ffffff",
                      background: "#ef4444",
                    },
                    iconTheme: {
                      primary: "#ffffff",
                      secondary: "#ef4444"
                    }
                  }
                );
              }}
              className={`hover:scale-100 scale-95 bg-gradient-to-tr rounded-full w-full ${resolvedTheme ==
              "dark"
                ? "to-blue-500 from-violet-500"
                : "to-blue-400 from-violet-400 hover:to-violet-500 hover:from-blue-500"}`}
            >{`Pay Rs. ${plan.price}`}</Button>
          </div>
        </NeonGradientCard>
      )}
    </div>
  );
};

export default BuyCredits;
