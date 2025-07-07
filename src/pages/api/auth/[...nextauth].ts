import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/utils/prisma";

export default NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials) return null

                const { email, password } = credentials

                const admin = await prisma.admin.findFirst({
                    where: {
                        phone: email,
                        password,
                    }
                })

                if (admin) {
                    return { id: admin.id.toString(), email: admin.phone, name: admin.phone, image: admin.id.toString() }
                } else {
                    return null
                }

            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    adapter: PrismaAdapter(prisma)
})