import { Department, Group } from "@root/prisma/generated/prisma/browser";


export interface GroupType extends Pick<Group, "semester"> {
    Department: Pick<Department, "code" | "name">
}