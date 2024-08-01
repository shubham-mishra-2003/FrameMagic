"use client";

import { dataUrl, getImageSize } from "@/lib/utils";
import { PlusCircleIcon } from "lucide-react";
import { CldImage, CldUploadWidget } from "next-cloudinary"
import { useTheme } from "next-themes";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
import toast from "react-hot-toast";

type MediaUploaderProps = {
  onValueChange: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId: string;
  image: any;
  type: string;
}

const MediaUploader = ({
  onValueChange,
  setImage,
  image,
  publicId,
  type
}: MediaUploaderProps) => {

  const { resolvedTheme } = useTheme()

  const onUploadSuccessHandler = (result: any) => {
    setImage((prevState: any) => ({
      ...prevState,
      publicId: result?.info?.public_id,
      width: result?.info?.width,
      height: result?.info?.height,
      secureURL: result?.info?.secure_url
    }))

    onValueChange(result?.info?.public_id)

    toast.success(
      <div className="flex justify-center items-center text-sm md:text-lg flex-col">
        <div className="text-center">Image Uploaded Successfully</div>
        <div className="text-center">1 credit deducted from you account</div>
      </div>,
      {
        style: {
          borderRadius: "10px",
          background: "#16a34a",
          color: "#fff"
        },
        duration: 4000
      }
    );
  };

  const onUploadErrorHandler = () => {
    toast.error(
      <div className="flex justify-center items-center text-sm md:text-lg flex-col">
        <div className="text-center">Something went wrong uploading</div>
        <div className="text-center">Please try again</div>
      </div>,
      {
        style: {
          borderRadius: "10px",
          background: "#ef4444",
          color: "#fff"
        },
        duration: 4000
      }
    );
  };

  return (
    <CldUploadWidget
      uploadPreset="framemagic"
      options={{ multiple: false, resourceType: "image" }}
      onSuccess={onUploadSuccessHandler}
      onError={onUploadErrorHandler}
    >
      {({ open }) =>
        <div className="flex size-full flex-col gap-4">
          <h3
            className={`font-extrabold text-3xl ${resolvedTheme == "dark"
              ? "text-blue-500"
              : "text-blue-600"}`}
          >
            Original
          </h3>
          {publicId
            ? <div className="cursor-pointer overflow-hidden rounded-xl">
                <CldImage
                  width={getImageSize(type, image, "width")}
                  height={getImageSize(type, image, "height")}
                  src={publicId}
                  alt="Image"
                  sizes={"(max-width: 767px) 100vw, 50vw"}
                  placeholder={dataUrl as PlaceholderValue}
                  className="h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-purple-100/20 object-cover p-2"
                />
              </div>
            : <div
                className={`flex w-full h-full min-h-72 justify-center items-center cursor-pointer flex-col gap-5 rounded-xl border-2 border-dashed shadow-inner ${resolvedTheme ==
                "dark"
                  ? "bg-gray-800 shadow-slate-900"
                  : "bg-slate-100 shadow-slate-600"}`}
                onClick={() => {
                  open();
                }}
              >
                <div
                  className={`rounded-xl p-5 shadow-md ${resolvedTheme == "dark"
                    ? "bg-slate-600 shadow-slate-900"
                    : "bg-white shadow-slate-400"}`}
                >
                  <PlusCircleIcon
                    className={`${resolvedTheme == "dark"
                      ? "text-blue-100"
                      : "text-blue-500"}`}
                    height={24}
                    width={24}
                  />
                </div>
                <p className="font-medium">Click to upload image</p>
              </div>}
        </div>}
    </CldUploadWidget>
  );
};

export default MediaUploader;
