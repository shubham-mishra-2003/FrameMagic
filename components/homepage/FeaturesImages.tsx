"use client";

import Image from "next/image";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable";
import React from "react";
import { useTheme } from "next-themes";

export const ImageRestore = () => {
  return (
    <Image
      className="transform transition-transform duration-300 hover:scale-105"
      src="/Image Restore.jpg"
      alt="Image Restore"
      width={470}
      height={500}
    />
  );
};

export const ImageResize = () => {
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

export const ObjectRemove = () => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {resolvedTheme == "dark"
        ? <Image
            className="duration-300 hover:scale-105 w-full"
            src="/Object Remover.png"
            alt="Object remove"
            width={180}
            height={400}
          />
        : <Image
            className="duration-300 hover:scale-105 w-full"
            src="/Object Remover-Light.png"
            alt="Object remove"
            width={180}
            height={400}
          />}
    </>
  );
};

export const ObjectRecolor = () => {
  return (
    <Image
      className="transform transition-transform duration-300 hover:scale-105 w-full"
      src="/Object Recolor.png"
      alt="Object Recolor"
      width={400}
      height={400}
    />
  );
};

export const BackgroundRemove = () => {
  const { resolvedTheme } = useTheme();
  return (
    <>
      {resolvedTheme == "dark"
        ? <Image
            src="/bg-remove-dark.png"
            alt="Background remove"
            width={180}
            height={400}
            className="w-full duration-300 hover:scale-105"
          />
        : <Image
            src="/bg-remove-light.png"
            alt="Background remove"
            width={180}
            className="w-full duration-300 hover:scale-105"
            height={400}
          />}
    </>
  );
};
