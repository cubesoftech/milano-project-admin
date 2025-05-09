import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { address, amount } = req.body;

    const miners = await prisma.miners.update({
      where: { address: address },
      data: {
        referralWithdrawn: parseFloat(amount),
      },
    });

    const balance = await prisma.tokenbalance.findFirst({
      where: {
        minersId: miners.id,
      },
    });
    if (!balance) {
      res.status(404).json({ status: false, message: "Balance Not Found" });
      return;
    }

    await prisma.tokenbalance.update({
      where: { id: balance.id },
      data: {
        accumulatedAmount: (
          parseFloat(balance.accumulatedAmount) + parseFloat(amount)
        ).toString(),
      },
    });
    return res.status(200).json({ status: true });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
