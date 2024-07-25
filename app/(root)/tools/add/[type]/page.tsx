import DashboardHeader from "@/components/Header";
import { toolType } from "@/constants/index";
import TransformationForm from "@/components/TransformationForm";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AddTransformation = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  
  const tool = toolType[type];

  if (!userId) redirect('/login');

  const user = await getUserById(userId);

  return (
    <div className="flex flex-col w-full">
      <DashboardHeader title={tool.title} subtitle={tool.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={tool.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </div>
  );
};

export default AddTransformation;
