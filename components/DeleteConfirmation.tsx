"use client";

import { useTransition } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { deleteImage } from "@/lib/actions/image.actions";

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import toast from "react-hot-toast";

export const DeleteConfirmation = ({ imageId }: { imageId: string }) => {
  const [isPending, startTransition] = useTransition();

  const { resolvedTheme } = useTheme();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-full rounded-full">
        <Button
          type="button"
          className="w-full bg-gradient-to-tr to-red-500 from-orange-500 text-white p-7 font-bold text-lg rounded-full hover:to-red-600 hover:from-orange-600 delay-75"
          variant="destructive"
        >
          Delete Image
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent
        className={`flex max-w-[450px] flex-col gap-10 ${resolvedTheme == "dark"
          ? "bg-slate-800 shadow-slate-900"
          : "bg-slate-100 shadow-slate-400"} shadow-inner`}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg sm:text-xl md:text-2xl">
            Deleting the image ?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm sm:text-[16px] md:text-lg">
            This will permanently delete this image
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            className={
              resolvedTheme == "dark"
                ? "bg-slate-700 hover:bg-slate-800 shadow-slate-900 shadow-inner"
                : "bg-slate-200 hover:slate-300 shadow-slate-500 shadow-inner"
            }
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="border bg-red-500 text-white hover:bg-red-600"
            onClick={() => {
              toast.success("Image deleted successfully");
              startTransition(async () => {
                await deleteImage(imageId);
              });
            }}
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
