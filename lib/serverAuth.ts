import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prismadb from "@/lib/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    throw new Error("Not logged in");
  }

  const current = await prismadb.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!current) {
    throw new Error("Not logged in");
  }

  return { current };
};
