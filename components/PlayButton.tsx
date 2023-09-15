import React, { FC } from "react";
import { useRouter } from "next/router";
import { AiFillPlayCircle } from "react-icons/ai";

interface PlayProps {
  movieId: string;
}

export const PlayButton: FC<PlayProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      className="bg-black text-white rounded-md w-auto px-4 flex items-center mr-2 hover:opacity-70 duration-300 py-2"
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <AiFillPlayCircle size={22} className="mr-1" />
      Play
    </button>
  );
};
