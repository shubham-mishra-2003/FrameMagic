import React, { useEffect } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onLoaded: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoaded }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50 animate-splash">
      <div className="relative p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300 rounded-full">
        <Image
          src="/logo.png"
          alt="Logo"
          width={300}
          height={300}
          className="rounded-full shadow-lg w-36 h-36 sm:w-52 sm:h-52"
        />
      </div>
      <h1 className="text-2xl sm:text-4xl lg:text-6xl p-4 font-bold mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-300 text-transparent bg-clip-text">
        Frame Magic
      </h1>
    </div>
  );
};

export default SplashScreen;
