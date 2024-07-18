"use client";

import React, { useEffect, useState } from "react";
import ModeSwitch from "../ModeSwitch";

const ProfileHeader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="flex justify-between items-center">
        <div className="bg-slate-300 animate-pulse rounded-xl md:w-48 w-28 h-16" />
        <div className="bg-slate-300 animate-pulse rounded-xl w-28 h-14" />
      </div>
    );

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold">
        Profile
      </h1>
      <div className="flex items-center justify-center gap-2">
        <ModeSwitch />
      </div>
    </div>
  );
};

export default ProfileHeader;
