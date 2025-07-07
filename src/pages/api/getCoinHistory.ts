import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma"
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(401).json({ message: "Invalid method." })
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token) {
        return res.status(401).json({ message: "Unauthorize." })
    }

    try {
        const bitcoin = await prisma.bitcoin_balance.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        const cardano = await prisma.cardano_balance.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        const ethereum = await prisma.ethereum_balance.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        const ripple = await prisma.ripple_balance.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        const shiba = await prisma.shiba_inu_balance.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        const tron = await prisma.tron_balance.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        const history = [
            ...bitcoin,
            ...cardano,
            ...ethereum,
            ...ripple,
            ...shiba,
            ...tron,
        ]

        const sorted = history.sort(
            (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        )

        return res.status(200).json({ history: sorted })
    } catch (e) {
        return res.status(500).json({ message: "Internal server error." })
    }
}