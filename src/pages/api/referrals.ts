import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { address } = req.body;
    const minerAccount = await prisma.miners.findFirst({
      where: {
        address: address,
      },
    });
    if (!minerAccount) {
      res.status(404).json({ status: false, message: "Miner Not Found" });
      return;
    }
    const { referralfee, referralWithdrawn } = minerAccount;
    const miner = await prisma.miners.findMany({
      where: {
        invite: address,
      },
    });

    let rewards = 0;
    for (let i = 0; i < miner.length; i++) {
      const minerRewards = await prisma.tokenbalance.findFirst({
        where: {
          minersId: miner[i].id,
        },
      });
      if (minerRewards) {
        rewards +=
          (minerRewards.accumulatedAmount
            ? parseFloat(minerRewards.accumulatedAmount)
            : 0) * (referralfee ? referralfee : 0);
      }
    }
    rewards = rewards - (referralWithdrawn ? referralWithdrawn : 0);
    res.status(200).json({ status: true, rewards, totalInvites: miner.length });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
