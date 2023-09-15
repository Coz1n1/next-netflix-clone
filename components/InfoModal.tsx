import React, { useCallback, useEffect, useState, FC } from "react";
import { PlayButton } from "./PlayButton";
import { FavouriteAdd } from "./FavouriteAdd";
import useInfoModal from "@/hooks/useInfoModal";
import { useMovie } from "@/hooks/useMovie";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 400);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="z-30 bg-black bg-opacity-60 overflow-x-hidden overflow-y-auto fixed transition duration-400 flex justify-center items-center inset-0">
      <div className="w-auto relative mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-400 relative flex-auto bg-zinc-900`}
        >
          <div className="relative h-96">
            <video
              className="w-full brightness-[60%] object-cover h-full"
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
              muted
              autoPlay
            ></video>
            <div
              className="absolute top-4 right-4 cursor-pointer text-white"
              onClick={handleClose}
            >
              <AiOutlineCloseCircle
                size={32}
                className="hover:opacity-60 transition duration-400"
              />
            </div>
            <div className="absolute bottom-[2%] left-8">
              <div className="flex flex-row items-center text-xl">
                <PlayButton movieId={data?.id} />
                <FavouriteAdd movieId={data?.id} />
              </div>
            </div>
          </div>
          <div className="px-8 text-2xl text-white font-bold pt-2">
            {data?.title}
          </div>
          <div className="text-green-400 font-bold px-8 pt-2 text-xl">
            New <span className="text-white">2023</span>
          </div>
          <div className="px-8 text-white">{data?.duration}</div>
          <div className="px-8 text-zinc-400 py-2">{data?.description}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
