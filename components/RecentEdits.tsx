import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const RecentEdits = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex py-5 gap-5 flex-col">
      <h3 className="font-bold text-2xl">Recently Edited</h3>
      <div className={`w-full min-h-[350px] max-h-[450px] border-2 rounded-xl flex overflow-y-auto flex-col shadow-inner ${resolvedTheme == "dark" ? 'bg-slate-800 border-slate-700' : 'bg-slate-100 shadow-slate-300 border-slate-300'}`} >
        <Image src="/logo.png" alt="logo" width={100} height={100} className="w-[100px] h-[100px]" />
      </div>
    </div>
  );
};

export default RecentEdits;
