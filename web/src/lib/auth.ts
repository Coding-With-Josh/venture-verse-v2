import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your@email.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password.");
                }

                // Hash the provided password
                const userFromDb = await prisma.user.findUnique({ where: { email: credentials.email } });
                const pwMatch = userFromDb && typeof userFromDb.hashedPassword === "string"
                    ? await bcrypt.compare(credentials.password as string, userFromDb.hashedPassword)
                    : false;
                if (!pwMatch) {
                    throw new Error("Invalid credentials.");
                }

                // If user not found, throw error
                if (!userFromDb) {
                    throw new Error("Invalid credentials.");
                }

                // Return user object (omit sensitive fields)
                return {
                    id: userFromDb.id,
                    name: userFromDb.name,
                    email: userFromDb.email,
                };
            }
        })
    ]
});