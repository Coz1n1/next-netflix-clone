import React, { FC } from "react";
import { isEmpty } from "lodash";
import Movie from "@/components/Movie";
import { MovieType } from "@/types";

interface MovieProps {
  data: MovieType[];
  title: string;
}

const MovieList: FC<MovieProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-8 pt-4">
      <div className="text-2xl text-white font-bold">{title}</div>
      <div className="flex flex-row gap-4 mt-4">
        {data.map((movie) => (
          <Movie key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
