"use client";

import DashboardHeader from "@/components/Header";
import React, { useEffect, useState } from "react";
import { toolType } from "@/constants/index";
import TransformationForm from "@/components/TransformationForm";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { getUserById } from "@/lib/actions/user.actions";

const AddTransformation = ({ params: { type } }: SearchParamProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        router.push('/login');
        return;
      }

      const fetchedUser = await getUserById(userId);
      setUser(fetchedUser);
      setIsLoading(false);
    };

    fetchData();
  }, [userId, router]);

  if (isLoading)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="h-20 w-20 rounded-full animate-spin border-2 border-black bg-transparent" />
      </div>
    );

  const tool = toolType[type];

  return (
    <div>
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
