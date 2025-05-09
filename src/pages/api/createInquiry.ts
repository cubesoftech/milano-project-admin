import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { name, email, content } = req.body as { name: string, email: string, content: string };
        try {
            await prisma.inquiry.create({
                data: {
                    id: Math.random().toString(36).substring(7),
                    name,
                    email,
                    content,
                    dateCreated: new Date()
                }
            });
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: "Failed to create users" });
        }
    } else {
        res.status(405).json({ message: "Invalid method." })
    }
}