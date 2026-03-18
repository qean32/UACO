import { User } from "@root/prisma/generated/prisma/browser"
import { GroupType } from "@/@types"

export type userInfo = Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth" | "GroupCode" | "role"> & {
    Group: GroupType
}
