import { NextApiRequest, NextApiResponse } from "next";
import { serverAuth } from "@/lib/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { current } = await serverAuth(req, res);
    return res.status(200).json(current);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
