import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import TransformedImage from "@/components/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImage } from "@/lib/actions/image.actions";
import { getImageSize } from "@/lib/utils";
import { useTheme } from "next-themes";
// import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  const image = await getImage(id);

  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col">
      <Header title={image.title} />
      <div className="flex md:px-8 sm:px-7 px-5 flex-wrap gap-4">
        <div className="font-medium text-sm md:p-16-medium flex gap-2">
          <p className={`${resolvedTheme == "dark" ? 'text-slate-300' : 'text-slate-800'}`}>Transformation:</p>
          <p className=" capitalize text-purple-400">{image.transformationType}</p>
        </div>

        {image.prompt && (
          <>
            <p className="hidden text-slate-400 md:block">&#x25CF;</p>
            <div className="font-medium text-sm md:text-lg flex gap-2 ">
              <p className="text-slate-600">Prompt:</p>
              <p className=" capitalize text-purple-400">{image.prompt}</p>
            </div>
          </>
        )}

        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="font-medium text-sm md:text-lg flex gap-2">
              <p className="text-slate-600">Color:</p>
              <p className=" capitalize text-purple-400">{image.color}</p>
            </div>
          </>
        )}

        {image.aspectRatio && (
          <>
            <p className="hidden text-slate-400 md:block">&#x25CF;</p>
            <div className="text-sm font-medium mdtext-lg flex gap-2">
              <p className="text-slate-600">Aspect Ratio:</p>
              <p className=" capitalize text-purple-400">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </div>

      <section className="mt-10 border-t border-slate-400">
        <div className="grid h-fit min-h-[200px] grid-cols-1 gap-5 py-8 md:grid-cols-2">
          {/* MEDIA UPLOADER */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-slate-600">Original</h3>

            <Image
              width={getImageSize(image.transformationType, image, "width")}
              height={getImageSize(image.transformationType, image, "height")}
              src={image.secureURL}
              alt="image"
              className="transformation-original_image"
            />
          </div>

          <TransformedImage
            image={image}
            type={image.transformationType}
            title={image.title}
            isTransforming={false}
            transformationConfig={image.config}
            hasDownload={true}
          />
        </div>

        {userId === image.author.clerkId && (
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
              <Link href={`/tools/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            {/* <DeleteConfirmation imageId={image._id} /> */}
          </div>
        )}
      </section>
    </div>
  );
};

export default ImageDetails;