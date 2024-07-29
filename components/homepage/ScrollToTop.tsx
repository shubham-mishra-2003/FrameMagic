"use client";

import { ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const { resolvedTheme } = useTheme();

  return (
    <>
      {isVisible &&
        <button
          title="scroll to top"
          className={`fixed z-50 bottom-[20px] right-[20px] p-3 rounded-full border-none cursor-pointer ${resolvedTheme ==
          "dark"
            ? "bg-black hover:bg-gradient-to-tr from-violet-500 to-blue-500"
            : "bg-slate-300 hover:bg-gradient-to-tr from-violet-400 to-blue-400"}`}
          onClick={scrollToTop}
        >
          <ChevronUp size={30} />
        </button>}
    </>
  );
};

export default ScrollToTop;
