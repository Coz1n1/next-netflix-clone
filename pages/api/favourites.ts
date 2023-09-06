import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { serverAuth } from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { current } = await serverAuth(req, res);

    const favouritesMovies = await prismadb.movie.findMany({
      where: {
        id: {
          in: current?.favouritesId,
        },
      },
    });

    return res.status(200).json(favouritesMovies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
