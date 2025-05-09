import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const balance = await prisma.sitebalance.findFirst();
  if (balance) {
    res.json(balance);
  } else {
    res.json({ balance: 0 });
  }
}
