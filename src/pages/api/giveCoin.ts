import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/utils/prisma"
import { getToken } from "next-auth/jwt";
import { Prisma } from "@prisma/client";

type UpsertFn = (tx: Prisma.TransactionClient, minerId: number, amount: number) => Promise<any>

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

        const acceptedCoins = ['BTC', 'ETH', 'XRP', 'TRX', 'ADA', 'SHIB', "USDT"];
        if (!acceptedCoins.includes(coin)) {
            return res.status(400).json({ message: "Invalid coin type" })
        }

        const tables: Record<string, UpsertFn> = {
            BTC: (tx, minerId, amount) => tx.bitcoin_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
            ETH: (tx, minerId, amount) => tx.ethereum_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
            XRP: (tx, minerId, amount) => tx.ripple_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
            TRX: (tx, minerId, amount) => tx.tron_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
            ADA: (tx, minerId, amount) => tx.cardano_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
            SHIB: (tx, minerId, amount) => tx.shiba_inu_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
            USDT: (tx, minerId, amount) => tx.usdt_balance.upsert({
                where: {
                    minerId
                },
                update: {
                    balance: {
                        increment: amount
                    }
                },
                create: {
                    minerId,
                    balance: amount,
                    updatedAt: new Date(),
                }
            }),
        }

        await prisma.$transaction(async (tx) => {
            const miner = await tx.miners.findFirst({
                where: {
                    phoneNumber,
                    name,
                }
            });
            if (!miner) {
                throw new Error("NOT_FOUND")
            }

            await tables[coin](tx, miner.id, amount)

            await tx.coin_logs.create({
                data: {
                    minerId: miner.id,
                    coin,
                    balance: amount,
                    updatedAt: new Date(),
                }
            })
        })

        return res.status(200).json({ success: true })
    } catch (e: any) {
        if (e.message === "NOT_FOUND") {
            return res.status(404).json({ message: "Miner not found." })
        }
        return res.status(500).json({ message: "Internal server error." })
    }
}