import React, { FC } from "react";
import { MovieType } from "@/types";
import { AiFillPlayCircle, AiFillCaretDown } from "react-icons/ai";
import { FavouriteAdd } from "./FavouriteAdd";

interface Props {
  data: MovieType;
}

const Movie: FC<Props> = ({ data }) => {
  return (
    <div className="group relative h-[8vw]">
      <img
        src={data.thumbnailUrl}
        alt="Movie Card"
        className="w-[300px] object-cover h-full cursor-pointer rounded-md brightness-50 hover:brightness-75 shadow-xl transition duration group-hover:opacity-0 delay-200"
      />
      <div className="opacity-0 absolute top-0 w-full z-10 transition duration-200 scale-0 group-hover:opacity-100 group-hover:scale-125 group-hover:-translate-y-8 group-hover:translate-x-4 ">
        <img
          src={data.thumbnailUrl}
          alt="Movie Card"
          className="cursor-pointer object-cover h-[8vw] group-hover:rounded-t-md"
        />
        <div className="bg-zinc-600 z-10 absolute w-full group-hover:rounded-b-md">
          <div className="text-green-400 font-bold px-2 py-1">
            New <span className="text-white">2023</span>
          </div>
          <div className="w-full px-2 text-white">{data?.genre}</div>
          <div className="w-full px-2 text-white text-[10px]">
            {data?.duration}
          </div>
          <div className="flex flex-row items-center justify-between px-2 py-2">
            <div className="flex flex-row">
              <AiFillPlayCircle className="text-white text-2xl cursor-pointer" />
              <FavouriteAdd movieId={data.id} />
            </div>
            <div className="">
              <AiFillCaretDown className="text-white text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
