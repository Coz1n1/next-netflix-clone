import React, { FC, useCallback, useMemo } from "react";
import axios from "axios";
import { useCurrent } from "@/hooks/useCurrent";
import { useFavourites } from "@/hooks/useFavourites";
import { AiOutlinePlusCircle, AiOutlineCheckCircle } from "react-icons/ai";

interface FavouriteAddProps {
  movieId: string;
}

export const FavouriteAdd: FC<FavouriteAddProps> = ({ movieId }) => {
  const { mutate: mutateFavourites } = useFavourites();
  const { data: current, mutate } = useCurrent();

  const isInFavourites = useMemo(() => {
    const list = current?.favouritesId || [];

    return list.includes(movieId);
  }, [current, movieId]);

  const handleFavourites = useCallback(async () => {
    let response;

    if (isInFavourites) {
      response = await axios.delete("/api/favourite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favourite", { movieId });
    }

    const updated = response?.data?.favouritesId;

    mutate({
      ...current,
      favouritesId: updated,
    });

    mutateFavourites();
  }, [movieId, mutate, mutateFavourites, isInFavourites, current]);

  const Icon = isInFavourites ? AiOutlineCheckCircle : AiOutlinePlusCircle;

  return (
    <div onClick={handleFavourites}>
      <Icon className="text-white text-2xl cursor-pointer" />
    </div>
  );
};
