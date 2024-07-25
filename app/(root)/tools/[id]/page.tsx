import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import TransformedImage from "@/components/TransformedImage";
import { Button } from "@/components/ui/button";
import { getImage } from "@/lib/actions/image.actions";
import { getImageSize } from "@/lib/utils";
import { DeleteConfirmation } from "@/components/DeleteConfirmation";

const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();
  const image = await getImage(id);

  return (
    <div className="flex w-full flex-col gap-8 md:p-8 sm:p-7 p-5">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif">
          {image.title}
        </h1>
        <div className="flex items-center flex-wrap gap-3">
          <div className="font-bold text-sm md:p-16-medium flex gap-2">
            <p className="md:text-xl sm:text-lg text-sm">Transformation :</p>
            <p className="md:text-xl sm:text-lg text-sm capitalize text-blue-500">
              {image.transformationType}
            </p>
          </div>

          {image.prompt &&
            <div className="flex justify-center gap-3 items-center">
              <p className="text-slate-500 hidden sm:block">&#x25CF;</p>
              <div className="font-bold text-sm md:p-16-medium flex gap-2">
                <p className="md:text-xl sm:text-lg text-sm">Prompt :</p>
                <p className="md:text-xl sm:text-lg text-sm capitalize text-blue-500">
                  {image.prompt}
                </p>
              </div>
            </div>}

          {image.color &&
            <div className="flex justify-center gap-3 items-center">
              <p className="text-slate-500 hidden sm:block">&#x25CF;</p>
              <div className="font-bold text-sm md:p-16-medium flex gap-2">
                <p className="md:text-xl sm:text-lg text-sm">Color :</p>
                <p className="md:text-xl sm:text-lg text-sm capitalize text-blue-500">
                  {image.color}
                </p>
              </div>
            </div>}

          {image.aspectRatio &&
            <div className="flex justify-center gap-3 items-center">
              <p className="text-slate-500 hidden sm:block">&#x25CF;</p>
              <div className="font-bold text-sm md:p-16-medium flex gap-2">
                <p className="md:text-xl sm:text-lg text-sm">Aspect Ratio :</p>
                <p className="md:text-xl sm:text-lg text-sm capitalize text-blue-500">
                  {image.aspectRatio}
                </p>
              </div>
            </div>}
        </div>
      </div>

      <Separator className="bg-slate-500" />

      <div>
        <div className="grid h-fit min-h-[200px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h3 className="font-extrabold text-3xl text-blue-500">Original</h3>
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

        {userId === image.author.clerkId &&
          <div className="mt-6 mb-6 flex flex-col gap-4">
            <Button
              asChild
              type="button"
              className="w-full bg-gradient-to-tr to-blue-600 from-violet-600 text-white p-7 font-bold text-lg rounded-full hover:to-violet-700 hover:from-blue-700 delay-75"
            >
              <Link href={`/tools/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>}
      </div>
    </div>
  );
};

export default ImageDetails;
