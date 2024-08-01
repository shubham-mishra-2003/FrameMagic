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
          className={`fixed z-50 bottom-[20px] border-2 right-[20px] p-3 rounded-full cursor-pointer ${resolvedTheme ==
          "dark"
            ? "bg-slate-800 hover:bg-slate-900 border-slate-500"
            : "bg-slate-200 hover:bg-slate-300 border-slate-400"}`}
          onClick={scrollToTop}
        >
          <ChevronUp size={30} />
        </button>}
    </>
  );
};

export default ScrollToTop;
