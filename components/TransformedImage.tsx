"use client";

import { dataUrl, debounce, download, getImageSize } from "@/lib/utils";
import { Download } from "lucide-react";
import { CldImage, getCldImageUrl } from "next-cloudinary";
import { useTheme } from "next-themes";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import React from "react";
import toast from "react-hot-toast";

const TransformedImage = ({
  image,
  type,
  title,
  transformationConfig,
  isTransforming,
  setIsTransforming,
  hasDownload = false
}: TransformedImageProps) => {
  const { resolvedTheme } = useTheme();

  const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    toast.success("Downloading your image...",
      {
        style: {
          borderRadius: "10px",
          background: "#16a34a",
          color: "#fff"
        },
        duration: 4000
      }
    );
    download(getCldImageUrl({
      width: image?.width,
      height: image?.height,
      src: image?.publicId,
      ...transformationConfig
    }), title)
  }

  return (
    <div className="flex flex-col size-full gap-4">
      <div className="flex justify-between items-center">
        <h3
          className={`font-extrabold text-3xl ${resolvedTheme == "dark"
            ? "text-blue-500"
            : "text-blue-600"}`}
        >
          Edited
        </h3>

        {hasDownload &&
          <button title="Download image" className={`${resolvedTheme == "dark" ? 'bg-slate-700 shadow-slate-900 hover:bg-slate-800' : 'bg-slate-100 hover:bg-slate-200 shadow-slate-400'} p-2 shadow-inner rounded-full`} onClick={downloadHandler}>
            <Download
              height={24}
              width={24}
              className={`${resolvedTheme == "dark"
                ? "text-white"
                : "text-black"}`}
            />
          </button>}
      </div>

      {image?.publicId && transformationConfig
        ? <div className="flex relative justify-center items-center size-full">
            <CldImage
              width={getImageSize(type, image, "width")}
              height={getImageSize(type, image, "height")}
              src={image?.publicId}
              alt={image.title}
              sizes={"(max-width: 767px) 100vw, 50vw"}
              placeholder={dataUrl as PlaceholderValue}
              className="h-fit min-h-72 w-full rounded-[10px] border border-dashed object-cover p-2"
              onLoad={()=>{
                setIsTransforming && setIsTransforming (false);
              }}
              onError={()=>{
                debounce(() => {
                  setIsTransforming && setIsTransforming(false);
                }, 8000)
              }}
              {...transformationConfig}
            />
            {isTransforming && (
              <div className="h-full w-full rounded-xl bg-slate-500 animate-pulse absolute">
                <div className="flex flex-col gap-3 justify-center size-full items-center">
                  <div className="loader">
                    <div className="loader_cube loader_cube--color"></div>
                    <div className="loader_cube loader_cube--glowing"></div>
                  </div>
                  <p className="text-md text-blue-500 font-bold">AI is transforming...</p>
                </div>
              </div>
            )}
          </div>
        : <div
            className={`flex w-full h-full min-h-72 justify-center items-center flex-col gap-5 rounded-xl border-2 border-dashed shadow-inner ${resolvedTheme ==
            "dark"
              ? "bg-gray-800 shadow-slate-900"
              : "bg-slate-100 shadow-slate-600"}`}
          >
            Edited Image
          </div>}
    </div>
  );
};

export default TransformedImage;
