import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import CardPreview from "./cardPreview";
import ProfilePreview from "./profilePreview";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openSideMenu = () => setMenuOpen(true);
  const closeSideMenu = () => setMenuOpen(false);

  return (
    <div className="flex justify-between transition md:border-b-2 border-gray-200 py-4 px-4 md:py-0">
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen pointer-events-auto z-40">
          <div className="relative w-2/5 sm:w-3/5 bg-white z-50 min-h-screen p-4">
            <XIcon
              onClick={closeSideMenu}
              className="w-5 h-5 text-gray-500 cursor-pointer"
            />

            <div className="mt-6 flex flex-col space-y-4">
              {menuItems.map((menuItem) => (
                <a className="font-bold text-gray-800" href="#" key={menuItem}>
                  {menuItem}
                </a>
              ))}
            </div>
          </div>
          <div
            onClick={closeSideMenu}
            className="top-0 left-0 absolute w-full h-full bg-black opacity-75 z-40 cursor-pointer"
          ></div>
        </div>
      )}
      <div className="flex items-center">
        <div className="md:hidden pt-2 mr-4 cursor-pointer">
          <MenuIcon onClick={openSideMenu} className="w-5" />
        </div>
        <h1 className="text-3xl text-[#1D2025] font-bold">sneakers</h1>
        <div className="ml-12 space-x-8 hidden md:flex">
          {menuItems.map((menuItem) => (
            <a
              href="#"
              key={menuItem}
              className="relative text-sm text-gray-500 py-8 hover:text-gray-900 group"
            >
              <span>{menuItem}</span>
              <div className="absolute left-0 w-full h-1 group-hover:bg-orange bottom-0 transform origin-bottom scale-0 group-hover:scale-100 transition-all"></div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex space-x-5 md:space-x-10">
        <CardPreview />
        <ProfilePreview />
      </div>
    </div>
  );
}

export default Header;
