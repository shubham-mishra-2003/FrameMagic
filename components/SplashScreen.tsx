import React, { useEffect } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  onLoaded: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded();
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 animate-pulse">
      <div className="relative p-4 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 rounded-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width={400}
          height={400}
          className="rounded-full shadow-lg w-24 h-24 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96"
        />
      </div>
      <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl p-4 font-bold text-indigo-600 mt-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
        Frame Magic
      </h1>
    </div>
  );
};

export default SplashScreen;
