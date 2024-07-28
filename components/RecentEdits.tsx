import { IImage } from "@/lib/database/models/image.model";
import { toolType } from "@/constants";
import Link from "next/link";
import { useTheme } from "next-themes";
import { CldImage } from "next-cloudinary";
import Image from "next/image";

const RecentEdits = ({ images }: { images: IImage[] }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex py-5 gap-5 flex-col">
      <h3 className="font-bold text-2xl">Recently Edited</h3>
      <div
        className={`w-full p-5 min-h-[350px] max-h-[450px] border-2 rounded-xl flex overflow-y-auto flex-col shadow-inner ${resolvedTheme ==
        "dark"
          ? "bg-slate-800 border-slate-700"
          : "bg-slate-100 shadow-slate-300 border-slate-300"}`}
      >
        {images.length > 0
          ? <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10">
              {images.map(image =>
                <Card image={image} key={String(image._id)} />
              )}
            </ul>
          : <div className="flex justify-center p-3">
              <p className="text-lg font-semibold">Empty List</p>
            </div>}
      </div>
    </div>
  );
};

export default RecentEdits;

const Card = ({ image }: { image: IImage }) => {
  const { resolvedTheme } = useTheme();

  return (
    <li className="flex justify-center items-center w-full">
      <Link
        href={`/tools/${image._id}`}
        className={`flex flex-col w-full justify-center border-2 p-2 px-3 rounded-xl gap-2 ${resolvedTheme ==
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
          className="h-52 hover:scale-105 w-full rounded-[10px] object-cover"
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
