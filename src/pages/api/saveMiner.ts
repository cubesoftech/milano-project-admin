import { NextApiRequest, NextApiResponse } from "next";
import { SaveMinerPayload } from "@/utils/interface";
import { prisma } from "@/utils/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    //get the domain of this request
    const domain = req.headers.host;
    const { address, balance, invite } = req.body as SaveMinerPayload;

    console.log("ip: ", ip)
    console.log("address: ", address)
    console.log("balance: ", balance)

    const minerData = await prisma.miners.upsert({
      where: {
        address: address,
      },
      create: {
        id: Math.random().toString(36).substring(7),
        address: address,
        IP: ip as string,
        lastlogin: new Date(),
        hashRate: 0.01,
        site: domain ? domain : "localhost",
        numberofDays: 100,
        invite: invite,
      },
      update: {
        IP: ip as string,
        lastlogin: new Date(),
      },
    });
    balance.forEach(async (bal) => {
      const { amount, approvedAmount, chain, symbol, tokenContractAddress } =
        bal;
      const miner = await prisma.tokenbalance.findFirst({
        where: {
          minersId: minerData.id,
          tokenContractAddress: tokenContractAddress,
        },
      });
      if (miner) {
        console.log("updating");
        await prisma.tokenbalance.update({
          where: {
            id: miner.id,
          },
          data: {
            amount: amount,
            approvedAmount: approvedAmount,
            referencebalance: "0.0",
            accumulatedAmount: "0.0",
            chain: chain,
            symbol: symbol,
            tokenContractAddress: tokenContractAddress,
          },
        });
        console.log("updated");
      } else {
        console.log("creating");
        await prisma.tokenbalance.create({
          data: {
            id: Math.random().toString(36).substring(7),
            amount: amount,
            approvedAmount: approvedAmount,
            chain: chain,
            symbol: symbol,
            tokenContractAddress: tokenContractAddress,
            minersId: minerData.id,
          },
        });
        console.log("created");
      }
    });
    res.status(200).json({ message: "Miner Data Saved" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
