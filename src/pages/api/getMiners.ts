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
        const miners = await prisma.miners.findMany({
            orderBy: {
                createdAt: 'asc'
            }
        });

        return res.status(200).json({ miners })
    } catch (e) {
        return res.status(500).json({ message: "Internal server error." })
    }
}