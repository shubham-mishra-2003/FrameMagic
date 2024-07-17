"use client";

import ModeSwitch from "@/components/ModeSwitch";
import ProfileCard from "@/components/ProfileCard";
import RecentEdits from "@/components/RecentEdits";

const Profile = () => {
  return (
    <div className="flex size-full flex-col">
      <div className="flex p-3 justify-between items-center">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold">
          Profile
        </h3>
        <div className="flex items-center justify-center gap-2">
          <ModeSwitch />
        </div>
      </div>
      <ProfileCard />
      <RecentEdits />
    </div>
  );
};

export default Profile;
