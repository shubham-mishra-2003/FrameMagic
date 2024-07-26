"use client";

import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { useTheme } from "next-themes";

const BuyCredits = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex md:p-8 sm:p-7 p-5 size-full flex-col">
      <NeonGradientCard className={`flex items-center h-96 w-96 justify-center ${resolvedTheme == "dark" ? 'bg-slate-900' : 'bg-slate-300'}`} />
    </div>
  );
};

export default BuyCredits;
