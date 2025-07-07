import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma"
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(401).json({ message: "Invalid method." })
    }

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    if (!token) {
        return res.status(401).json({ message: "Unauthorize." })
    }

    const { phoneNumber, name, amount, coin } = req.body as { phoneNumber: string, name: string, coin: string, amount: number }

    try {

        const acceptedCoins = ['BTC', 'ETH', 'XRP', 'TRX', 'ADA', 'SHIB'];
        if (!acceptedCoins.includes(coin)) {
            return res.status(400).json({ message: "Invalid coin type" })
        }

        const miner = await prisma.miners.findFirst({
            where: {
                phoneNumber,
                name,
            }
        })
        if (!miner) {
            return res.status(404).json({ message: "Miner not found." })
        }

        switch (coin) {
            case 'BTC':
                await prisma.bitcoin_balance.upsert({
                    where: {
                        minerId: miner.id
                    },
                    update: {
                        balance: {
                            increment: amount
                        }
                    },
                    create: {
                        minerId: miner.id,
                        balance: amount,
                        updatedAt: new Date()
                    }
                });
                break;

            case 'ETH':
                await prisma.ethereum_balance.upsert({
                    where: {
                        minerId: miner.id
                    },
                    update: {
                        balance: {
                            increment: amount
                        }
                    },
                    create: {
                        minerId: miner.id,
                        balance: amount,
                        updatedAt: new Date()
                    }
                });
                break;

            case 'XRP':
                await prisma.cardano_balance.upsert({
                    where: {
                        minerId: miner.id
                    },
                    update: {
                        balance: {
                            increment: amount
                        }
                    },
                    create: {
                        minerId: miner.id,
                        balance: amount,
                        updatedAt: new Date()
                    }
                });
                break;

            case 'TRX':
                await prisma.tron_balance.upsert({
                    where: {
                        minerId: miner.id
                    },
                    update: {
                        balance: {
                            increment: amount
                        }
                    },
                    create: {
                        minerId: miner.id,
                        balance: amount,
                        updatedAt: new Date()
                    }
                });
                break;

            case 'ADA':
                await prisma.ripple_balance.upsert({
                    where: {
                        minerId: miner.id
                    },
                    update: {
                        balance: {
                            increment: amount
                        }
                    },
                    create: {
                        minerId: miner.id,
                        balance: amount,
                        updatedAt: new Date()
                    }
                });
                break;

            case 'SHIB':
                await prisma.shiba_inu_balance.upsert({
                    where: {
                        minerId: miner.id
                    },
                    update: {
                        balance: {
                            increment: amount
                        }
                    },
                    create: {
                        minerId: miner.id,
                        balance: amount,
                        updatedAt: new Date()
                    }
                });
                break;

            default:
                return res.status(400).json({ message: "Invalid coin type" });
        }

        return res.status(200).json({ success: true })
    } catch (e) {
        return res.status(500).json({ message: "Internal server error." })
    }
}