import React from "react";
import Link from "next/link";
import navLinks from "../constants/index";

const Sidebar = () => {
  return (
    <div className="pt-20 text-xl font-bold h-screen bg-black flex">
      <ul className="gap-6 p-4 flex flex-col h-full overflow-y-auto justify-center items-center">
        {navLinks.map(link =>
          <li key={link.title} className="flex w-full justify-center items-center">
            <Link href={link.href} className="bg-gray-900 w-full text-center rounded-full p-4">
              {link.title}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
