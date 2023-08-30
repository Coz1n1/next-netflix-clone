import React, { FC, ChangeEvent } from "react";

interface Props {
  name: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: string;
}

export const Input: FC<Props> = ({ name, id, type, onChange, value }) => {
  return (
    <div className="relative w-full mt-6">
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        className="w-full bg-neutral-700 pt-6 rounded-md px-6 pb-2 text-md text-white focus:outline-none focus:ring-0 peer focus:bg-neutral-600"
        placeholder=" "
      />
      <label
        className="absolute text-md text-zinc-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor={id}
      >
        {name}
      </label>
    </div>
  );
};
