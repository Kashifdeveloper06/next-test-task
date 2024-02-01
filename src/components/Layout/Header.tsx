import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <div className="h-30 fixed  w-full" style={{ zIndex: "500" }}>
        <div className="fixed top-0 flex h-20 w-full items-center justify-between bg-white px-8 py-5">
          <div className="flex items-center gap-3 text-3xl font-black">
            <Image src="/img/logo.png" alt="logo" width={40} height={40} />
            Zin Tools
          </div>
          <div className="relative flex items-center">
            <input
              className="w-[500px] rounded-3xl bg-gray-200 px-6 py-2 "
              type="text"
              placeholder="Search for TV shows, Movies, Themes & Casts"
            />
            <svg
              className="absolute right-[15px] top-[10px] ml-auto cursor-pointer" // This class will push the SVG to the right
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20.004"
            >
              <path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path>
            </svg>
          </div>

          <div className=" flex h-14 w-[200px] items-center justify-center gap-5">
            <span className="cursor-pointer font-bold">Log in</span>
            <button className="rounded-3xl bg-blue-400 px-7 py-2 font-bold text-white">
              Sign up
            </button>
          </div>
        </div>
        <div className="fixed top-20 flex h-10 w-full items-center justify-between bg-white shadow-md ">
          <ul className="color-gray flex cursor-pointer gap-11 px-8 font-medium">
            <li>Stock Video</li>
            <li>Video Template</li>
            <li>Music</li>
            <li>Sound Effects</li>
            <li>Graphic Temlate</li>
            <li>Graphics</li>
            <li>Presentation Template</li>
            <li>Photos</li>
            <li>Fonts</li>
            <li>Add ons</li>
            <li>More</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
