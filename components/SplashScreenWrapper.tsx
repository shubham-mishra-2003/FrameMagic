"use client";

import React, { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';

interface SplashScreenWrapperProps {
  children: React.ReactNode;
}

const SplashScreenWrapper: React.FC<SplashScreenWrapperProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoaded && <SplashScreen onLoaded={() => setIsLoaded(true)} />}
      {isLoaded && children}
    </>
  );
};

export default SplashScreenWrapper;
