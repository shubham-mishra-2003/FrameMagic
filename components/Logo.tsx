import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {

  const { resolvedTheme } = useTheme();

  return (
    <Link href="/" className="flex justify-center gap-2 items-center">
      <div className="flex w-12">
        <Image src="/logo.png" height={70} width={70} alt="logo" />
      </div>
      <span className="flex flex-col justify-center items-start">
        <h1
          className={`${resolvedTheme == "dark"
            ? "to-violet-300 from-blue-500"
            : "to-violet-600 from-blue-600"} text-lg sm:text-xl md:text-2xl bg-gradient-to-tr bg-clip-text text-transparent font-bold font-serif`}
        >
          FrameMagic
        </h1>
        <h2
          className={`${resolvedTheme == "dark"
            ? "text-slate-200"
            : "text-slate-500"} text-[10px] sm:text-sm md:text-md ld:text-lg font-semibold`}
        >
          By connect and team
        </h2>
      </span>
    </Link>
  );
};

export default Logo;
