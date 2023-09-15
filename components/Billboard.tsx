import React, { useCallback } from "react";
import { useBillboard } from "@/hooks/useBillboard";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { PlayButton } from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
  const { data } = useBillboard();
  const { openModal } = useInfoModal();

  const handleOpen = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[60vh]">
      <video
        className="w-full h-[60vh] object-cover brightness-[60%]"
        autoPlay
        muted
        src={data?.videoUrl}
        loop
        poster={data?.thumbnailUrl}
      ></video>
      <div className="absolute top-72 md:top-80 ml-4 md:ml-16 lg:ml-16">
        <div className="text-white text-2xl md:text-4xl lg:text-5xl font-bold ">
          {data?.title}
        </div>
        <div className="text-xl md:text-2xl lg:text-2xl w-full md:w-4/5 lg:w-3/5 mt-4 text-white">
          {data?.description}
        </div>
        <div className="mt-4 flex">
          <PlayButton movieId={data?.id} />
          <button
            className="text-white w-auto bg-zinc-400 px-4 py-2 rounded-lg bg-opacity-70 flex flex-row items-center hover:bg-opacity-50 duration-300"
            onClick={handleOpen}
          >
            <AiOutlineInfoCircle size={22} className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
