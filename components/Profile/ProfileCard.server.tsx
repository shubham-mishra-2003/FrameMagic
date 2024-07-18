import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserImages } from "@/lib/actions/image.actions";
import ProfileClient from "./ProfileClient";

const ProfileCardServer = async () => {
  const { userId } = auth();

  if (!userId) redirect("/login");

  const user = await getUserById(userId);
  const image = await getUserImages({ userId: user._id });

  return <ProfileClient user={user} images = {image} />;
};

export default ProfileCardServer;
