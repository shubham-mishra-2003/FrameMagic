"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { IImage } from "@/lib/database/models/image.model";
import { toolType } from "@/constants";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import RecentEdits from "../RecentEdits";
import { NeonGradientCard } from "../ui/neon-gradient-card";
import { useEffect, useState } from "react";

const ProfileClient = ({ user, images }: { user: any; images: IImage[] }) => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
  }, [])

  if(loading) return <ProfileLoading />;

  return (
    <div className="flex flex-col">
      <div className="flex justify-center md:gap-20 sm:gap-16 gap-8 sm:flex-row flex-col py-10 items-center">
        <NeonGradientCard className="w-full h-full">
          <div
            className={`${resolvedTheme == "dark"
              ? "bg-slate-800 shadow-black shadow-inner"
              : "bg-slate-100 shadow-slate-300 shadow-inner"} rounded-xl h-[270px] w-full p-10 py-7 gap-5 flex flex-col`}
          >
            <h3
              className={`${resolvedTheme == "dark"
                ? "text-slate-300"
                : "text-slate-600"} font-bold md:text-xl lg:text-2xl`}
            >
              Credits Available
            </h3>
            <div className="flex gap-5 w-full items-center px-3">
              <Image
                src="/assets/coins.png"
                alt="coins"
                height={30}
                width={80}
                className="w-20 h-20"
              />
              <h3 className={`text-4xl font-bold`}>
                {user.creditBalance}
              </h3>
            </div>
            <div className="h-[1px] bg-slate-500 w-full" />
            <div className="p-0 flex items-center justify-center">
              <Button
                onClick={() => {
                  router.push("credits");
                }}
                className={`${resolvedTheme == "dark"
                  ? "bg-slate-700 hover:bg-slate-800 hover:shadow-slate-900"
                  : "bg-slate-200 hover:bg-slate-300 hover:shadow-slate-500"} hover:shadow-inner gap-3 flex items-center justify-between w-fit`}
              >
                <Image
                  src="/assets/credit-card.png"
                  alt="credit card"
                  height={20}
                  width={20}
                  className={resolvedTheme == "dark" ? "invert" : ""}
                />
                Buy Credits
              </Button>
            </div>
          </div>
        </NeonGradientCard>
        <NeonGradientCard className="h-full w-full">
          <div
            className={`${resolvedTheme == "dark"
              ? "bg-slate-800 shadow-black shadow-inner"
              : "bg-slate-100 shadow-slate-300 shadow-inner"} rounded-xl w-full h-[270px] p-10 py-7 gap-5 flex flex-col`}
          >
            <h3
              className={`${resolvedTheme == "dark"
                ? "text-slate-300"
                : "text-slate-600"} font-bold sm:text-xl md:text-sm lg:text-xl`}
            >
              Image Manipulations Done
            </h3>
            <div className="flex gap-5 w-full items-center px-3">
              <Image
                src="/assets/Image-manipulation.png"
                alt="Image manipulation"
                height={30}
                width={80}
                className="w-20 h-20"
              />
              <h3 className={`text-4xl font-bold`}>
                {images.length}
              </h3>
            </div>
          </div>
        </NeonGradientCard>
      </div>
      <RecentEdits images={images} />
    </div>
  );
};

export default ProfileClient;

const Card = ({ image }: { image: IImage }) => {
  const { resolvedTheme } = useTheme();

  return (
    <li className="flex justify-center items-center">
      <Link
        href={`/tools/${image._id}`}
        className={`flex flex-col justify-center border-2 p-2 px-3 rounded-xl gap-2 ${resolvedTheme ==
        "dark"
          ? "shadow-xl shadow-slate-900 border-slate-700 bg-slate-900"
          : "shadow-slate-500 shadow-xl border-slate-400 bg-slate-300"}`}
      >
        <CldImage
          src={image.publicId}
          alt={image.title}
          width={image.width}
          height={image.height}
          {...image.config}
          loading="lazy"
          className="h-52 w-full rounded-[10px] object-cover"
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
        />
        <div className="bg-gray-500 w-full flex h-[1.5px] rounded-lg" />
        <div className="flex justify-between items-center">
          <p className="p-20-semibold mr-3 line-clamp-1 text-dark-600">
            {image.title}
          </p>
          <Image
            src={`${toolType[image.transformationType as TransformationTypeKey]
              .icon}`}
            alt={image.title}
            width={24}
            height={24}
            className={`${resolvedTheme == "dark" ? "invert" : ""}`}
          />
        </div>
      </Link>
    </li>
  );
};


const ProfileLoading = () =>{
  return(
    <div className="flex pt-10 justify-between items-center">
      <div className="bg-slate-300 w-72 h-64 rounded-xl animate-pulse"></div>
      <div className="bg-slate-300 w-72 h-64 rounded-xl animate-pulse"></div>
    </div>
  )
}