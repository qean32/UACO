import { DefaultSession, DefaultUser } from "next-auth";
import { User as _User } from '@prisma'

type ex = Pick<_User, "id" | "firstName" | "lastName" | "sureName" | "role">

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
        } & DefaultSession["user"] & ex;
    }

    interface User extends DefaultUser {
    }
}

declare module "next-auth/jwt" {
    interface JWT extends ex {
    }
}