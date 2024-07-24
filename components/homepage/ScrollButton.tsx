"use client";

import { ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ScrollButton = () => {
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
    <div>
      {isVisible &&
        <button
          title="scroll to top"
          className={`fixed bottom-10 right-7 p-3 rounded-full border-none cursor-pointer ${resolvedTheme ==
          "dark"
            ? "bg-black hover:bg-gradient-to-tr from-violet-500 to-blue-500"
            : "bg-slate-300 hover:bg-gradient-to-tr from-violet-400 to-blue-400"}`}
          onClick={scrollToTop}
        >
          <ChevronUp size={30} />
        </button>}
    </div>
  );
};

export default ScrollButton;
