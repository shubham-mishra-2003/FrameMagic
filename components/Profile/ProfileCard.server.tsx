import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { getUserImages } from "@/lib/actions/image.actions";
import ProfileClient from "./ProfileClient";
import { IImage } from "@/lib/database/models/image.model";

const ProfileCardServer = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }

  try {
    const user = await getUserById(userId);
    if (!user) {
      redirect("/login");
    }

    const imageResponse = await getUserImages({ userId: user._id });
    const allImages: IImage[] = imageResponse?.data || [];

    if (!Array.isArray(allImages)) {
      console.error("Unexpected imageResponse format", imageResponse);
      redirect("/profile");
    }

    return <ProfileClient user={user} images={allImages} />;
  } catch (error) {
    console.error("Error fetching user or images:", error);
    redirect("/profile");
  }
};

export default ProfileCardServer;
