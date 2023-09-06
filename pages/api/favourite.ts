import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from "@/lib/prismadb";
import { serverAuth } from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { current } = await serverAuth(req, res);
      const { movieId } = req.body;

      const existing = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existing) {
        throw new Error("Invalid Id");
      }
      const user = await prismadb.user.update({
        where: {
          email: current.email || "",
        },
        data: {
          favouritesId: {
            push: movieId,
          },
        },
      });

      return res.status(200).json(user);
    }

    if (req.method === "DELETE") {
      const { current } = await serverAuth(req, res);
      const { movieId } = req.body;

      const existing = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existing) {
        throw new Error("Invalid Id");
      }

      const updateFavourites = without(current.favouritesId, movieId);
      const updateUser = await prismadb.user.update({
        where: {
          email: current.email || "",
        },
        data: {
          favouritesId: updateFavourites,
        },
      });

      return res.status(200).json(updateUser);
    }

    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
