import React from "react";
import { useMovie } from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="w-full fixed z-10 flex justify-start items-center text-white px-4 py-4 gap-4">
        <AiOutlineArrowLeft
          size={35}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <span className="text-2xl cursor-pointer">
          Watching: <span className="font-bold">{data?.title}</span>
        </span>
      </nav>
      <video
        className="w-full h-full"
        autoPlay
        src={data?.videoUrl}
        muted
        controls
      ></video>
    </div>
  );
};

export default Watch;
