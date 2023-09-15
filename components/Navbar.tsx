import React, { useState, FC, useEffect } from "react";
import { NavItem } from "./NavItem";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccMenu from "./AccMenu";

interface NavProps {
  username?: string;
}

const OFFSET = 70;

export const Navbar: FC<NavProps> = ({ username }) => {
  const [showMobile, setShowMobile] = useState(false);
  const [showAcc, setShowAcc] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-screen z-10">
      <div
        className={`flex flex-row items-center px-2 md:px-12 lg:px-12 py-2 justify-between transition duration-500 ${
          showBackground ? "bg-black" : ""
        }`}
      >
        <div className="flex flex-row items-center">
          <img
            src="/images/netflix_header.png"
            alt="Navbar Image"
            className="h-12 lg:h-16"
          />
          <div className="gap-8 lg:ml-12 hidden lg:flex flex-row ">
            <NavItem name="Home" />
            <NavItem name="Series" />
            <NavItem name="Films" />
            <NavItem name="Favourites" />
            <NavItem name="New & Popular" />
          </div>
          <div
            onClick={() => setShowMobile(!showMobile)}
            className="lg:hidden flex flex-row items-center gap-2 cursor-pointer relative ml-2 lg:ml-8 text-xl text-white "
          >
            <span className="">Browse</span>
            <BsChevronDown
              className={`transition ${
                showMobile ? "rotate-180 duration-300" : "rotate-0 duration-300"
              }`}
            />
            <MobileMenu visible={showMobile} />
          </div>
        </div>
        <div className="flex flex-row items-center lg:gap-4 mr-4">
          <span className="text-4xl text-gray-200 hover:text-gray-300 cursor-pointer opacity-70">
            <IoMdNotifications size={25} />
          </span>
          <span className="text-4xl text-gray-200 hover:text-gray-300 cursor-pointer opacity-70">
            <AiOutlineSearch size={25} />
          </span>
          <div
            className="flex flex-row items-center ml-4 w-12 cursor-pointer relative"
            onClick={() => setShowAcc(!showAcc)}
          >
            <img
              src="/images/netflix_profile.jpg"
              alt="Profile picture"
              className="rounded-lg w-10"
            />
            <span className="text-gray-200 hover:text-gray-300 text-xl ml-2 opacity-70">
              <BsChevronDown
                className={`transition ${
                  showAcc ? "rotate-180 duration-300" : "rotate-0 duration-300"
                }`}
              />
            </span>
            <AccMenu visible={showAcc} username={username} />
          </div>
        </div>
      </div>
    </div>
  );
};
