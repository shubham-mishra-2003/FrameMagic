"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { useTheme } from "next-themes";

export const InsufficientCredits = () => {
  const router = useRouter();

  const { resolvedTheme } = useTheme();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent
        className={`${resolvedTheme == "dark"
          ? "bg-slate-900"
          : "bg-slate-100"} max-w-[450px] p-5 flex flex-col`}
      >
        <AlertDialogHeader>
          <div className="flex items-center justify-between">
            <p
              className="text-sm sm:text-lg md:text-xl font-semibold"
            >
              Insufficient Credits
            </p>
            <AlertDialogCancel
              onClick={() => router.push("/")}
              className="border-0 p-0"
            >
              <Image
                src="/assets/circle-x.png"
                alt="close modal"
                height={25}
                width={25}
                className={resolvedTheme == "dark" ? "invert" : ""}
              />
            </AlertDialogCancel>
          </div>

          <div className="flex items-center justify-center w-full">
            <Image
              src="/assets/coins.png"
              alt="credit coins"
              width={100}
              height={100}
            />
          </div>

          <AlertDialogTitle className="p-24-bold text-dark-600">
            Bas bhai, Free ka khatam !
          </AlertDialogTitle>

          <AlertDialogDescription className="p-16-regular py-3">
            Lekin bhai hai na, so chill kar aur credits kharid le
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className="button w-full"
            onClick={() => router.push("/")}
          >
            No, Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="w-full bg-green-500"
            onClick={() => router.push("/credits")}
          >
            Yes, Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
