"use client";

import React from "react";
import { MessageCircleMore, User, Sun, SunMoon } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isIconMode, setIsIconMode] = useState(false);

  return (
    <header className=" bg-[#ececec] p-7 relative">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center gap-6">
          <nav className="text-black text-lg gap-6 flex font-medium font-LeagueSpartan-Light">
            {" "}
            <a href="./" className="hover:text-gray-700">
              Home
            </a>
            <a href="./Collections" className="hover:text-gray-700">
              Collections
            </a>
            <a href="./New" className="hover:text-gray-700">
              New
            </a>
          </nav>
        </div>

        <div className="absolute left-1/2 translate-x-1/2 cursor-pointer">
          <img src="logo.png" alt="" className="w-9 h-9" />
        </div>

        <div className="ml-auto flex items-center gap-6 ">
          <button
            onClick={() => setIsIconMode(!isIconMode)}
            className=" text-black hover:cursor-pointer mt-2"
          >
            <span
              className={`inline-block transition-all duration-300 ${
                !isIconMode
                  ? "text-black rotate-180 scale-105"
                  : "text-white rotate-360 scale-105"
              }`}
            >
              {!isIconMode ? (
                <Sun size={25} className="text-black" />
              ) : (
                <SunMoon size={25} />
              )}
            </span>
          </button>

          <button className="px-4 py-2 border-2 bg-black rounded-3xl text-white cursor-pointer hover:bg-gray-800 transition-colors duration-300">
            Cart
          </button>

          <button className="w-10 h-10 hover:scale-105 transition-all duration-300 cursor-pointer">
            {" "}
            <img src="icon-heart.png" alt="icon heart" />
          </button>
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-black border-3 text-black hover:scale-105 cursor-pointer transition-all duration-300"
          >
            <MessageCircleMore size={18} />
          </a>
          <a
            href="#"
            className="bg-black rounded-full p-2 py-2 cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <User />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
