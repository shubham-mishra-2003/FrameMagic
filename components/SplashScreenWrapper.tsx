"use client";

import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

const SplashScreenWrapper: React.FC<SplashScreenWrapperProps> = ({
  children
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading
    ? <SplashScreen onLoaded={() => setLoading(true)} />
    : children;
};

export default SplashScreenWrapper;
