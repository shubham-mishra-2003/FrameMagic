"use client";

import ModeSwitch from "@/components/ModeSwitch";
import ProfileCard from "@/components/ProfileCard";
import RecentEdits from "@/components/RecentEdits";
import { useEffect, useState } from "react";

const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  if (loading) return <ProfileLoader />;

  return (
    <div className="flex md:p-8 sm:p-7 p-5 size-full flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold">
          Profile
        </h1>
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

const ProfileLoader = () => {
  return (
    <div className="flex min-h-screen flex-col w-full bg-black gap-20 md:px-10 px-5">
      <div className="flex justify-between items-center">
        <div className="bg-slate-300 animate-pulse rounded-xl md:w-48 w-28 h-16" />
        <div className="bg-slate-300 animate-pulse rounded-xl w-28 h-14" />
      </div>
      <div className="flex gap-10">
        <div className="bg-slate-300 animate-pulse h-52 w-full rounded-md" />
        <div className="bg-slate-300 animate-pulse h-52 w-full rounded-md" />
      </div>
    </div>
  );
};