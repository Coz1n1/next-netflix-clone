import React from "react";
import { NavItem } from "./NavItem";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="fixed w-screen z-10">
      <div className="flex flex-row items-center px-16 py-2 justify-between">
        <div className="flex flex-row items-center">
          <img
            src="/images/netflix_header.png"
            alt="Navbar Image"
            className="h-24"
          />
          <div className="flex flex-row gap-8 ml-12">
            <NavItem name="Home" />
            <NavItem name="Series" />
            <NavItem name="Films" />
            <NavItem name="Favourites" />
            <NavItem name="New & Popular" />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <span className="text-4xl text-white cursor-pointer">
            <AiOutlineSearch />
          </span>
          <div className="ml-4 w-12">
            <img
              src="/images/netflix_profile.jpg"
              alt="Profile picture"
              className="rounded-sm"
            />
          </div>
          <span className="text-white text-xl ml-2">
            <AiFillCaretDown />
          </span>
        </div>
      </div>
    </div>
  );
};
