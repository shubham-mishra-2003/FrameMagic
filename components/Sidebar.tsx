import React from "react";
import Link from "next/link";
import navLinks from "../constants/index";

const Sidebar = () => {
  return (
    <div className="pt-20 hidden font-bold bg-black md:flex h-full">
      <ul className="gap-3 p-2 flex flex-col h-full overflow-y-auto justify-start items-center">
        {navLinks.map(link => (
          <li key={link.title} className="flex w-full justify-center items-center">
            <Link href={`/${link.href}`} className="hover:bg-gray-800 bg-gray-900 text-lg w-full flex justify-between gap-10 items-center rounded-full p-5">
              {link.title}
              <link.icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
