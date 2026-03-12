import { User } from "@root/prisma/generated/prisma/browser";

export const formatFio = ({ firstName, lastName, sureName }: Pick<User, "firstName" | "lastName" | "sureName">) => {
    return `${firstName} ${lastName.at(0)}. ${sureName.at(0)}.`
}
