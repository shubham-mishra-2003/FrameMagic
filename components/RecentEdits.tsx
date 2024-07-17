import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const RecentEdits = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex p-5 gap-5 flex-col">
      <h3 className="font-bold text-2xl">Recently Edited</h3>
      <div className={`w-full h-[350px] border rounded-md flex overflow-y-auto flex-col shadow-inner ${resolvedTheme == "dark" ? 'bg-slate-800' : 'bg-slate-100 shadow-slate-300'}`} >
        <Image src="/logo.png" alt="logo" width={100} height={40} className="w-28 h-20" />
      </div>
    </div>
  );
};

export default RecentEdits;
