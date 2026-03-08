import { AuthOptions } from 'next-auth';
import { prisma } from '@root/prisma/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { hashSync, compare } from 'bcrypt';

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            // @ts-ignore
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const values = {
                    email: credentials.email,
                };

                const findUser = await prisma.user.findFirst({
                    where: values,
                });

                if (!findUser) {
                    return null;
                }

                // const isPasswordValid = await compare(credentials.password, findUser.password);
                const isPasswordValid = credentials.password == findUser.password;

                if (!isPasswordValid) {
                    return null;
                }


                return {
                    id: findUser.id,
                    email: findUser.email,
                    firstName: findUser.firstName,
                    lastName: findUser.lastName,
                    sureName: findUser.sureName,
                    role: findUser.role,
                };
            },
        }),],
    secret: process.env.NEXT_AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user }) {
            try {
                if (!user.email) {
                    return false;
                }

                const findUser = await prisma.user.findFirst({
                    where: {
                        email: user.email,
                    },
                });

                if (findUser) {
                    return true;
                }

                await prisma.user.create({
                    data: {
                        email: user.email,
                        password: hashSync(user.id.toString(), 10),
                        dateOfBirth: "",
                        firstName: "",
                        lastName: "",
                        sureName: "",
                        GroupCode: "",
                        role: "STUDENT",
                        sex: "FEMALE",
                    },
                });

                return true;
            } catch (error) {
                console.error('Error [SIGNIN]', error);
                return false;
            }
        },
        async jwt({ token }) {
            if (!token.email) {
                return token;
            }

            const findUser = await prisma.user.findFirst({
                where: {
                    email: token.email,
                },
            });

            if (findUser) {
                token.id = findUser.id;
                token.email = findUser.email;
                token.role = findUser.role;
                token.firstName = findUser.firstName;
                token.sureName = findUser.sureName;
                token.lastName = findUser.lastName;
            }

            return token;
        },
        session({ session, token }) {
            if (session?.user) {
                session.user.email = token.email;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.sureName = token.sureName;
                session.user.role = token.role;
            }

            return session;
        },
    },
};