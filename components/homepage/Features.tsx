import { features } from "@/constants";
import { useTheme } from "next-themes";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/constants/SlideIn";

const Features = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div id="features" className="pt-24 flex flex-col gap-4 p-3 px-5">
      <h2 className="text-4xl font-extrabold">Features</h2>
      <h3 className="sm:text-2xl text-xl font-bold">
        Unlock Your Creative Potential with Our Advanced Features
      </h3>
      <div className="mt-5 gap-28 flex flex-col justify-center items-center">
        {features.map((feature, index) =>
          <div
            key={index}
            className={`flex flex-col-reverse items-center justify-center gap-10 md:gap-20 ${feature.imageSide ==
            "left"
              ? "md:flex-row-reverse"
              : "md:flex-row"}`}
          >
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              initial="hidden"
              animate="show"
              className="flex gap-3 flex-col"
            >
              <h3 className="text-4xl font-bold">
                {feature.heading}
              </h3>
              <p className="font-semibold text-xl">
                {feature.description}
              </p>
              <ul className={`flex mt-4 flex-col gap-2 list-disc p-3 px-8 w-fit rounded-lg border-2 ${resolvedTheme == "dark" ? 'border-slate-300' : 'border-slate-400'}`}>
                {feature.keyPoints.map((keyFeatures, index) =>
                  <li key={index} className="text-lg">
                    {keyFeatures}
                  </li>
                )}
              </ul>
            </motion.div>
            <motion.div
              variants={slideIn("left", "tween", 0.2, 1)}
              initial="hidden"
              animate="show"
              className={`p-3 rounded-lg border-2 shadow-inner w-full ${resolvedTheme ==
              "dark"
                ? "bg-slate-700 border-slate-800 shadow-black"
                : "bg-slate-200 border-slate-300 shadow-slate-500"}`}
            >
              <feature.image />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
