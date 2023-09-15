import React, { FC } from "react";

interface MobileProps {
  visible?: boolean;
}

const MobileMenu: FC<MobileProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="flex flex-col bg-black absolute top-12 left-0 py-5 w-56 border-2 border-gray-600">
      <div className="flex flex-col gap-4">
        <div className="px-8 text-center text-white hover:underline">Home</div>
        <div className="px-8 text-center text-white hover:underline">
          Series
        </div>
        <div className="px-8 text-center text-white hover:underline">Films</div>
        <div className="px-8 text-center text-white hover:underline">
          Favourites
        </div>
        <div className="px-8 text-center text-white hover:underline">
          New & Popular
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
