"use client";

import React from "react";
import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";

const Slide = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-lg max-w-xl rounded-lg border-0"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex items-center justify-center">
          <Image
            className="mt-28 px-2 items-center justify-center transform transition-transform duration-300 hover:scale-105"
            src="/GF1.png"
            alt="Background 1"
            width={400}
            height={500}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex items-center justify-center">
          <Image
            className=" items-center mt-1 justify-center transform transition-transform duration-300 hover:scale-105"
            src="/GF2.png"
            alt="Background 2"
            width={350}
            height={450}
          />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Slide;
