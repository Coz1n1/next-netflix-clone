import React, { FC } from "react";
import { signOut } from "next-auth/react";

interface AccMenuProps {
  visible?: boolean;
  username?: string;
}

const AccMenu: FC<AccMenuProps> = ({ visible, username }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="flex flex-col bg-black w-56 top-12 absolute right-0 py-4 border-2 border-gray-600">
      <div className="flex flex-col gap-4">
        <div className="px-3 flex flex-row items-center justify-start">
          <img
            src="/images/netflix_profile.jpg"
            alt="profile image"
            className="rounded-lg w-8"
          />
          <span className="text-white hover:underline text-xl ml-2">
            {username}
          </span>
        </div>
        <div className="px-3">
          <button
            className="w-32 bg-red-600 text-white font-bold py-2 rounded-md"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccMenu;
