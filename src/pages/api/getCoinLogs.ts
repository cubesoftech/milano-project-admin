// getCoinLogs
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma"
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Invalid method." })
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token) {
        return res.status(401).json({ message: "Unauthorize." })
    }

    try {
        const h = await prisma.coin_logs.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const history = await Promise.all(
            h.map(async his => {
                const miner = await prisma.miners.findFirst({
                    where: {
                        id: his.minerId
                    },
                    select: {
                        name: true
                    }
                })

                return {
                    ...his,
                    name: miner?.name ?? "",
                    amount: his.balance
                }
            })
        )

        return res.status(200).json({ history })
    } catch (e) {
        return res.status(500).json({ message: "Internal server error." })
    }
}