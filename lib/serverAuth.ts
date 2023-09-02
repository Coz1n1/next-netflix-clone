import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prismadb from "@/lib/prismadb";

export const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

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
