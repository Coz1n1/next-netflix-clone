import React, { FC } from "react";

interface Props {
  name: string;
}

export const NavItem: FC<Props> = ({ name }) => {
  return (
    <div className="text-white text-xl hover:text-zinc-400 cursor-pointer transition duration-500">
      {name}
    </div>
  );
};
