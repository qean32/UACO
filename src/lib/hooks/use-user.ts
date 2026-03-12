import { User } from "@root/prisma/generated/prisma/browser"
import { useSession } from "next-auth/react"

// @ts-ignore
export const useUser = (): Omit<User, "password"> => {
    const { data } = useSession()

    if (data?.user)
        // @ts-ignore
        return data?.user
}