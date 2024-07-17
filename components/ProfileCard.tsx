import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProfileCard = () => {
  const router = useRouter();
  const { resolvedTheme } = useTheme();


  return (
    <div className="flex justify-center md:gap-20 sm:gap-16 gap-8 md:flex-row flex-col py-10 items-center">
      <div
        className={`${resolvedTheme == "dark"
          ? "bg-slate-800 shadow-black shadow-xl"
          : "bg-slate-100 shadow-slate-300 shadow-inner"} rounded-xl h-[270px] w-full p-10 py-7 gap-5 flex flex-col`}
      >
        <h3
          className={`${resolvedTheme == "dark"
            ? "text-slate-300"
            : "text-slate-500"} font-bold md:text-xl lg:text-2xl`}
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
          <h3 className={`text-4xl font-bold`}>10</h3>
        </div>
        <div className="h-[1px] bg-slate-500 w-full" />
        <div className="p-0 flex items-center justify-center">
          <Button
            onClick={() => {
              router.push("credits");
            }}
            className={`${resolvedTheme == "dark"
              ? "bg-slate-700 hover:bg-slate-800 hover:shadow-slate-900"
              : "bg-slate-200 hover:bg-slate-300 shadow-slate-600"} hover:shadow-inner gap-3 flex items-center justify-between w-fit`}
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
      <div
        className={`${resolvedTheme == "dark"
          ? "bg-slate-800 shadow-black shadow-xl"
          : "bg-slate-100 shadow-slate-300 shadow-inner"} rounded-xl w-full h-[270px] p-10 py-7 gap-5 flex flex-col`}
      >
        <h3
          className={`${resolvedTheme == "dark"
            ? "text-slate-300"
            : "text-slate-500"} font-bold sm:text-xl md:text-sm lg:text-xl`}
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
          <h3 className={`text-4xl font-bold`}>10</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
