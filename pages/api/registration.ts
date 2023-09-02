import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";

export default async function registerHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { name, email, password } = req.body;

    const userExists = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) return res.status(422).json({ error: "User Exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: `Error: ${error}` });
  }
}
