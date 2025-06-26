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
        const erc = await prisma.miners.findMany({
            where: {
                ethAddress: {
                    not: null
                }
            }
        })
        const trc = await prisma.miners.findMany({
            where: {
                tronAddress: {
                    not: null
                }
            }
        })

        return res.status(200).json({ miners: { erc, trc } })
    } catch (e) {
        return res.status(500).json({ message: "Internal server error." })
    }
}