import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import { serverAuth } from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await serverAuth(req, res);

    const moviesNumber = await prismadb.movie.count();
    const random = Math.floor(Math.random() * moviesNumber);
    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: random,
    });

    return res.status(200).json(randomMovie[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
