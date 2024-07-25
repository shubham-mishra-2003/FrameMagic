import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Header from "@/components/Header";
import TransformationForm from "@/components/TransformationForm";
import { toolType } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { getImage } from "@/lib/actions/image.actions";

const Page = async ({ params: { id } }: SearchParamProps) => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const image = await getImage(id);

  const transformation =
  toolType[image.transformationType as TransformationTypeKey];

  return (
    <div className="flex flex-col size-full">
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <div>
        <TransformationForm
          action="Update"
          userId={user._id}
          type={image.transformationType as TransformationTypeKey}
          creditBalance={user.creditBalance}
          config={image.config}
          data={image}
        />
      </div>
    </div>
  );
};

export default Page;