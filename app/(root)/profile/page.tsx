import ProfileCardServer from "@/components/Profile/ProfileCard.server";
import ProfileHeader from "@/components/Profile/ProfileHeader";

const Profile = () => {
  return (
    <div className="flex md:p-8 sm:p-7 p-5 size-full flex-col">
      <ProfileHeader />
      <ProfileCardServer />
    </div>
  );
};

export default Profile;